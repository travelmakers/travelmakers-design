(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(re,b,e){"use strict";e.r(b);var z={};e.r(z),e.d(z,"parameters",function(){return a}),e.d(z,"decorators",function(){return u});var V=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.filter.js"),$=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Q=e("./node_modules/core-js/modules/es.array.for-each.js"),U=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),w=e("./node_modules/core-js/modules/es.object.define-properties.js"),K=e("./node_modules/core-js/modules/es.object.define-property.js"),F=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e("./node_modules/react/index.js"),S=e("./node_modules/react/jsx-runtime.js");function x(s,_){return d(s)||l(s,_)||j(s,_)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(s,_){if(!!s){if(typeof s=="string")return p(s,_);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return p(s,_)}}function p(s,_){(_==null||_>s.length)&&(_=s.length);for(var O=0,h=new Array(_);O<_;O++)h[O]=s[O];return h}function l(s,_){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(_&&h.length===_));E=!0);}catch(I){v=!0,M=I}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function d(s){if(Array.isArray(s))return s}var g=Object(C.createContext)(null),f=function(){var _=Object(C.useContext)(g);if(!_)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return _},o=function(_){var O=_.colorScheme,h=_.toggleColorScheme,E=_.children,v=Object(C.useState)("init"),P=x(v,2),M=P[0],I=P[1];return Object(C.useEffect)(function(){I("update")},[]),Object(S.jsx)(g.Provider,{value:{colorScheme:O,toggleColorScheme:h},children:E},M)};o.displayName="ColorSchemeProvider",o.displayName="@travelmakers-design/styles/ColorSchemeProvider";var n=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),r=e("./node_modules/storybook-dark-mode/dist/index.js"),a={layout:"fullscreen",docs:{theme:t.themes.light},darkMode:{current:"light"}};function y(s){var _=Object(r.useDarkMode)()?"dark":"light";return Object(S.jsx)(o,{colorScheme:_,toggleColorScheme:function(){},children:Object(S.jsx)(n.a,{theme:{colorScheme:_},withGlobalStyles:!0,withNormalizeCSS:!0,children:s.children})})}y.displayName="ThemeWrapper";var u=[function(s){return Object(S.jsx)(y,{children:s()})}];function i(s,_){var O=Object.keys(s);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(s);_&&(h=h.filter(function(E){return Object.getOwnPropertyDescriptor(s,E).enumerable})),O.push.apply(O,h)}return O}function c(s){for(var _=1;_<arguments.length;_++){var O=arguments[_]!=null?arguments[_]:{};_%2?i(Object(O),!0).forEach(function(h){m(s,h,O[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(O)):i(Object(O)).forEach(function(h){Object.defineProperty(s,h,Object.getOwnPropertyDescriptor(O,h))})}return s}function m(s,_,O){return _ in s?Object.defineProperty(s,_,{value:O,enumerable:!0,configurable:!0,writable:!0}):s[_]=O,s}Object.keys(z).forEach(function(s){var _=z[s];switch(s){case"args":return Object(F.d)(_);case"argTypes":return Object(F.b)(_);case"decorators":return _.forEach(function(h){return Object(F.f)(h,!1)});case"loaders":return _.forEach(function(h){return Object(F.g)(h,!1)});case"parameters":return Object(F.h)(c({},_),!1);case"argTypesEnhancers":return _.forEach(function(h){return Object(F.c)(h)});case"argsEnhancers":return _.forEach(function(h){return Object(F.e)(h)});case"render":return Object(F.i)(_);case"globals":case"globalTypes":{var O={};return O[s]=_,Object(F.h)(O,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(s+" was not supported :( !")}})},"./generated-stories-entry.js":function(re,b,e){"use strict";(function(z){var V=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,V.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],z,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(re))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(re,b,e){var z={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function V(X){var $=W(X);return e($)}function W(X){if(!e.o(z,X)){var $=new Error("Cannot find module '"+X+"'");throw $.code="MODULE_NOT_FOUND",$}return z[X]}V.keys=function(){return Object.keys(z)},V.resolve=W,re.exports=V,V.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/react/index.js"),R=e("./node_modules/react/jsx-runtime.js"),ee=function(t){return Object(R.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(R.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#D7D7D7"}),Object(R.jsx)("path",{d:"M6 10.7681L10.1205 16L18 8",stroke:"white","stroke-width":"2"})]})};ee.displayName="AccordionCheck",ee.displayName="@travelmakers-design/core/AccordionCheck";var G=function(t){return Object(R.jsx)("svg",Object.assign({width:"33",height:"32",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg"},t,{children:Object(R.jsx)("path",{stroke:"#30373F","stroke-width":"2",d:"m3 9 13 14L29 9",fill:"none","fill-rule":"evenodd"})}))};G.displayName="AccordionIcon",G.displayName="@travelmakers-design/core/AccordionIcon";var B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),A=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),T=Object(B.a)(function(n,t){var r,a,y,u,i,c,m,s=t.open;return{container:Object.assign({},Object(A.b)(n),(r={display:"flex",flexDirection:"column",width:"100%",backgroundColor:n.colors.white,marginBottom:"4px"},r["&:last-child"]={marginBottom:0},r)),row:(a={display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"14px 24px 14px 24px"},a[""+n.media.desktop]={padding:"12px 16px 12px 16px"},a),titleWrap:{display:"flex",width:"100%"},titleIndex:{fontWeight:"bold",fontFamily:"pt serif",color:n.colors.cover1,fontStyle:"italic",marginRight:"4px"},title:(y={display:"block",width:"100%",fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",fontWeight:"bold",color:n.colors.navy1},y[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px",fontWeight:"400"},y),icon:(u={width:"32px",height:"32px",cursor:"pointer",marginLeft:"4px"},u[""+n.media.mobile]={width:"24px",height:"24px"},u),content:(i={padding:"0 24px 14px 24px"},i[""+n.media.desktop]={padding:"0 16px 12px 16px"},i),divider:(c={width:"100%",height:"1px",backgroundColor:n.colors.navy1,marginBottom:"14px"},c[""+n.media.desktop]={marginBottom:"11px"},c),answerText:{display:"flex",lineHeight:"1.5"},answer:(m={fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",color:n.colors.navy1,width:"100%"},m[""+n.media.desktop]={marginTop:"3px"},m[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px"},m)}});function D(n,t){return j(n)||k(n,t)||S(n,t)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,t){if(!!n){if(typeof n=="string")return x(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(n,t)}}function x(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=n[r];return a}function k(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a=[],y=!0,u=!1,i,c;try{for(r=r.call(n);!(y=(i=r.next()).done)&&(a.push(i.value),!(t&&a.length===t));y=!0);}catch(m){u=!0,c=m}finally{try{!y&&r.return!=null&&r.return()}finally{if(u)throw c}}return a}}function j(n){if(Array.isArray(n))return n}var p=Object(Z.forwardRef)(function(n,t){var r=n.component,a=n.type,y=a===void 0?"Default":a,u=n.data,i=n.className,c=n.containerStyle,m=n.iconStyle,s=n.overrideStyles,_=n.__staticSelector,O=_===void 0?"div":_,h=Object(Z.useState)(Array.from({length:u.length},function(te,se){return!1})),E=D(h,2),v=E[0],P=E[1],M=r||"div",I=T({open:v},{overrideStyles:s,name:"div"}),H=I.classes,N=I.cx;return Object(R.jsx)("div",{className:N(c),children:u==null?void 0:u.map(function(te,se){return Object(R.jsxs)(M,{ref:t,className:N(H.container,i),children:[Object(R.jsxs)("div",{className:N(H.row),onClick:function(){return P(function(ue){return ue==null?void 0:ue.map(function(ae,_e){return se===_e?!ae:ae})})},children:[Object(R.jsxs)("div",{className:N(H.titleWrap),children:[y==="Number"&&Object(R.jsxs)("span",{className:N(H.titleIndex),children:[se+1,"."]}),y==="Checkbox"&&Object(R.jsx)("div",{style:{marginRight:8},children:Object(R.jsx)(ee,{})}),Object(R.jsx)("span",{className:N(H.title),children:te.question})]}),Object(R.jsx)(G,{className:N(H.icon),style:Object.assign({transform:"rotate("+(v[se]?180:0)+"deg)"},m)})]}),v[se]&&Object(R.jsxs)("div",{className:N(H.content),children:[Object(R.jsx)("div",{className:N(H.divider)}),Object(R.jsx)("div",{className:N(H.answerText),children:Object(R.jsx)("span",{className:N(H.answer),dangerouslySetInnerHTML:{__html:te==null?void 0:te.answer}})})]})]},"accordion-"+se)})})});p.displayName="@travelmakers-design/core/Accordion";var l=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}},l=`import { Accordion } from "../Accordion";
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
`,d={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},g=[{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."},{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."}],f=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}}}},title:"@travelmakers-design/core/Component/Accordion",component:p,argTypes:{type:{defaultValue:"Default",description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",options:["Default","Number","Checkbox"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},data:{defaultValue:g,description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:typeof g}},control:{type:"array"}},containerStyle:{description:"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}},iconStyle:{description:"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}}}},o=function(t){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(p,Object.assign({},t))})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
}`}},o.parameters)},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return l});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),U=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.string.small.js"),K=e("./node_modules/core-js/modules/es.array.reduce.js"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),Z=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),R={xsmall:{height:L.a.xsmall,padding:"0 24px"},small:{height:L.a.small,padding:"0 24px"},medium:{height:L.a.medium,padding:"0 24px"},large:{height:L.a.large,padding:"0 24px"}},ee=function(g){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.caption+"px",fontSize:g.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.b3+"px",fontSize:g.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.b2+"px",fontSize:g.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.h5+"px",fontSize:g.fontSizes.h5}}},G=Object.keys(R).reduce(function(d,g){return d[g]=R[g].height,d},{}),B=function(g){return{display:g?"block":"inline-block",width:g?"100%":"auto"}},A=Object(F.a)(function(d,g,f){var o,n,t,r=g.variant,a=g.size,y=g.fullWidth,u=g.roundness,i=g.line,c=f("loading"),m=f("inner"),s=f("spinner"),_=r||d.colors.navy1;return{loading:(o={ref:c,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},o["."+m]={opacity:0},o["."+s]={display:"flex"},o),solid:(n={backgroundColor:d.palettes[_][d.colorScheme==="light",0],color:_==="white"?d.colors.navy1:d.colors.white,"&:not(:disabled):hover":{backgroundColor:d.palettes[_][d.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:d.palettes[_][d.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:u?d.radius.round:2,outline:"1px solid "+d.palettes[_][d.colorScheme==="light",0]}}},n["&:disabled:not(."+c+")"]={backgroundColor:d.colors.gray5,color:i?d.colors.black:d.colors.white},n),ghost:(t={backgroundColor:d.colors.transparent,border:"1px solid "+d.palettes[_][d.colorScheme==="light",0],color:_==="white"?d.colors.white:d.palettes[_][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:u?d.radius.round:2,outline:"1px solid "+d.palettes[_][d.colorScheme==="light",0]}}},t["&:disabled:not(."+c+")"]={color:Object(Z.a)(d.palettes[_][1],d.opacity.opacity3),border:"1px solid "+Object(Z.a)(d.palettes[_][1],d.opacity.opacity3)},t),root:Object.assign({},R[a],B(y),Object(J.b)(d),ee(d)[a],{borderRadius:u?d.radius.round:d.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:m,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:s,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),T=e("./node_modules/react/jsx-runtime.js"),D=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function C(d,g){if(d==null)return{};var f=S(d,g),o,n;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);for(n=0;n<t.length;n++)o=t[n],!(g.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,o)||(f[o]=d[o]))}return f}function S(d,g){if(d==null)return{};var f={},o=Object.keys(d),n,t;for(t=0;t<o.length;t++)n=o[t],!(g.indexOf(n)>=0)&&(f[n]=d[n]);return f}var x=Object(U.forwardRef)(function(d,g){var f=d.children,o=d.component,n=d.size,t=n===void 0?"medium":n,r=d.variant,a=d.line,y=d.roundness,u=y===void 0?!1:y,i=d.fullWidth,c=i===void 0?!1:i,m=d.type,s=m===void 0?"button":m,_=d.disabled,O=_===void 0?!1:_,h=d.leftIcon,E=d.rightIcon,v=d.className,P=d.co,M=d.overrideStyles,I=C(d,D),H=Object(Q.c)(),N=A({variant:r,size:t,fullWidth:c,roundness:u,line:a},{overrideStyles:M,name:"Button"}),te=N.classes,se=N.cx;return Object(T.jsx)(q.a,Object.assign({component:o||"button",ref:g,type:s,disabled:O,className:se(te.root,te[a?"ghost":"solid"],v),co:P,onTouchStart:function(){}},I,{children:Object(T.jsxs)("div",{className:te.inner,children:[h&&Object(T.jsx)("span",{className:se(te.icon,te.leftIcon),children:h}),Object(T.jsx)("span",{className:te.label,children:f}),E&&Object(T.jsx)("span",{className:se(te.icon,te.rightIcon),children:E})]})}))});x.displayName="@travelmakers-design/core/Button";var k=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},k=`import {
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
`,j={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}},p=b.default={title:"@travelmakers-design/core/Component/Button",component:x,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(V.g,{}),Object(T.jsx)(V.f,{}),Object(T.jsx)(V.b,{}),Object(T.jsx)(V.d,{}),Object(T.jsx)(V.a,{story:V.c}),Object(T.jsx)(V.e,{})]})}},actions:{handles:["click button"]}}},l=function(g){return Object(T.jsx)("div",{style:{margin:"0 auto"},children:Object(T.jsx)(x,Object.assign({},g,{children:"Button"}))})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return U});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./node_modules/react/jsx-runtime.js"),Q=e.n($),U=function(w){return Object($.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w,{children:Object($.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};U.displayName="CloseIcon",U.displayName="@travelmakers-design/core/CloseIcon"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return A});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./node_modules/core-js/modules/es.string.small.js"),q=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),K=e("./packages/travelmakers-design-core/src/constants/index.ts"),F=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),J={xsmall:{width:K.a.xsmall,height:K.a.xsmall},small:{width:K.a.small,height:K.a.small},medium:{width:K.a.medium,height:K.a.medium},large:{width:K.a.large,height:K.a.large}},L={xsmall:8,small:8,medium:16,large:16},Z=Object(q.a)(function(T,D,C){var S,x,k,j=D.variant,p=D.size,l=D.line,d=D.roundness,g=C("loading"),f=C("inner"),o=C("spinner"),n=j||T.colors.navy1;return{loading:(S={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},S["."+f]={opacity:0},S["."+o]={display:"flex"},S),solid:(x={backgroundColor:T.palettes[n][T.colorScheme==="light",0],color:T.colorScheme==="light"?T.colors.white:T.colors.black,"&:not(:disabled):hover":{backgroundColor:T.palettes[n][T.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:T.palettes[n][T.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:d?T.radius.round:2,outline:"1px solid "+T.palettes[n][T.colorScheme==="light",0]}}},x["&:disabled:not(."+g+")"]={backgroundColor:T.colors.gray5,color:l?T.colors.black:T.colors.white},x),ghost:(k={backgroundColor:T.colors.transparent,border:"1px solid "+T.palettes[n][T.colorScheme==="light",0],color:T.palettes[n][T.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(F.a)(T.palettes[n][T.colorScheme==="light",0],T.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(F.a)(T.palettes[n][T.colorScheme==="light",1],T.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:d?T.radius.round:2,outline:"1px solid "+T.palettes[n][T.colorScheme==="light",0]}}},k["&:disabled:not(."+g+")"]={backgroundColor:T.colors.gray5,color:l?T.colors.black:T.colors.white},k),root:Object.assign({},J[p],Object(w.b)(T),{borderRadius:d?T.radius.round:T.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:f,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:J[p].width-L[p],height:J[p].height-L[p]}},spinnerWrapper:{ref:o,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),R=e("./node_modules/react/jsx-runtime.js"),ee=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function G(T,D){if(T==null)return{};var C=B(T,D),S,x;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(T);for(x=0;x<k.length;x++)S=k[x],!(D.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,S)||(C[S]=T[S]))}return C}function B(T,D){if(T==null)return{};var C={},S=Object.keys(T),x,k;for(k=0;k<S.length;k++)x=S[k],!(D.indexOf(x)>=0)&&(C[x]=T[x]);return C}var A=Object($.forwardRef)(function(T,D){var C=T.children,S=T.component,x=T.size,k=x===void 0?"medium":x,j=T.variant,p=T.line,l=T.type,d=l===void 0?"button":l,g=T.disabled,f=g===void 0?!1:g,o=T.roundness,n=o===void 0?!1:o,t=T.className,r=T.co,a=T.overrideStyles,y=G(T,ee),u=Z({variant:j,size:k,line:p,roundness:n},{overrideStyles:a,name:"Button"}),i=u.classes,c=u.cx;return Object(R.jsx)(Q.a,Object.assign({component:S||"button",className:c(i.root,i[p?"ghost":"solid"],t),type:d,disabled:f,ref:D,onTouchStart:function(){},co:r},y,{children:Object(R.jsx)("div",{className:i.inner,children:C})}))});A.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return G});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),U=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),w=e("./node_modules/react/jsx-runtime.js"),K=["size","variant"];function F(B,A){if(B==null)return{};var T=J(B,A),D,C;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(B);for(C=0;C<S.length;C++)D=S[C],!(A.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(B,D)||(T[D]=B[D]))}return T}function J(B,A){if(B==null)return{};var T={},D=Object.keys(B),C,S;for(S=0;S<D.length;S++)C=D[S],!(A.indexOf(C)>=0)&&(T[C]=B[C]);return T}var L=Object(U.forwardRef)(function(B,A){var T=B.size,D=T===void 0?"medium":T,C=B.variant,S=C===void 0?"primary":C,x=F(B,K);return Object(w.jsx)(Q.a,Object.assign({size:D,variant:S,ref:A},x,{children:Object(w.jsx)(q.a,{})}))});L.displayName="@travelmakers-design/core/CloseButton";var Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}},Z=`import {
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
`,R={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:93},startBody:{col:23,line:91},endBody:{col:1,line:93}}},ee=b.default={title:"@travelmakers-design/core/Component/CloseButton",component:L,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}}},docs:{page:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(V.g,{}),Object(w.jsx)(V.f,{}),Object(w.jsx)(V.b,{}),Object(w.jsx)(V.d,{}),Object(w.jsx)(V.a,{story:V.c}),Object(w.jsx)(V.e,{})]})}},actions:{handles:["click button"]}}},G=function(A){return Object(w.jsx)(L,Object.assign({},A))};G.displayName="Default",G.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},G.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return F});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),X=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),$=e("./node_modules/react/index.js"),Q=e.n($),U=e("./node_modules/react/jsx-runtime.js"),q=e.n(U),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,K={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}},w=`import {
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
`,K={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:102},startBody:{col:23,line:91},endBody:{col:1,line:102}}};b.default={title:"@travelmakers-design/core/Component/IconButton",component:X.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W.g,{}),Object(U.jsx)(W.f,{}),Object(U.jsx)(W.b,{}),Object(U.jsx)(W.d,{}),Object(U.jsx)(W.a,{story:W.c}),Object(U.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var F=function(L){var Z=Object(U.jsx)("svg",{viewBox:"0 0 24 24",children:Object(U.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(U.jsx)(X.a,Object.assign({},L,{children:Z}))};F.displayName="Default",F.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},F.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return E});var z=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),R=e("./node_modules/core-js/modules/es.object.keys.js"),ee=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=e("./node_modules/react/index.js"),T=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),D=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),C=Object(D.a)(function(v,P){var M=P.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:M?M in v.radius?v.radius[M]:M:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(v.colorScheme==="dark",v.palettes.primary[0]),backgroundColor:(v.colorScheme==="dark",v.palettes.primary[0]),borderRadius:M?M in v.radius?v.radius[M]:M:0}}}),S=e("./node_modules/react/jsx-runtime.js"),x=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function k(v,P){return g(v)||d(v,P)||p(v,P)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(v,P){if(!!v){if(typeof v=="string")return l(v,P);var M=Object.prototype.toString.call(v).slice(8,-1);if(M==="Object"&&v.constructor&&(M=v.constructor.name),M==="Map"||M==="Set")return Array.from(v);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return l(v,P)}}function l(v,P){(P==null||P>v.length)&&(P=v.length);for(var M=0,I=new Array(P);M<P;M++)I[M]=v[M];return I}function d(v,P){var M=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(M!=null){var I=[],H=!0,N=!1,te,se;try{for(M=M.call(v);!(H=(te=M.next()).done)&&(I.push(te.value),!(P&&I.length===P));H=!0);}catch(pe){N=!0,se=pe}finally{try{!H&&M.return!=null&&M.return()}finally{if(N)throw se}}return I}}function g(v){if(Array.isArray(v))return v}function f(v,P){if(v==null)return{};var M=o(v,P),I,H;if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(v);for(H=0;H<N.length;H++)I=N[H],!(P.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,I)||(M[I]=v[I]))}return M}function o(v,P){if(v==null)return{};var M={},I=Object.keys(v),H,N;for(N=0;N<I.length;N++)H=I[N],!(P.indexOf(H)>=0)&&(M[H]=v[H]);return M}var n=null,t="loadImage",r=function(P,M){P.forEach(function(I){I.isIntersecting&&(M.unobserve(I.target),I.target.dispatchEvent(new CustomEvent(t)))})},a=Object(A.forwardRef)(function(v,P){var M=v.lazy,I=v.threshold,H=I===void 0?.5:I,N=v.placeholder,te=v.src,se=v.radius,pe=v.width,ue=pe===void 0?"100%":pe,ae=v.height,_e=ae===void 0?"auto":ae,ve=v.alt,Oe=v.fit,Ce=v.style,be=v.className,De=v.co,le=v.overrideStyles,ne=f(v,x),ie=C({radius:se},{overrideStyles:le,name:"Image"}),de=ie.classes,he=ie.cx,Se=Object(A.useState)(!1),ke=k(Se,2),Ie=ke[0],xe=ke[1],Re=Object(A.useState)(!1),Le=k(Re,2),Pe=Le[0],oe=Le[1],Y=Object(A.useRef)(null),ce={width:ue,height:_e,objectFit:Oe};return Object(A.useImperativeHandle)(P,function(){return Y.current}),Object(A.useEffect)(function(){if(!M){oe(!0);return}var me=function(){return oe(!0)},fe=Y.current;return fe&&fe.addEventListener(t,me),function(){fe&&fe.removeEventListener(t,me)}},[M]),Object(A.useEffect)(function(){!M||(n=new IntersectionObserver(r,{threshold:H}),Y.current&&n.observe(Y.current))},[M,H]),Object(S.jsxs)(T.a,Object.assign({className:he(de.root,be),co:De},ne,{children:[Object(S.jsx)("img",{ref:Y,src:te,alt:ve,className:de.image,style:ce,onLoad:function(){return xe(!0)}}),(!Ie||M&&!Pe)&&N&&Object(S.jsx)("div",{className:de.placeholder,title:ve,children:N})]}))});a.displayName="@travelmakers-design/core/Image";function y(v){return m(v)||c(v)||i(v)||u()}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(v,P){if(!!v){if(typeof v=="string")return s(v,P);var M=Object.prototype.toString.call(v).slice(8,-1);if(M==="Object"&&v.constructor&&(M=v.constructor.name),M==="Map"||M==="Set")return Array.from(v);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return s(v,P)}}function c(v){if(typeof Symbol!="undefined"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}function m(v){if(Array.isArray(v))return s(v)}function s(v,P){(P==null||P>v.length)&&(P=v.length);for(var M=0,I=new Array(P);M<P;M++)I[M]=v[M];return I}var _=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},_=`import {
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
`,O={Default:{startLoc:{col:23,line:80},endLoc:{col:1,line:90},startBody:{col:23,line:80},endBody:{col:1,line:90}}},h=b.default={title:"@travelmakers-design/core/Component/Image",component:a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},radius:{defaultValue:"small",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},threshold:{defaultValue:.5,description:"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",control:{type:"number"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},fit:{defaultValue:"cover",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",options:["cover","fill","contain"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Z.g,{}),Object(S.jsx)(Z.f,{}),Object(S.jsx)(Z.b,{}),Object(S.jsx)(Z.d,{}),Object(S.jsx)(Z.a,{story:Z.c}),Object(S.jsx)(Z.e,{})]})}}}},E=function(P){return Object(S.jsx)(S.Fragment,{children:y(new Array(10)).map(function(M,I){return Object(S.jsx)("div",{children:Object(S.jsx)(a,Object.assign({placeholder:Object(S.jsx)("div",{children:"Placeholder"})},P))},I)})})};E.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},E.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return x}),e.d(b,"WithIcon",function(){return k}),e.d(b,"WithRightSection",function(){return j}),e.d(b,"Textarea",function(){return p});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.string.small.js"),U=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),q=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),K=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L={xsmall:12,small:14,medium:14,large:14,xlarge:16},Z=Object(F.a)(function(l,d){var g=d.multiline,f=d.roundness,o=d.invalid,n=d.width,t=d.descriptionType,r=l.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(J.b)(l),{height:g?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:g?l.lineHeight:l.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:l.fontSizes.b2,width:n?n+"px":"100%",color:l.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:f?l.radius.round:2,border:"1px solid "+l.colors.gray5,backgroundColor:l.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:l.colors.gray1,color:l.colors.gray1},"&:disabled":{backgroundColor:l.colors.gray7,borderColor:l.colors.gray5,color:l.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:l.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:l.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+r,"&::placeholder":{opacity:1}},disabled:{backgroundColor:l.colors.gray7,borderColor:l.colors.gray5,color:l.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:l.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:l.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),R=e("./node_modules/react/jsx-runtime.js"),ee=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function G(l,d){if(l==null)return{};var g=B(l,d),f,o;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);for(o=0;o<n.length;o++)f=n[o],!(d.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,f)||(g[f]=l[f]))}return g}function B(l,d){if(l==null)return{};var g={},f=Object.keys(l),o,n;for(n=0;n<f.length;n++)o=f[n],!(d.indexOf(o)>=0)&&(g[o]=l[o]);return g}var A=Object(q.forwardRef)(function(l,d){var g,f,o=l.component,n=l.width,t=l.label,r=l.description,a=l.descriptionType,y=a===void 0?"description":a,u=l.icon,i=l.rightSectionWidth,c=i===void 0?48:i,m=l.rightSection,s=l.rightSectionProps,_=s===void 0?{}:s,O=l.wrapperProps,h=l.invalid,E=h===void 0?!1:h,v=l.required,P=v===void 0?!1:v,M=l.disabled,I=M===void 0?!1:M,H=l.multiline,N=H===void 0?!1:H,te=l.roundness,se=te===void 0?!1:te,pe=l.className,ue=l.style,ae=l.co,_e=l.overrideStyles,ve=l.__staticSelector,Oe=ve===void 0?"Input":ve,Ce=G(l,ee),be=Object(U.c)(),De=Z({roundness:se,multiline:N,invalid:E,width:n,descriptionType:y},{overrideStyles:_e,name:Oe}),le=De.classes,ne=De.cx,ie=o||"input";return Object(R.jsxs)(K.a,{style:{width:n?n+"px":"100%"},children:[t&&Object(R.jsx)(w.a,{level:"b2",family:"Pretendard",color:be.colors.gray1,style:{marginBottom:4},children:t}),Object(R.jsxs)(K.a,Object.assign({className:ne(le.wrapper,pe),co:ae,style:ue},O,{children:[u&&Object(R.jsx)("div",{className:ne(le.icon,(g={},g[le.disabled]=I,g)),children:u}),Object(R.jsx)(ie,Object.assign({},Ce,{ref:d,className:ne(le.input,(f={},f[le.withIcon]=u,f[le.invalid]=E,f[le.disabled]=I,f)),required:P,disabled:I,style:{paddingRight:m?c:be.spacing.small}})),m&&Object(R.jsx)("div",Object.assign({},_,{style:Object.assign({},_.style,{paddingRight:32}),className:ne(le.rightSection,_.className),children:Object(R.jsx)(w.a,{level:"b2",family:"Pretendard",color:be.colors.green2,children:m})}))]})),r&&y==="description"?Object(R.jsx)(w.a,{level:"b3",family:"Pretendard",color:E?be.colors.red2:be.colors.navy3,style:{marginTop:4},children:r}):E&&Object(R.jsx)(w.a,{level:"b3",family:"Pretendard",color:y==="error"?be.colors.red2:y==="success"?be.colors.green3:be.colors.navy3,style:{marginTop:4},children:r})]})});A.displayName="@travelmakers-design/core/Input";var T=`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,D={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},WithIcon:{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},WithRightSection:{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},Textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}},T=`import { Input } from "../Input";
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
`,D={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:120},startBody:{col:23,line:114},endBody:{col:1,line:120}},WithIcon:{startLoc:{col:24,line:122},endLoc:{col:1,line:128},startBody:{col:24,line:122},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:138},startBody:{col:32,line:130},endBody:{col:1,line:138}},Textarea:{startLoc:{col:24,line:140},endLoc:{col:1,line:146},startBody:{col:24,line:140},endBody:{col:1,line:146}}},C=b.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},"with-icon":{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},"with-right-section":{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}}}},title:"@travelmakers-design/core/Component/Input",component:A,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},S=function(){return Object(R.jsx)("svg",{viewBox:"0 0 24 24",children:Object(R.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};S.displayName="Icon";var x=function(d){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({},d))})};x.displayName="Default";var k=function(d){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({icon:Object(R.jsx)(S,{})},d))})};k.displayName="WithIcon";var j=function(d){var g="\uC778\uC99D\uC644\uB8CC";return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({icon:Object(R.jsx)(S,{})},d,{rightSection:g}))})};j.displayName="WithRightSection";var p=function(d){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({component:"textarea",multiline:!0},d))})};p.displayName="Textarea",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},x.parameters),k.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},k.parameters),j.parameters=Object.assign({storySource:{source:`(props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
}`}},j.parameters),p.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),R=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.array.fill.js"),G=e("./node_modules/core-js/modules/es.string.small.js"),B=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),T=e("./node_modules/react/jsx-runtime.js"),D=function(_){return Object(T.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:Object(T.jsxs)("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd",children:[Object(T.jsx)("circle",{stroke:"#30373F","stroke-linecap":"round","stroke-linejoin":"round",cx:"4.875",cy:"4.875",r:"4.875"}),Object(T.jsx)("path",{fill:"#30373F",d:"m7.672 8.379.707-.707 4.95 4.95-.708.706z"})]})})};D.displayName="SearchIcon",D.displayName="@travelmakers-design/core/SearchIcon";var C=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),S=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),x=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),k=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),j={xsmall:12,small:14,medium:14,large:14,xlarge:16},p=Object(x.a)(function(s,_){var O=_.multiline,h=_.roundness,E=_.invalid,v=_.width,P=_.descriptionType,M=s.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(k.b)(s),{height:O?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:O?s.lineHeight:s.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:s.fontSizes.b2,width:v?v+"px":"100%",color:s.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:h?s.radius.round:2,border:"1px solid "+s.colors.gray5,backgroundColor:s.colors.white,"&:focus, &:focus-within":{outline:"none",color:s.colors.gray1,border:"1px solid "+s.colors.gray1},"&:disabled":{borderColor:s.colors.gray5,color:s.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:s.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+M,"&::placeholder":{opacity:1}},disabled:{borderColor:s.colors.gray5,color:s.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.colors.gray5}},fill:{backgroundColor:s.colors.gray6,color:s.colors.navy3,border:"0px solid "+s.colors.gray5,"&:disabled":{backgroundColor:s.colors.gray6,border:"1px solid "+s.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:s.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),l=["component","width","label","line","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","value","onChange"];function d(s,_){return t(s)||n(s,_)||f(s,_)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(s,_){if(!!s){if(typeof s=="string")return o(s,_);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return o(s,_)}}function o(s,_){(_==null||_>s.length)&&(_=s.length);for(var O=0,h=new Array(_);O<_;O++)h[O]=s[O];return h}function n(s,_){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(_&&h.length===_));E=!0);}catch(I){v=!0,M=I}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function t(s){if(Array.isArray(s))return s}function r(s,_){if(s==null)return{};var O=a(s,_),h,E;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(s);for(E=0;E<v.length;E++)h=v[E],!(_.indexOf(h)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,h)||(O[h]=s[h]))}return O}function a(s,_){if(s==null)return{};var O={},h=Object.keys(s),E,v;for(v=0;v<h.length;v++)E=h[v],!(_.indexOf(E)>=0)&&(O[E]=s[E]);return O}var y=Object(V.forwardRef)(function(s,_){var O,h,E=s.component,v=s.width,P=s.label,M=s.line,I=M===void 0?!0:M,H=s.description,N=s.descriptionType,te=N===void 0?"description":N,se=s.icon,pe=se===void 0?Object(T.jsx)(D,{}):se,ue=s.rightSectionWidth,ae=ue===void 0?48:ue,_e=s.rightSection,ve=_e===void 0?Object(T.jsx)(A.a,{}):_e,Oe=s.rightSectionProps,Ce=Oe===void 0?{}:Oe,be=s.wrapperProps,De=s.invalid,le=De===void 0?!1:De,ne=s.required,ie=ne===void 0?!1:ne,de=s.disabled,he=de===void 0?!1:de,Se=s.multiline,ke=Se===void 0?!1:Se,Ie=s.roundness,xe=Ie===void 0?!0:Ie,Re=s.className,Le=s.style,Pe=s.co,oe=s.overrideStyles,Y=s.value,ce=s.onChange,me=r(s,l),fe=Object(B.c)(),ye=Object(V.useState)(Y),Te=d(ye,2),Ae=Te[0],Me=Te[1],ge=p({roundness:xe,multiline:ke,invalid:le,width:v,descriptionType:te},{overrideStyles:oe,name:"Input"}),je=ge.classes,Ee=ge.cx,Ke=E||"input",We=function(Ve){!he&&Ue({target:{value:""}})},Ue=function(Ve){var Ne;Me(Ve==null||(Ne=Ve.target)===null||Ne===void 0?void 0:Ne.value),ce&&ce(Ve)};return Object(T.jsxs)(S.a,{style:{width:v?v+"px":"100%"},children:[P&&Object(T.jsx)(C.a,{level:"b2",family:"Pretendard",color:fe.colors.gray1,style:{marginBottom:4},children:P}),Object(T.jsxs)(S.a,Object.assign({className:Ee(je.wrapper,Re),co:Pe,style:Le},be,{children:[pe&&Object(T.jsx)("div",{className:Ee(je.icon,(O={},O[je.disabled]=he,O)),children:pe}),Object(T.jsx)(Ke,Object.assign({},me,{ref:_,value:Ae,onChange:Ue,className:Ee(je.input,(h={},h[je.fill]=!I,h[je.withIcon]=pe,h[je.invalid]=le,h[je.disabled]=he,h)),required:ie,disabled:he,style:{paddingRight:ve?ae:fe.spacing.small}})),ve&&Object(T.jsx)("div",Object.assign({},Ce,{style:Object.assign({},Ce.style,{paddingRight:32}),className:Ee(je.rightSection,Ce.className),onClick:We,children:ve}))]})),H&&te==="description"?Object(T.jsx)(C.a,{level:"b3",family:"Pretendard",color:le?fe.colors.red2:fe.colors.navy3,style:{marginTop:4},children:H}):le&&Object(T.jsx)(C.a,{level:"b3",family:"Pretendard",color:te==="error"?fe.colors.red2:te==="success"?fe.colors.green3:fe.colors.navy3,style:{marginTop:4},children:H})]})});y.displayName="@travelmakers-design/core/SearchInput";var u=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,i={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}},u=`import React from "react";
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
`,i={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:59},startBody:{col:23,line:53},endBody:{col:1,line:59}}},c=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}}}},title:"@travelmakers-design/core/Component/SearchInput",component:y,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},line:{defaultValue:!0,description:"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},m=function(_){return Object(T.jsx)("div",{style:{padding:24},children:Object(T.jsx)(y,Object.assign({},_))})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
}`}},m.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),q=e("./packages/travelmakers-design-core/src/constants/index.ts"),w=Object(U.a)(function(A,T){var D=T.size,C=T.color,S=C===void 0?A.colorScheme==="light"?A.colors.black:A.colors.white:C in A.palettes?(A.colorScheme==="light",A.palettes[C][0]):C in A.colors?A.colors[C]:C;return{root:{position:"relative",display:"inline-block",width:D in q.a?q.a[D]:D,height:D in q.a?q.a[D]:D,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:S},circle:{fill:S}}}}),K=e("./node_modules/react/jsx-runtime.js"),F=["size","color","className","co","overrideStyles"];function J(A,T){if(A==null)return{};var D=L(A,T),C,S;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(A);for(S=0;S<x.length;S++)C=x[S],!(T.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(A,C)||(D[C]=A[C]))}return D}function L(A,T){if(A==null)return{};var D={},C=Object.keys(A),S,x;for(x=0;x<C.length;x++)S=C[x],!(T.indexOf(S)>=0)&&(D[S]=A[S]);return D}var Z=Object(V.forwardRef)(function(A,T){var D=A.size,C=D===void 0?"medium":D,S=A.color,x=A.className,k=A.co,j=A.overrideStyles,p=J(A,F),l=w({size:C,color:S},{overrideStyles:j,name:"Spinner"}),d=l.classes,g=l.cx,f=Object(K.jsx)("i",{className:d.inner,children:Object(K.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(K.jsxs)("g",{transform:"translate(1 1)",children:[Object(K.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(K.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(K.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(K.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(K.jsx)(Q.a,Object.assign({ref:T,className:g(d.root,x),co:k},p,{children:f}))});Z.displayName="@travelmakers-design/core/Spinner";var R=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,ee={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},R=`import React from "react";
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
`,ee={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},G=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:Z,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},B=function(T){return Object(K.jsx)(Z,Object.assign({},T))};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},B.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return S});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),X=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.string.small.js"),K=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),J=function(k){return{xsmall:{fontWeight:"normal",lineHeight:k.lineHeights.h6+"px",fontSize:k.fontSizes.h6},small:{fontWeight:"normal",lineHeight:k.lineHeights.h4+"px",fontSize:k.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:k.lineHeights.h2+"px",fontSize:k.fontSizes.h2},large:{fontWeight:"normal",lineHeight:k.lineHeights.h1+"px",fontSize:k.fontSizes.h1}}},L=function(k){return{display:k?"block":"inline-block",width:k?"100%":"auto"}},Z=Object(K.a)(function(x,k,j){var p,l,d=k.color,g=k.size,f=k.fullWidth,o=k.family,n=k.underline,t=k.leftIcon,r=k.rightIcon,a=j("loading"),y=j("inner"),u=j("spinner"),i=d||x.colors.navy1;return{loading:(p={ref:a,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},p["."+y]={opacity:0},p["."+u]={display:"flex"},p),solid:(l={color:i==="white"?x.colors.white:x.colors.navy1,"&:not(:disabled):hover":{color:i==="white"?x.colors.white:x.colors.navy1},"&:not(:disabled):active":{color:i==="white"?x.colors.gray6:x.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},l["&:disabled:not(."+a+")"]={color:x.colors.gray5},l),root:Object.assign({},L(f),Object(F.b)(x),J(x)[g],{fontFamily:""+o,borderRadius:x.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:n?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:y,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),R=e("./node_modules/react/jsx-runtime.js"),ee=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function G(x,k){if(x==null)return{};var j=B(x,k),p,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(x);for(l=0;l<d.length;l++)p=d[l],!(k.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,p)||(j[p]=x[p]))}return j}function B(x,k){if(x==null)return{};var j={},p=Object.keys(x),l,d;for(d=0;d<p.length;d++)l=p[d],!(k.indexOf(l)>=0)&&(j[l]=x[l]);return j}var A=Object(W.forwardRef)(function(x,k){var j=x.children,p=x.component,l=x.family,d=l===void 0?"Pretendard":l,g=x.size,f=g===void 0?"medium":g,o=x.color,n=o===void 0?"navy":o,t=x.fullWidth,r=t===void 0?!1:t,a=x.type,y=a===void 0?"button":a,u=x.disabled,i=u===void 0?!1:u,c=x.underline,m=c===void 0?!1:c,s=x.leftIcon,_=x.rightIcon,O=x.className,h=x.co,E=x.overrideStyles,v=G(x,ee),P=Object(U.c)(),M=Z({color:n,size:f,fullWidth:r,family:d,underline:m,leftIcon:s,rightIcon:_},{overrideStyles:E,name:"Button"}),I=M.classes,H=M.cx;return Object(R.jsx)(q.a,Object.assign({component:p||"button",ref:k,type:y,disabled:i,className:H(I.root,I.solid,O),co:h,onTouchStart:function(){}},v,{children:Object(R.jsxs)("div",{className:I.inner,children:[s&&Object(R.jsxs)("span",{className:H(I.icon,I.leftIcon),children:[s,"\xA0"]}),Object(R.jsx)("span",{className:I.label,children:j}),_&&Object(R.jsxs)("span",{className:H(I.icon,I.rightIcon),children:["\xA0",_]})]})}))});A.displayName="@travelmakers-design/core/TextButton";var T=`
    
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
`,D={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},C=b.default={title:"@travelmakers-design/core/Component/TextButton",component:A,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}}},docs:{page:function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(V.g,{}),Object(R.jsx)(V.f,{}),Object(R.jsx)(V.b,{}),Object(R.jsx)(V.d,{}),Object(R.jsx)(V.a,{story:V.c}),Object(R.jsx)(V.e,{})]})}},actions:{handles:["click button"]}}},S=function(k){return Object(R.jsx)(A,Object.assign({},k,{children:"Button"}))};S.displayName="Default",S.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextButton {...props}>Button</TextButton>;
}`}},S.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return T});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.string.italics.js"),$=e("./node_modules/core-js/modules/es.object.assign.js"),Q=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),U=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),K=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F={h1:{},small:{},medium:{},large:{}},J=function(C){return{caption:{lineHeight:C.lineHeights.caption+"px",fontSize:C.fontSizes.caption},b3:{lineHeight:C.lineHeights.b3+"px",fontSize:C.fontSizes.b3},b2:{lineHeight:C.lineHeights.b2+"px",fontSize:C.fontSizes.b2},b1:{lineHeight:C.lineHeights.b1+"px",fontSize:C.fontSizes.b1},h6:{lineHeight:C.lineHeights.h6+"px",fontSize:C.fontSizes.h6},h5:{lineHeight:C.lineHeights.h5+"px",fontSize:C.fontSizes.h5},h4:{lineHeight:C.lineHeights.h4+"px",fontSize:C.fontSizes.h4},h3:{lineHeight:C.lineHeights.h3+"px",fontSize:C.fontSizes.h3},h2:{lineHeight:C.lineHeights.h2+"px",fontSize:C.fontSizes.h2},h1:{lineHeight:C.lineHeights.h1+"px",fontSize:C.fontSizes.h1}}},L=Object.keys(F).reduce(function(D,C){return D[C]=F[C].height,D},{}),Z=function(C){return{display:"block",width:"100%"}},R=Object(K.a)(function(D,C,S){var x,k,j=C.family,p=C.level,l=C.textAlign,d=C.disabled,g=C.strong,f=C.italic,o=C.underline,n=C.color,t=C.mobile,r=C.tablet,a=S("loading"),y=S("inner"),u=S("spinner");return{loading:(x={ref:a,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},x["."+y]={opacity:0},x["."+u]={display:"flex"},x),solid:{fontWeight:g?j==="Noto Serif KR"?600:700:400,fontStyle:f?"italic":"normal",textDecoration:o?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},F[p],Z(),J(D)[p],(k={fontFamily:""+j,color:d?D.colors.gray5:n||D.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+l,WebkitAppearance:"none",outline:"none",border:"none"},k[""+D.media.mobile]=Object.assign({},J(D)[t]),k[""+D.media.tablet]=Object.assign({},J(D)[r]),k)),inner:{ref:y,height:"100%",overflow:"visible"},label:{height:"100%"}}}),ee=e("./node_modules/react/jsx-runtime.js"),G=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function B(D,C){if(D==null)return{};var S=A(D,C),x,k;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(D);for(k=0;k<j.length;k++)x=j[k],!(C.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,x)||(S[x]=D[x]))}return S}function A(D,C){if(D==null)return{};var S={},x=Object.keys(D),k,j;for(j=0;j<x.length;j++)k=x[j],!(C.indexOf(k)>=0)&&(S[k]=D[k]);return S}var T=Object(U.forwardRef)(function(D,C){var S=D.children,x=D.component,k=D.family,j=k===void 0?"Noto Serif KR":k,p=D.level,l=p===void 0?"h1":p,d=D.mobileLevel,g=D.tabletLevel,f=D.textAlign,o=f===void 0?"left":f,n=D.disabled,t=n===void 0?!1:n,r=D.strong,a=r===void 0?!1:r,y=D.italic,u=y===void 0?!1:y,i=D.underline,c=i===void 0?!1:i,m=D.color,s=D.className,_=D.co,O=D.overrideStyles,h=B(D,G),E=Object(Q.c)(),v=R({family:j,level:l,disabled:t,strong:a,italic:u,underline:c,textAlign:o,color:m,mobile:d,tablet:g},{overrideStyles:O,name:"span"}),P=v.classes,M=v.cx;return Object(ee.jsx)(q.a,Object.assign({component:x||"span",ref:C,type:"span",disabled:t,className:M(P.root,P.solid,s),co:_,onTouchStart:function(){}},h,{children:Object(ee.jsx)("div",{className:P.inner,children:Object(ee.jsx)("span",{className:P.label,children:S})})}))});T.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return F});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),X=e("./node_modules/react/index.js"),$=e.n(X),Q=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),U=e("./node_modules/react/jsx-runtime.js"),q=e.n(U),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,K={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},w=`import {
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
`,K={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};b.default={title:"@travelmakers-design/core/General/Typography",component:Q.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W.g,{}),Object(U.jsx)(W.f,{}),Object(U.jsx)(W.b,{}),Object(U.jsx)(W.d,{}),Object(U.jsx)(W.a,{story:W.c}),Object(U.jsx)(W.e,{})]})}}}};var F=function(L){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Q.a,Object.assign({},L,{level:"h1",children:"h1. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"h2",children:"h2. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"h3",children:"h3. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"h4",children:"h4. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"h5",children:"h5. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"h6",children:"h6. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"b1",children:"b1. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"b2",children:"b2. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"b3",children:"b3. Travelmakers Design"})),Object(U.jsx)(Q.a,Object.assign({},L,{level:"caption",children:"caption. Travelmakers Design"}))]})};F.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},F.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return x});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.array.map.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(F),L=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),R=e("./node_modules/react/index.js"),ee=e.n(R),G=e("./node_modules/react/jsx-runtime.js"),B=e.n(G),A=["component","className","style","co"];function T(k,j){if(k==null)return{};var p=D(k,j),l,d;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(k);for(d=0;d<g.length;d++)l=g[d],!(j.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,l)||(p[l]=k[l]))}return p}function D(k,j){if(k==null)return{};var p={},l=Object.keys(k),d,g;for(g=0;g<l.length;g++)d=l[g],!(j.indexOf(d)>=0)&&(p[d]=k[d]);return p}function C(k,j){return typeof k=="function"?k(j):k}function S(k,j){var p=Object(L.a)(),l=p.css,d=p.cx,g=Object(Z.c)();return Array.isArray(k)?d(j,k.map(function(f){return l(C(f,g))})):d(j,l(C(k,g)))}var x=Object(R.forwardRef)(function(k,j){var p=k.component,l=k.className,d=k.style,g=k.co,f=T(k,A),o=p||"div";return Object(G.jsx)(o,Object.assign({ref:j,className:S(g,l),style:d},f))});x.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Q=e("./node_modules/react/jsx-runtime.js"),U=e.n(Q),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},q=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:$.a};var K=function(){return Object(Q.jsx)($.a,{co:function(L){return{width:100,height:100,backgroundColor:L.colors.gray3}}})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},K.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return z});var z={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return g});var z=e("./node_modules/core-js/modules/es.string.replace.js"),V=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),X=e("./node_modules/core-js/modules/es.number.constructor.js"),$=e("./node_modules/core-js/modules/es.parse-int.js"),Q=e("./node_modules/core-js/modules/es.array.map.js"),U=e("./node_modules/core-js/modules/es.string.split.js"),q=e("./node_modules/core-js/modules/es.string.starts-with.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js");function T(f,o){return k(f)||x(f,o)||C(f,o)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(f,o){if(!!f){if(typeof f=="string")return S(f,o);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(f,o)}}function S(f,o){(o==null||o>f.length)&&(o=f.length);for(var n=0,t=new Array(o);n<o;n++)t[n]=f[n];return t}function x(f,o){var n=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(n!=null){var t=[],r=!0,a=!1,y,u;try{for(n=n.call(f);!(r=(y=n.next()).done)&&(t.push(y.value),!(o&&t.length===o));r=!0);}catch(i){a=!0,u=i}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw u}}return t}}function k(f){if(Array.isArray(f))return f}function j(f){var o=f.replace("#","");return typeof o=="string"&&o.length===6&&!Number.isNaN(Number("0x"+o))}function p(f){var o=f.replace("#",""),n=parseInt(o,16),t=n>>16&255,r=n>>8&255,a=n&255;return{r:t,g:r,b:a,a:1}}function l(f){var o=f.replace(/[^0-9,.]/g,"").split(",").map(Number),n=T(o,4),t=n[0],r=n[1],a=n[2],y=n[3];return{r:t,g:r,b:a,a:y||1}}function d(f){return j(f)?p(f):f.startsWith("rgb")?l(f):{r:0,g:0,b:0,a:1}}var g=function(o,n){var t=d(o),r=t.r,a=t.g,y=t.b;return"rgba("+r+", "+a+", "+y+", "+n+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return $});var z=e("./node_modules/core-js/modules/es.array.concat.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=function(U){var q=Object(W.useRef)(U);return Object(W.useEffect)(function(){q.current=U},[U]),Object(W.useMemo)(function(){return function(){for(var w,K=arguments.length,F=new Array(K),J=0;J<K;J++)F[J]=arguments[J];return(w=q.current)===null||w===void 0?void 0:w.call.apply(w,[q].concat(F))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),Q=e("./node_modules/react/jsx-runtime.js"),U=e.n(Q),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},q=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var K=function(){var J=Object($.a)(function(){alert("Click away from red box!")});return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{ref:J,style:{width:100,height:100,backgroundColor:"red"}})})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
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
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return g});var z=e("./node_modules/core-js/modules/es.array.slice.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.function.name.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.array.from.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.is-array.js"),C=e.n(D),S=e("./node_modules/react/index.js"),x=e.n(S),k=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function j(f,o){var n=typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(!n){if(Array.isArray(f)||(n=p(f))||o&&f&&typeof f.length=="number"){n&&(f=n);var t=0,r=function(){};return{s:r,n:function(){return t>=f.length?{done:!0}:{done:!1,value:f[t++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,y=!1,u;return{s:function(){n=n.call(f)},n:function(){var c=n.next();return a=c.done,c},e:function(c){y=!0,u=c},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(y)throw u}}}}function p(f,o){if(!!f){if(typeof f=="string")return l(f,o);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(f,o)}}function l(f,o){(o==null||o>f.length)&&(o=f.length);for(var n=0,t=new Array(o);n<o;n++)t[n]=f[n];return t}var d=["mousedown","touchstart"],g=function(o){var n=Object(S.useRef)(),t=Object(k.a)(o);return Object(S.useEffect)(function(){var r=function(c){var m=n.current;m&&!m.contains(c.target)&&t(c)},a=j(d),y;try{for(a.s();!(y=a.n()).done;){var u=y.value;document.addEventListener(u,r)}}catch(i){a.e(i)}finally{a.f()}return function(){var i=j(d),c;try{for(i.s();!(c=i.n()).done;){var m=c.value;document.removeEventListener(m,r)}}catch(s){i.e(s)}finally{i.f()}}},[n.current]),n}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/web.timers.js");function R(n,t){return T(n)||A(n,t)||G(n,t)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(n,t){if(!!n){if(typeof n=="string")return B(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(n,t)}}function B(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=n[r];return a}function A(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a=[],y=!0,u=!1,i,c;try{for(r=r.call(n);!(y=(i=r.next()).done)&&(a.push(i.value),!(t&&a.length===t));y=!0);}catch(m){u=!0,c=m}finally{try{!y&&r.return!=null&&r.return()}finally{if(u)throw c}}return a}}function T(n){if(Array.isArray(n))return n}var D=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.timeout,a=r===void 0?2e3:r,y=Object(L.useState)(null),u=R(y,2),i=u[0],c=u[1],m=Object(L.useState)(!1),s=R(m,2),_=s[0],O=s[1],h=Object(L.useState)(null),E=R(h,2),v=E[0],P=E[1],M=function(te){clearTimeout(v),P(setTimeout(function(){return O(!1)},a)),O(te)},I=function(te){"clipboard"in navigator?navigator.clipboard.writeText(te).then(function(){return M(!0)}).catch(function(se){return c(se)}):c(new Error("useClipboard: navigator.clipboard is not supported"))},H=function(){O(!1),c(null),clearTimeout(v)};return{copy:I,reset:H,error:i,copied:_}},C=e("./node_modules/react/jsx-runtime.js");function S(n,t){return l(n)||p(n,t)||k(n,t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(n,t){if(!!n){if(typeof n=="string")return j(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(n,t)}}function j(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=n[r];return a}function p(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a=[],y=!0,u=!1,i,c;try{for(r=r.call(n);!(y=(i=r.next()).done)&&(a.push(i.value),!(t&&a.length===t));y=!0);}catch(m){u=!0,c=m}finally{try{!y&&r.return!=null&&r.return()}finally{if(u)throw c}}return a}}function l(n){if(Array.isArray(n))return n}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},d=`import React, { useState } from "react";

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
`,g={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},f=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},o=function(){var t=Object(L.useState)(""),r=S(t,2),a=r[0],y=r[1],u=D({timeout:3e3}),i=u.copy,c=u.copied;return Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{type:"text",onChange:function(s){return y(s.target.value)}}),Object(C.jsx)("button",{onClick:function(){return i(a)},children:"copy"}),Object(C.jsx)("span",{children:c&&"Copied!!"})]})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return w});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),X=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},$=e("./node_modules/react/jsx-runtime.js"),Q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Q=`import React from "react";
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
`,U={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},q=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},w=function(){var F=X();return Object($.jsx)("div",{children:Object($.jsx)("div",{children:F})})};w.displayName="Default",w.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},w.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return n});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),R=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ee(t,r){return D(t)||T(t,r)||B(t,r)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(t,r){if(!!t){if(typeof t=="string")return A(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(t,r)}}function A(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,y=new Array(r);a<r;a++)y[a]=t[a];return y}function T(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var y=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(y.push(c.value),!(r&&y.length===r));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return y}}function D(t){if(Array.isArray(t))return t}var C=function(r,a,y){var u=Object(R.a)(r,a),i=ee(u,2),c=i[0],m=i[1];return Object(Z.a)(c,y),m},S=e("./node_modules/react/jsx-runtime.js");function x(t,r){return d(t)||l(t,r)||j(t,r)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t,r){if(!!t){if(typeof t=="string")return p(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(t,r)}}function p(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,y=new Array(r);a<r;a++)y[a]=t[a];return y}function l(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var y=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(y.push(c.value),!(r&&y.length===r));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return y}}function d(t){if(Array.isArray(t))return t}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},g=`import React, { useState } from "react";

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
`,f={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},o=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},n=function(){var r=Object(L.useState)(""),a=x(r,2),y=a[0],u=a[1],i=C(function(){alert("Updated!")},1e3,[y]);return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"text",onChange:function(m){return u(m.target.value)}}),Object(S.jsx)("button",{onClick:i,children:"Cancel"})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Q=e("./node_modules/react/jsx-runtime.js"),U=e.n(Q),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},q=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var K=function(){var J=Object($.a)();return Object(Q.jsxs)("div",{children:[Math.random(),Object(Q.jsx)("button",{onClick:J,children:"Update"})]})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return o});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),S=e("./node_modules/react/index.js"),x=e.n(S);function k(n,t){return g(n)||d(n,t)||p(n,t)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(n,t){if(!!n){if(typeof n=="string")return l(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(n,t)}}function l(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=n[r];return a}function d(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a=[],y=!0,u=!1,i,c;try{for(r=r.call(n);!(y=(i=r.next()).done)&&(a.push(i.value),!(t&&a.length===t));y=!0);}catch(m){u=!0,c=m}finally{try{!y&&r.return!=null&&r.return()}finally{if(u)throw c}}return a}}function g(n){if(Array.isArray(n))return n}var f=function(t){return(t+1)%1e6},o=function(){var t=Object(S.useReducer)(f,0),r=k(t,2),a=r[1];return a}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/es.string.split.js"),R=e("./node_modules/core-js/modules/es.regexp.exec.js"),ee=e("./node_modules/core-js/modules/es.string.replace.js"),G=e("./node_modules/core-js/modules/es.array.filter.js"),B=e("./node_modules/core-js/modules/es.regexp.to-string.js"),A=e("./node_modules/core-js/modules/es.date.to-string.js");function T(m,s){var _=typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(!_){if(Array.isArray(m)||(_=D(m))||s&&m&&typeof m.length=="number"){_&&(m=_);var O=0,h=function(){};return{s:h,n:function(){return O>=m.length?{done:!0}:{done:!1,value:m[O++]}},e:function(M){function I(H){return M.apply(this,arguments)}return I.toString=function(){return M.toString()},I}(function(M){throw M}),f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,v=!1,P;return{s:function(){_=_.call(m)},n:function(){var I=_.next();return E=I.done,I},e:function(M){function I(H){return M.apply(this,arguments)}return I.toString=function(){return M.toString()},I}(function(M){v=!0,P=M}),f:function(){try{!E&&_.return!=null&&_.return()}finally{if(v)throw P}}}}function D(m,s){if(!!m){if(typeof m=="string")return C(m,s);var _=Object.prototype.toString.call(m).slice(8,-1);if(_==="Object"&&m.constructor&&(_=m.constructor.name),_==="Map"||_==="Set")return Array.from(m);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return C(m,s)}}function C(m,s){(s==null||s>m.length)&&(s=m.length);for(var _=0,O=new Array(s);_<s;_++)O[_]=m[_];return O}var S={alt:1,ctrl:2,meta:4,shift:8},x={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},k={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},j=function(s){var _=s.key!==" "?s.key.toLowerCase():"space",O=0;return s.altKey&&(O+=S.alt),s.ctrlKey&&(O+=S.ctrl),s.metaKey&&(O+=S.meta),s.shiftKey&&(O+=S.shift),{modifiers:O,key:_}},p=function(s){var _=s.replace(/\s/g,"").toLowerCase().split("+"),O=0,h,E=T(_),v;try{for(E.s();!(v=E.n()).done;){var P=v.value;S[P]?O+=S[P]:S[k[P]]?O+=S[k[P]]:x[P]?(O+=S.shift,h=x[P]):k[P]?h=k[P]:h=P}}catch(M){E.e(M)}finally{E.f()}return{modifiers:O,key:h}},l=function(s,_){return s.modifiers===_.modifiers&&s.key===_.key},d=function(s){var _=Object(L.useMemo)(function(){return s.filter(function(I){return!I.global})},[s]),O=Object(L.useMemo)(function(){return s.filter(function(I){return I.global})},[s]),h=Object(L.useCallback)(function(I,H,N,te){var se=T(I?O:_),pe;try{for(se.s();!(pe=se.n()).done;){var ue=pe.value;if(l(p(ue.combo),H)){var ae;(ae=ue[N])===null||ae===void 0||ae.call(ue,te)}}}catch(_e){se.e(_e)}finally{se.f()}},[_,O]),E=Object(L.useCallback)(function(I){h(!0,j(I),"onKeyDown",I)},[h]),v=Object(L.useCallback)(function(I){h(!0,j(I),"onKeyUp",I)},[h]),P=Object(L.useCallback)(function(I){h(!1,j(I.nativeEvent),"onKeyDown",I.nativeEvent)},[h]),M=Object(L.useCallback)(function(I){h(!1,j(I.nativeEvent),"onKeyUp",I.nativeEvent)},[h]);return Object(L.useEffect)(function(){return document.addEventListener("keydown",E),document.addEventListener("keyup",v),function(){document.removeEventListener("keydown",E),document.removeEventListener("keyup",v)}},[E,v]),{handleKeyDown:P,handleKeyUp:M}},g=e("./node_modules/react/jsx-runtime.js");function f(m,s){return a(m)||r(m,s)||n(m,s)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(m,s){if(!!m){if(typeof m=="string")return t(m,s);var _=Object.prototype.toString.call(m).slice(8,-1);if(_==="Object"&&m.constructor&&(_=m.constructor.name),_==="Map"||_==="Set")return Array.from(m);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return t(m,s)}}function t(m,s){(s==null||s>m.length)&&(s=m.length);for(var _=0,O=new Array(s);_<s;_++)O[_]=m[_];return O}function r(m,s){var _=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(_!=null){var O=[],h=!0,E=!1,v,P;try{for(_=_.call(m);!(h=(v=_.next()).done)&&(O.push(v.value),!(s&&O.length===s));h=!0);}catch(M){E=!0,P=M}finally{try{!h&&_.return!=null&&_.return()}finally{if(E)throw P}}return O}}function a(m){if(Array.isArray(m))return m}var y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},y=`import React, { useRef, useState } from "react";

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
`,u={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:46},startBody:{col:23,line:9},endBody:{col:1,line:46}}},i=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},c=function(){var s=Object(L.useRef)(null),_=Object(L.useState)(""),O=f(_,2),h=O[0],E=O[1],v=d([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){s.current.select()}},{combo:"shift+r",onKeyUp:function(){E("")}}]),P=v.handleKeyDown,M=v.handleKeyUp;return Object(g.jsx)("div",{children:Object(g.jsx)("input",{ref:s,type:"text",value:h,onChange:function(H){return E(H.target.value)},onKeyDown:P,onKeyUp:M})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return i});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),p=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),l=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),d=e("./node_modules/react/jsx-runtime.js"),g=e.n(d);function f(c,m){return a(c)||r(c,m)||n(c,m)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(c,m){if(!!c){if(typeof c=="string")return t(c,m);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(c,m)}}function t(c,m){(m==null||m>c.length)&&(m=c.length);for(var s=0,_=new Array(m);s<m;s++)_[s]=c[s];return _}function r(c,m){var s=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(s!=null){var _=[],O=!0,h=!1,E,v;try{for(s=s.call(c);!(O=(E=s.next()).done)&&(_.push(E.value),!(m&&_.length===m));O=!0);}catch(P){h=!0,v=P}finally{try{!O&&s.return!=null&&s.return()}finally{if(h)throw v}}return _}}function a(c){if(Array.isArray(c))return c}var y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},y=`import React, { useEffect } from "react";

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
`,u={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:34},startBody:{col:23,line:10},endBody:{col:1,line:34}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var i=function(){var m=Object(l.a)(),s=f(m,2),_=s[0],O=s[1],h=Object(p.a)();return Object(k.useEffect)(function(){h()},[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{ref:O,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+_]})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return f});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),S=e("./node_modules/react/index.js"),x=e.n(S);function k(o,n){return g(o)||d(o,n)||p(o,n)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(o,n){if(!!o){if(typeof o=="string")return l(o,n);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(o,n)}}function l(o,n){(n==null||n>o.length)&&(n=o.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=o[t];return r}function d(o,n){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r=[],a=!0,y=!1,u,i;try{for(t=t.call(o);!(a=(u=t.next()).done)&&(r.push(u.value),!(n&&r.length===n));a=!0);}catch(c){y=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(y)throw i}}return r}}function g(o){if(Array.isArray(o))return o}var f=function(){var n=Object(S.useRef)(null),t=Object(S.useState)(!1),r=k(t,2),a=r[0],y=r[1],u=Object(S.useCallback)(function(){return y(!0)},[]),i=Object(S.useCallback)(function(){return y(!1)},[]);return Object(S.useEffect)(function(){var c=n.current;if(!!c)return c.addEventListener("mouseenter",u),c.addEventListener("mouseleave",i),function(){c.removeEventListener("mouseenter",u),c.removeEventListener("mouseleave",i)}},[n.current]),[a,n]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),Q=e("./node_modules/react/jsx-runtime.js"),U=e.n(Q),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},q=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var K=function(){var J=Object($.a)();return Object(Q.jsx)("div",{children:Object(Q.jsx)("div",{children:J})})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return o});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),S=e("./node_modules/react/index.js"),x=e.n(S);function k(n,t){return g(n)||d(n,t)||p(n,t)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(n,t){if(!!n){if(typeof n=="string")return l(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(n,t)}}function l(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=n[r];return a}function d(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a=[],y=!0,u=!1,i,c;try{for(r=r.call(n);!(y=(i=r.next()).done)&&(a.push(i.value),!(t&&a.length===t));y=!0);}catch(m){u=!0,c=m}finally{try{!y&&r.return!=null&&r.return()}finally{if(u)throw c}}return a}}function g(n){if(Array.isArray(n))return n}var f=0,o=function(t){var r=Object(S.useState)(t),a=k(r,2),y=a[0],u=a[1],i=t||y;return Object(S.useEffect)(function(){y==null&&(f+=1,u("tm-"+f))},[y]),i}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return g});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),$=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Q=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Z=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),ee=e("./node_modules/core-js/modules/es.array.from.js");function G(f,o){return C(f)||D(f,o)||A(f,o)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(f,o){if(!!f){if(typeof f=="string")return T(f,o);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(f,o)}}function T(f,o){(o==null||o>f.length)&&(o=f.length);for(var n=0,t=new Array(o);n<o;n++)t[n]=f[n];return t}function D(f,o){var n=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(n!=null){var t=[],r=!0,a=!1,y,u;try{for(n=n.call(f);!(r=(y=n.next()).done)&&(t.push(y.value),!(o&&t.length===o));r=!0);}catch(i){a=!0,u=i}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw u}}return t}}function C(f){if(Array.isArray(f))return f}var S=["keypress","mousemove","touchmove","click","scroll"],x={events:S,initialState:!0},k=function(o,n){var t=Object.assign({},x,n),r=t.events,a=t.initialState,y=Object(V.useState)(a),u=G(y,2),i=u[0],c=u[1],m=Object(V.useRef)();return Object(V.useEffect)(function(){var s=function(){c(!1),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(function(){c(!0)},o)};return r.forEach(function(_){return document.addEventListener(_,s)}),function(){r.forEach(function(_){return document.removeEventListener(_,s)})}},[o]),i},j=e("./node_modules/react/jsx-runtime.js"),p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},p=`import React from "react";
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
`,l={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}},d=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},g=function(){var o=k(3e3);return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:["Idle: ",""+o]})})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return f});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function Z(o,n){return A(o)||B(o,n)||ee(o,n)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(o,n){if(!!o){if(typeof o=="string")return G(o,n);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(o,n)}}function G(o,n){(n==null||n>o.length)&&(n=o.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=o[t];return r}function B(o,n){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r=[],a=!0,y=!1,u,i;try{for(t=t.call(o);!(a=(u=t.next()).done)&&(r.push(u.value),!(n&&r.length===n));a=!0);}catch(c){y=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(y)throw i}}return r}}function A(o){if(Array.isArray(o))return o}var T=function(n){var t=Object(L.useState)(null),r=Z(t,2),a=r[0],y=r[1],u=Object(L.useRef)(),i=Object(L.useCallback)(function(c){if(u.current&&(u.current.disconnect(),u.current=null),c===null){y(null);return}u.current=new IntersectionObserver(function(m){var s=Z(m,1),_=s[0];y(_)},n),u.current.observe(c)},[n==null?void 0:n.rootMargin,n==null?void 0:n.root,n==null?void 0:n.threshold]);return[i,a]},D=e("./node_modules/react/jsx-runtime.js");function C(o,n){return p(o)||j(o,n)||x(o,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(o,n){if(!!o){if(typeof o=="string")return k(o,n);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(o,n)}}function k(o,n){(n==null||n>o.length)&&(n=o.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=o[t];return r}function j(o,n){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r=[],a=!0,y=!1,u,i;try{for(t=t.call(o);!(a=(u=t.next()).done)&&(r.push(u.value),!(n&&r.length===n));a=!0);}catch(c){y=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(y)throw i}}return r}}function p(o){if(Array.isArray(o))return o}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}},l=`import React, { useRef } from "react";

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
`,d={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:32},startBody:{col:23,line:9},endBody:{col:1,line:32}}},g=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},f=function(){var n=Object(L.useRef)(null),t=T({root:n.current,threshold:.5}),r=C(t,2),a=r[0],y=r[1];return Object(D.jsx)("div",{ref:n,style:{width:300,height:300,overflowY:"scroll"},children:Object(D.jsx)("div",{style:{height:500},children:Object(D.jsx)("div",{ref:a,style:{marginTop:290,height:50,backgroundColor:y!=null&&y.isIntersecting?"green":"red"},children:y!=null&&y.isIntersecting?"Half visible":"Obscured"})})})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
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
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function R(p,l){return T(p)||A(p,l)||G(p,l)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(p,l){if(!!p){if(typeof p=="string")return B(p,l);var d=Object.prototype.toString.call(p).slice(8,-1);if(d==="Object"&&p.constructor&&(d=p.constructor.name),d==="Map"||d==="Set")return Array.from(p);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return B(p,l)}}function B(p,l){(l==null||l>p.length)&&(l=p.length);for(var d=0,g=new Array(l);d<l;d++)g[d]=p[d];return g}function A(p,l){var d=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(d!=null){var g=[],f=!0,o=!1,n,t;try{for(d=d.call(p);!(f=(n=d.next()).done)&&(g.push(n.value),!(l&&g.length===l));f=!0);}catch(r){o=!0,t=r}finally{try{!f&&d.return!=null&&d.return()}finally{if(o)throw t}}return g}}function T(p){if(Array.isArray(p))return p}var D=function(l,d){var g=Object(Z.a)(l,d),f=R(g,2),o=f[0],n=f[1];return Object(V.useEffect)(function(){return o(),n},[o,n]),n},C=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},k=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},j=function(){var l=D(function(){alert("fire")},3e3);return Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:l,children:"clear"})})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),p=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return r(i)||t(i,c)||o(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],_=!0,O=!1,h,E;try{for(m=m.call(i);!(_=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));_=!0);}catch(v){O=!0,E=v}finally{try{!_&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function r(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},a=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var u=function(){var c=Object(p.a)(function(){alert("fire")},3e3),m=g(c,2),s=m[0],_=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:s,children:"run"}),Object(l.jsx)("button",{onClick:_,children:"clear"})]})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Q});var z=e("./node_modules/core-js/modules/web.timers.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Q=function(q,w){var K=Object(W.useRef)(),F=Object($.a)(q),J=Object(W.useCallback)(function(){K.current&&clearInterval(K.current),K.current=setInterval(function(){F()},w)},[w]),L=Object(W.useCallback)(function(){K.current&&clearInterval(K.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[J,L]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return k});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=typeof document!="undefined"?L.useLayoutEffect:L.useEffect,R=e("./node_modules/react/jsx-runtime.js");function ee(j,p){return D(j)||T(j,p)||B(j,p)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(j,p){if(!!j){if(typeof j=="string")return A(j,p);var l=Object.prototype.toString.call(j).slice(8,-1);if(l==="Object"&&j.constructor&&(l=j.constructor.name),l==="Map"||l==="Set")return Array.from(j);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return A(j,p)}}function A(j,p){(p==null||p>j.length)&&(p=j.length);for(var l=0,d=new Array(p);l<p;l++)d[l]=j[l];return d}function T(j,p){var l=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(l!=null){var d=[],g=!0,f=!1,o,n;try{for(l=l.call(j);!(g=(o=l.next()).done)&&(d.push(o.value),!(p&&d.length===p));g=!0);}catch(t){f=!0,n=t}finally{try{!g&&l.return!=null&&l.return()}finally{if(f)throw n}}return d}}function D(j){if(Array.isArray(j))return j}var C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},C=`import React, { useState } from "react";

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
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},x=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},k=function(){var p=Object(L.useState)(!1),l=ee(p,2),d=l[0],g=l[1];return Z(function(){g(!0)},[]),Object(R.jsx)("div",{children:d&&"mounted"})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return k});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function Z(j,p){return A(j)||B(j,p)||ee(j,p)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(j,p){if(!!j){if(typeof j=="string")return G(j,p);var l=Object.prototype.toString.call(j).slice(8,-1);if(l==="Object"&&j.constructor&&(l=j.constructor.name),l==="Map"||l==="Set")return Array.from(j);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return G(j,p)}}function G(j,p){(p==null||p>j.length)&&(p=j.length);for(var l=0,d=new Array(p);l<p;l++)d[l]=j[l];return d}function B(j,p){var l=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(l!=null){var d=[],g=!0,f=!1,o,n;try{for(l=l.call(j);!(g=(o=l.next()).done)&&(d.push(o.value),!(p&&d.length===p));g=!0);}catch(t){f=!0,n=t}finally{try{!g&&l.return!=null&&l.return()}finally{if(f)throw n}}return d}}function A(j){if(Array.isArray(j))return j}var T=function(p){var l=Object(V.useState)(!1),d=Z(l,2),g=d[0],f=d[1],o=Object(V.useCallback)(function(t){var r=t.key;r===p&&f(!0)},[p]),n=Object(V.useCallback)(function(t){var r=t.key;r===p&&f(!1)},[p]);return Object(V.useEffect)(function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",n)}},[o,n]),g},D=e("./node_modules/react/jsx-runtime.js"),C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},C=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,S={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},x=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},k=function(){var p=T("r");return Object(D.jsx)("div",{children:p&&"r key pressed"})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var z=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/react/index.js"),R=e("./node_modules/core-js/modules/es.array.concat.js"),ee=e("./node_modules/core-js/modules/es.array.filter.js"),G=e("./node_modules/core-js/modules/es.array.includes.js"),B=e("./node_modules/core-js/modules/es.string.includes.js");function A(s){return C(s)||D(s)||k(s)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function C(s){if(Array.isArray(s))return j(s)}function S(s,_){return l(s)||p(s,_)||k(s,_)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(s,_){if(!!s){if(typeof s=="string")return j(s,_);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return j(s,_)}}function j(s,_){(_==null||_>s.length)&&(_=s.length);for(var O=0,h=new Array(_);O<_;O++)h[O]=s[O];return h}function p(s,_){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(_&&h.length===_));E=!0);}catch(I){v=!0,M=I}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function l(s){if(Array.isArray(s))return s}var d=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],O=Object(Z.useState)(_),h=S(O,2),E=h[0],v=h[1],P=Object(Z.useCallback)(function(){for(var ue=arguments.length,ae=new Array(ue),_e=0;_e<ue;_e++)ae[_e]=arguments[_e];return v(function(ve){return[].concat(A(ve),ae)})},[]),M=Object(Z.useCallback)(function(){for(var ue=arguments.length,ae=new Array(ue),_e=0;_e<ue;_e++)ae[_e]=arguments[_e];return v(function(ve){return[].concat(ae,A(ve))})},[]),I=Object(Z.useCallback)(function(ue){for(var ae=arguments.length,_e=new Array(ae>1?ae-1:0),ve=1;ve<ae;ve++)_e[ve-1]=arguments[ve];return v(function(Oe){return[].concat(A(Oe.slice(0,ue)),_e,A(Oe.slice(ue)))})},[]),H=Object(Z.useCallback)(function(){for(var ue=arguments.length,ae=new Array(ue),_e=0;_e<ue;_e++)ae[_e]=arguments[_e];return v(function(ve){return ve.filter(function(Oe,Ce){return!ae.includes(Ce)})})},[]),N=Object(Z.useCallback)(function(){var ue=A(E),ae=ue.pop();return v(ue),ae},[E]),te=Object(Z.useCallback)(function(){var ue=A(E),ae=ue.shift();return v(ue),ae},[E]),se=Object(Z.useCallback)(function(ue,ae){v(function(_e){var ve=A(_e);return ve[ue]=ae,ve})},[]),pe={setState:v,append:P,prepend:M,insert:I,remove:H,pop:N,shift:te,setItem:se};return[E,pe]},g=e("./node_modules/react/jsx-runtime.js");function f(s,_){return a(s)||r(s,_)||n(s,_)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(s,_){if(!!s){if(typeof s=="string")return t(s,_);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return t(s,_)}}function t(s,_){(_==null||_>s.length)&&(_=s.length);for(var O=0,h=new Array(_);O<_;O++)h[O]=s[O];return h}function r(s,_){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(_&&h.length===_));E=!0);}catch(I){v=!0,M=I}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function a(s){if(Array.isArray(s))return s}var y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},y=`import React from "react";
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
`,u={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:45},startBody:{col:23,line:9},endBody:{col:1,line:45}}},i=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},c=5,m=function(){var _=d(["Item 1","Item 2","Item 3","Item 4","Item 5"]),O=f(_,2),h=O[0],E=O[1];return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){return E.append("Item "+ ++c)},children:"append"}),Object(g.jsx)("button",{onClick:function(){return E.pop()},children:"pop"}),Object(g.jsx)("button",{onClick:function(){return E.prepend("Item "+ ++c)},children:"prepend"}),Object(g.jsx)("button",{onClick:function(){return E.shift()},children:"shift"}),Object(g.jsx)("button",{onClick:function(){return E.setItem(3,"Updated")},children:"setItem 3 index"}),Object(g.jsx)("button",{onClick:function(){return E.remove(2,3)},children:"remove 2, 3 index"}),Object(g.jsx)("button",{onClick:function(){return E.insert(3,"Item "+ ++c)},children:"insert 3 index"})]}),Object(g.jsx)("ul",{children:h.map(function(v,P){return Object(g.jsx)("li",{children:v},P)})})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return M});var z=e("./node_modules/core-js/modules/es.promise.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),ee=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),G=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),B=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),A=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),T=e("./node_modules/core-js/modules/es.object.define-property.js"),D=e("./node_modules/core-js/modules/es.object.create.js"),C=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),S=e("./node_modules/core-js/modules/es.array.for-each.js"),x=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),k=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),j=e("./node_modules/core-js/modules/es.array.reverse.js"),p=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function l(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return I};var I={},H=Object.prototype,N=H.hasOwnProperty,te=typeof Symbol=="function"?Symbol:{},se=te.iterator||"@@iterator",pe=te.asyncIterator||"@@asyncIterator",ue=te.toStringTag||"@@toStringTag";function ae(oe,Y,ce){return Object.defineProperty(oe,Y,{value:ce,enumerable:!0,configurable:!0,writable:!0}),oe[Y]}try{ae({},"")}catch(oe){ae=function(ce,me,fe){return ce[me]=fe}}function _e(oe,Y,ce,me){var fe=Y&&Y.prototype instanceof Ce?Y:Ce,ye=Object.create(fe.prototype),Te=new Re(me||[]);return ye._invoke=function(Ae,Me,ge){var je="suspendedStart";return function(Ee,Ke){if(je==="executing")throw new Error("Generator is already running");if(je==="completed"){if(Ee==="throw")throw Ke;return Pe()}for(ge.method=Ee,ge.arg=Ke;;){var We=ge.delegate;if(We){var Ue=ke(We,ge);if(Ue){if(Ue===Oe)continue;return Ue}}if(ge.method==="next")ge.sent=ge._sent=ge.arg;else if(ge.method==="throw"){if(je==="suspendedStart")throw je="completed",ge.arg;ge.dispatchException(ge.arg)}else ge.method==="return"&&ge.abrupt("return",ge.arg);je="executing";var Be=ve(Ae,Me,ge);if(Be.type==="normal"){if(je=ge.done?"completed":"suspendedYield",Be.arg===Oe)continue;return{value:Be.arg,done:ge.done}}Be.type==="throw"&&(je="completed",ge.method="throw",ge.arg=Be.arg)}}}(oe,ce,Te),ye}function ve(oe,Y,ce){try{return{type:"normal",arg:oe.call(Y,ce)}}catch(me){return{type:"throw",arg:me}}}I.wrap=_e;var Oe={};function Ce(){}function be(){}function De(){}var le={};ae(le,se,function(){return this});var ne=Object.getPrototypeOf,ie=ne&&ne(ne(Le([])));ie&&ie!==H&&N.call(ie,se)&&(le=ie);var de=De.prototype=Ce.prototype=Object.create(le);function he(oe){["next","throw","return"].forEach(function(Y){ae(oe,Y,function(ce){return this._invoke(Y,ce)})})}function Se(oe,Y){function ce(fe,ye,Te,Ae){var Me=ve(oe[fe],oe,ye);if(Me.type!=="throw"){var ge=Me.arg,je=ge.value;return je&&typeof je=="object"&&N.call(je,"__await")?Y.resolve(je.__await).then(function(Ee){ce("next",Ee,Te,Ae)},function(Ee){ce("throw",Ee,Te,Ae)}):Y.resolve(je).then(function(Ee){ge.value=Ee,Te(ge)},function(Ee){return ce("throw",Ee,Te,Ae)})}Ae(Me.arg)}var me;this._invoke=function(fe,ye){function Te(){return new Y(function(Ae,Me){ce(fe,ye,Ae,Me)})}return me=me?me.then(Te,Te):Te()}}function ke(oe,Y){var ce=oe.iterator[Y.method];if(ce===void 0){if(Y.delegate=null,Y.method==="throw"){if(oe.iterator.return&&(Y.method="return",Y.arg=void 0,ke(oe,Y),Y.method==="throw"))return Oe;Y.method="throw",Y.arg=new TypeError("The iterator does not provide a 'throw' method")}return Oe}var me=ve(ce,oe.iterator,Y.arg);if(me.type==="throw")return Y.method="throw",Y.arg=me.arg,Y.delegate=null,Oe;var fe=me.arg;return fe?fe.done?(Y[oe.resultName]=fe.value,Y.next=oe.nextLoc,Y.method!=="return"&&(Y.method="next",Y.arg=void 0),Y.delegate=null,Oe):fe:(Y.method="throw",Y.arg=new TypeError("iterator result is not an object"),Y.delegate=null,Oe)}function Ie(oe){var Y={tryLoc:oe[0]};1 in oe&&(Y.catchLoc=oe[1]),2 in oe&&(Y.finallyLoc=oe[2],Y.afterLoc=oe[3]),this.tryEntries.push(Y)}function xe(oe){var Y=oe.completion||{};Y.type="normal",delete Y.arg,oe.completion=Y}function Re(oe){this.tryEntries=[{tryLoc:"root"}],oe.forEach(Ie,this),this.reset(!0)}function Le(oe){if(oe){var Y=oe[se];if(Y)return Y.call(oe);if(typeof oe.next=="function")return oe;if(!isNaN(oe.length)){var ce=-1,me=function fe(){for(;++ce<oe.length;)if(N.call(oe,ce))return fe.value=oe[ce],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return me.next=me}}return{next:Pe}}function Pe(){return{value:void 0,done:!0}}return be.prototype=De,ae(de,"constructor",De),ae(De,"constructor",be),be.displayName=ae(De,ue,"GeneratorFunction"),I.isGeneratorFunction=function(oe){var Y=typeof oe=="function"&&oe.constructor;return!!Y&&(Y===be||(Y.displayName||Y.name)==="GeneratorFunction")},I.mark=function(oe){return Object.setPrototypeOf?Object.setPrototypeOf(oe,De):(oe.__proto__=De,ae(oe,ue,"GeneratorFunction")),oe.prototype=Object.create(de),oe},I.awrap=function(oe){return{__await:oe}},he(Se.prototype),ae(Se.prototype,pe,function(){return this}),I.AsyncIterator=Se,I.async=function(oe,Y,ce,me,fe){fe===void 0&&(fe=Promise);var ye=new Se(_e(oe,Y,ce,me),fe);return I.isGeneratorFunction(Y)?ye:ye.next().then(function(Te){return Te.done?Te.value:ye.next()})},he(de),ae(de,ue,"Generator"),ae(de,se,function(){return this}),ae(de,"toString",function(){return"[object Generator]"}),I.keys=function(oe){var Y=[];for(var ce in oe)Y.push(ce);return Y.reverse(),function me(){for(;Y.length;){var fe=Y.pop();if(fe in oe)return me.value=fe,me.done=!1,me}return me.done=!0,me}},I.values=Le,Re.prototype={constructor:Re,reset:function(Y){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(xe),!Y)for(var ce in this)ce.charAt(0)==="t"&&N.call(this,ce)&&!isNaN(+ce.slice(1))&&(this[ce]=void 0)},stop:function(){this.done=!0;var Y=this.tryEntries[0].completion;if(Y.type==="throw")throw Y.arg;return this.rval},dispatchException:function(Y){if(this.done)throw Y;var ce=this;function me(ge,je){return Te.type="throw",Te.arg=Y,ce.next=ge,je&&(ce.method="next",ce.arg=void 0),!!je}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var ye=this.tryEntries[fe],Te=ye.completion;if(ye.tryLoc==="root")return me("end");if(ye.tryLoc<=this.prev){var Ae=N.call(ye,"catchLoc"),Me=N.call(ye,"finallyLoc");if(Ae&&Me){if(this.prev<ye.catchLoc)return me(ye.catchLoc,!0);if(this.prev<ye.finallyLoc)return me(ye.finallyLoc)}else if(Ae){if(this.prev<ye.catchLoc)return me(ye.catchLoc,!0)}else{if(!Me)throw new Error("try statement without catch or finally");if(this.prev<ye.finallyLoc)return me(ye.finallyLoc)}}}},abrupt:function(Y,ce){for(var me=this.tryEntries.length-1;me>=0;--me){var fe=this.tryEntries[me];if(fe.tryLoc<=this.prev&&N.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var ye=fe;break}}ye&&(Y==="break"||Y==="continue")&&ye.tryLoc<=ce&&ce<=ye.finallyLoc&&(ye=null);var Te=ye?ye.completion:{};return Te.type=Y,Te.arg=ce,ye?(this.method="next",this.next=ye.finallyLoc,Oe):this.complete(Te)},complete:function(Y,ce){if(Y.type==="throw")throw Y.arg;return Y.type==="break"||Y.type==="continue"?this.next=Y.arg:Y.type==="return"?(this.rval=this.arg=Y.arg,this.method="return",this.next="end"):Y.type==="normal"&&ce&&(this.next=ce),Oe},finish:function(Y){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var me=this.tryEntries[ce];if(me.finallyLoc===Y)return this.complete(me.completion,me.afterLoc),xe(me),Oe}},catch:function(Y){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var me=this.tryEntries[ce];if(me.tryLoc===Y){var fe=me.completion;if(fe.type==="throw"){var ye=fe.arg;xe(me)}return ye}}throw new Error("illegal catch attempt")},delegateYield:function(Y,ce,me){return this.delegate={iterator:Le(Y),resultName:ce,nextLoc:me},this.method==="next"&&(this.arg=void 0),Oe}},I}function d(I,H,N,te,se,pe,ue){try{var ae=I[pe](ue),_e=ae.value}catch(ve){N(ve);return}ae.done?H(_e):Promise.resolve(_e).then(te,se)}function g(I){return function(){var H=this,N=arguments;return new Promise(function(te,se){var pe=I.apply(H,N);function ue(_e){d(pe,te,se,ue,ae,"next",_e)}function ae(_e){d(pe,te,se,ue,ae,"throw",_e)}ue(void 0)})}}function f(I,H){return a(I)||r(I,H)||n(I,H)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(I,H){if(!!I){if(typeof I=="string")return t(I,H);var N=Object.prototype.toString.call(I).slice(8,-1);if(N==="Object"&&I.constructor&&(N=I.constructor.name),N==="Map"||N==="Set")return Array.from(I);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return t(I,H)}}function t(I,H){(H==null||H>I.length)&&(H=I.length);for(var N=0,te=new Array(H);N<H;N++)te[N]=I[N];return te}function r(I,H){var N=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(N!=null){var te=[],se=!0,pe=!1,ue,ae;try{for(N=N.call(I);!(se=(ue=N.next()).done)&&(te.push(ue.value),!(H&&te.length===H));se=!0);}catch(_e){pe=!0,ae=_e}finally{try{!se&&N.return!=null&&N.return()}finally{if(pe)throw ae}}return te}}function a(I){if(Array.isArray(I))return I}var y=function(H){var N=Object(R.useState)(!1),te=f(N,2),se=te[0],pe=te[1],ue=Object(p.a)(H),ae=Object(R.useCallback)(g(l().mark(function _e(){var ve,Oe=arguments;return l().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return pe(!0),be.next=3,ue.apply(void 0,Oe);case 3:return ve=be.sent,pe(!1),be.abrupt("return",ve);case 6:case"end":return be.stop()}},_e)})),[H]);return[se,ae]},u=e("./node_modules/react/jsx-runtime.js");function i(I,H){return O(I)||_(I,H)||m(I,H)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(I,H){if(!!I){if(typeof I=="string")return s(I,H);var N=Object.prototype.toString.call(I).slice(8,-1);if(N==="Object"&&I.constructor&&(N=I.constructor.name),N==="Map"||N==="Set")return Array.from(I);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return s(I,H)}}function s(I,H){(H==null||H>I.length)&&(H=I.length);for(var N=0,te=new Array(H);N<H;N++)te[N]=I[N];return te}function _(I,H){var N=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(N!=null){var te=[],se=!0,pe=!1,ue,ae;try{for(N=N.call(I);!(se=(ue=N.next()).done)&&(te.push(ue.value),!(H&&te.length===H));se=!0);}catch(_e){pe=!0,ae=_e}finally{try{!se&&N.return!=null&&N.return()}finally{if(pe)throw ae}}return te}}function O(I){if(Array.isArray(I))return I}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,E={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},h=`import React from "react";
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
`,E={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},v=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},P=function(H){return new Promise(function(N){return setTimeout(N,H)})},M=function(){var H=y(P),N=i(H,2),te=N[0],se=N[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return se(2e3)},children:"Start"})}),Object(u.jsxs)("div",{children:["Loading: ",""+te]})]})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Q=e("./node_modules/react/jsx-runtime.js"),U=e.n(Q),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},q=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:16},startBody:{col:23,line:8},endBody:{col:1,line:16}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var K=function(){var J=Object($.a)("(min-width: 900px)");return Object(Q.jsx)("div",{children:Object(Q.jsxs)("div",{children:["(min-width: 900px) : ",J?"matches":"does not match"]})})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return n});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),S=e("./node_modules/react/index.js"),x=e.n(S);function k(t,r){return g(t)||d(t,r)||p(t,r)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(t,r){if(!!t){if(typeof t=="string")return l(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(t,r)}}function l(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,y=new Array(r);a<r;a++)y[a]=t[a];return y}function d(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var y=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(y.push(c.value),!(r&&y.length===r));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return y}}function g(t){if(Array.isArray(t))return t}function f(t,r){try{return t.addEventListener("change",r),function(){return t.removeEventListener("change",r)}}catch(a){return t.addListener(r),function(){return t.removeListener(r)}}}function o(t){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(t).matches:!1}var n=function(r){var a=Object(S.useState)(o(r)),y=k(a,2),u=y[0],i=y[1],c=Object(S.useRef)();return Object(S.useEffect)(function(){if("matchMedia"in window)return c.current=window.matchMedia(r),i(c.current.matches),f(c.current,function(m){return i(m.matches)})},[r]),u}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),R=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),ee=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=function(t,r){typeof t=="function"?t(r):typeof t=="object"&&t!==null&&"current"in t&&(t.current=r)},T=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return Object(L.useCallback)(function(y){r.forEach(function(u){return A(u,y)})},r)},D=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(y){r.forEach(function(u){return A(u,y)})}},C=e("./node_modules/react/jsx-runtime.js");function S(n,t){return l(n)||p(n,t)||k(n,t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(n,t){if(!!n){if(typeof n=="string")return j(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(n,t)}}function j(n,t){(t==null||t>n.length)&&(t=n.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=n[r];return a}function p(n,t){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var a=[],y=!0,u=!1,i,c;try{for(r=r.call(n);!(y=(i=r.next()).done)&&(a.push(i.value),!(t&&a.length===t));y=!0);}catch(m){u=!0,c=m}finally{try{!y&&r.return!=null&&r.return()}finally{if(u)throw c}}return a}}function l(n){if(Array.isArray(n))return n}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}},d=`import React, { useEffect } from "react";

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
`,g={Default:{startLoc:{col:23,line:12},endLoc:{col:1,line:31},startBody:{col:23,line:12},endBody:{col:1,line:31}}},f=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},o=function(){var t=Object(ee.a)(),r=S(t,2),a=r[0],y=r[1],u=Object(Z.a)(function(){return alert("click away")}),i=T(y,u),c=Object(R.a)();return Object(L.useEffect)(function(){c()},[]),Object(C.jsx)("div",{children:Object(C.jsx)("div",{ref:i,style:{width:100,height:100,backgroundColor:"red"},children:""+a})})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
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
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function Z(p,l){return A(p)||B(p,l)||ee(p,l)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(p,l){if(!!p){if(typeof p=="string")return G(p,l);var d=Object.prototype.toString.call(p).slice(8,-1);if(d==="Object"&&p.constructor&&(d=p.constructor.name),d==="Map"||d==="Set")return Array.from(p);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return G(p,l)}}function G(p,l){(l==null||l>p.length)&&(l=p.length);for(var d=0,g=new Array(l);d<l;d++)g[d]=p[d];return g}function B(p,l){var d=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(d!=null){var g=[],f=!0,o=!1,n,t;try{for(d=d.call(p);!(f=(n=d.next()).done)&&(g.push(n.value),!(l&&g.length===l));f=!0);}catch(r){o=!0,t=r}finally{try{!f&&d.return!=null&&d.return()}finally{if(o)throw t}}return g}}function A(p){if(Array.isArray(p))return p}var T={angle:0,type:"landscape-primary"},D=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T,d=Object(V.useState)(l),g=Z(d,2),f=g[0],o=g[1];return Object(V.useEffect)(function(){var n=window.screen,t=!0,r=function(){if(t){var y=n,u=y.orientation;if(u){var i=u.angle,c=u.type;o({angle:i,type:c})}else window.orientation!==void 0?o({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):o(l)}};return window.addEventListener("orientationchange",r),r(),function(){t=!1,window.addEventListener("orientationchange",r)}},[]),f},C=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},S=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},k=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},j=function(){var l=D();return Object(C.jsx)("div",{children:JSON.stringify(l)})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),X=function(){var J=window.navigator,L=J.userAgent,Z=J.platform,R=["Macintosh","MacIntel","MacPPC","Mac68K"],ee=["Win32","Win64","Windows","WinCE"],G=["iPhone","iPad","iPod"],B="unknown";return R.indexOf(Z)!==-1?B="macos":G.indexOf(Z)!==-1?B="ios":ee.indexOf(Z)!==-1?B="windows":/Android/.test(L)?B="android":!B&&/Linux/.test(Z)&&(B="linux"),B},$=function(){return typeof window!="undefined"?X():"unknown"},Q=e("./node_modules/react/jsx-runtime.js"),U=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,q={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},U=`import React from "react";
import { useOs } from "../useOs";

export default {
  title: "@travelmakers-design/hooks/useOs",
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
`,q={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},w=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},K=function(){var J=$();return Object(Q.jsx)("div",{children:J})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return k});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=function(p){Object(L.useEffect)(function(){if(!!p){var l=function(g){g=g||window.event;var f=g.relatedTarget||g.toElement;(!f||f.nodeName==="HTML")&&p()};return document.addEventListener("mouseout",l),function(){document.removeEventListener("mouseout",l)}}},[])},R=e("./node_modules/react/jsx-runtime.js");function ee(j,p){return D(j)||T(j,p)||B(j,p)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(j,p){if(!!j){if(typeof j=="string")return A(j,p);var l=Object.prototype.toString.call(j).slice(8,-1);if(l==="Object"&&j.constructor&&(l=j.constructor.name),l==="Map"||l==="Set")return Array.from(j);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return A(j,p)}}function A(j,p){(p==null||p>j.length)&&(p=j.length);for(var l=0,d=new Array(p);l<p;l++)d[l]=j[l];return d}function T(j,p){var l=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(l!=null){var d=[],g=!0,f=!1,o,n;try{for(l=l.call(j);!(g=(o=l.next()).done)&&(d.push(o.value),!(p&&d.length===p));g=!0);}catch(t){f=!0,n=t}finally{try{!g&&l.return!=null&&l.return()}finally{if(f)throw n}}return d}}function D(j){if(Array.isArray(j))return j}var C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},C=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},x=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},k=function(){var p=Object(L.useState)(0),l=ee(p,2),d=l[0],g=l[1];return Z(function(){return g(function(f){return f+1})}),Object(R.jsxs)("div",{children:["Page leave count: ",d]})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return g});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.array.concat.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),Q=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js");function R(f){return B(f)||G(f)||D(f)||ee()}function ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(f){if(typeof Symbol!="undefined"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}function B(f){if(Array.isArray(f))return C(f)}function A(f,o){return x(f)||S(f,o)||D(f,o)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(f,o){if(!!f){if(typeof f=="string")return C(f,o);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(f,o)}}function C(f,o){(o==null||o>f.length)&&(o=f.length);for(var n=0,t=new Array(o);n<o;n++)t[n]=f[n];return t}function S(f,o){var n=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(n!=null){var t=[],r=!0,a=!1,y,u;try{for(n=n.call(f);!(r=(y=n.next()).done)&&(t.push(y.value),!(o&&t.length===o));r=!0);}catch(i){a=!0,u=i}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw u}}return t}}function x(f){if(Array.isArray(f))return f}var k=function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=Object(V.useState)({state:n.slice(0,o),queue:n.slice(o)}),r=A(t,2),a=r[0],y=a.state,u=a.queue,i=r[1],c=function(){for(var O=arguments.length,h=new Array(O),E=0;E<O;E++)h[E]=arguments[E];return i(function(v){var P=[].concat(R(v.state),R(v.queue),h);return{state:P.slice(0,o),queue:P.slice(o)}})},m=function(O){return i(function(h){var E=O([].concat(R(h.state),R(h.queue)));return{state:E.slice(0,o),queue:E.slice(o)}})},s=function(){return i(function(O){return{state:O.state,queue:[]}})};return{state:y,queue:u,add:c,update:m,cleanQueue:s}},j=e("./node_modules/react/jsx-runtime.js"),p=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},p=`import React, { useState } from "react";

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
`,l={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},d=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},g=function(){var o=k(10,[1,2,3]),n=o.state,t=o.queue,r=o.add,a=o.update,y=o.cleanQueue;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:["state: ",n]}),Object(j.jsxs)("div",{children:["queue: ",t]}),Object(j.jsx)("button",{onClick:function(){return r(5)},children:"add 5"}),Object(j.jsx)("button",{onClick:function(){return a(function(i){return i})},children:"update"}),Object(j.jsx)("button",{onClick:y,children:"clear"})]})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
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
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),p=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return r(i)||t(i,c)||o(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],_=!0,O=!1,h,E;try{for(m=m.call(i);!(_=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));_=!0);}catch(v){O=!0,E=v}finally{try{!_&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function r(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},a=`import React, { useEffect } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var u=function(){var c=Object(p.a)({width:0,height:0}),m=g(c,2),s=m[0],_=m[1];return Object(k.useEffect)(function(){var O=function(){_({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}},[]),Object(l.jsx)("pre",{children:JSON.stringify(s,null,2)})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return f});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),C=e.n(D),S=e("./node_modules/react/index.js"),x=e.n(S);function k(o,n){return g(o)||d(o,n)||p(o,n)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(o,n){if(!!o){if(typeof o=="string")return l(o,n);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(o,n)}}function l(o,n){(n==null||n>o.length)&&(n=o.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=o[t];return r}function d(o,n){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r=[],a=!0,y=!1,u,i;try{for(t=t.call(o);!(a=(u=t.next()).done)&&(r.push(u.value),!(n&&r.length===n));a=!0);}catch(c){y=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(y)throw i}}return r}}function g(o){if(Array.isArray(o))return o}var f=function(n){var t=Object(S.useRef)(0),r=Object(S.useState)(n),a=k(r,2),y=a[0],u=a[1],i=Object(S.useCallback)(function(c){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){u(c)})},[]);return[y,i]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),R=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function ee(a,y){return D(a)||T(a,y)||B(a,y)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(a,y){if(!!a){if(typeof a=="string")return A(a,y);var u=Object.prototype.toString.call(a).slice(8,-1);if(u==="Object"&&a.constructor&&(u=a.constructor.name),u==="Map"||u==="Set")return Array.from(a);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return A(a,y)}}function A(a,y){(y==null||y>a.length)&&(y=a.length);for(var u=0,i=new Array(y);u<y;u++)i[u]=a[u];return i}function T(a,y){var u=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(u!=null){var i=[],c=!0,m=!1,s,_;try{for(u=u.call(a);!(c=(s=u.next()).done)&&(i.push(s.value),!(y&&i.length===y));c=!0);}catch(O){m=!0,_=O}finally{try{!c&&u.return!=null&&u.return()}finally{if(m)throw _}}return i}}function D(a){if(Array.isArray(a))return a}var C={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},S=typeof window!="undefined",x=function(){var y=Object(L.useRef)(null),u=Object(R.a)(C),i=ee(u,2),c=i[0],m=i[1],s=Object(L.useMemo)(function(){return S?new ResizeObserver(function(_){var O=_[0];O&&m(O.contentRect)}):null},[]);return Object(L.useEffect)(function(){return y.current&&s.observe(y.current),function(){s.disconnect()}},[y.current]),[y,c]},k=e("./node_modules/react/jsx-runtime.js");function j(a,y){return f(a)||g(a,y)||l(a,y)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(a,y){if(!!a){if(typeof a=="string")return d(a,y);var u=Object.prototype.toString.call(a).slice(8,-1);if(u==="Object"&&a.constructor&&(u=a.constructor.name),u==="Map"||u==="Set")return Array.from(a);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return d(a,y)}}function d(a,y){(y==null||y>a.length)&&(y=a.length);for(var u=0,i=new Array(y);u<y;u++)i[u]=a[u];return i}function g(a,y){var u=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(u!=null){var i=[],c=!0,m=!1,s,_;try{for(u=u.call(a);!(c=(s=u.next()).done)&&(i.push(s.value),!(y&&i.length===y));c=!0);}catch(O){m=!0,_=O}finally{try{!c&&u.return!=null&&u.return()}finally{if(m)throw _}}return i}}function f(a){if(Array.isArray(a))return a}var o=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,n={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},o=`import React, { useEffect } from "react";

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
`,n={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},t=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},r=function(){var y=x(),u=j(y,2),i=u[0],c=u[1],m=Object(Z.a)();return Object(L.useEffect)(function(){m()},[]),Object(k.jsxs)("div",{children:[Object(k.jsx)("textarea",{ref:i,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(k.jsx)("div",{children:JSON.stringify(c)})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return y});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/es.parse-int.js");function R(){var u=document.createElement("style");return u.type="text/css",u.setAttribute("tm-scroll-lock",""),u}function ee(u){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(u)}function G(u,i){u.styleSheet?u.styleSheet.cssText=i:u.appendChild(document.createTextNode(i))}function B(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var u=parseInt(window.getComputedStyle(document.body).paddingRight,10),i=window.innerWidth-document.documentElement.clientWidth;return u+i}var A=function(i){var c=i.disableBodyPadding,m=c?null:B(),s=`body {
        --removed-scroll-width: `+m+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(m?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return s};function T(u,i){return k(u)||x(u,i)||C(u,i)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(u,i){if(!!u){if(typeof u=="string")return S(u,i);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return S(u,i)}}function S(u,i){(i==null||i>u.length)&&(i=u.length);for(var c=0,m=new Array(i);c<i;c++)m[c]=u[c];return m}function x(u,i){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var m=[],s=!0,_=!1,O,h;try{for(c=c.call(u);!(s=(O=c.next()).done)&&(m.push(O.value),!(i&&m.length===i));s=!0);}catch(E){_=!0,h=E}finally{try{!s&&c.return!=null&&c.return()}finally{if(_)throw h}}return m}}function k(u){if(Array.isArray(u))return u}var j=function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},m=Object(L.useState)(i||!1),s=T(m,2),_=s[0],O=s[1],h=Object(L.useRef)(0),E=c.disableBodyPadding,v=Object(L.useRef)(null),P=function(){h.current=window.scrollY;var H=A({disableBodyPadding:E}),N=R();G(N,H),ee(N),v.current=N},M=function(){!(v!=null&&v.current)||(v.current.parentNode.removeChild(v.current),v.current=null)};return Object(L.useEffect)(function(){return _?P():M(),M},[_]),Object(L.useEffect)(function(){i!==void 0&&O(i)},[i]),Object(L.useEffect)(function(){i===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&O(!0)},[O]),[_,O]},p=e("./node_modules/react/jsx-runtime.js");function l(u,i){return n(u)||o(u,i)||g(u,i)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(u,i){if(!!u){if(typeof u=="string")return f(u,i);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(u,i)}}function f(u,i){(i==null||i>u.length)&&(i=u.length);for(var c=0,m=new Array(i);c<i;c++)m[c]=u[c];return m}function o(u,i){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var m=[],s=!0,_=!1,O,h;try{for(c=c.call(u);!(s=(O=c.next()).done)&&(m.push(O.value),!(i&&m.length===i));s=!0);}catch(E){_=!0,h=E}finally{try{!s&&c.return!=null&&c.return()}finally{if(_)throw h}}return m}}function n(u){if(Array.isArray(u))return u}var t=`
    
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
`,r={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:21},startBody:{col:23,line:9},endBody:{col:1,line:21}}},a=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},y=function(){var i=Object(L.useState)(!1),c=l(i,2),m=c[0],s=c[1],_=j(m);return Object(p.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(p.jsx)("button",{onClick:function(){return s(function(h){return!h})},children:m?"Unlock":"Lock"}),_?"Scroll locked":"Scrollable"]})};y.displayName="Default",y.parameters=Object.assign({storySource:{source:`() => {
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
}`}},y.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function R(p,l){return T(p)||A(p,l)||G(p,l)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(p,l){if(!!p){if(typeof p=="string")return B(p,l);var d=Object.prototype.toString.call(p).slice(8,-1);if(d==="Object"&&p.constructor&&(d=p.constructor.name),d==="Map"||d==="Set")return Array.from(p);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return B(p,l)}}function B(p,l){(l==null||l>p.length)&&(l=p.length);for(var d=0,g=new Array(l);d<l;d++)g[d]=p[d];return g}function A(p,l){var d=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(d!=null){var g=[],f=!0,o=!1,n,t;try{for(d=d.call(p);!(f=(n=d.next()).done)&&(g.push(n.value),!(l&&g.length===l));f=!0);}catch(r){o=!0,t=r}finally{try{!f&&d.return!=null&&d.return()}finally{if(o)throw t}}return g}}function T(p){if(Array.isArray(p))return p}var D=function(l,d){var g=Object(Z.a)(l,d),f=R(g,2),o=f[0],n=f[1];return Object(V.useEffect)(function(){return o(),n},[o,n]),n},C=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},k=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},j=function(){var l=D(function(){alert("fire!")},2e3);return Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:l,children:"Clear"})})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),p=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return r(i)||t(i,c)||o(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],_=!0,O=!1,h,E;try{for(m=m.call(i);!(_=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));_=!0);}catch(v){O=!0,E=v}finally{try{!_&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function r(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},a=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var u=function(){var c=Object(p.a)(function(){alert("fire!")},2e3),m=g(c,2),s=m[0],_=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:s,children:"Run"}),Object(l.jsx)("button",{onClick:_,children:"Clear"})]})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Q});var z=e("./node_modules/core-js/modules/web.timers.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),$=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Q=function(q,w){var K=Object(W.useRef)(),F=Object($.a)(q),J=Object(W.useCallback)(function(){K.current&&clearTimeout(K.current),K.current=setTimeout(function(){F()},w)},[w]),L=Object(W.useCallback)(function(){K.current&&clearTimeout(K.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[J,L]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return f});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function Z(o,n){return A(o)||B(o,n)||ee(o,n)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(o,n){if(!!o){if(typeof o=="string")return G(o,n);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(o,n)}}function G(o,n){(n==null||n>o.length)&&(n=o.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=o[t];return r}function B(o,n){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r=[],a=!0,y=!1,u,i;try{for(t=t.call(o);!(a=(u=t.next()).done)&&(r.push(u.value),!(n&&r.length===n));a=!0);}catch(c){y=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(y)throw i}}return r}}function A(o){if(Array.isArray(o))return o}var T=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=Object(L.useState)(n),r=Z(t,2),a=r[0],y=r[1],u=Object(L.useCallback)(function(i){return y(function(c){return typeof i=="boolean"?i:!c})},[]);return[a,u]},D=e("./node_modules/react/jsx-runtime.js");function C(o,n){return p(o)||j(o,n)||x(o,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(o,n){if(!!o){if(typeof o=="string")return k(o,n);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(o,n)}}function k(o,n){(n==null||n>o.length)&&(n=o.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=o[t];return r}function j(o,n){var t=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r=[],a=!0,y=!1,u,i;try{for(t=t.call(o);!(a=(u=t.next()).done)&&(r.push(u.value),!(n&&r.length===n));a=!0);}catch(c){y=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(y)throw i}}return r}}function p(o){if(Array.isArray(o))return o}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}},l=`import React from "react";
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
`,d={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:21},startBody:{col:23,line:8},endBody:{col:1,line:21}}},g=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},f=function(){var n=T(),t=C(n,2),r=t[0],a=t[1];return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:["current state: ",""+r]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{onClick:function(){return a(!0)},children:"setTrue"}),Object(D.jsx)("button",{onClick:function(){return a(!1)},children:"setFalse"}),Object(D.jsx)("button",{onClick:a,children:"toggle"})]})]})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
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
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return n});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function R(t,r){return T(t)||A(t,r)||G(t,r)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(t,r){if(!!t){if(typeof t=="string")return B(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(t,r)}}function B(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,y=new Array(r);a<r;a++)y[a]=t[a];return y}function A(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var y=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(y.push(c.value),!(r&&y.length===r));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return y}}function T(t){if(Array.isArray(t))return t}var D=function(r){var a=r.value,y=r.defaultValue,u=r.finalValue,i=r.rule,c=r.onChange,m=r.onValueUpdate,s=i(a),_=Object(L.useRef)("initial"),O=i(y)?y:u,h=Object(L.useState)(O),E=R(h,2),v=E[0],P=E[1],M=s?a:v;!s&&_.current==="controlled"&&(M=u),_.current=s?"controlled":"uncontrolled";var I=_.current,H=function(te){typeof c=="function"&&c(te),I==="uncontrolled"&&P(te)};return Object(L.useEffect)(function(){I==="uncontrolled"&&P(M),typeof m=="function"&&m(M)},[I,M]),[M,H,_.current]},C=e("./node_modules/react/jsx-runtime.js");function S(t,r){return l(t)||p(t,r)||k(t,r)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(t,r){if(!!t){if(typeof t=="string")return j(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(t,r)}}function j(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,y=new Array(r);a<r;a++)y[a]=t[a];return y}function p(t,r){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var y=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(y.push(c.value),!(r&&y.length===r));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return y}}function l(t){if(Array.isArray(t))return t}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}},d=`import React, { useState } from "react";

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
`,g={Default:{startLoc:{col:23,line:46},endLoc:{col:1,line:64},startBody:{col:23,line:46},endBody:{col:1,line:64}}},f=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},o=function(r){var a=r.label,y=r.value,u=r.defaultValue,i=r.onChange,c=Object(Z.a)(),m=D({value:y,defaultValue:u,finalValue:null,onChange:i,rule:function(E){return typeof E=="string"}}),s=S(m,2),_=s[0],O=s[1];return Object(C.jsxs)("div",{style:{padding:"1rem"},children:[Object(C.jsx)("label",{htmlFor:c,children:a}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{id:c,type:"text",value:_,onChange:function(E){return O(E.target.value)}})]})};o.displayName="CustomInput";var n=function(){var r=Object(L.useState)("controlled"),a=S(r,2),y=a[0],u=a[1];return Object(C.jsxs)("div",{style:{padding:20},children:[Object(C.jsx)(o,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(C.jsx)(o,{label:"Controlled",value:y,onChange:u}),Object(C.jsx)(o,{label:"Controlled (fixed value)",value:"fixed",onChange:u})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),$=e("./node_modules/core-js/modules/es.symbol.js"),Q=e.n($),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),p=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return r(i)||t(i,c)||o(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],_=!0,O=!1,h,E;try{for(m=m.call(i);!(_=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));_=!0);}catch(v){O=!0,E=v}finally{try{!_&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function r(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},a=`import React, { useEffect, useState } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var u=function(){var c=Object(k.useState)(""),m=g(c,2),s=m[0],_=m[1];return Object(k.useEffect)(function(){console.log("useEffect:",s)},[s]),Object(p.a)(function(){console.log("useUpdateEffect:",s)},[s]),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",onChange:function(h){return _(h.target.value)}})})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return W});var z=e("./node_modules/react/index.js"),V=e.n(z),W=function($,Q){var U=Object(z.useRef)(!0);Object(z.useEffect)(function(){if(!U.current)return $();U.current=!1},Q)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(re,b,e){"use strict";e.d(b,"c",function(){return L}),e.d(b,"d",function(){return Z}),e.d(b,"b",function(){return R}),e.d(b,"a",function(){return G});var z=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),X=e("./node_modules/react/jsx-runtime.js"),$=function(A){var T=A.styles,D=L();return Object(X.jsx)(W.a,{styles:Object(W.b)(T(D))})};$.displayName="Global";var Q={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},U=function(){return Object(X.jsx)(W.a,{styles:Q})};U.displayName="NormalizeCSS";var q=e("./node_modules/core-js/modules/es.array.reduce.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.object.assign.js");function F(B,A){return A?Object.keys(B).reduce(function(T,D){if(D==="headings"&&A.headings){var C=A.headings?Object.keys(B.headings).reduce(function(S,x){return S[x]=Object.assign({},B.headings[x],A.headings[x]),S},{}):B.headings;return Object.assign({},T,{headings:Object.assign({},B.headings,A.headings,C)})}return T[D]=typeof A[D]=="object"?Object.assign({},B[D],A[D]):A[D]||B[D],T},{}):B}var J=Object(z.createContext)({theme:V.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function L(){var B;return((B=Object(z.useContext)(J))===null||B===void 0?void 0:B.theme)||V.a}function Z(){var B;return((B=Object(z.useContext)(J))===null||B===void 0?void 0:B.styles)||{}}function R(){var B;return((B=Object(z.useContext)(J))===null||B===void 0?void 0:B.emotionOptions)||{key:"co",prepend:!0}}var ee=function(){return Object(X.jsx)($,{styles:function(T){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:T.fontFamily,backgroundColor:T.colorScheme==="dark"?T.colors.black:T.colors.white,color:T.colorScheme==="dark"?T.colors.white:T.colors.black,lineHeight:T.lineHeight,fontSizes:T.fontSizes.b3}}}})};ee.displayName="GlobalStyles";var G=function(A){var T=A.theme,D=A.styles,C=D===void 0?{}:D,S=A.emotionOptions,x=A.withNormalizeCSS,k=x===void 0?!1:x,j=A.withGlobalStyles,p=j===void 0?!1:j,l=A.children;return Object(X.jsxs)(J.Provider,{value:{theme:F(V.a,T),styles:C,emotionOptions:S},children:[k&&Object(X.jsx)(U,{}),p&&Object(X.jsx)(ee,{}),l]})};G.displayName="TmProvider",G.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(re,b,e){"use strict";e.d(b,"b",function(){return Ce}),e.d(b,"a",function(){return De});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[V.navy1,V.navy1,V.navy2],secondary:[V.green2,V.green2,V.green1],tertiary:[V.white,V.white,V.gray6],red:[V.red2,V.red2,V.red1]},X={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},$={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},Q={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},U={small:2,medium:4,large:8,round:100,circular:"50%"},q={xsmall:4,small:8,medium:16,large:24},w={xsmall:576,small:768,medium:1024,large:1408},K={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},F={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},J={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},L={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},Z={mobile:"@media (max-width: "+L.mobile+"px)",tablet:"@media (max-width: "+L.tablet+"px)",desktop:"@media (max-width: "+L.desktop+"px)",largeDesktop:"@media (max-width: "+L.maxSize+"px)"},R=e("./node_modules/core-js/modules/es.object.assign.js"),ee=function(ne){for(var ie="",de=1;de<ne.length-1;de+=1)ie+=ne[de]+" "+de/(ne.length-1)*100+"%, ";return ne[0]+" 0%, "+ie+ne[ne.length-1]+" 100%"},G=function(ne){for(var ie=arguments.length,de=new Array(ie>1?ie-1:0),he=1;he<ie;he++)de[he-1]=arguments[he];return"linear-gradient("+ne+"deg, "+ee(de)+")"},B=function(){for(var ne=arguments.length,ie=new Array(ne),de=0;de<ne;de++)ie[de]=arguments[de];return"radial-gradient(circle, "+ee(ie)+")"},A=function(ne){return typeof ne.size=="number"?ne.size:ne.sizes[ne.size]||ne.size||ne.sizes.medium},T=function(ne){return function(ie){return"@media (min-width: "+(A({size:ie,sizes:ne.breakpoints})+1)+"px)"}},D=function(ne){return function(ie){return"@media (max-width: "+A({size:ie,sizes:ne.breakpoints})+"px)"}},C=e("./node_modules/core-js/modules/es.string.replace.js"),S=e("./node_modules/core-js/modules/es.regexp.exec.js"),x=e("./node_modules/core-js/modules/es.number.is-nan.js"),k=e("./node_modules/core-js/modules/es.number.constructor.js"),j=e("./node_modules/core-js/modules/es.parse-int.js"),p=e("./node_modules/core-js/modules/es.array.map.js"),l=e("./node_modules/core-js/modules/es.string.split.js"),d=e("./node_modules/core-js/modules/es.string.starts-with.js"),g=e("./node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),r=e("./node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e("./node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/core-js/modules/es.array.from.js");function m(le,ne){return E(le)||h(le,ne)||_(le,ne)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(le,ne){if(!!le){if(typeof le=="string")return O(le,ne);var ie=Object.prototype.toString.call(le).slice(8,-1);if(ie==="Object"&&le.constructor&&(ie=le.constructor.name),ie==="Map"||ie==="Set")return Array.from(le);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return O(le,ne)}}function O(le,ne){(ne==null||ne>le.length)&&(ne=le.length);for(var ie=0,de=new Array(ne);ie<ne;ie++)de[ie]=le[ie];return de}function h(le,ne){var ie=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ie!=null){var de=[],he=!0,Se=!1,ke,Ie;try{for(ie=ie.call(le);!(he=(ke=ie.next()).done)&&(de.push(ke.value),!(ne&&de.length===ne));he=!0);}catch(xe){Se=!0,Ie=xe}finally{try{!he&&ie.return!=null&&ie.return()}finally{if(Se)throw Ie}}return de}}function E(le){if(Array.isArray(le))return le}var v=function(ne){var ie=ne.replace("#","");return typeof ie=="string"&&ie.length===6&&!Number.isNaN(Number("0x"+ie))},P=function(ne){var ie=ne.replace("#",""),de=parseInt(ie,16),he=de>>16&255,Se=de>>8&255,ke=de&255;return{r:he,g:Se,b:ke,a:1}},M=function(ne){var ie=ne.replace(/[^0-9,.]/g,"").split(",").map(Number),de=m(ie,4),he=de[0],Se=de[1],ke=de[2],Ie=de[3];return{r:he,g:Se,b:ke,a:Ie||1}},I=function(ne){return v(ne)?P(ne):ne.startsWith("rgb")?M(ne):{r:0,g:0,b:0,a:1}},H=function(ne,ie){if(typeof ne!="string"||ie>1||ie<0)return"rgba(0, 0, 0, 1)";var de=I(ne),he=de.r,Se=de.g,ke=de.b;return"rgba("+he+", "+Se+", "+ke+", "+ie+")"},N=function(ne,ie){var de=I(ne),he=de.r,Se=de.g,ke=de.b,Ie=de.a,xe=1-ie,Re=function(Pe){return Math.round(Pe*xe)};return"rgba("+Re(he)+", "+Re(Se)+", "+Re(ke)+", "+Ie+")"},te=function(ne,ie){var de=I(ne),he=de.r,Se=de.g,ke=de.b,Ie=de.a,xe=function(Le){return Math.round(Le+(255-Le)*ie)};return"rgba("+xe(he)+", "+xe(Se)+", "+xe(ke)+", "+Ie+")"},se=function(ne){return ne*8},pe={linearGradient:G,radialGradient:B,smallerThan:D,largerThan:T,rgba:H,size:A,darken:N,lighten:te,spacing:se},ue=function(ne){return Object.assign({},ne,{fn:{largerThan:pe.largerThan(ne),smallerThan:pe.smallerThan(ne),radialGradient:pe.radialGradient,linearGradient:pe.linearGradient,rgba:pe.rgba,size:pe.size,lighten:pe.lighten,darken:pe.darken,spacing:pe.spacing}})},ae=Object.keys(W),_e=Object.keys(V),ve=["xsmall","small","medium","large"],Oe=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],Ce=function(ne){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:ne.fontFamily||"sans-serif"}},be={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:V.black,colors:V,palettes:W,shadows:X,fontSizes:$,lineHeights:Q,radius:U,spacing:q,breakpoints:w,headings:K,opacity:F,zIndex:J,extra:{},media:Z},De=ue(be)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return p});var z=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),$=e("./node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),K=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),ee=e("./node_modules/core-js/modules/es.array.from.js");function G(l,d){return C(l)||D(l,d)||A(l,d)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(l,d){if(!!l){if(typeof l=="string")return T(l,d);var g=Object.prototype.toString.call(l).slice(8,-1);if(g==="Object"&&l.constructor&&(g=l.constructor.name),g==="Map"||g==="Set")return Array.from(l);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return T(l,d)}}function T(l,d){(d==null||d>l.length)&&(d=l.length);for(var g=0,f=new Array(d);g<d;g++)f[g]=l[g];return f}function D(l,d){var g=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(g!=null){var f=[],o=!0,n=!1,t,r;try{for(g=g.call(l);!(o=(t=g.next()).done)&&(f.push(t.value),!(d&&f.length===d));o=!0);}catch(a){n=!0,r=a}finally{try{!o&&g.return!=null&&g.return()}finally{if(n)throw r}}return f}}function C(l){if(Array.isArray(l))return l}function S(l){var d={};return Object.keys(l).forEach(function(g){var f=G(l[g],2),o=f[0],n=f[1];d[o]=n}),d}var x=e("./node_modules/core-js/modules/es.array.reduce.js");function k(l,d,g){return Object.keys(d).reduce(function(f,o){return f[o]=l(d[o],g?"tm-"+g+"-"+o:null),f},{})}var j=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function p(l){var d=typeof l=="function"?l:function(){return l};function g(f,o){var n=Object(X.c)(),t=Object(X.d)()[o==null?void 0:o.name],r=Object(j.a)(),a=r.css,y=r.cx,u=0;function i(h){return u+=1,"tm-ref_"+(h||"")+"_"+u}var c=d(n,f,i),m=typeof(o==null?void 0:o.overrideStyles)=="function"?o==null?void 0:o.overrideStyles(n):(o==null?void 0:o.overrideStyles)||{},s=typeof t=="function"?t(n):t||{},_=typeof(o==null?void 0:o.co)=="function"?o.co(n):o==null?void 0:o.co,O=S(Object.keys(c).map(function(h){var E=y(a(c[h]),a(s[h]),a(m[h]),a(_));return[h,E]}));return{classes:k(y,O,o==null?void 0:o.name),cx:y,theme:n}}return g}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return O});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),$=e("./node_modules/core-js/modules/es.symbol.description.js"),Q=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/clsx/dist/clsx.m.js"),Z=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),R=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ee=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.map.js"),B=e("./node_modules/react/index.js");function A(h){return S(h)||C(h)||D(h)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(h,E){if(!!h){if(typeof h=="string")return x(h,E);var v=Object.prototype.toString.call(h).slice(8,-1);if(v==="Object"&&h.constructor&&(v=h.constructor.name),v==="Map"||v==="Set")return Array.from(h);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return x(h,E)}}function C(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function S(h){if(Array.isArray(h))return x(h)}function x(h,E){(E==null||E>h.length)&&(E=h.length);for(var v=0,P=new Array(E);v<E;v++)P[v]=h[v];return P}function k(h,E){var v=Object(B.useRef)();return(!v.current||E.length!==v.current.prevDeps.length||v.current.prevDeps.map(function(P,M){return P===E[M]}).indexOf(!1)>=0)&&(v.current={v:h(),prevDeps:A(E)}),v.current.v}var j=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),p=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),l=e("./node_modules/react/jsx-runtime.js"),d=function(){var h;function E(v){return h===void 0&&(h=Object(j.a)(v||{key:"co",prepend:!0})),h}return{getCache:E}}(),g=d.getCache,f=Object(B.createContext)(void 0);function o(){var h=Object(p.b)();return Object(B.useContext)(f)||g(h)}function n(h){var E=h.children,v=h.value;return Object(l.jsx)(f.Provider,{value:v,children:E})}n.displayName="CacheProvider";function t(h,E){return i(h)||u(h,E)||a(h,E)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(h,E){if(!!h){if(typeof h=="string")return y(h,E);var v=Object.prototype.toString.call(h).slice(8,-1);if(v==="Object"&&h.constructor&&(v=h.constructor.name),v==="Map"||v==="Set")return Array.from(h);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return y(h,E)}}function y(h,E){(E==null||E>h.length)&&(E=h.length);for(var v=0,P=new Array(E);v<E;v++)P[v]=h[v];return P}function u(h,E){var v=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(v!=null){var P=[],M=!0,I=!1,H,N;try{for(v=v.call(h);!(M=(H=v.next()).done)&&(P.push(H.value),!(E&&P.length===E));M=!0);}catch(te){I=!0,N=te}finally{try{!M&&v.return!=null&&v.return()}finally{if(I)throw N}}return P}}function i(h){if(Array.isArray(h))return h}var c="ref";function m(h){var E;if(h.length!==1)return{args:h,ref:E};var v=t(h,1),P=v[0];if(!(P instanceof Object))return{args:h,ref:E};if(!(c in P))return{args:h,ref:E};E=P[c];var M=Object.assign({},P);return delete M[c],{args:[M],ref:E}}var s=function(){function h(v,P,M){var I=[],H=Object(R.a)(v,I,M);return I.length<2?M:H+P(I)}function E(v){var P=v.cache,M=function(){for(var N=arguments.length,te=new Array(N),se=0;se<N;se++)te[se]=arguments[se];var pe=m(te),ue=pe.ref,ae=pe.args,_e=Object(Z.a)(ae,P.registered);return Object(R.b)(P,_e,!1),P.key+"-"+_e.name+(ue===void 0?"":" "+ue)},I=function(){for(var N=arguments.length,te=new Array(N),se=0;se<N;se++)te[se]=arguments[se];return h(P.registered,M,Object(L.a)(te))};return{css:M,cx:I}}return{cssFactory:E}}(),_=s.cssFactory;function O(){var h=o();return k(function(){return _({cache:h})},[h])}},"./storybook-init-framework-entry.js":function(re,b,e){"use strict";e.r(b);var z=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(re,b,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),re.exports=e("./generated-stories-entry.js")},1:function(re,b){}},[[0,4,5]]]);
