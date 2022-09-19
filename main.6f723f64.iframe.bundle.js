(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(re,b,e){"use strict";e.r(b);var z={};e.r(z),e.d(z,"parameters",function(){return a}),e.d(z,"decorators",function(){return u});var V=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.array.filter.js"),Y=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),U=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),q=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),w=e("./node_modules/core-js/modules/es.object.define-properties.js"),K=e("./node_modules/core-js/modules/es.object.define-property.js"),F=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/core-js/modules/es.array.from.js"),x=e("./node_modules/react/index.js"),S=e("./node_modules/react/jsx-runtime.js");function I(s,p){return d(s)||l(s,p)||j(s,p)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(s,p){if(!!s){if(typeof s=="string")return y(s,p);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return y(s,p)}}function y(s,p){(p==null||p>s.length)&&(p=s.length);for(var O=0,h=new Array(p);O<p;O++)h[O]=s[O];return h}function l(s,p){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(p&&h.length===p));E=!0);}catch(C){v=!0,M=C}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function d(s){if(Array.isArray(s))return s}var g=Object(x.createContext)(null),f=function(){var p=Object(x.useContext)(g);if(!p)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return p},r=function(p){var O=p.colorScheme,h=p.toggleColorScheme,E=p.children,v=Object(x.useState)("init"),P=I(v,2),M=P[0],C=P[1];return Object(x.useEffect)(function(){C("update")},[]),Object(S.jsx)(g.Provider,{value:{colorScheme:O,toggleColorScheme:h},children:E},M)};r.displayName="ColorSchemeProvider",r.displayName="@travelmakers-design/styles/ColorSchemeProvider";var n=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),o=e("./node_modules/storybook-dark-mode/dist/index.js"),a={layout:"fullscreen",docs:{theme:t.themes.light},darkMode:{current:"light"}};function _(s){var p=Object(o.useDarkMode)()?"dark":"light";return Object(S.jsx)(r,{colorScheme:p,toggleColorScheme:function(){},children:Object(S.jsx)(n.a,{theme:{colorScheme:p},withGlobalStyles:!0,withNormalizeCSS:!0,children:s.children})})}_.displayName="ThemeWrapper";var u=[function(s){return Object(S.jsx)(_,{children:s()})}];function i(s,p){var O=Object.keys(s);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(s);p&&(h=h.filter(function(E){return Object.getOwnPropertyDescriptor(s,E).enumerable})),O.push.apply(O,h)}return O}function c(s){for(var p=1;p<arguments.length;p++){var O=arguments[p]!=null?arguments[p]:{};p%2?i(Object(O),!0).forEach(function(h){m(s,h,O[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(O)):i(Object(O)).forEach(function(h){Object.defineProperty(s,h,Object.getOwnPropertyDescriptor(O,h))})}return s}function m(s,p,O){return p in s?Object.defineProperty(s,p,{value:O,enumerable:!0,configurable:!0,writable:!0}):s[p]=O,s}Object.keys(z).forEach(function(s){var p=z[s];switch(s){case"args":return Object(F.d)(p);case"argTypes":return Object(F.b)(p);case"decorators":return p.forEach(function(h){return Object(F.f)(h,!1)});case"loaders":return p.forEach(function(h){return Object(F.g)(h,!1)});case"parameters":return Object(F.h)(c({},p),!1);case"argTypesEnhancers":return p.forEach(function(h){return Object(F.c)(h)});case"argsEnhancers":return p.forEach(function(h){return Object(F.e)(h)});case"render":return Object(F.i)(p);case"globals":case"globalTypes":{var O={};return O[s]=p,Object(F.h)(O,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(s+" was not supported :( !")}})},"./generated-stories-entry.js":function(re,b,e){"use strict";(function(z){var V=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,V.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],z,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(re))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(re,b,e){var z={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx","./travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx","./travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx","./travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx","./travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx","./travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx","./travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx","./travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx","./travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx","./travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx","./travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx","./travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx","./travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx","./travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx","./travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx","./travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx","./travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function V(X){var Y=W(X);return e(Y)}function W(X){if(!e.o(z,X)){var Y=new Error("Cannot find module '"+X+"'");throw Y.code="MODULE_NOT_FOUND",Y}return z[X]}V.keys=function(){return Object.keys(z)},V.resolve=W,re.exports=V,V.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/react/index.js"),R=e("./node_modules/react/jsx-runtime.js"),ee=function(t){return Object(R.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(R.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#D7D7D7"}),Object(R.jsx)("path",{d:"M6 10.7681L10.1205 16L18 8",stroke:"white","stroke-width":"2"})]})};ee.displayName="AccordionCheck",ee.displayName="@travelmakers-design/core/AccordionCheck";var G=function(t){return Object(R.jsx)("svg",Object.assign({width:"33",height:"32",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg"},t,{children:Object(R.jsx)("path",{stroke:"#30373F","stroke-width":"2",d:"m3 9 13 14L29 9",fill:"none","fill-rule":"evenodd"})}))};G.displayName="AccordionIcon",G.displayName="@travelmakers-design/core/AccordionIcon";var B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),A=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),T=Object(B.a)(function(n,t){var o,a,_,u,i,c,m,s=t.open;return{container:Object.assign({},Object(A.b)(n),(o={display:"flex",flexDirection:"column",width:"100%",backgroundColor:n.colors.white,marginBottom:"4px"},o["&:last-child"]={marginBottom:0},o)),row:(a={display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"14px 24px 14px 24px"},a[""+n.media.desktop]={padding:"12px 16px 12px 16px"},a),titleWrap:{display:"flex",width:"100%"},titleIndex:{fontWeight:"bold",fontFamily:"pt serif",color:n.colors.cover1,fontStyle:"italic",marginRight:"4px"},title:(_={display:"block",width:"100%",fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",fontWeight:"bold",color:n.colors.navy1},_[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px",fontWeight:"400"},_),icon:(u={width:"32px",height:"32px",cursor:"pointer",marginLeft:"4px"},u[""+n.media.mobile]={width:"24px",height:"24px"},u),content:(i={padding:"0 24px 14px 24px"},i[""+n.media.desktop]={padding:"0 16px 12px 16px"},i),divider:(c={width:"100%",height:"1px",backgroundColor:n.colors.navy1,marginBottom:"14px"},c[""+n.media.desktop]={marginBottom:"11px"},c),answerText:{display:"flex",lineHeight:"1.5"},answer:(m={fontSize:n.fontSizes.b1,lineHeight:n.lineHeights.b1+"px",color:n.colors.navy1,width:"100%"},m[""+n.media.desktop]={marginTop:"3px"},m[""+n.media.mobile]={fontSize:n.fontSizes.b2,lineHeight:n.lineHeights.b2+"px"},m)}});function D(n,t){return j(n)||k(n,t)||S(n,t)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,t){if(!!n){if(typeof n=="string")return I(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return I(n,t)}}function I(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function k(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],_=!0,u=!1,i,c;try{for(o=o.call(n);!(_=(i=o.next()).done)&&(a.push(i.value),!(t&&a.length===t));_=!0);}catch(m){u=!0,c=m}finally{try{!_&&o.return!=null&&o.return()}finally{if(u)throw c}}return a}}function j(n){if(Array.isArray(n))return n}var y=Object($.forwardRef)(function(n,t){var o=n.component,a=n.type,_=a===void 0?"Default":a,u=n.data,i=n.className,c=n.containerStyle,m=n.iconStyle,s=n.overrideStyles,p=n.__staticSelector,O=p===void 0?"div":p,h=Object($.useState)(Array.from({length:u.length},function(te,se){return!1})),E=D(h,2),v=E[0],P=E[1],M=o||"div",C=T({open:v},{overrideStyles:s,name:"div"}),H=C.classes,N=C.cx;return Object(R.jsx)("div",{className:N(c),children:u==null?void 0:u.map(function(te,se){return Object(R.jsxs)(M,{ref:t,className:N(H.container,i),children:[Object(R.jsxs)("div",{className:N(H.row),onClick:function(){return P(function(ue){return ue==null?void 0:ue.map(function(ae,pe){return se===pe?!ae:ae})})},children:[Object(R.jsxs)("div",{className:N(H.titleWrap),children:[_==="Number"&&Object(R.jsxs)("span",{className:N(H.titleIndex),children:[se+1,"."]}),_==="Checkbox"&&Object(R.jsx)("div",{style:{marginRight:8},children:Object(R.jsx)(ee,{})}),Object(R.jsx)("span",{className:N(H.title),children:te.question})]}),Object(R.jsx)(G,{className:N(H.icon),style:Object.assign({transform:"rotate("+(v[se]?180:0)+"deg)"},m)})]}),v[se]&&Object(R.jsxs)("div",{className:N(H.content),children:[Object(R.jsx)("div",{className:N(H.divider)}),Object(R.jsx)("div",{className:N(H.answerText),children:Object(R.jsx)("span",{className:N(H.answer),dangerouslySetInnerHTML:{__html:te==null?void 0:te.answer}})})]})]},"accordion-"+se)})})});y.displayName="@travelmakers-design/core/Accordion";var l=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}}}},title:"@travelmakers-design/core/Component/Accordion",component:y,argTypes:{type:{defaultValue:"Default",description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",options:["Default","Number","Checkbox"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},data:{defaultValue:g,description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:typeof g}},control:{type:"array"}},containerStyle:{description:"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}},iconStyle:{description:"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}}}},r=function(t){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(y,Object.assign({},t))})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return l});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),U=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.string.small.js"),K=e("./node_modules/core-js/modules/es.array.reduce.js"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),$=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),R={xsmall:{height:L.a.xsmall,padding:"0 24px"},small:{height:L.a.small,padding:"0 24px"},medium:{height:L.a.medium,padding:"0 24px"},large:{height:L.a.large,padding:"0 24px"}},ee=function(g){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.caption+"px",fontSize:g.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.b3+"px",fontSize:g.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.b2+"px",fontSize:g.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:g.lineHeights.h5+"px",fontSize:g.fontSizes.h5}}},G=Object.keys(R).reduce(function(d,g){return d[g]=R[g].height,d},{}),B=function(g){return{display:g?"block":"inline-block",width:g?"100%":"auto"}},A=Object(F.a)(function(d,g,f){var r,n,t,o=g.variant,a=g.size,_=g.fullWidth,u=g.roundness,i=g.line,c=f("loading"),m=f("inner"),s=f("spinner"),p=o||d.colors.navy1;return{loading:(r={ref:c,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},r["."+m]={opacity:0},r["."+s]={display:"flex"},r),solid:(n={backgroundColor:d.palettes[p][d.colorScheme==="light",0],color:p==="white"?d.colors.navy1:d.colors.white,"&:not(:disabled):hover":{backgroundColor:d.palettes[p][d.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:d.palettes[p][d.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:u?d.radius.round:2,outline:"1px solid "+d.palettes[p][d.colorScheme==="light",0]}}},n["&:disabled:not(."+c+")"]={backgroundColor:d.colors.gray5,color:i?d.colors.black:d.colors.white},n),ghost:(t={backgroundColor:d.colors.transparent,border:"1px solid "+d.palettes[p][d.colorScheme==="light",0],color:p==="white"?d.colors.white:d.palettes[p][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:u?d.radius.round:2,outline:"1px solid "+d.palettes[p][d.colorScheme==="light",0]}}},t["&:disabled:not(."+c+")"]={color:Object($.a)(d.palettes[p][1],d.opacity.opacity3),border:"1px solid "+Object($.a)(d.palettes[p][1],d.opacity.opacity3)},t),root:Object.assign({},R[a],B(_),Object(J.b)(d),ee(d)[a],{borderRadius:u?d.radius.round:d.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:m,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:s,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),T=e("./node_modules/react/jsx-runtime.js"),D=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function x(d,g){if(d==null)return{};var f=S(d,g),r,n;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);for(n=0;n<t.length;n++)r=t[n],!(g.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,r)||(f[r]=d[r]))}return f}function S(d,g){if(d==null)return{};var f={},r=Object.keys(d),n,t;for(t=0;t<r.length;t++)n=r[t],!(g.indexOf(n)>=0)&&(f[n]=d[n]);return f}var I=Object(U.forwardRef)(function(d,g){var f=d.children,r=d.component,n=d.size,t=n===void 0?"medium":n,o=d.variant,a=d.line,_=d.roundness,u=_===void 0?!1:_,i=d.fullWidth,c=i===void 0?!1:i,m=d.type,s=m===void 0?"button":m,p=d.disabled,O=p===void 0?!1:p,h=d.leftIcon,E=d.rightIcon,v=d.className,P=d.co,M=d.overrideStyles,C=x(d,D),H=Object(Z.c)(),N=A({variant:o,size:t,fullWidth:c,roundness:u,line:a},{overrideStyles:M,name:"Button"}),te=N.classes,se=N.cx;return Object(T.jsx)(q.a,Object.assign({component:r||"button",ref:g,type:s,disabled:O,className:se(te.root,te[a?"ghost":"solid"],v),co:P,onTouchStart:function(){}},C,{children:Object(T.jsxs)("div",{className:te.inner,children:[h&&Object(T.jsx)("span",{className:se(te.icon,te.leftIcon),children:h}),Object(T.jsx)("span",{className:te.label,children:f}),E&&Object(T.jsx)("span",{className:se(te.icon,te.rightIcon),children:E})]})}))});I.displayName="@travelmakers-design/core/Button";var k=`
    
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
`,j={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}},y=b.default={title:"@travelmakers-design/core/Component/Button",component:I,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(V.g,{}),Object(T.jsx)(V.f,{}),Object(T.jsx)(V.b,{}),Object(T.jsx)(V.d,{}),Object(T.jsx)(V.a,{story:V.c}),Object(T.jsx)(V.e,{})]})}},actions:{handles:["click button"]}}},l=function(g){return Object(T.jsx)("div",{style:{margin:"0 auto"},children:Object(T.jsx)(I,Object.assign({},g,{children:"Button"}))})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return U});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./node_modules/react/jsx-runtime.js"),Z=e.n(Y),U=function(w){return Object(Y.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w,{children:Object(Y.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};U.displayName="CloseIcon",U.displayName="@travelmakers-design/core/CloseIcon"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return A});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./node_modules/core-js/modules/es.string.small.js"),q=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),K=e("./packages/travelmakers-design-core/src/constants/index.ts"),F=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),J={xsmall:{width:K.a.xsmall,height:K.a.xsmall},small:{width:K.a.small,height:K.a.small},medium:{width:K.a.medium,height:K.a.medium},large:{width:K.a.large,height:K.a.large}},L={xsmall:8,small:8,medium:16,large:16},$=Object(q.a)(function(T,D,x){var S,I,k,j=D.variant,y=D.size,l=D.line,d=D.roundness,g=x("loading"),f=x("inner"),r=x("spinner"),n=j||T.colors.navy1;return{loading:(S={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},S["."+f]={opacity:0},S["."+r]={display:"flex"},S),solid:(I={backgroundColor:T.palettes[n][T.colorScheme==="light",0],color:T.colorScheme==="light"?T.colors.white:T.colors.black,"&:not(:disabled):hover":{backgroundColor:T.palettes[n][T.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:T.palettes[n][T.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:d?T.radius.round:2,outline:"1px solid "+T.palettes[n][T.colorScheme==="light",0]}}},I["&:disabled:not(."+g+")"]={backgroundColor:T.colors.gray5,color:l?T.colors.black:T.colors.white},I),ghost:(k={backgroundColor:T.colors.transparent,border:"1px solid "+T.palettes[n][T.colorScheme==="light",0],color:T.palettes[n][T.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(F.a)(T.palettes[n][T.colorScheme==="light",0],T.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(F.a)(T.palettes[n][T.colorScheme==="light",1],T.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:d?T.radius.round:2,outline:"1px solid "+T.palettes[n][T.colorScheme==="light",0]}}},k["&:disabled:not(."+g+")"]={backgroundColor:T.colors.gray5,color:l?T.colors.black:T.colors.white},k),root:Object.assign({},J[y],Object(w.b)(T),{borderRadius:d?T.radius.round:T.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:f,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:J[y].width-L[y],height:J[y].height-L[y]}},spinnerWrapper:{ref:r,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),R=e("./node_modules/react/jsx-runtime.js"),ee=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function G(T,D){if(T==null)return{};var x=B(T,D),S,I;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(T);for(I=0;I<k.length;I++)S=k[I],!(D.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,S)||(x[S]=T[S]))}return x}function B(T,D){if(T==null)return{};var x={},S=Object.keys(T),I,k;for(k=0;k<S.length;k++)I=S[k],!(D.indexOf(I)>=0)&&(x[I]=T[I]);return x}var A=Object(Y.forwardRef)(function(T,D){var x=T.children,S=T.component,I=T.size,k=I===void 0?"medium":I,j=T.variant,y=T.line,l=T.type,d=l===void 0?"button":l,g=T.disabled,f=g===void 0?!1:g,r=T.roundness,n=r===void 0?!1:r,t=T.className,o=T.co,a=T.overrideStyles,_=G(T,ee),u=$({variant:j,size:k,line:y,roundness:n},{overrideStyles:a,name:"Button"}),i=u.classes,c=u.cx;return Object(R.jsx)(Z.a,Object.assign({component:S||"button",className:c(i.root,i[y?"ghost":"solid"],t),type:d,disabled:f,ref:D,onTouchStart:function(){},co:o},_,{children:Object(R.jsx)("div",{className:i.inner,children:x})}))});A.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return G});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),U=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),w=e("./node_modules/react/jsx-runtime.js"),K=["size","variant"];function F(B,A){if(B==null)return{};var T=J(B,A),D,x;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(B);for(x=0;x<S.length;x++)D=S[x],!(A.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(B,D)||(T[D]=B[D]))}return T}function J(B,A){if(B==null)return{};var T={},D=Object.keys(B),x,S;for(S=0;S<D.length;S++)x=D[S],!(A.indexOf(x)>=0)&&(T[x]=B[x]);return T}var L=Object(U.forwardRef)(function(B,A){var T=B.size,D=T===void 0?"medium":T,x=B.variant,S=x===void 0?"primary":x,I=F(B,K);return Object(w.jsx)(Z.a,Object.assign({size:D,variant:S,ref:A},I,{children:Object(w.jsx)(q.a,{})}))});L.displayName="@travelmakers-design/core/CloseButton";var $=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}},$=`import {
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
}`}},G.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return F});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),X=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),Y=e("./node_modules/react/index.js"),Z=e.n(Y),U=e("./node_modules/react/jsx-runtime.js"),q=e.n(U),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W.g,{}),Object(U.jsx)(W.f,{}),Object(U.jsx)(W.b,{}),Object(U.jsx)(W.d,{}),Object(U.jsx)(W.a,{story:W.c}),Object(U.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var F=function(L){var $=Object(U.jsx)("svg",{viewBox:"0 0 24 24",children:Object(U.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(U.jsx)(X.a,Object.assign({},L,{children:$}))};F.displayName="Default",F.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},F.parameters)},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return E});var z=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),R=e("./node_modules/core-js/modules/es.object.keys.js"),ee=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=e("./node_modules/react/index.js"),T=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),D=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),x=Object(D.a)(function(v,P){var M=P.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:M?M in v.radius?v.radius[M]:M:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(v.colorScheme==="dark",v.palettes.primary[0]),backgroundColor:(v.colorScheme==="dark",v.palettes.primary[0]),borderRadius:M?M in v.radius?v.radius[M]:M:0}}}),S=e("./node_modules/react/jsx-runtime.js"),I=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function k(v,P){return g(v)||d(v,P)||y(v,P)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(v,P){if(!!v){if(typeof v=="string")return l(v,P);var M=Object.prototype.toString.call(v).slice(8,-1);if(M==="Object"&&v.constructor&&(M=v.constructor.name),M==="Map"||M==="Set")return Array.from(v);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return l(v,P)}}function l(v,P){(P==null||P>v.length)&&(P=v.length);for(var M=0,C=new Array(P);M<P;M++)C[M]=v[M];return C}function d(v,P){var M=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(M!=null){var C=[],H=!0,N=!1,te,se;try{for(M=M.call(v);!(H=(te=M.next()).done)&&(C.push(te.value),!(P&&C.length===P));H=!0);}catch(ye){N=!0,se=ye}finally{try{!H&&M.return!=null&&M.return()}finally{if(N)throw se}}return C}}function g(v){if(Array.isArray(v))return v}function f(v,P){if(v==null)return{};var M=r(v,P),C,H;if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(v);for(H=0;H<N.length;H++)C=N[H],!(P.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,C)||(M[C]=v[C]))}return M}function r(v,P){if(v==null)return{};var M={},C=Object.keys(v),H,N;for(N=0;N<C.length;N++)H=C[N],!(P.indexOf(H)>=0)&&(M[H]=v[H]);return M}var n=null,t="loadImage",o=function(P,M){P.forEach(function(C){C.isIntersecting&&(M.unobserve(C.target),C.target.dispatchEvent(new CustomEvent(t)))})},a=Object(A.forwardRef)(function(v,P){var M=v.lazy,C=v.threshold,H=C===void 0?.5:C,N=v.placeholder,te=v.src,se=v.radius,ye=v.width,ue=ye===void 0?"100%":ye,ae=v.height,pe=ae===void 0?"auto":ae,ve=v.alt,Oe=v.fit,xe=v.style,be=v.className,De=v.co,le=v.overrideStyles,ne=f(v,I),ie=x({radius:se},{overrideStyles:le,name:"Image"}),de=ie.classes,he=ie.cx,Se=Object(A.useState)(!1),ke=k(Se,2),Ce=ke[0],Ie=ke[1],Re=Object(A.useState)(!1),Le=k(Re,2),Pe=Le[0],oe=Le[1],Q=Object(A.useRef)(null),ce={width:ue,height:pe,objectFit:Oe};return Object(A.useImperativeHandle)(P,function(){return Q.current}),Object(A.useEffect)(function(){if(!M){oe(!0);return}var me=function(){return oe(!0)},fe=Q.current;return fe&&fe.addEventListener(t,me),function(){fe&&fe.removeEventListener(t,me)}},[M]),Object(A.useEffect)(function(){!M||(n=new IntersectionObserver(o,{threshold:H}),Q.current&&n.observe(Q.current))},[M,H]),Object(S.jsxs)(T.a,Object.assign({className:he(de.root,be),co:De},ne,{children:[Object(S.jsx)("img",{ref:Q,src:te,alt:ve,className:de.image,style:ce,onLoad:function(){return Ie(!0)}}),(!Ce||M&&!Pe)&&N&&Object(S.jsx)("div",{className:de.placeholder,title:ve,children:N})]}))});a.displayName="@travelmakers-design/core/Image";function _(v){return m(v)||c(v)||i(v)||u()}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(v,P){if(!!v){if(typeof v=="string")return s(v,P);var M=Object.prototype.toString.call(v).slice(8,-1);if(M==="Object"&&v.constructor&&(M=v.constructor.name),M==="Map"||M==="Set")return Array.from(v);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return s(v,P)}}function c(v){if(typeof Symbol!="undefined"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}function m(v){if(Array.isArray(v))return s(v)}function s(v,P){(P==null||P>v.length)&&(P=v.length);for(var M=0,C=new Array(P);M<P;M++)C[M]=v[M];return C}var p=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},p=`import {
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)($.g,{}),Object(S.jsx)($.f,{}),Object(S.jsx)($.b,{}),Object(S.jsx)($.d,{}),Object(S.jsx)($.a,{story:$.c}),Object(S.jsx)($.e,{})]})}}}},E=function(P){return Object(S.jsx)(S.Fragment,{children:_(new Array(10)).map(function(M,C){return Object(S.jsx)("div",{children:Object(S.jsx)(a,Object.assign({placeholder:Object(S.jsx)("div",{children:"Placeholder"})},P))},C)})})};E.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},E.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return I}),e.d(b,"WithIcon",function(){return k}),e.d(b,"WithRightSection",function(){return j}),e.d(b,"Textarea",function(){return y});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.string.small.js"),U=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),q=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),K=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L={xsmall:12,small:14,medium:14,large:14,xlarge:16},$=Object(F.a)(function(l,d){var g=d.multiline,f=d.roundness,r=d.invalid,n=d.width,t=d.descriptionType,o=l.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(J.b)(l),{height:g?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:g?l.lineHeight:l.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:l.fontSizes.b2,width:n?n+"px":"100%",color:l.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:f?l.radius.round:2,border:"1px solid "+l.colors.gray5,backgroundColor:l.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:l.colors.gray1,color:l.colors.gray1},"&:disabled":{backgroundColor:l.colors.gray7,borderColor:l.colors.gray5,color:l.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:l.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:l.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+o,"&::placeholder":{opacity:1}},disabled:{backgroundColor:l.colors.gray7,borderColor:l.colors.gray5,color:l.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:l.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:l.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),R=e("./node_modules/react/jsx-runtime.js"),ee=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function G(l,d){if(l==null)return{};var g=B(l,d),f,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);for(r=0;r<n.length;r++)f=n[r],!(d.indexOf(f)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,f)||(g[f]=l[f]))}return g}function B(l,d){if(l==null)return{};var g={},f=Object.keys(l),r,n;for(n=0;n<f.length;n++)r=f[n],!(d.indexOf(r)>=0)&&(g[r]=l[r]);return g}var A=Object(q.forwardRef)(function(l,d){var g,f,r=l.component,n=l.width,t=l.label,o=l.description,a=l.descriptionType,_=a===void 0?"description":a,u=l.icon,i=l.rightSectionWidth,c=i===void 0?48:i,m=l.rightSection,s=l.rightSectionProps,p=s===void 0?{}:s,O=l.wrapperProps,h=l.invalid,E=h===void 0?!1:h,v=l.required,P=v===void 0?!1:v,M=l.disabled,C=M===void 0?!1:M,H=l.multiline,N=H===void 0?!1:H,te=l.roundness,se=te===void 0?!1:te,ye=l.className,ue=l.style,ae=l.co,pe=l.overrideStyles,ve=l.__staticSelector,Oe=ve===void 0?"Input":ve,xe=G(l,ee),be=Object(U.c)(),De=$({roundness:se,multiline:N,invalid:E,width:n,descriptionType:_},{overrideStyles:pe,name:Oe}),le=De.classes,ne=De.cx,ie=r||"input";return Object(R.jsxs)(K.a,{style:{width:n?n+"px":"100%"},children:[t&&Object(R.jsx)(w.a,{level:"b2",family:"Pretendard",color:be.colors.gray1,style:{marginBottom:4},children:t}),Object(R.jsxs)(K.a,Object.assign({className:ne(le.wrapper,ye),co:ae,style:ue},O,{children:[u&&Object(R.jsx)("div",{className:ne(le.icon,(g={},g[le.disabled]=C,g)),children:u}),Object(R.jsx)(ie,Object.assign({},xe,{ref:d,className:ne(le.input,(f={},f[le.withIcon]=u,f[le.invalid]=E,f[le.disabled]=C,f)),required:P,disabled:C,style:{paddingRight:m?c:be.spacing.small}})),m&&Object(R.jsx)("div",Object.assign({},p,{style:Object.assign({},p.style,{paddingRight:32}),className:ne(le.rightSection,p.className),children:Object(R.jsx)(w.a,{level:"b2",family:"Pretendard",color:be.colors.green2,children:m})}))]})),o&&_==="description"?Object(R.jsx)(w.a,{level:"b3",family:"Pretendard",color:E?be.colors.red2:be.colors.navy3,style:{marginTop:4},children:o}):E&&Object(R.jsx)(w.a,{level:"b3",family:"Pretendard",color:_==="error"?be.colors.red2:_==="success"?be.colors.green3:be.colors.navy3,style:{marginTop:4},children:o})]})});A.displayName="@travelmakers-design/core/Input";var T=`
    
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
`,D={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:120},startBody:{col:23,line:114},endBody:{col:1,line:120}},WithIcon:{startLoc:{col:24,line:122},endLoc:{col:1,line:128},startBody:{col:24,line:122},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:138},startBody:{col:32,line:130},endBody:{col:1,line:138}},Textarea:{startLoc:{col:24,line:140},endLoc:{col:1,line:146},startBody:{col:24,line:140},endBody:{col:1,line:146}}},x=b.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},"with-icon":{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},"with-right-section":{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}}}},title:"@travelmakers-design/core/Component/Input",component:A,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},S=function(){return Object(R.jsx)("svg",{viewBox:"0 0 24 24",children:Object(R.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};S.displayName="Icon";var I=function(d){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({},d))})};I.displayName="Default";var k=function(d){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({icon:Object(R.jsx)(S,{})},d))})};k.displayName="WithIcon";var j=function(d){var g="\uC778\uC99D\uC644\uB8CC";return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({icon:Object(R.jsx)(S,{})},d,{rightSection:g}))})};j.displayName="WithRightSection";var y=function(d){return Object(R.jsx)("div",{style:{padding:24},children:Object(R.jsx)(A,Object.assign({component:"textarea",multiline:!0},d))})};y.displayName="Textarea",I.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},I.parameters),k.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},j.parameters),y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},y.parameters)},"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),$=e("./node_modules/core-js/modules/es.symbol.js"),R=e("./node_modules/core-js/modules/es.symbol.description.js"),ee=e("./node_modules/core-js/modules/es.array.fill.js"),G=e("./node_modules/core-js/modules/es.string.small.js"),B=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),T=e("./node_modules/react/jsx-runtime.js"),D=function(p){return Object(T.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:Object(T.jsxs)("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd",children:[Object(T.jsx)("circle",{stroke:"#30373F","stroke-linecap":"round","stroke-linejoin":"round",cx:"4.875",cy:"4.875",r:"4.875"}),Object(T.jsx)("path",{fill:"#30373F",d:"m7.672 8.379.707-.707 4.95 4.95-.708.706z"})]})})};D.displayName="SearchIcon",D.displayName="@travelmakers-design/core/SearchIcon";var x=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),S=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),I=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),k=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),j={xsmall:12,small:14,medium:14,large:14,xlarge:16},y=Object(I.a)(function(s,p){var O=p.multiline,h=p.roundness,E=p.invalid,v=p.width,P=p.descriptionType,M=s.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(k.b)(s),{height:O?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:O?s.lineHeight:s.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:s.fontSizes.b2,width:v?v+"px":"100%",color:s.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:h?s.radius.round:2,border:"1px solid "+s.colors.gray5,backgroundColor:s.colors.white,"&:focus, &:focus-within":{outline:"none",color:s.colors.gray1,border:"1px solid "+s.colors.gray1},"&:disabled":{borderColor:s.colors.gray5,color:s.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:s.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+M,"&::placeholder":{opacity:1}},disabled:{borderColor:s.colors.gray5,color:s.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:s.colors.gray5}},fill:{backgroundColor:s.colors.gray6,color:s.colors.navy3,border:"0px solid "+s.colors.gray5,"&:disabled":{backgroundColor:s.colors.gray6,border:"1px solid "+s.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:s.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),l=["component","width","label","line","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","value","onChange"];function d(s,p){return t(s)||n(s,p)||f(s,p)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(s,p){if(!!s){if(typeof s=="string")return r(s,p);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return r(s,p)}}function r(s,p){(p==null||p>s.length)&&(p=s.length);for(var O=0,h=new Array(p);O<p;O++)h[O]=s[O];return h}function n(s,p){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(p&&h.length===p));E=!0);}catch(C){v=!0,M=C}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function t(s){if(Array.isArray(s))return s}function o(s,p){if(s==null)return{};var O=a(s,p),h,E;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(s);for(E=0;E<v.length;E++)h=v[E],!(p.indexOf(h)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,h)||(O[h]=s[h]))}return O}function a(s,p){if(s==null)return{};var O={},h=Object.keys(s),E,v;for(v=0;v<h.length;v++)E=h[v],!(p.indexOf(E)>=0)&&(O[E]=s[E]);return O}var _=Object(V.forwardRef)(function(s,p){var O,h,E=s.component,v=s.width,P=s.label,M=s.line,C=M===void 0?!0:M,H=s.description,N=s.descriptionType,te=N===void 0?"description":N,se=s.icon,ye=se===void 0?Object(T.jsx)(D,{}):se,ue=s.rightSectionWidth,ae=ue===void 0?48:ue,pe=s.rightSection,ve=pe===void 0?Object(T.jsx)(A.a,{}):pe,Oe=s.rightSectionProps,xe=Oe===void 0?{}:Oe,be=s.wrapperProps,De=s.invalid,le=De===void 0?!1:De,ne=s.required,ie=ne===void 0?!1:ne,de=s.disabled,he=de===void 0?!1:de,Se=s.multiline,ke=Se===void 0?!1:Se,Ce=s.roundness,Ie=Ce===void 0?!0:Ce,Re=s.className,Le=s.style,Pe=s.co,oe=s.overrideStyles,Q=s.value,ce=s.onChange,me=o(s,l),fe=Object(B.c)(),_e=Object(V.useState)(Q),Te=d(_e,2),Ae=Te[0],Me=Te[1],ge=y({roundness:Ie,multiline:ke,invalid:le,width:v,descriptionType:te},{overrideStyles:oe,name:"Input"}),je=ge.classes,Ee=ge.cx,Ke=E||"input",We=function(Ve){!he&&Ue({target:{value:""}})},Ue=function(Ve){var Ne;Me(Ve==null||(Ne=Ve.target)===null||Ne===void 0?void 0:Ne.value),ce&&ce(Ve)};return Object(T.jsxs)(S.a,{style:{width:v?v+"px":"100%"},children:[P&&Object(T.jsx)(x.a,{level:"b2",family:"Pretendard",color:fe.colors.gray1,style:{marginBottom:4},children:P}),Object(T.jsxs)(S.a,Object.assign({className:Ee(je.wrapper,Re),co:Pe,style:Le},be,{children:[ye&&Object(T.jsx)("div",{className:Ee(je.icon,(O={},O[je.disabled]=he,O)),children:ye}),Object(T.jsx)(Ke,Object.assign({},me,{ref:p,value:Ae,onChange:Ue,className:Ee(je.input,(h={},h[je.fill]=!C,h[je.withIcon]=ye,h[je.invalid]=le,h[je.disabled]=he,h)),required:ie,disabled:he,style:{paddingRight:ve?ae:fe.spacing.small}})),ve&&Object(T.jsx)("div",Object.assign({},xe,{style:Object.assign({},xe.style,{paddingRight:32}),className:Ee(je.rightSection,xe.className),onClick:We,children:ve}))]})),H&&te==="description"?Object(T.jsx)(x.a,{level:"b3",family:"Pretendard",color:le?fe.colors.red2:fe.colors.navy3,style:{marginTop:4},children:H}):le&&Object(T.jsx)(x.a,{level:"b3",family:"Pretendard",color:te==="error"?fe.colors.red2:te==="success"?fe.colors.green3:fe.colors.navy3,style:{marginTop:4},children:H})]})});_.displayName="@travelmakers-design/core/SearchInput";var u=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}}}},title:"@travelmakers-design/core/Component/SearchInput",component:_,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},line:{defaultValue:!0,description:"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},m=function(p){return Object(T.jsx)("div",{style:{padding:24},children:Object(T.jsx)(_,Object.assign({},p))})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
}`}},m.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return B});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),q=e("./packages/travelmakers-design-core/src/constants/index.ts"),w=Object(U.a)(function(A,T){var D=T.size,x=T.color,S=x===void 0?A.colorScheme==="light"?A.colors.black:A.colors.white:x in A.palettes?(A.colorScheme==="light",A.palettes[x][0]):x in A.colors?A.colors[x]:x;return{root:{position:"relative",display:"inline-block",width:D in q.a?q.a[D]:D,height:D in q.a?q.a[D]:D,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:S},circle:{fill:S}}}}),K=e("./node_modules/react/jsx-runtime.js"),F=["size","color","className","co","overrideStyles"];function J(A,T){if(A==null)return{};var D=L(A,T),x,S;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(A);for(S=0;S<I.length;S++)x=I[S],!(T.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(A,x)||(D[x]=A[x]))}return D}function L(A,T){if(A==null)return{};var D={},x=Object.keys(A),S,I;for(I=0;I<x.length;I++)S=x[I],!(T.indexOf(S)>=0)&&(D[S]=A[S]);return D}var $=Object(V.forwardRef)(function(A,T){var D=A.size,x=D===void 0?"medium":D,S=A.color,I=A.className,k=A.co,j=A.overrideStyles,y=J(A,F),l=w({size:x,color:S},{overrideStyles:j,name:"Spinner"}),d=l.classes,g=l.cx,f=Object(K.jsx)("i",{className:d.inner,children:Object(K.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(K.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(K.jsxs)("g",{transform:"translate(1 1)",children:[Object(K.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(K.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(K.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(K.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(K.jsx)(Z.a,Object.assign({ref:T,className:g(d.root,I),co:k},y,{children:f}))});$.displayName="@travelmakers-design/core/Spinner";var R=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:$,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},B=function(T){return Object(K.jsx)($,Object.assign({},T))};B.displayName="Default",B.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},B.parameters)},"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var z=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),Z=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.from.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/react/index.js"),R=e("./node_modules/core-js/modules/es.array.fill.js"),ee=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),G=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),B=function(t){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:t.lineHeights.caption+"px",fontSize:t.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:t.lineHeights.b3+"px",fontSize:t.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:t.lineHeights.b2+"px",fontSize:t.fontSizes.b2}}},A=function(t,o){return{small:{padding:o?"2px 8px":"0px 8px"},medium:{padding:o?"2px 12px":"0px 12px"},large:{padding:o?"3px 12px":"0px 16px"}}},T=Object(ee.a)(function(n,t){var o,a=t.color,_=t.roundness,u=t.size,i=t.fill;return{container:Object.assign({},Object(G.b)(n),B(n)[u],A(n,i)[u],(o={display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:a==="gray"?n.colors.navy1:n.colors.white,marginRight:"6px",gap:"8px",borderRadius:_&&n.radius.round,backgroundColor:a==="green"?n.colors.green3:a==="blue"?n.colors.point_sky1:a==="purple"?n.colors.point_purple1:n.colors.gray6},o["&:last-child"]={marginRight:0},o)),line:{color:a==="green"?n.colors.green3:a==="blue"?n.colors.point_sky1:a==="purple"?n.colors.point_purple1:n.colors.gray3,background:"inherit",border:"1px solid"}}}),D=e("./node_modules/react/jsx-runtime.js"),x=Object($.forwardRef)(function(n,t){var o=n.component,a=n.size,_=a===void 0?"small":a,u=n.color,i=u===void 0?"green":u,c=n.roundness,m=c===void 0?!1:c,s=n.fill,p=s===void 0?!0:s,O=n.children,h=n.className,E=n.overrideStyles,v=n.__staticSelector,P=v===void 0?"span":v,M=o||"span",C=T({color:i,roundness:m,fill:p,size:_},{overrideStyles:E,name:"span"}),H=C.classes,N=C.cx;return Object(D.jsx)(M,{ref:t,className:N(H.container,H[i],!p&&H.line,h),children:O})});x.displayName="@travelmakers-design/core/Tag";function S(n){return y(n)||j(n)||k(n)||I()}function I(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(n,t){if(!!n){if(typeof n=="string")return l(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(n,t)}}function j(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function y(n){if(Array.isArray(n))return l(n)}function l(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}var d=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:69},startBody:{col:23,line:61},endBody:{col:1,line:69}}},d=`import React from "react";
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
`,g={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:61},startBody:{col:23,line:53},endBody:{col:1,line:61}}},f=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:69},startBody:{col:23,line:61},endBody:{col:1,line:69}}}}},title:"@travelmakers-design/core/Component/Tag",component:x,argTypes:{size:{defaultValue:"small",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"green",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["green","blue","purple","gray"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fill:{defaultValue:!0,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},r=function(t){return Object(D.jsx)("div",{style:{padding:24,display:"flex"},children:S(Array(10).keys()).map(function(o,a){return Object(D.jsxs)(x,Object.assign({},t,{children:["Tag",a+1]}))})})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return S});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),X=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.string.small.js"),K=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),J=function(k){return{xsmall:{fontWeight:"normal",lineHeight:k.lineHeights.h6+"px",fontSize:k.fontSizes.h6},small:{fontWeight:"normal",lineHeight:k.lineHeights.h4+"px",fontSize:k.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:k.lineHeights.h2+"px",fontSize:k.fontSizes.h2},large:{fontWeight:"normal",lineHeight:k.lineHeights.h1+"px",fontSize:k.fontSizes.h1}}},L=function(k){return{display:k?"block":"inline-block",width:k?"100%":"auto"}},$=Object(K.a)(function(I,k,j){var y,l,d=k.color,g=k.size,f=k.fullWidth,r=k.family,n=k.underline,t=k.leftIcon,o=k.rightIcon,a=j("loading"),_=j("inner"),u=j("spinner"),i=d||I.colors.navy1;return{loading:(y={ref:a,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},y["."+_]={opacity:0},y["."+u]={display:"flex"},y),solid:(l={color:i==="white"?I.colors.white:I.colors.navy1,"&:not(:disabled):hover":{color:i==="white"?I.colors.white:I.colors.navy1},"&:not(:disabled):active":{color:i==="white"?I.colors.gray6:I.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},l["&:disabled:not(."+a+")"]={color:I.colors.gray5},l),root:Object.assign({},L(f),Object(F.b)(I),J(I)[g],{fontFamily:""+r,borderRadius:I.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:n?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:_,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),R=e("./node_modules/react/jsx-runtime.js"),ee=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function G(I,k){if(I==null)return{};var j=B(I,k),y,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(I);for(l=0;l<d.length;l++)y=d[l],!(k.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(I,y)||(j[y]=I[y]))}return j}function B(I,k){if(I==null)return{};var j={},y=Object.keys(I),l,d;for(d=0;d<y.length;d++)l=y[d],!(k.indexOf(l)>=0)&&(j[l]=I[l]);return j}var A=Object(W.forwardRef)(function(I,k){var j=I.children,y=I.component,l=I.family,d=l===void 0?"Pretendard":l,g=I.size,f=g===void 0?"medium":g,r=I.color,n=r===void 0?"navy":r,t=I.fullWidth,o=t===void 0?!1:t,a=I.type,_=a===void 0?"button":a,u=I.disabled,i=u===void 0?!1:u,c=I.underline,m=c===void 0?!1:c,s=I.leftIcon,p=I.rightIcon,O=I.className,h=I.co,E=I.overrideStyles,v=G(I,ee),P=Object(U.c)(),M=$({color:n,size:f,fullWidth:o,family:d,underline:m,leftIcon:s,rightIcon:p},{overrideStyles:E,name:"Button"}),C=M.classes,H=M.cx;return Object(R.jsx)(q.a,Object.assign({component:y||"button",ref:k,type:_,disabled:i,className:H(C.root,C.solid,O),co:h,onTouchStart:function(){}},v,{children:Object(R.jsxs)("div",{className:C.inner,children:[s&&Object(R.jsxs)("span",{className:H(C.icon,C.leftIcon),children:[s,"\xA0"]}),Object(R.jsx)("span",{className:C.label,children:j}),p&&Object(R.jsxs)("span",{className:H(C.icon,C.rightIcon),children:["\xA0",p]})]})}))});A.displayName="@travelmakers-design/core/TextButton";var T=`
    
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
`,D={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},x=b.default={title:"@travelmakers-design/core/Component/TextButton",component:A,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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
}`}},S.parameters)},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return T});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.string.italics.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),U=e("./node_modules/react/index.js"),q=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),K=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F={h1:{},small:{},medium:{},large:{}},J=function(x){return{caption:{lineHeight:x.lineHeights.caption+"px",fontSize:x.fontSizes.caption},b3:{lineHeight:x.lineHeights.b3+"px",fontSize:x.fontSizes.b3},b2:{lineHeight:x.lineHeights.b2+"px",fontSize:x.fontSizes.b2},b1:{lineHeight:x.lineHeights.b1+"px",fontSize:x.fontSizes.b1},h6:{lineHeight:x.lineHeights.h6+"px",fontSize:x.fontSizes.h6},h5:{lineHeight:x.lineHeights.h5+"px",fontSize:x.fontSizes.h5},h4:{lineHeight:x.lineHeights.h4+"px",fontSize:x.fontSizes.h4},h3:{lineHeight:x.lineHeights.h3+"px",fontSize:x.fontSizes.h3},h2:{lineHeight:x.lineHeights.h2+"px",fontSize:x.fontSizes.h2},h1:{lineHeight:x.lineHeights.h1+"px",fontSize:x.fontSizes.h1}}},L=Object.keys(F).reduce(function(D,x){return D[x]=F[x].height,D},{}),$=function(x){return{display:"block",width:"100%"}},R=Object(K.a)(function(D,x,S){var I,k,j=x.family,y=x.level,l=x.textAlign,d=x.disabled,g=x.strong,f=x.italic,r=x.underline,n=x.color,t=x.mobile,o=x.tablet,a=S("loading"),_=S("inner"),u=S("spinner");return{loading:(I={ref:a,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},I["."+_]={opacity:0},I["."+u]={display:"flex"},I),solid:{fontWeight:g?j==="Noto Serif KR"?600:700:400,fontStyle:f?"italic":"normal",textDecoration:r?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},F[y],$(),J(D)[y],(k={fontFamily:""+j,color:d?D.colors.gray5:n||D.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+l,WebkitAppearance:"none",outline:"none",border:"none"},k[""+D.media.mobile]=Object.assign({},J(D)[t]),k[""+D.media.tablet]=Object.assign({},J(D)[o]),k)),inner:{ref:_,height:"100%",overflow:"visible"},label:{height:"100%"}}}),ee=e("./node_modules/react/jsx-runtime.js"),G=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function B(D,x){if(D==null)return{};var S=A(D,x),I,k;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(D);for(k=0;k<j.length;k++)I=j[k],!(x.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,I)||(S[I]=D[I]))}return S}function A(D,x){if(D==null)return{};var S={},I=Object.keys(D),k,j;for(j=0;j<I.length;j++)k=I[j],!(x.indexOf(k)>=0)&&(S[k]=D[k]);return S}var T=Object(U.forwardRef)(function(D,x){var S=D.children,I=D.component,k=D.family,j=k===void 0?"Noto Serif KR":k,y=D.level,l=y===void 0?"h1":y,d=D.mobileLevel,g=D.tabletLevel,f=D.textAlign,r=f===void 0?"left":f,n=D.disabled,t=n===void 0?!1:n,o=D.strong,a=o===void 0?!1:o,_=D.italic,u=_===void 0?!1:_,i=D.underline,c=i===void 0?!1:i,m=D.color,s=D.className,p=D.co,O=D.overrideStyles,h=B(D,G),E=Object(Z.c)(),v=R({family:j,level:l,disabled:t,strong:a,italic:u,underline:c,textAlign:r,color:m,mobile:d,tablet:g},{overrideStyles:O,name:"span"}),P=v.classes,M=v.cx;return Object(ee.jsx)(q.a,Object.assign({component:I||"span",ref:x,type:"span",disabled:t,className:M(P.root,P.solid,s),co:p,onTouchStart:function(){}},h,{children:Object(ee.jsx)("div",{className:P.inner,children:Object(ee.jsx)("span",{className:P.label,children:S})})}))});T.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return F});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),X=e("./node_modules/react/index.js"),Y=e.n(X),Z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),U=e("./node_modules/react/jsx-runtime.js"),q=e.n(U),w=`
    
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
`,K={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};b.default={title:"@travelmakers-design/core/General/Typography",component:Z.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W.g,{}),Object(U.jsx)(W.f,{}),Object(U.jsx)(W.b,{}),Object(U.jsx)(W.d,{}),Object(U.jsx)(W.a,{story:W.c}),Object(U.jsx)(W.e,{})]})}}}};var F=function(L){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Z.a,Object.assign({},L,{level:"h1",children:"h1. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"h2",children:"h2. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"h3",children:"h3. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"h4",children:"h4. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"h5",children:"h5. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"h6",children:"h6. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"b1",children:"b1. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"b2",children:"b2. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"b3",children:"b3. Travelmakers Design"})),Object(U.jsx)(Z.a,Object.assign({},L,{level:"caption",children:"caption. Travelmakers Design"}))]})};F.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},F.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(re,b,e){"use strict";e.d(b,"a",function(){return I});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.array.map.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(F),L=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),$=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),R=e("./node_modules/react/index.js"),ee=e.n(R),G=e("./node_modules/react/jsx-runtime.js"),B=e.n(G),A=["component","className","style","co"];function T(k,j){if(k==null)return{};var y=D(k,j),l,d;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(k);for(d=0;d<g.length;d++)l=g[d],!(j.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,l)||(y[l]=k[l]))}return y}function D(k,j){if(k==null)return{};var y={},l=Object.keys(k),d,g;for(g=0;g<l.length;g++)d=l[g],!(j.indexOf(d)>=0)&&(y[d]=k[d]);return y}function x(k,j){return typeof k=="function"?k(j):k}function S(k,j){var y=Object(L.a)(),l=y.css,d=y.cx,g=Object($.c)();return Array.isArray(k)?d(j,k.map(function(f){return l(x(f,g))})):d(j,l(x(k,g)))}var I=Object(R.forwardRef)(function(k,j){var y=k.component,l=k.className,d=k.style,g=k.co,f=T(k,A),r=y||"div";return Object(G.jsx)(r,Object.assign({ref:j,className:S(g,l),style:d},f))});I.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),Z=e("./node_modules/react/jsx-runtime.js"),U=e.n(Z),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:Y.a};var K=function(){return Object(Z.jsx)(Y.a,{co:function(L){return{width:100,height:100,backgroundColor:L.colors.gray3}}})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},K.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return z});var z={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return g});var z=e("./node_modules/core-js/modules/es.string.replace.js"),V=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),X=e("./node_modules/core-js/modules/es.number.constructor.js"),Y=e("./node_modules/core-js/modules/es.parse-int.js"),Z=e("./node_modules/core-js/modules/es.array.map.js"),U=e("./node_modules/core-js/modules/es.string.split.js"),q=e("./node_modules/core-js/modules/es.string.starts-with.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),K=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/core-js/modules/es.symbol.iterator.js"),$=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js");function T(f,r){return k(f)||I(f,r)||x(f,r)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(f,r){if(!!f){if(typeof f=="string")return S(f,r);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(f,r)}}function S(f,r){(r==null||r>f.length)&&(r=f.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=f[n];return t}function I(f,r){var n=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(n!=null){var t=[],o=!0,a=!1,_,u;try{for(n=n.call(f);!(o=(_=n.next()).done)&&(t.push(_.value),!(r&&t.length===r));o=!0);}catch(i){a=!0,u=i}finally{try{!o&&n.return!=null&&n.return()}finally{if(a)throw u}}return t}}function k(f){if(Array.isArray(f))return f}function j(f){var r=f.replace("#","");return typeof r=="string"&&r.length===6&&!Number.isNaN(Number("0x"+r))}function y(f){var r=f.replace("#",""),n=parseInt(r,16),t=n>>16&255,o=n>>8&255,a=n&255;return{r:t,g:o,b:a,a:1}}function l(f){var r=f.replace(/[^0-9,.]/g,"").split(",").map(Number),n=T(r,4),t=n[0],o=n[1],a=n[2],_=n[3];return{r:t,g:o,b:a,a:_||1}}function d(f){return j(f)?y(f):f.startsWith("rgb")?l(f):{r:0,g:0,b:0,a:1}}var g=function(r,n){var t=d(r),o=t.r,a=t.g,_=t.b;return"rgba("+o+", "+a+", "+_+", "+n+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Y});var z=e("./node_modules/core-js/modules/es.array.concat.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=function(U){var q=Object(W.useRef)(U);return Object(W.useEffect)(function(){q.current=U},[U]),Object(W.useMemo)(function(){return function(){for(var w,K=arguments.length,F=new Array(K),J=0;J<K;J++)F[J]=arguments[J];return(w=q.current)===null||w===void 0?void 0:w.call.apply(w,[q].concat(F))}},[])}},"./packages/travelmakers-design-hooks/src/useClickAway/stories/useClickAway.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),Z=e("./node_modules/react/jsx-runtime.js"),U=e.n(Z),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const ref = useClickAway<HTMLDivElement>(() => {\\n    alert(\`Click away from red box!\`);\\n  });\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useClickAway"};var K=function(){var J=Object(Y.a)(function(){alert("Click away from red box!")});return Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{ref:J,style:{width:100,height:100,backgroundColor:"red"}})})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
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
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return g});var z=e("./node_modules/core-js/modules/es.array.slice.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.object.to-string.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.function.name.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.array.from.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.symbol.description.js"),$=e.n(L),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.is-array.js"),x=e.n(D),S=e("./node_modules/react/index.js"),I=e.n(S),k=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function j(f,r){var n=typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(!n){if(Array.isArray(f)||(n=y(f))||r&&f&&typeof f.length=="number"){n&&(f=n);var t=0,o=function(){};return{s:o,n:function(){return t>=f.length?{done:!0}:{done:!1,value:f[t++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,_=!1,u;return{s:function(){n=n.call(f)},n:function(){var c=n.next();return a=c.done,c},e:function(c){_=!0,u=c},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(_)throw u}}}}function y(f,r){if(!!f){if(typeof f=="string")return l(f,r);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(f,r)}}function l(f,r){(r==null||r>f.length)&&(r=f.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=f[n];return t}var d=["mousedown","touchstart"],g=function(r){var n=Object(S.useRef)(),t=Object(k.a)(r);return Object(S.useEffect)(function(){var o=function(c){var m=n.current;m&&!m.contains(c.target)&&t(c)},a=j(d),_;try{for(a.s();!(_=a.n()).done;){var u=_.value;document.addEventListener(u,o)}}catch(i){a.e(i)}finally{a.f()}return function(){var i=j(d),c;try{for(i.s();!(c=i.n()).done;){var m=c.value;document.removeEventListener(m,o)}}catch(s){i.e(s)}finally{i.f()}}},[n.current]),n}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/web.timers.js");function R(n,t){return T(n)||A(n,t)||G(n,t)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(n,t){if(!!n){if(typeof n=="string")return B(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return B(n,t)}}function B(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function A(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],_=!0,u=!1,i,c;try{for(o=o.call(n);!(_=(i=o.next()).done)&&(a.push(i.value),!(t&&a.length===t));_=!0);}catch(m){u=!0,c=m}finally{try{!_&&o.return!=null&&o.return()}finally{if(u)throw c}}return a}}function T(n){if(Array.isArray(n))return n}var D=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=t.timeout,a=o===void 0?2e3:o,_=Object(L.useState)(null),u=R(_,2),i=u[0],c=u[1],m=Object(L.useState)(!1),s=R(m,2),p=s[0],O=s[1],h=Object(L.useState)(null),E=R(h,2),v=E[0],P=E[1],M=function(te){clearTimeout(v),P(setTimeout(function(){return O(!1)},a)),O(te)},C=function(te){"clipboard"in navigator?navigator.clipboard.writeText(te).then(function(){return M(!0)}).catch(function(se){return c(se)}):c(new Error("useClipboard: navigator.clipboard is not supported"))},H=function(){O(!1),c(null),clearTimeout(v)};return{copy:C,reset:H,error:i,copied:p}},x=e("./node_modules/react/jsx-runtime.js");function S(n,t){return l(n)||y(n,t)||k(n,t)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(n,t){if(!!n){if(typeof n=="string")return j(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(n,t)}}function j(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function y(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],_=!0,u=!1,i,c;try{for(o=o.call(n);!(_=(i=o.next()).done)&&(a.push(i.value),!(t&&a.length===t));_=!0);}catch(m){u=!0,c=m}finally{try{!_&&o.return!=null&&o.return()}finally{if(u)throw c}}return a}}function l(n){if(Array.isArray(n))return n}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},r=function(){var t=Object(L.useState)(""),o=S(t,2),a=o[0],_=o[1],u=D({timeout:3e3}),i=u.copy,c=u.copied;return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"text",onChange:function(s){return _(s.target.value)}}),Object(x.jsx)("button",{onClick:function(){return i(a)},children:"copy"}),Object(x.jsx)("span",{children:c&&"Copied!!"})]})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useColorScheme/stories/useColorScheme.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return w});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),X=function(){return Object(W.a)("(prefers-color-scheme: dark)")?"dark":"light"},Y=e("./node_modules/react/jsx-runtime.js"),Z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,U={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},Z=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const scheme = useColorScheme();\\n\\n  return (\\n    <div>\\n      <div>{scheme}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useColorScheme"},w=function(){var F=X();return Object(Y.jsx)("div",{children:Object(Y.jsx)("div",{children:F})})};w.displayName="Default",w.parameters=Object.assign({storySource:{source:`() => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
}`}},w.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return n});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),R=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function ee(t,o){return D(t)||T(t,o)||B(t,o)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(t,o){if(!!t){if(typeof t=="string")return A(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(t,o)}}function A(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,_=new Array(o);a<o;a++)_[a]=t[a];return _}function T(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var _=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(_.push(c.value),!(o&&_.length===o));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return _}}function D(t){if(Array.isArray(t))return t}var x=function(o,a,_){var u=Object(R.a)(o,a),i=ee(u,2),c=i[0],m=i[1];return Object($.a)(c,_),m},S=e("./node_modules/react/jsx-runtime.js");function I(t,o){return d(t)||l(t,o)||j(t,o)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(t,o){if(!!t){if(typeof t=="string")return y(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(t,o)}}function y(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,_=new Array(o);a<o;a++)_[a]=t[a];return _}function l(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var _=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(_.push(c.value),!(o&&_.length===o));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return _}}function d(t){if(Array.isArray(t))return t}var g=`
    
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
`,f={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},r=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},n=function(){var o=Object(L.useState)(""),a=I(o,2),_=a[0],u=a[1],i=x(function(){alert("Updated!")},1e3,[_]);return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"text",onChange:function(m){return u(m.target.value)}}),Object(S.jsx)("button",{onClick:i,children:"Cancel"})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),Z=e("./node_modules/react/jsx-runtime.js"),U=e.n(Z),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var K=function(){var J=Object(Y.a)();return Object(Z.jsxs)("div",{children:[Math.random(),Object(Z.jsx)("button",{onClick:J,children:"Update"})]})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return r});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(D),S=e("./node_modules/react/index.js"),I=e.n(S);function k(n,t){return g(n)||d(n,t)||y(n,t)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,t){if(!!n){if(typeof n=="string")return l(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(n,t)}}function l(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function d(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],_=!0,u=!1,i,c;try{for(o=o.call(n);!(_=(i=o.next()).done)&&(a.push(i.value),!(t&&a.length===t));_=!0);}catch(m){u=!0,c=m}finally{try{!_&&o.return!=null&&o.return()}finally{if(u)throw c}}return a}}function g(n){if(Array.isArray(n))return n}var f=function(t){return(t+1)%1e6},r=function(){var t=Object(S.useReducer)(f,0),o=k(t,2),a=o[1];return a}},"./packages/travelmakers-design-hooks/src/useHotKey/stories/useHotKey.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return c});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/es.string.split.js"),R=e("./node_modules/core-js/modules/es.regexp.exec.js"),ee=e("./node_modules/core-js/modules/es.string.replace.js"),G=e("./node_modules/core-js/modules/es.array.filter.js"),B=e("./node_modules/core-js/modules/es.regexp.to-string.js"),A=e("./node_modules/core-js/modules/es.date.to-string.js");function T(m,s){var p=typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(!p){if(Array.isArray(m)||(p=D(m))||s&&m&&typeof m.length=="number"){p&&(m=p);var O=0,h=function(){};return{s:h,n:function(){return O>=m.length?{done:!0}:{done:!1,value:m[O++]}},e:function(M){function C(H){return M.apply(this,arguments)}return C.toString=function(){return M.toString()},C}(function(M){throw M}),f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E=!0,v=!1,P;return{s:function(){p=p.call(m)},n:function(){var C=p.next();return E=C.done,C},e:function(M){function C(H){return M.apply(this,arguments)}return C.toString=function(){return M.toString()},C}(function(M){v=!0,P=M}),f:function(){try{!E&&p.return!=null&&p.return()}finally{if(v)throw P}}}}function D(m,s){if(!!m){if(typeof m=="string")return x(m,s);var p=Object.prototype.toString.call(m).slice(8,-1);if(p==="Object"&&m.constructor&&(p=m.constructor.name),p==="Map"||p==="Set")return Array.from(m);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return x(m,s)}}function x(m,s){(s==null||s>m.length)&&(s=m.length);for(var p=0,O=new Array(s);p<s;p++)O[p]=m[p];return O}var S={alt:1,ctrl:2,meta:4,shift:8},I={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=","{":"[","}":"]","|":"\\",":":";",'"':"'","<":",",">":".","?":"/"},k={win:"meta",window:"meta",cmd:"meta",command:"meta",esc:"escape",opt:"alt",option:"alt",left:"arrowleft",right:"arrowright",up:"arrowup",down:"arrowdown"},j=function(s){var p=s.key!==" "?s.key.toLowerCase():"space",O=0;return s.altKey&&(O+=S.alt),s.ctrlKey&&(O+=S.ctrl),s.metaKey&&(O+=S.meta),s.shiftKey&&(O+=S.shift),{modifiers:O,key:p}},y=function(s){var p=s.replace(/\s/g,"").toLowerCase().split("+"),O=0,h,E=T(p),v;try{for(E.s();!(v=E.n()).done;){var P=v.value;S[P]?O+=S[P]:S[k[P]]?O+=S[k[P]]:I[P]?(O+=S.shift,h=I[P]):k[P]?h=k[P]:h=P}}catch(M){E.e(M)}finally{E.f()}return{modifiers:O,key:h}},l=function(s,p){return s.modifiers===p.modifiers&&s.key===p.key},d=function(s){var p=Object(L.useMemo)(function(){return s.filter(function(C){return!C.global})},[s]),O=Object(L.useMemo)(function(){return s.filter(function(C){return C.global})},[s]),h=Object(L.useCallback)(function(C,H,N,te){var se=T(C?O:p),ye;try{for(se.s();!(ye=se.n()).done;){var ue=ye.value;if(l(y(ue.combo),H)){var ae;(ae=ue[N])===null||ae===void 0||ae.call(ue,te)}}}catch(pe){se.e(pe)}finally{se.f()}},[p,O]),E=Object(L.useCallback)(function(C){h(!0,j(C),"onKeyDown",C)},[h]),v=Object(L.useCallback)(function(C){h(!0,j(C),"onKeyUp",C)},[h]),P=Object(L.useCallback)(function(C){h(!1,j(C.nativeEvent),"onKeyDown",C.nativeEvent)},[h]),M=Object(L.useCallback)(function(C){h(!1,j(C.nativeEvent),"onKeyUp",C.nativeEvent)},[h]);return Object(L.useEffect)(function(){return document.addEventListener("keydown",E),document.addEventListener("keyup",v),function(){document.removeEventListener("keydown",E),document.removeEventListener("keyup",v)}},[E,v]),{handleKeyDown:P,handleKeyUp:M}},g=e("./node_modules/react/jsx-runtime.js");function f(m,s){return a(m)||o(m,s)||n(m,s)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(m,s){if(!!m){if(typeof m=="string")return t(m,s);var p=Object.prototype.toString.call(m).slice(8,-1);if(p==="Object"&&m.constructor&&(p=m.constructor.name),p==="Map"||p==="Set")return Array.from(m);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return t(m,s)}}function t(m,s){(s==null||s>m.length)&&(s=m.length);for(var p=0,O=new Array(s);p<s;p++)O[p]=m[p];return O}function o(m,s){var p=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(p!=null){var O=[],h=!0,E=!1,v,P;try{for(p=p.call(m);!(h=(v=p.next()).done)&&(O.push(v.value),!(s&&O.length===s));h=!0);}catch(M){E=!0,P=M}finally{try{!h&&p.return!=null&&p.return()}finally{if(E)throw P}}return O}}function a(m){if(Array.isArray(m))return m}var _=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}},_=`import React, { useRef, useState } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const inputRef = useRef<HTMLInputElement>(null);\\n  const [value, setValue] = useState(\\"\\");\\n  const { handleKeyDown, handleKeyUp } = useHotKey([\\n    {\\n      global: true,\\n      combo: \\"ctrl+f\\",\\n      onKeyDown() {\\n        alert(\\"Blocking find\\");\\n      },\\n    },\\n    {\\n      combo: \\"ctrl+l\\",\\n      onKeyDown() {\\n        inputRef.current.select();\\n      },\\n    },\\n    {\\n      combo: \\"shift+r\\",\\n      onKeyUp() {\\n        setValue(\\"\\");\\n      },\\n    },\\n  ]);\\n\\n  return (\\n    <div>\\n      <input\\n        ref={inputRef}\\n        type=\\"text\\"\\n        value={value}\\n        onChange={(e) => setValue(e.target.value)}\\n        onKeyDown={handleKeyDown}\\n        onKeyUp={handleKeyUp}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:54},startBody:{col:23,line:17},endBody:{col:1,line:54}}}}},title:"@travelmakers-design/hooks/useHotKey"},c=function(){var s=Object(L.useRef)(null),p=Object(L.useState)(""),O=f(p,2),h=O[0],E=O[1],v=d([{global:!0,combo:"ctrl+f",onKeyDown:function(){alert("Blocking find")}},{combo:"ctrl+l",onKeyDown:function(){s.current.select()}},{combo:"shift+r",onKeyUp:function(){E("")}}]),P=v.handleKeyDown,M=v.handleKeyUp;return Object(g.jsx)("div",{children:Object(g.jsx)("input",{ref:s,type:"text",value:h,onChange:function(H){return E(H.target.value)},onKeyDown:P,onKeyUp:M})})};c.displayName="Default",c.parameters=Object.assign({storySource:{source:`() => {
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
}`}},c.parameters)},"./packages/travelmakers-design-hooks/src/useHover/stories/useHover.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return i});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),I=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),y=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),l=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),d=e("./node_modules/react/jsx-runtime.js"),g=e.n(d);function f(c,m){return a(c)||o(c,m)||n(c,m)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(c,m){if(!!c){if(typeof c=="string")return t(c,m);var s=Object.prototype.toString.call(c).slice(8,-1);if(s==="Object"&&c.constructor&&(s=c.constructor.name),s==="Map"||s==="Set")return Array.from(c);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(c,m)}}function t(c,m){(m==null||m>c.length)&&(m=c.length);for(var s=0,p=new Array(m);s<m;s++)p[s]=c[s];return p}function o(c,m){var s=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(s!=null){var p=[],O=!0,h=!1,E,v;try{for(s=s.call(c);!(O=(E=s.next()).done)&&(p.push(E.value),!(m&&p.length===m));O=!0);}catch(P){h=!0,v=P}finally{try{!O&&s.return!=null&&s.return()}finally{if(h)throw v}}return p}}function a(c){if(Array.isArray(c))return c}var _=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}},_=`import React, { useEffect } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [state, ref] = useHover<HTMLDivElement>();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{\\n          display: \\"inline-block\\",\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n        }}\\n      >\\n        Hover: {\`\${state}\`}\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:42},startBody:{col:23,line:18},endBody:{col:1,line:42}}}}},title:"@travelmakers-design/hooks/useHover"};var i=function(){var m=Object(l.a)(),s=f(m,2),p=s[0],O=s[1],h=Object(y.a)();return Object(k.useEffect)(function(){h()},[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{ref:O,style:{display:"inline-block",width:100,height:100,backgroundColor:"red"},children:["Hover: ",""+p]})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`() => {
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
}`}},i.parameters)},"./packages/travelmakers-design-hooks/src/useHover/useHover.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return f});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(D),S=e("./node_modules/react/index.js"),I=e.n(S);function k(r,n){return g(r)||d(r,n)||y(r,n)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(r,n){if(!!r){if(typeof r=="string")return l(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(r,n)}}function l(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function d(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,_=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(o.push(u.value),!(n&&o.length===n));a=!0);}catch(c){_=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(_)throw i}}return o}}function g(r){if(Array.isArray(r))return r}var f=function(){var n=Object(S.useRef)(null),t=Object(S.useState)(!1),o=k(t,2),a=o[0],_=o[1],u=Object(S.useCallback)(function(){return _(!0)},[]),i=Object(S.useCallback)(function(){return _(!1)},[]);return Object(S.useEffect)(function(){var c=n.current;if(!!c)return c.addEventListener("mouseenter",u),c.addEventListener("mouseleave",i),function(){c.removeEventListener("mouseenter",u),c.removeEventListener("mouseleave",i)}},[n.current]),[a,n]}},"./packages/travelmakers-design-hooks/src/useId/stories/useId.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useId/useId.ts"),Z=e("./node_modules/react/jsx-runtime.js"),U=e.n(Z),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const id = useId();\\n\\n  return (\\n    <div>\\n      <div>{id}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useId"};var K=function(){var J=Object(Y.a)();return Object(Z.jsx)("div",{children:Object(Z.jsx)("div",{children:J})})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useId/useId.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return r});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(D),S=e("./node_modules/react/index.js"),I=e.n(S);function k(n,t){return g(n)||d(n,t)||y(n,t)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,t){if(!!n){if(typeof n=="string")return l(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(n,t)}}function l(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function d(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],_=!0,u=!1,i,c;try{for(o=o.call(n);!(_=(i=o.next()).done)&&(a.push(i.value),!(t&&a.length===t));_=!0);}catch(m){u=!0,c=m}finally{try{!_&&o.return!=null&&o.return()}finally{if(u)throw c}}return a}}function g(n){if(Array.isArray(n))return n}var f=0,r=function(t){var o=Object(S.useState)(t),a=k(o,2),_=a[0],u=a[1],i=t||_;return Object(S.useEffect)(function(){_==null&&(f+=1,u("tm-"+f))},[_]),i}},"./packages/travelmakers-design-hooks/src/useIdle/stories/useIdle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return g});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/web.timers.js"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),Y=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/core-js/modules/es.array.is-array.js"),U=e("./node_modules/core-js/modules/es.symbol.js"),q=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),$=e("./node_modules/core-js/modules/es.array.slice.js"),R=e("./node_modules/core-js/modules/es.function.name.js"),ee=e("./node_modules/core-js/modules/es.array.from.js");function G(f,r){return x(f)||D(f,r)||A(f,r)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(f,r){if(!!f){if(typeof f=="string")return T(f,r);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(f,r)}}function T(f,r){(r==null||r>f.length)&&(r=f.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=f[n];return t}function D(f,r){var n=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(n!=null){var t=[],o=!0,a=!1,_,u;try{for(n=n.call(f);!(o=(_=n.next()).done)&&(t.push(_.value),!(r&&t.length===r));o=!0);}catch(i){a=!0,u=i}finally{try{!o&&n.return!=null&&n.return()}finally{if(a)throw u}}return t}}function x(f){if(Array.isArray(f))return f}var S=["keypress","mousemove","touchmove","click","scroll"],I={events:S,initialState:!0},k=function(r,n){var t=Object.assign({},I,n),o=t.events,a=t.initialState,_=Object(V.useState)(a),u=G(_,2),i=u[0],c=u[1],m=Object(V.useRef)();return Object(V.useEffect)(function(){var s=function(){c(!1),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(function(){c(!0)},r)};return o.forEach(function(p){return document.addEventListener(p,s)}),function(){o.forEach(function(p){return document.removeEventListener(p,s)})}},[r]),i},j=e("./node_modules/react/jsx-runtime.js"),y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}},y=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const idle = useIdle(3000);\\n\\n  return (\\n    <div>\\n      <div>Idle: {\`\${idle}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIdle"},g=function(){var r=k(3e3);return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:["Idle: ",""+r]})})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {\`\${idle}\`}</div>
    </div>
  );
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useIntersection/stories/useIntersection.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return f});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function $(r,n){return A(r)||B(r,n)||ee(r,n)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(r,n){if(!!r){if(typeof r=="string")return G(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(r,n)}}function G(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function B(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,_=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(o.push(u.value),!(n&&o.length===n));a=!0);}catch(c){_=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(_)throw i}}return o}}function A(r){if(Array.isArray(r))return r}var T=function(n){var t=Object(L.useState)(null),o=$(t,2),a=o[0],_=o[1],u=Object(L.useRef)(),i=Object(L.useCallback)(function(c){if(u.current&&(u.current.disconnect(),u.current=null),c===null){_(null);return}u.current=new IntersectionObserver(function(m){var s=$(m,1),p=s[0];_(p)},n),u.current.observe(c)},[n==null?void 0:n.rootMargin,n==null?void 0:n.root,n==null?void 0:n.threshold]);return[i,a]},D=e("./node_modules/react/jsx-runtime.js");function x(r,n){return y(r)||j(r,n)||I(r,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(r,n){if(!!r){if(typeof r=="string")return k(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(r,n)}}function k(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function j(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,_=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(o.push(u.value),!(n&&o.length===n));a=!0);}catch(c){_=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(_)throw i}}return o}}function y(r){if(Array.isArray(r))return r}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const rootRef = useRef<HTMLDivElement>(null);\\n  const [ref, observer] = useIntersection({\\n    root: rootRef.current,\\n    threshold: 0.5,\\n  });\\n\\n  return (\\n    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: \\"scroll\\" }}>\\n      <div style={{ height: 500 }}>\\n        <div\\n          ref={ref}\\n          style={{\\n            marginTop: 290,\\n            height: 50,\\n            backgroundColor: observer?.isIntersecting ? \\"green\\" : \\"red\\",\\n          }}\\n        >\\n          {observer?.isIntersecting ? \\"Half visible\\" : \\"Obscured\\"}\\n        </div>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:40},startBody:{col:23,line:17},endBody:{col:1,line:40}}}}},title:"@travelmakers-design/hooks/useIntersection"},f=function(){var n=Object(L.useRef)(null),t=T({root:n.current,threshold:.5}),o=x(t,2),a=o[0],_=o[1];return Object(D.jsx)("div",{ref:n,style:{width:300,height:300,overflowY:"scroll"},children:Object(D.jsx)("div",{style:{height:500},children:Object(D.jsx)("div",{ref:a,style:{marginTop:290,height:50,backgroundColor:_!=null&&_.isIntersecting?"green":"red"},children:_!=null&&_.isIntersecting?"Half visible":"Obscured"})})})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
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
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useInterval/stories/useInterval.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),$=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts");function R(y,l){return T(y)||A(y,l)||G(y,l)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(y,l){if(!!y){if(typeof y=="string")return B(y,l);var d=Object.prototype.toString.call(y).slice(8,-1);if(d==="Object"&&y.constructor&&(d=y.constructor.name),d==="Map"||d==="Set")return Array.from(y);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return B(y,l)}}function B(y,l){(l==null||l>y.length)&&(l=y.length);for(var d=0,g=new Array(l);d<l;d++)g[d]=y[d];return g}function A(y,l){var d=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(d!=null){var g=[],f=!0,r=!1,n,t;try{for(d=d.call(y);!(f=(n=d.next()).done)&&(g.push(n.value),!(l&&g.length===l));f=!0);}catch(o){r=!0,t=o}finally{try{!f&&d.return!=null&&d.return()}finally{if(r)throw t}}return g}}function T(y){if(Array.isArray(y))return y}var D=function(l,d){var g=Object($.a)(l,d),f=R(g,2),r=f[0],n=f[1];return Object(V.useEffect)(function(){return r(),n},[r,n]),n},x=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,I={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},k=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useInterval(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useInterval"},j=function(){var l=D(function(){alert("fire")},3e3);return Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:l,children:"clear"})})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const clear = useInterval(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/stories/useIntervalFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),I=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),y=e("./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return o(i)||t(i,c)||r(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],p=!0,O=!1,h,E;try{for(m=m.call(i);!(p=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));p=!0);}catch(v){O=!0,E=v}finally{try{!p&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function o(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},a=`import React from "react";
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
`,_={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useIntervalFn(() => {\\n    alert(\\"fire\\");\\n  }, 3000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>run</button>\\n      <button onClick={clear}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useIntervalFn"};var u=function(){var c=Object(y.a)(function(){alert("fire")},3e3),m=g(c,2),s=m[0],p=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:s,children:"run"}),Object(l.jsx)("button",{onClick:p,children:"clear"})]})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useIntervalFn(() => {
    alert("fire");
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useIntervalFn/useIntervalFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Z});var z=e("./node_modules/core-js/modules/web.timers.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Z=function(q,w){var K=Object(W.useRef)(),F=Object(Y.a)(q),J=Object(W.useCallback)(function(){K.current&&clearInterval(K.current),K.current=setInterval(function(){F()},w)},[w]),L=Object(W.useCallback)(function(){K.current&&clearInterval(K.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[J,L]}},"./packages/travelmakers-design-hooks/src/useIsomorphicEffect/stories/useIsomorphicEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return k});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=typeof document!="undefined"?L.useLayoutEffect:L.useEffect,R=e("./node_modules/react/jsx-runtime.js");function ee(j,y){return D(j)||T(j,y)||B(j,y)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(j,y){if(!!j){if(typeof j=="string")return A(j,y);var l=Object.prototype.toString.call(j).slice(8,-1);if(l==="Object"&&j.constructor&&(l=j.constructor.name),l==="Map"||l==="Set")return Array.from(j);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return A(j,y)}}function A(j,y){(y==null||y>j.length)&&(y=j.length);for(var l=0,d=new Array(y);l<y;l++)d[l]=j[l];return d}function T(j,y){var l=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(l!=null){var d=[],g=!0,f=!1,r,n;try{for(l=l.call(j);!(g=(r=l.next()).done)&&(d.push(r.value),!(y&&d.length===y));g=!0);}catch(t){f=!0,n=t}finally{try{!g&&l.return!=null&&l.return()}finally{if(f)throw n}}return d}}function D(j){if(Array.isArray(j))return j}var x=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}},x=`import React, { useState } from "react";

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
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:16},startBody:{col:23,line:9},endBody:{col:1,line:16}}},I=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useState(false);\\n  useIsomorphicEffect(() => {\\n    setState(true);\\n  }, []);\\n\\n  return <div>{state && \\"mounted\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:24},startBody:{col:23,line:17},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useIsomorphicEffect"},k=function(){var y=Object(L.useState)(!1),l=ee(y,2),d=l[0],g=l[1];return $(function(){g(!0)},[]),Object(R.jsx)("div",{children:d&&"mounted"})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && "mounted"}</div>;
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useKeyPress/stories/useKeyPress.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return k});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function $(j,y){return A(j)||B(j,y)||ee(j,y)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(j,y){if(!!j){if(typeof j=="string")return G(j,y);var l=Object.prototype.toString.call(j).slice(8,-1);if(l==="Object"&&j.constructor&&(l=j.constructor.name),l==="Map"||l==="Set")return Array.from(j);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return G(j,y)}}function G(j,y){(y==null||y>j.length)&&(y=j.length);for(var l=0,d=new Array(y);l<y;l++)d[l]=j[l];return d}function B(j,y){var l=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(l!=null){var d=[],g=!0,f=!1,r,n;try{for(l=l.call(j);!(g=(r=l.next()).done)&&(d.push(r.value),!(y&&d.length===y));g=!0);}catch(t){f=!0,n=t}finally{try{!g&&l.return!=null&&l.return()}finally{if(f)throw n}}return d}}function A(j){if(Array.isArray(j))return j}var T=function(y){var l=Object(V.useState)(!1),d=$(l,2),g=d[0],f=d[1],r=Object(V.useCallback)(function(t){var o=t.key;o===y&&f(!0)},[y]),n=Object(V.useCallback)(function(t){var o=t.key;o===y&&f(!1)},[y]);return Object(V.useEffect)(function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",n)}},[r,n]),g},D=e("./node_modules/react/jsx-runtime.js"),x=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},x=`import React from "react";
import { useKeyPress } from "../useKeyPress";

export default {
  title: "@travelmakers-design/hooks/useKeyPress",
};

export const Default = () => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
};
`,S={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},I=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const keyPressed = useKeyPress(\\"r\\");\\n\\n  return <div>{keyPressed && \\"r key pressed\\"}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useKeyPress"},k=function(){var y=T("r");return Object(D.jsx)("div",{children:y&&"r key pressed"})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const keyPressed = useKeyPress("r");

  return <div>{keyPressed && "r key pressed"}</div>;
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useList/stories/useList.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var z=e("./node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),$=e("./node_modules/react/index.js"),R=e("./node_modules/core-js/modules/es.array.concat.js"),ee=e("./node_modules/core-js/modules/es.array.filter.js"),G=e("./node_modules/core-js/modules/es.array.includes.js"),B=e("./node_modules/core-js/modules/es.string.includes.js");function A(s){return x(s)||D(s)||k(s)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function x(s){if(Array.isArray(s))return j(s)}function S(s,p){return l(s)||y(s,p)||k(s,p)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(s,p){if(!!s){if(typeof s=="string")return j(s,p);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return j(s,p)}}function j(s,p){(p==null||p>s.length)&&(p=s.length);for(var O=0,h=new Array(p);O<p;O++)h[O]=s[O];return h}function y(s,p){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(p&&h.length===p));E=!0);}catch(C){v=!0,M=C}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function l(s){if(Array.isArray(s))return s}var d=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],O=Object($.useState)(p),h=S(O,2),E=h[0],v=h[1],P=Object($.useCallback)(function(){for(var ue=arguments.length,ae=new Array(ue),pe=0;pe<ue;pe++)ae[pe]=arguments[pe];return v(function(ve){return[].concat(A(ve),ae)})},[]),M=Object($.useCallback)(function(){for(var ue=arguments.length,ae=new Array(ue),pe=0;pe<ue;pe++)ae[pe]=arguments[pe];return v(function(ve){return[].concat(ae,A(ve))})},[]),C=Object($.useCallback)(function(ue){for(var ae=arguments.length,pe=new Array(ae>1?ae-1:0),ve=1;ve<ae;ve++)pe[ve-1]=arguments[ve];return v(function(Oe){return[].concat(A(Oe.slice(0,ue)),pe,A(Oe.slice(ue)))})},[]),H=Object($.useCallback)(function(){for(var ue=arguments.length,ae=new Array(ue),pe=0;pe<ue;pe++)ae[pe]=arguments[pe];return v(function(ve){return ve.filter(function(Oe,xe){return!ae.includes(xe)})})},[]),N=Object($.useCallback)(function(){var ue=A(E),ae=ue.pop();return v(ue),ae},[E]),te=Object($.useCallback)(function(){var ue=A(E),ae=ue.shift();return v(ue),ae},[E]),se=Object($.useCallback)(function(ue,ae){v(function(pe){var ve=A(pe);return ve[ue]=ae,ve})},[]),ye={setState:v,append:P,prepend:M,insert:C,remove:H,pop:N,shift:te,setItem:se};return[E,ye]},g=e("./node_modules/react/jsx-runtime.js");function f(s,p){return a(s)||o(s,p)||n(s,p)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(s,p){if(!!s){if(typeof s=="string")return t(s,p);var O=Object.prototype.toString.call(s).slice(8,-1);if(O==="Object"&&s.constructor&&(O=s.constructor.name),O==="Map"||O==="Set")return Array.from(s);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return t(s,p)}}function t(s,p){(p==null||p>s.length)&&(p=s.length);for(var O=0,h=new Array(p);O<p;O++)h[O]=s[O];return h}function o(s,p){var O=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(O!=null){var h=[],E=!0,v=!1,P,M;try{for(O=O.call(s);!(E=(P=O.next()).done)&&(h.push(P.value),!(p&&h.length===p));E=!0);}catch(C){v=!0,M=C}finally{try{!E&&O.return!=null&&O.return()}finally{if(v)throw M}}return h}}function a(s){if(Array.isArray(s))return s}var _=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}},_=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, handlers] = useList([\\n    \\"Item 1\\",\\n    \\"Item 2\\",\\n    \\"Item 3\\",\\n    \\"Item 4\\",\\n    \\"Item 5\\",\\n  ]);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handlers.append(\`Item \${++count}\`)}>\\n          append\\n        </button>\\n        <button onClick={() => handlers.pop()}>pop</button>\\n        <button onClick={() => handlers.prepend(\`Item \${++count}\`)}>\\n          prepend\\n        </button>\\n        <button onClick={() => handlers.shift()}>shift</button>\\n        <button onClick={() => handlers.setItem(3, \\"Updated\\")}>\\n          setItem 3 index\\n        </button>\\n        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>\\n        <button onClick={() => handlers.insert(3, \`Item \${++count}\`)}>\\n          insert 3 index\\n        </button>\\n      </div>\\n\\n      <ul>\\n        {state.map((value, index) => (\\n          <li key={index}>{value}</li>\\n        ))}\\n      </ul>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:53},startBody:{col:23,line:17},endBody:{col:1,line:53}}}}},title:"@travelmakers-design/hooks/useList"},c=5,m=function(){var p=d(["Item 1","Item 2","Item 3","Item 4","Item 5"]),O=f(p,2),h=O[0],E=O[1];return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){return E.append("Item "+ ++c)},children:"append"}),Object(g.jsx)("button",{onClick:function(){return E.pop()},children:"pop"}),Object(g.jsx)("button",{onClick:function(){return E.prepend("Item "+ ++c)},children:"prepend"}),Object(g.jsx)("button",{onClick:function(){return E.shift()},children:"shift"}),Object(g.jsx)("button",{onClick:function(){return E.setItem(3,"Updated")},children:"setItem 3 index"}),Object(g.jsx)("button",{onClick:function(){return E.remove(2,3)},children:"remove 2, 3 index"}),Object(g.jsx)("button",{onClick:function(){return E.insert(3,"Item "+ ++c)},children:"insert 3 index"})]}),Object(g.jsx)("ul",{children:h.map(function(v,P){return Object(g.jsx)("li",{children:v},P)})})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return M});var z=e("./node_modules/core-js/modules/es.promise.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),K=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),ee=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),G=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),B=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),A=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),T=e("./node_modules/core-js/modules/es.object.define-property.js"),D=e("./node_modules/core-js/modules/es.object.create.js"),x=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),S=e("./node_modules/core-js/modules/es.array.for-each.js"),I=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),k=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),j=e("./node_modules/core-js/modules/es.array.reverse.js"),y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function l(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return C};var C={},H=Object.prototype,N=H.hasOwnProperty,te=typeof Symbol=="function"?Symbol:{},se=te.iterator||"@@iterator",ye=te.asyncIterator||"@@asyncIterator",ue=te.toStringTag||"@@toStringTag";function ae(oe,Q,ce){return Object.defineProperty(oe,Q,{value:ce,enumerable:!0,configurable:!0,writable:!0}),oe[Q]}try{ae({},"")}catch(oe){ae=function(ce,me,fe){return ce[me]=fe}}function pe(oe,Q,ce,me){var fe=Q&&Q.prototype instanceof xe?Q:xe,_e=Object.create(fe.prototype),Te=new Re(me||[]);return _e._invoke=function(Ae,Me,ge){var je="suspendedStart";return function(Ee,Ke){if(je==="executing")throw new Error("Generator is already running");if(je==="completed"){if(Ee==="throw")throw Ke;return Pe()}for(ge.method=Ee,ge.arg=Ke;;){var We=ge.delegate;if(We){var Ue=ke(We,ge);if(Ue){if(Ue===Oe)continue;return Ue}}if(ge.method==="next")ge.sent=ge._sent=ge.arg;else if(ge.method==="throw"){if(je==="suspendedStart")throw je="completed",ge.arg;ge.dispatchException(ge.arg)}else ge.method==="return"&&ge.abrupt("return",ge.arg);je="executing";var Be=ve(Ae,Me,ge);if(Be.type==="normal"){if(je=ge.done?"completed":"suspendedYield",Be.arg===Oe)continue;return{value:Be.arg,done:ge.done}}Be.type==="throw"&&(je="completed",ge.method="throw",ge.arg=Be.arg)}}}(oe,ce,Te),_e}function ve(oe,Q,ce){try{return{type:"normal",arg:oe.call(Q,ce)}}catch(me){return{type:"throw",arg:me}}}C.wrap=pe;var Oe={};function xe(){}function be(){}function De(){}var le={};ae(le,se,function(){return this});var ne=Object.getPrototypeOf,ie=ne&&ne(ne(Le([])));ie&&ie!==H&&N.call(ie,se)&&(le=ie);var de=De.prototype=xe.prototype=Object.create(le);function he(oe){["next","throw","return"].forEach(function(Q){ae(oe,Q,function(ce){return this._invoke(Q,ce)})})}function Se(oe,Q){function ce(fe,_e,Te,Ae){var Me=ve(oe[fe],oe,_e);if(Me.type!=="throw"){var ge=Me.arg,je=ge.value;return je&&typeof je=="object"&&N.call(je,"__await")?Q.resolve(je.__await).then(function(Ee){ce("next",Ee,Te,Ae)},function(Ee){ce("throw",Ee,Te,Ae)}):Q.resolve(je).then(function(Ee){ge.value=Ee,Te(ge)},function(Ee){return ce("throw",Ee,Te,Ae)})}Ae(Me.arg)}var me;this._invoke=function(fe,_e){function Te(){return new Q(function(Ae,Me){ce(fe,_e,Ae,Me)})}return me=me?me.then(Te,Te):Te()}}function ke(oe,Q){var ce=oe.iterator[Q.method];if(ce===void 0){if(Q.delegate=null,Q.method==="throw"){if(oe.iterator.return&&(Q.method="return",Q.arg=void 0,ke(oe,Q),Q.method==="throw"))return Oe;Q.method="throw",Q.arg=new TypeError("The iterator does not provide a 'throw' method")}return Oe}var me=ve(ce,oe.iterator,Q.arg);if(me.type==="throw")return Q.method="throw",Q.arg=me.arg,Q.delegate=null,Oe;var fe=me.arg;return fe?fe.done?(Q[oe.resultName]=fe.value,Q.next=oe.nextLoc,Q.method!=="return"&&(Q.method="next",Q.arg=void 0),Q.delegate=null,Oe):fe:(Q.method="throw",Q.arg=new TypeError("iterator result is not an object"),Q.delegate=null,Oe)}function Ce(oe){var Q={tryLoc:oe[0]};1 in oe&&(Q.catchLoc=oe[1]),2 in oe&&(Q.finallyLoc=oe[2],Q.afterLoc=oe[3]),this.tryEntries.push(Q)}function Ie(oe){var Q=oe.completion||{};Q.type="normal",delete Q.arg,oe.completion=Q}function Re(oe){this.tryEntries=[{tryLoc:"root"}],oe.forEach(Ce,this),this.reset(!0)}function Le(oe){if(oe){var Q=oe[se];if(Q)return Q.call(oe);if(typeof oe.next=="function")return oe;if(!isNaN(oe.length)){var ce=-1,me=function fe(){for(;++ce<oe.length;)if(N.call(oe,ce))return fe.value=oe[ce],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return me.next=me}}return{next:Pe}}function Pe(){return{value:void 0,done:!0}}return be.prototype=De,ae(de,"constructor",De),ae(De,"constructor",be),be.displayName=ae(De,ue,"GeneratorFunction"),C.isGeneratorFunction=function(oe){var Q=typeof oe=="function"&&oe.constructor;return!!Q&&(Q===be||(Q.displayName||Q.name)==="GeneratorFunction")},C.mark=function(oe){return Object.setPrototypeOf?Object.setPrototypeOf(oe,De):(oe.__proto__=De,ae(oe,ue,"GeneratorFunction")),oe.prototype=Object.create(de),oe},C.awrap=function(oe){return{__await:oe}},he(Se.prototype),ae(Se.prototype,ye,function(){return this}),C.AsyncIterator=Se,C.async=function(oe,Q,ce,me,fe){fe===void 0&&(fe=Promise);var _e=new Se(pe(oe,Q,ce,me),fe);return C.isGeneratorFunction(Q)?_e:_e.next().then(function(Te){return Te.done?Te.value:_e.next()})},he(de),ae(de,ue,"Generator"),ae(de,se,function(){return this}),ae(de,"toString",function(){return"[object Generator]"}),C.keys=function(oe){var Q=[];for(var ce in oe)Q.push(ce);return Q.reverse(),function me(){for(;Q.length;){var fe=Q.pop();if(fe in oe)return me.value=fe,me.done=!1,me}return me.done=!0,me}},C.values=Le,Re.prototype={constructor:Re,reset:function(Q){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ie),!Q)for(var ce in this)ce.charAt(0)==="t"&&N.call(this,ce)&&!isNaN(+ce.slice(1))&&(this[ce]=void 0)},stop:function(){this.done=!0;var Q=this.tryEntries[0].completion;if(Q.type==="throw")throw Q.arg;return this.rval},dispatchException:function(Q){if(this.done)throw Q;var ce=this;function me(ge,je){return Te.type="throw",Te.arg=Q,ce.next=ge,je&&(ce.method="next",ce.arg=void 0),!!je}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var _e=this.tryEntries[fe],Te=_e.completion;if(_e.tryLoc==="root")return me("end");if(_e.tryLoc<=this.prev){var Ae=N.call(_e,"catchLoc"),Me=N.call(_e,"finallyLoc");if(Ae&&Me){if(this.prev<_e.catchLoc)return me(_e.catchLoc,!0);if(this.prev<_e.finallyLoc)return me(_e.finallyLoc)}else if(Ae){if(this.prev<_e.catchLoc)return me(_e.catchLoc,!0)}else{if(!Me)throw new Error("try statement without catch or finally");if(this.prev<_e.finallyLoc)return me(_e.finallyLoc)}}}},abrupt:function(Q,ce){for(var me=this.tryEntries.length-1;me>=0;--me){var fe=this.tryEntries[me];if(fe.tryLoc<=this.prev&&N.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var _e=fe;break}}_e&&(Q==="break"||Q==="continue")&&_e.tryLoc<=ce&&ce<=_e.finallyLoc&&(_e=null);var Te=_e?_e.completion:{};return Te.type=Q,Te.arg=ce,_e?(this.method="next",this.next=_e.finallyLoc,Oe):this.complete(Te)},complete:function(Q,ce){if(Q.type==="throw")throw Q.arg;return Q.type==="break"||Q.type==="continue"?this.next=Q.arg:Q.type==="return"?(this.rval=this.arg=Q.arg,this.method="return",this.next="end"):Q.type==="normal"&&ce&&(this.next=ce),Oe},finish:function(Q){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var me=this.tryEntries[ce];if(me.finallyLoc===Q)return this.complete(me.completion,me.afterLoc),Ie(me),Oe}},catch:function(Q){for(var ce=this.tryEntries.length-1;ce>=0;--ce){var me=this.tryEntries[ce];if(me.tryLoc===Q){var fe=me.completion;if(fe.type==="throw"){var _e=fe.arg;Ie(me)}return _e}}throw new Error("illegal catch attempt")},delegateYield:function(Q,ce,me){return this.delegate={iterator:Le(Q),resultName:ce,nextLoc:me},this.method==="next"&&(this.arg=void 0),Oe}},C}function d(C,H,N,te,se,ye,ue){try{var ae=C[ye](ue),pe=ae.value}catch(ve){N(ve);return}ae.done?H(pe):Promise.resolve(pe).then(te,se)}function g(C){return function(){var H=this,N=arguments;return new Promise(function(te,se){var ye=C.apply(H,N);function ue(pe){d(ye,te,se,ue,ae,"next",pe)}function ae(pe){d(ye,te,se,ue,ae,"throw",pe)}ue(void 0)})}}function f(C,H){return a(C)||o(C,H)||n(C,H)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(C,H){if(!!C){if(typeof C=="string")return t(C,H);var N=Object.prototype.toString.call(C).slice(8,-1);if(N==="Object"&&C.constructor&&(N=C.constructor.name),N==="Map"||N==="Set")return Array.from(C);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return t(C,H)}}function t(C,H){(H==null||H>C.length)&&(H=C.length);for(var N=0,te=new Array(H);N<H;N++)te[N]=C[N];return te}function o(C,H){var N=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(N!=null){var te=[],se=!0,ye=!1,ue,ae;try{for(N=N.call(C);!(se=(ue=N.next()).done)&&(te.push(ue.value),!(H&&te.length===H));se=!0);}catch(pe){ye=!0,ae=pe}finally{try{!se&&N.return!=null&&N.return()}finally{if(ye)throw ae}}return te}}function a(C){if(Array.isArray(C))return C}var _=function(H){var N=Object(R.useState)(!1),te=f(N,2),se=te[0],ye=te[1],ue=Object(y.a)(H),ae=Object(R.useCallback)(g(l().mark(function pe(){var ve,Oe=arguments;return l().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return ye(!0),be.next=3,ue.apply(void 0,Oe);case 3:return ve=be.sent,ye(!1),be.abrupt("return",ve);case 6:case"end":return be.stop()}},pe)})),[H]);return[se,ae]},u=e("./node_modules/react/jsx-runtime.js");function i(C,H){return O(C)||p(C,H)||m(C,H)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(C,H){if(!!C){if(typeof C=="string")return s(C,H);var N=Object.prototype.toString.call(C).slice(8,-1);if(N==="Object"&&C.constructor&&(N=C.constructor.name),N==="Map"||N==="Set")return Array.from(C);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return s(C,H)}}function s(C,H){(H==null||H>C.length)&&(H=C.length);for(var N=0,te=new Array(H);N<H;N++)te[N]=C[N];return te}function p(C,H){var N=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(N!=null){var te=[],se=!0,ye=!1,ue,ae;try{for(N=N.call(C);!(se=(ue=N.next()).done)&&(te.push(ue.value),!(H&&te.length===H));se=!0);}catch(pe){ye=!0,ae=pe}finally{try{!se&&N.return!=null&&N.return()}finally{if(ye)throw ae}}return te}}function O(C){if(Array.isArray(C))return C}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},P=function(H){return new Promise(function(N){return setTimeout(N,H)})},M=function(){var H=_(P),N=i(H,2),te=N[0],se=N[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){return se(2e3)},children:"Start"})}),Object(u.jsxs)("div",{children:["Loading: ",""+te]})]})};M.displayName="Default",M.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},M.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/stories/useMediaQuery.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts"),Z=e("./node_modules/react/jsx-runtime.js"),U=e.n(Z),q=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const matches = useMediaQuery(\\"(min-width: 900px)\\");\\n\\n  return (\\n    <div>\\n      <div>(min-width: 900px) : {matches ? \\"matches\\" : \\"does not match\\"}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:24},startBody:{col:23,line:16},endBody:{col:1,line:24}}}}},title:"@travelmakers-design/hooks/useMediaQuery"};var K=function(){var J=Object(Y.a)("(min-width: 900px)");return Object(Z.jsx)("div",{children:Object(Z.jsxs)("div",{children:["(min-width: 900px) : ",J?"matches":"does not match"]})})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const matches = useMediaQuery("(min-width: 900px)");

  return (
    <div>
      <div>(min-width: 900px) : {matches ? "matches" : "does not match"}</div>
    </div>
  );
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/useMediaQuery/useMediaQuery.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return n});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(D),S=e("./node_modules/react/index.js"),I=e.n(S);function k(t,o){return g(t)||d(t,o)||y(t,o)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(t,o){if(!!t){if(typeof t=="string")return l(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(t,o)}}function l(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,_=new Array(o);a<o;a++)_[a]=t[a];return _}function d(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var _=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(_.push(c.value),!(o&&_.length===o));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return _}}function g(t){if(Array.isArray(t))return t}function f(t,o){try{return t.addEventListener("change",o),function(){return t.removeEventListener("change",o)}}catch(a){return t.addListener(o),function(){return t.removeListener(o)}}}function r(t){return typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(t).matches:!1}var n=function(o){var a=Object(S.useState)(r(o)),_=k(a,2),u=_[0],i=_[1],c=Object(S.useRef)();return Object(S.useEffect)(function(){if("matchMedia"in window)return c.current=window.matchMedia(o),i(c.current.matches),f(c.current,function(m){return i(m.matches)})},[o]),u}},"./packages/travelmakers-design-hooks/src/useMergedRef/stories/useMergedRef.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useClickAway/useClickAway.ts"),R=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),ee=e("./packages/travelmakers-design-hooks/src/useHover/useHover.ts"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=function(t,o){typeof t=="function"?t(o):typeof t=="object"&&t!==null&&"current"in t&&(t.current=o)},T=function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return Object(L.useCallback)(function(_){o.forEach(function(u){return A(u,_)})},o)},D=function(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return function(_){o.forEach(function(u){return A(u,_)})}},x=e("./node_modules/react/jsx-runtime.js");function S(n,t){return l(n)||y(n,t)||k(n,t)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(n,t){if(!!n){if(typeof n=="string")return j(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(n,t)}}function j(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=n[o];return a}function y(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a=[],_=!0,u=!1,i,c;try{for(o=o.call(n);!(_=(i=o.next()).done)&&(a.push(i.value),!(t&&a.length===t));_=!0);}catch(m){u=!0,c=m}finally{try{!_&&o.return!=null&&o.return()}finally{if(u)throw c}}return a}}function l(n){if(Array.isArray(n))return n}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [hovered, hoverRef] = useHover();\\n  const clickAwayRef = useClickAway(() => alert(\\"click away\\"));\\n  const ref = useMergedRef(hoverRef, clickAwayRef);\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <div\\n        ref={ref}\\n        style={{ width: 100, height: 100, backgroundColor: \\"red\\" }}\\n      >{\`\${hovered}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:20},endLoc:{col:1,line:39},startBody:{col:23,line:20},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useMergedRef"},r=function(){var t=Object(ee.a)(),o=S(t,2),a=o[0],_=o[1],u=Object($.a)(function(){return alert("click away")}),i=T(_,u),c=Object(R.a)();return Object(L.useEffect)(function(){c()},[]),Object(x.jsx)("div",{children:Object(x.jsx)("div",{ref:i,style:{width:100,height:100,backgroundColor:"red"},children:""+a})})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`() => {
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
}`}},r.parameters)},"./packages/travelmakers-design-hooks/src/useOrientation/stories/useOrientation.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js");function $(y,l){return A(y)||B(y,l)||ee(y,l)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(y,l){if(!!y){if(typeof y=="string")return G(y,l);var d=Object.prototype.toString.call(y).slice(8,-1);if(d==="Object"&&y.constructor&&(d=y.constructor.name),d==="Map"||d==="Set")return Array.from(y);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return G(y,l)}}function G(y,l){(l==null||l>y.length)&&(l=y.length);for(var d=0,g=new Array(l);d<l;d++)g[d]=y[d];return g}function B(y,l){var d=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(d!=null){var g=[],f=!0,r=!1,n,t;try{for(d=d.call(y);!(f=(n=d.next()).done)&&(g.push(n.value),!(l&&g.length===l));f=!0);}catch(o){r=!0,t=o}finally{try{!f&&d.return!=null&&d.return()}finally{if(r)throw t}}return g}}function A(y){if(Array.isArray(y))return y}var T={angle:0,type:"landscape-primary"},D=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T,d=Object(V.useState)(l),g=$(d,2),f=g[0],r=g[1];return Object(V.useEffect)(function(){var n=window.screen,t=!0,o=function(){if(t){var _=n,u=_.orientation;if(u){var i=u.angle,c=u.type;r({angle:i,type:c})}else window.orientation!==void 0?r({angle:typeof window.orientation=="number"?window.orientation:0,type:""}):r(l)}};return window.addEventListener("orientationchange",o),o(),function(){t=!1,window.addEventListener("orientationchange",o)}},[]),f},x=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}},S=`import React from "react";
import { useOrientation } from "../useOrientation";

export default {
  title: "@travelmakers-design/hooks/useOrientation",
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
`,I={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:12},startBody:{col:23,line:8},endBody:{col:1,line:12}}},k=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const state = useOrientation();\\n\\n  return <div>{JSON.stringify(state)}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOrientation"},j=function(){var l=D();return Object(x.jsx)("div",{children:JSON.stringify(l)})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useOs/stories/useOs.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return K});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),X=function(){var J=window.navigator,L=J.userAgent,$=J.platform,R=["Macintosh","MacIntel","MacPPC","Mac68K"],ee=["Win32","Win64","Windows","WinCE"],G=["iPhone","iPad","iPod"],B="unknown";return R.indexOf($)!==-1?B="macos":G.indexOf($)!==-1?B="ios":ee.indexOf($)!==-1?B="windows":/Android/.test(L)?B="android":!B&&/Linux/.test($)&&(B="linux"),B},Y=function(){return typeof window!="undefined"?X():"unknown"},Z=e("./node_modules/react/jsx-runtime.js"),U=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const os = useOs();\\n\\n  return <div>{os}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:20},startBody:{col:23,line:16},endBody:{col:1,line:20}}}}},title:"@travelmakers-design/hooks/useOs"},K=function(){var J=Y();return Object(Z.jsx)("div",{children:J})};K.displayName="Default",K.parameters=Object.assign({storySource:{source:`() => {
  const os = useOs();

  return <div>{os}</div>;
}`}},K.parameters)},"./packages/travelmakers-design-hooks/src/usePageLeave/stories/usePageLeave.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return k});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=function(y){Object(L.useEffect)(function(){if(!!y){var l=function(g){g=g||window.event;var f=g.relatedTarget||g.toElement;(!f||f.nodeName==="HTML")&&y()};return document.addEventListener("mouseout",l),function(){document.removeEventListener("mouseout",l)}}},[])},R=e("./node_modules/react/jsx-runtime.js");function ee(j,y){return D(j)||T(j,y)||B(j,y)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(j,y){if(!!j){if(typeof j=="string")return A(j,y);var l=Object.prototype.toString.call(j).slice(8,-1);if(l==="Object"&&j.constructor&&(l=j.constructor.name),l==="Map"||l==="Set")return Array.from(j);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return A(j,y)}}function A(j,y){(y==null||y>j.length)&&(y=j.length);for(var l=0,d=new Array(y);l<y;l++)d[l]=j[l];return d}function T(j,y){var l=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(l!=null){var d=[],g=!0,f=!1,r,n;try{for(l=l.call(j);!(g=(r=l.next()).done)&&(d.push(r.value),!(y&&d.length===y));g=!0);}catch(t){f=!0,n=t}finally{try{!g&&l.return!=null&&l.return()}finally{if(f)throw n}}return d}}function D(j){if(Array.isArray(j))return j}var x=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,S={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}},x=`import React, { useState } from "react";

import { usePageLeave } from "../usePageLeave";

export default {
  title: "@travelmakers-design/hooks/usePageLeave",
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
`,S={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:14},startBody:{col:23,line:9},endBody:{col:1,line:14}}},I=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [count, setCount] = useState(0);\\n  usePageLeave(() => setCount((old) => old + 1));\\n\\n  return <div>Page leave count: {count}</div>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:22},startBody:{col:23,line:17},endBody:{col:1,line:22}}}}},title:"@travelmakers-design/hooks/usePageLeave"},k=function(){var y=Object(L.useState)(0),l=ee(y,2),d=l[0],g=l[1];return $(function(){return g(function(f){return f+1})}),Object(R.jsxs)("div",{children:["Page leave count: ",d]})};k.displayName="Default",k.parameters=Object.assign({storySource:{source:`() => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
}`}},k.parameters)},"./packages/travelmakers-design-hooks/src/useQueue/stories/useQueue.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return g});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.slice.js"),X=e("./node_modules/core-js/modules/es.array.concat.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.from.js");function R(f){return B(f)||G(f)||D(f)||ee()}function ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(f){if(typeof Symbol!="undefined"&&f[Symbol.iterator]!=null||f["@@iterator"]!=null)return Array.from(f)}function B(f){if(Array.isArray(f))return x(f)}function A(f,r){return I(f)||S(f,r)||D(f,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(f,r){if(!!f){if(typeof f=="string")return x(f,r);var n=Object.prototype.toString.call(f).slice(8,-1);if(n==="Object"&&f.constructor&&(n=f.constructor.name),n==="Map"||n==="Set")return Array.from(f);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(f,r)}}function x(f,r){(r==null||r>f.length)&&(r=f.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=f[n];return t}function S(f,r){var n=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(n!=null){var t=[],o=!0,a=!1,_,u;try{for(n=n.call(f);!(o=(_=n.next()).done)&&(t.push(_.value),!(r&&t.length===r));o=!0);}catch(i){a=!0,u=i}finally{try{!o&&n.return!=null&&n.return()}finally{if(a)throw u}}return t}}function I(f){if(Array.isArray(f))return f}var k=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=Object(V.useState)({state:n.slice(0,r),queue:n.slice(r)}),o=A(t,2),a=o[0],_=a.state,u=a.queue,i=o[1],c=function(){for(var O=arguments.length,h=new Array(O),E=0;E<O;E++)h[E]=arguments[E];return i(function(v){var P=[].concat(R(v.state),R(v.queue),h);return{state:P.slice(0,r),queue:P.slice(r)}})},m=function(O){return i(function(h){var E=O([].concat(R(h.state),R(h.queue)));return{state:E.slice(0,r),queue:E.slice(r)}})},s=function(){return i(function(O){return{state:O.state,queue:[]}})};return{state:_,queue:u,add:c,update:m,cleanQueue:s}},j=e("./node_modules/react/jsx-runtime.js"),y=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},y=`import React, { useState } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const { state, queue, add, update, cleanQueue } = useQueue(10, [1, 2, 3]);\\n\\n  return (\\n    <div>\\n      <div>state: {state}</div>\\n      <div>queue: {queue}</div>\\n      <button onClick={() => add(5)}>add 5</button>\\n      <button onClick={() => update((state) => state)}>update</button>\\n      <button onClick={cleanQueue}>clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useQueue"},g=function(){var r=k(10,[1,2,3]),n=r.state,t=r.queue,o=r.add,a=r.update,_=r.cleanQueue;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:["state: ",n]}),Object(j.jsxs)("div",{children:["queue: ",t]}),Object(j.jsx)("button",{onClick:function(){return o(5)},children:"add 5"}),Object(j.jsx)("button",{onClick:function(){return a(function(i){return i})},children:"update"}),Object(j.jsx)("button",{onClick:_,children:"clear"})]})};g.displayName="Default",g.parameters=Object.assign({storySource:{source:`() => {
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
}`}},g.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),I=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),y=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return o(i)||t(i,c)||r(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],p=!0,O=!1,h,E;try{for(m=m.call(i);!(p=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));p=!0);}catch(v){O=!0,E=v}finally{try{!p&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function o(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},a=`import React, { useEffect } from "react";

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
`,_={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var u=function(){var c=Object(y.a)({width:0,height:0}),m=g(c,2),s=m[0],p=m[1];return Object(k.useEffect)(function(){var O=function(){p({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}},[]),Object(l.jsx)("pre",{children:JSON.stringify(s,null,2)})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return f});var z=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.object.to-string.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/es.array.slice.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.function.name.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.array.from.js"),x=e.n(D),S=e("./node_modules/react/index.js"),I=e.n(S);function k(r,n){return g(r)||d(r,n)||y(r,n)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(r,n){if(!!r){if(typeof r=="string")return l(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(r,n)}}function l(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function d(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,_=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(o.push(u.value),!(n&&o.length===n));a=!0);}catch(c){_=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(_)throw i}}return o}}function g(r){if(Array.isArray(r))return r}var f=function(n){var t=Object(S.useRef)(0),o=Object(S.useState)(n),a=k(o,2),_=a[0],u=a[1],i=Object(S.useCallback)(function(c){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){u(c)})},[]);return[_,i]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return o});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),R=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function ee(a,_){return D(a)||T(a,_)||B(a,_)||G()}function G(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(a,_){if(!!a){if(typeof a=="string")return A(a,_);var u=Object.prototype.toString.call(a).slice(8,-1);if(u==="Object"&&a.constructor&&(u=a.constructor.name),u==="Map"||u==="Set")return Array.from(a);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return A(a,_)}}function A(a,_){(_==null||_>a.length)&&(_=a.length);for(var u=0,i=new Array(_);u<_;u++)i[u]=a[u];return i}function T(a,_){var u=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(u!=null){var i=[],c=!0,m=!1,s,p;try{for(u=u.call(a);!(c=(s=u.next()).done)&&(i.push(s.value),!(_&&i.length===_));c=!0);}catch(O){m=!0,p=O}finally{try{!c&&u.return!=null&&u.return()}finally{if(m)throw p}}return i}}function D(a){if(Array.isArray(a))return a}var x={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},S=typeof window!="undefined",I=function(){var _=Object(L.useRef)(null),u=Object(R.a)(x),i=ee(u,2),c=i[0],m=i[1],s=Object(L.useMemo)(function(){return S?new ResizeObserver(function(p){var O=p[0];O&&m(O.contentRect)}):null},[]);return Object(L.useEffect)(function(){return _.current&&s.observe(_.current),function(){s.disconnect()}},[_.current]),[_,c]},k=e("./node_modules/react/jsx-runtime.js");function j(a,_){return f(a)||g(a,_)||l(a,_)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(a,_){if(!!a){if(typeof a=="string")return d(a,_);var u=Object.prototype.toString.call(a).slice(8,-1);if(u==="Object"&&a.constructor&&(u=a.constructor.name),u==="Map"||u==="Set")return Array.from(a);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return d(a,_)}}function d(a,_){(_==null||_>a.length)&&(_=a.length);for(var u=0,i=new Array(_);u<_;u++)i[u]=a[u];return i}function g(a,_){var u=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(u!=null){var i=[],c=!0,m=!1,s,p;try{for(u=u.call(a);!(c=(s=u.next()).done)&&(i.push(s.value),!(_&&i.length===_));c=!0);}catch(O){m=!0,p=O}finally{try{!c&&u.return!=null&&u.return()}finally{if(m)throw p}}return i}}function f(a){if(Array.isArray(a))return a}var r=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,n={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},r=`import React, { useEffect } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},o=function(){var _=I(),u=j(_,2),i=u[0],c=u[1],m=Object($.a)();return Object(L.useEffect)(function(){m()},[]),Object(k.jsxs)("div",{children:[Object(k.jsx)("textarea",{ref:i,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(k.jsx)("div",{children:JSON.stringify(c)})]})};o.displayName="Default",o.parameters=Object.assign({storySource:{source:`() => {
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
}`}},o.parameters)},"./packages/travelmakers-design-hooks/src/useScrollLock/stories/useScrollLock.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return _});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=e("./node_modules/core-js/modules/es.parse-int.js");function R(){var u=document.createElement("style");return u.type="text/css",u.setAttribute("tm-scroll-lock",""),u}function ee(u){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(u)}function G(u,i){u.styleSheet?u.styleSheet.cssText=i:u.appendChild(document.createTextNode(i))}function B(){if(typeof window=="undefined"||typeof document=="undefined")return 0;var u=parseInt(window.getComputedStyle(document.body).paddingRight,10),i=window.innerWidth-document.documentElement.clientWidth;return u+i}var A=function(i){var c=i.disableBodyPadding,m=c?null:B(),s=`body {
        --removed-scroll-width: `+m+`px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        `+(m?"padding-right: var(--removed-scroll-width) !important;":"")+`
        `;return s};function T(u,i){return k(u)||I(u,i)||x(u,i)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(u,i){if(!!u){if(typeof u=="string")return S(u,i);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return S(u,i)}}function S(u,i){(i==null||i>u.length)&&(i=u.length);for(var c=0,m=new Array(i);c<i;c++)m[c]=u[c];return m}function I(u,i){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var m=[],s=!0,p=!1,O,h;try{for(c=c.call(u);!(s=(O=c.next()).done)&&(m.push(O.value),!(i&&m.length===i));s=!0);}catch(E){p=!0,h=E}finally{try{!s&&c.return!=null&&c.return()}finally{if(p)throw h}}return m}}function k(u){if(Array.isArray(u))return u}var j=function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{disableBodyPadding:!1},m=Object(L.useState)(i||!1),s=T(m,2),p=s[0],O=s[1],h=Object(L.useRef)(0),E=c.disableBodyPadding,v=Object(L.useRef)(null),P=function(){h.current=window.scrollY;var H=A({disableBodyPadding:E}),N=R();G(N,H),ee(N),v.current=N},M=function(){!(v!=null&&v.current)||(v.current.parentNode.removeChild(v.current),v.current=null)};return Object(L.useEffect)(function(){return p?P():M(),M},[p]),Object(L.useEffect)(function(){i!==void 0&&O(i)},[i]),Object(L.useEffect)(function(){i===void 0&&typeof window!="undefined"&&window.document.body.style.overflow==="hidden"&&O(!0)},[O]),[p,O]},y=e("./node_modules/react/jsx-runtime.js");function l(u,i){return n(u)||r(u,i)||g(u,i)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(u,i){if(!!u){if(typeof u=="string")return f(u,i);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(u,i)}}function f(u,i){(i==null||i>u.length)&&(i=u.length);for(var c=0,m=new Array(i);c<i;c++)m[c]=u[c];return m}function r(u,i){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var m=[],s=!0,p=!1,O,h;try{for(c=c.call(u);!(s=(O=c.next()).done)&&(m.push(O.value),!(i&&m.length===i));s=!0);}catch(E){p=!0,h=E}finally{try{!s&&c.return!=null&&c.return()}finally{if(p)throw h}}return m}}function n(u){if(Array.isArray(u))return u}var t=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,o={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}},t=`import React, { useState } from "react";

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



Default.parameters = { storySource: { source: "() => {\\n  const [lock, setLock] = useState(false);\\n  const scrollLocked = useScrollLock(lock);\\n\\n  return (\\n    <div style={{ width: 10000, height: 10000 }}>\\n      <button onClick={() => setLock((old) => !old)}>\\n        {lock ? \\"Unlock\\" : \\"Lock\\"}\\n      </button>\\n      {scrollLocked ? \\"Scroll locked\\" : \\"Scrollable\\"}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:29},startBody:{col:23,line:17},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useScrollLock"},_=function(){var i=Object(L.useState)(!1),c=l(i,2),m=c[0],s=c[1],p=j(m);return Object(y.jsxs)("div",{style:{width:1e4,height:1e4},children:[Object(y.jsx)("button",{onClick:function(){return s(function(h){return!h})},children:m?"Unlock":"Lock"}),p?"Scroll locked":"Scrollable"]})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`() => {
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
}`}},_.parameters)},"./packages/travelmakers-design-hooks/src/useTimeout/stories/useTimeout.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/core-js/modules/es.array.from.js"),$=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function R(y,l){return T(y)||A(y,l)||G(y,l)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(y,l){if(!!y){if(typeof y=="string")return B(y,l);var d=Object.prototype.toString.call(y).slice(8,-1);if(d==="Object"&&y.constructor&&(d=y.constructor.name),d==="Map"||d==="Set")return Array.from(y);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return B(y,l)}}function B(y,l){(l==null||l>y.length)&&(l=y.length);for(var d=0,g=new Array(l);d<l;d++)g[d]=y[d];return g}function A(y,l){var d=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(d!=null){var g=[],f=!0,r=!1,n,t;try{for(d=d.call(y);!(f=(n=d.next()).done)&&(g.push(n.value),!(l&&g.length===l));f=!0);}catch(o){r=!0,t=o}finally{try{!f&&d.return!=null&&d.return()}finally{if(r)throw t}}return g}}function T(y){if(Array.isArray(y))return y}var D=function(l,d){var g=Object($.a)(l,d),f=R(g,2),r=f[0],n=f[1];return Object(V.useEffect)(function(){return r(),n},[r,n]),n},x=e("./node_modules/react/jsx-runtime.js"),S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}},S=`import React from "react";
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
`,I={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:18},startBody:{col:23,line:8},endBody:{col:1,line:18}}},k=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const clear = useTimeout(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:26},startBody:{col:23,line:16},endBody:{col:1,line:26}}}}},title:"@travelmakers-design/hooks/useTimeout"},j=function(){var l=D(function(){alert("fire!")},2e3);return Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:l,children:"Clear"})})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const clear = useTimeout(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),I=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),y=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return o(i)||t(i,c)||r(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],p=!0,O=!1,h,E;try{for(m=m.call(i);!(p=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));p=!0);}catch(v){O=!0,E=v}finally{try{!p&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function o(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},a=`import React from "react";
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
`,_={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var u=function(){var c=Object(y.a)(function(){alert("fire!")},2e3),m=g(c,2),s=m[0],p=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:s,children:"Run"}),Object(l.jsx)("button",{onClick:p,children:"Clear"})]})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return Z});var z=e("./node_modules/core-js/modules/web.timers.js"),V=e.n(z),W=e("./node_modules/react/index.js"),X=e.n(W),Y=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),Z=function(q,w){var K=Object(W.useRef)(),F=Object(Y.a)(q),J=Object(W.useCallback)(function(){K.current&&clearTimeout(K.current),K.current=setTimeout(function(){F()},w)},[w]),L=Object(W.useCallback)(function(){K.current&&clearTimeout(K.current)},[]);return Object(W.useEffect)(function(){return L},[L]),[J,L]}},"./packages/travelmakers-design-hooks/src/useToggle/stories/useToggle.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return f});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js");function $(r,n){return A(r)||B(r,n)||ee(r,n)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(r,n){if(!!r){if(typeof r=="string")return G(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(r,n)}}function G(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function B(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,_=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(o.push(u.value),!(n&&o.length===n));a=!0);}catch(c){_=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(_)throw i}}return o}}function A(r){if(Array.isArray(r))return r}var T=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=Object(L.useState)(n),o=$(t,2),a=o[0],_=o[1],u=Object(L.useCallback)(function(i){return _(function(c){return typeof i=="boolean"?i:!c})},[]);return[a,u]},D=e("./node_modules/react/jsx-runtime.js");function x(r,n){return y(r)||j(r,n)||I(r,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(r,n){if(!!r){if(typeof r=="string")return k(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(r,n)}}function k(r,n){(n==null||n>r.length)&&(n=r.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=r[t];return o}function j(r,n){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],a=!0,_=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(o.push(u.value),!(n&&o.length===n));a=!0);}catch(c){_=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(_)throw i}}return o}}function y(r){if(Array.isArray(r))return r}var l=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, toggle] = useToggle();\\n\\n  return (\\n    <div>\\n      <div>current state: {\`\${state}\`}</div>\\n      <div>\\n        <button onClick={() => toggle(true)}>setTrue</button>\\n        <button onClick={() => toggle(false)}>setFalse</button>\\n        <button onClick={toggle}>toggle</button>\\n      </div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:29},startBody:{col:23,line:16},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useToggle"},f=function(){var n=T(),t=x(n,2),o=t[0],a=t[1];return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:["current state: ",""+o]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{onClick:function(){return a(!0)},children:"setTrue"}),Object(D.jsx)("button",{onClick:function(){return a(!1)},children:"setFalse"}),Object(D.jsx)("button",{onClick:a,children:"toggle"})]})]})};f.displayName="Default",f.parameters=Object.assign({storySource:{source:`() => {
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
}`}},f.parameters)},"./packages/travelmakers-design-hooks/src/useUncontrolled/stories/useUncontrolled.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return n});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),Z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/core-js/modules/es.string.iterator.js"),q=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),K=e("./node_modules/core-js/modules/es.array.slice.js"),F=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-hooks/src/useId/useId.ts");function R(t,o){return T(t)||A(t,o)||G(t,o)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(t,o){if(!!t){if(typeof t=="string")return B(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return B(t,o)}}function B(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,_=new Array(o);a<o;a++)_[a]=t[a];return _}function A(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var _=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(_.push(c.value),!(o&&_.length===o));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return _}}function T(t){if(Array.isArray(t))return t}var D=function(o){var a=o.value,_=o.defaultValue,u=o.finalValue,i=o.rule,c=o.onChange,m=o.onValueUpdate,s=i(a),p=Object(L.useRef)("initial"),O=i(_)?_:u,h=Object(L.useState)(O),E=R(h,2),v=E[0],P=E[1],M=s?a:v;!s&&p.current==="controlled"&&(M=u),p.current=s?"controlled":"uncontrolled";var C=p.current,H=function(te){typeof c=="function"&&c(te),C==="uncontrolled"&&P(te)};return Object(L.useEffect)(function(){C==="uncontrolled"&&P(M),typeof m=="function"&&m(M)},[C,M]),[M,H,p.current]},x=e("./node_modules/react/jsx-runtime.js");function S(t,o){return l(t)||y(t,o)||k(t,o)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(t,o){if(!!t){if(typeof t=="string")return j(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(t,o)}}function j(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,_=new Array(o);a<o;a++)_[a]=t[a];return _}function y(t,o){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var _=[],u=!0,i=!1,c,m;try{for(a=a.call(t);!(u=(c=a.next()).done)&&(_.push(c.value),!(o&&_.length===o));u=!0);}catch(s){i=!0,m=s}finally{try{!u&&a.return!=null&&a.return()}finally{if(i)throw m}}return _}}function l(t){if(Array.isArray(t))return t}var d=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [controlledValue, setControlledValue] = useState(\\"controlled\\");\\n\\n  return (\\n    <div style={{ padding: 20 }}>\\n      <CustomInput label=\\"Uncontrolled\\" defaultValue=\\"uncontrolled\\" />\\n      <CustomInput\\n        label=\\"Controlled\\"\\n        value={controlledValue}\\n        onChange={setControlledValue}\\n      />\\n      <CustomInput\\n        label=\\"Controlled (fixed value)\\"\\n        value=\\"fixed\\"\\n        onChange={setControlledValue}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:54},endLoc:{col:1,line:72},startBody:{col:23,line:54},endBody:{col:1,line:72}}}}},title:"@travelmakers-design/hooks/useUncontrolled"},r=function(o){var a=o.label,_=o.value,u=o.defaultValue,i=o.onChange,c=Object($.a)(),m=D({value:_,defaultValue:u,finalValue:null,onChange:i,rule:function(E){return typeof E=="string"}}),s=S(m,2),p=s[0],O=s[1];return Object(x.jsxs)("div",{style:{padding:"1rem"},children:[Object(x.jsx)("label",{htmlFor:c,children:a}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{id:c,type:"text",value:p,onChange:function(E){return O(E.target.value)}})]})};r.displayName="CustomInput";var n=function(){var o=Object(L.useState)("controlled"),a=S(o,2),_=a[0],u=a[1];return Object(x.jsxs)("div",{style:{padding:20},children:[Object(x.jsx)(r,{label:"Uncontrolled",defaultValue:"uncontrolled"}),Object(x.jsx)(r,{label:"Controlled",value:_,onChange:u}),Object(x.jsx)(r,{label:"Controlled (fixed value)",value:"fixed",onChange:u})]})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`() => {
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
}`}},n.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(re,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return u});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e.n(z),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e.n(W),Y=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(Y),U=e("./node_modules/core-js/modules/es.symbol.description.js"),q=e.n(U),w=e("./node_modules/core-js/modules/es.object.to-string.js"),K=e.n(w),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(F),L=e("./node_modules/core-js/modules/es.string.iterator.js"),$=e.n(L),R=e("./node_modules/core-js/modules/es.array.iterator.js"),ee=e.n(R),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(G),A=e("./node_modules/core-js/modules/es.array.slice.js"),T=e.n(A),D=e("./node_modules/core-js/modules/es.function.name.js"),x=e.n(D),S=e("./node_modules/core-js/modules/es.array.from.js"),I=e.n(S),k=e("./node_modules/react/index.js"),j=e.n(k),y=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),l=e("./node_modules/react/jsx-runtime.js"),d=e.n(l);function g(i,c){return o(i)||t(i,c)||r(i,c)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(i,c){if(!!i){if(typeof i=="string")return n(i,c);var m=Object.prototype.toString.call(i).slice(8,-1);if(m==="Object"&&i.constructor&&(m=i.constructor.name),m==="Map"||m==="Set")return Array.from(i);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(i,c)}}function n(i,c){(c==null||c>i.length)&&(c=i.length);for(var m=0,s=new Array(c);m<c;m++)s[m]=i[m];return s}function t(i,c){var m=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(m!=null){var s=[],p=!0,O=!1,h,E;try{for(m=m.call(i);!(p=(h=m.next()).done)&&(s.push(h.value),!(c&&s.length===c));p=!0);}catch(v){O=!0,E=v}finally{try{!p&&m.return!=null&&m.return()}finally{if(O)throw E}}return s}}function o(i){if(Array.isArray(i))return i}var a=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},a=`import React, { useEffect, useState } from "react";

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
`,_={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var u=function(){var c=Object(k.useState)(""),m=g(c,2),s=m[0],p=m[1];return Object(k.useEffect)(function(){console.log("useEffect:",s)},[s]),Object(y.a)(function(){console.log("useUpdateEffect:",s)},[s]),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",onChange:function(h){return p(h.target.value)}})})};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return W});var z=e("./node_modules/react/index.js"),V=e.n(z),W=function(Y,Z){var U=Object(z.useRef)(!0);Object(z.useEffect)(function(){if(!U.current)return Y();U.current=!1},Z)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(re,b,e){"use strict";e.d(b,"c",function(){return L}),e.d(b,"d",function(){return $}),e.d(b,"b",function(){return R}),e.d(b,"a",function(){return G});var z=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),X=e("./node_modules/react/jsx-runtime.js"),Y=function(A){var T=A.styles,D=L();return Object(X.jsx)(W.a,{styles:Object(W.b)(T(D))})};Y.displayName="Global";var Z={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},U=function(){return Object(X.jsx)(W.a,{styles:Z})};U.displayName="NormalizeCSS";var q=e("./node_modules/core-js/modules/es.array.reduce.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),K=e("./node_modules/core-js/modules/es.object.assign.js");function F(B,A){return A?Object.keys(B).reduce(function(T,D){if(D==="headings"&&A.headings){var x=A.headings?Object.keys(B.headings).reduce(function(S,I){return S[I]=Object.assign({},B.headings[I],A.headings[I]),S},{}):B.headings;return Object.assign({},T,{headings:Object.assign({},B.headings,A.headings,x)})}return T[D]=typeof A[D]=="object"?Object.assign({},B[D],A[D]):A[D]||B[D],T},{}):B}var J=Object(z.createContext)({theme:V.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function L(){var B;return((B=Object(z.useContext)(J))===null||B===void 0?void 0:B.theme)||V.a}function $(){var B;return((B=Object(z.useContext)(J))===null||B===void 0?void 0:B.styles)||{}}function R(){var B;return((B=Object(z.useContext)(J))===null||B===void 0?void 0:B.emotionOptions)||{key:"co",prepend:!0}}var ee=function(){return Object(X.jsx)(Y,{styles:function(T){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:T.fontFamily,backgroundColor:T.colorScheme==="dark"?T.colors.black:T.colors.white,color:T.colorScheme==="dark"?T.colors.white:T.colors.black,lineHeight:T.lineHeight,fontSizes:T.fontSizes.b3}}}})};ee.displayName="GlobalStyles";var G=function(A){var T=A.theme,D=A.styles,x=D===void 0?{}:D,S=A.emotionOptions,I=A.withNormalizeCSS,k=I===void 0?!1:I,j=A.withGlobalStyles,y=j===void 0?!1:j,l=A.children;return Object(X.jsxs)(J.Provider,{value:{theme:F(V.a,T),styles:x,emotionOptions:S},children:[k&&Object(X.jsx)(U,{}),y&&Object(X.jsx)(ee,{}),l]})};G.displayName="TmProvider",G.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(re,b,e){"use strict";e.d(b,"b",function(){return xe}),e.d(b,"a",function(){return De});var z=e("./node_modules/core-js/modules/es.object.keys.js"),V={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[V.navy1,V.navy1,V.navy2],secondary:[V.green2,V.green2,V.green1],tertiary:[V.white,V.white,V.gray6],red:[V.red2,V.red2,V.red1]},X={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},Y={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},Z={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},U={small:2,medium:4,large:8,round:100,circular:"50%"},q={xsmall:4,small:8,medium:16,large:24},w={xsmall:576,small:768,medium:1024,large:1408},K={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},F={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},J={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},L={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200},$={mobile:"@media (max-width: "+L.mobile+"px)",tablet:"@media (max-width: "+L.tablet+"px)",desktop:"@media (max-width: "+L.desktop+"px)",largeDesktop:"@media (max-width: "+L.maxSize+"px)"},R=e("./node_modules/core-js/modules/es.object.assign.js"),ee=function(ne){for(var ie="",de=1;de<ne.length-1;de+=1)ie+=ne[de]+" "+de/(ne.length-1)*100+"%, ";return ne[0]+" 0%, "+ie+ne[ne.length-1]+" 100%"},G=function(ne){for(var ie=arguments.length,de=new Array(ie>1?ie-1:0),he=1;he<ie;he++)de[he-1]=arguments[he];return"linear-gradient("+ne+"deg, "+ee(de)+")"},B=function(){for(var ne=arguments.length,ie=new Array(ne),de=0;de<ne;de++)ie[de]=arguments[de];return"radial-gradient(circle, "+ee(ie)+")"},A=function(ne){return typeof ne.size=="number"?ne.size:ne.sizes[ne.size]||ne.size||ne.sizes.medium},T=function(ne){return function(ie){return"@media (min-width: "+(A({size:ie,sizes:ne.breakpoints})+1)+"px)"}},D=function(ne){return function(ie){return"@media (max-width: "+A({size:ie,sizes:ne.breakpoints})+"px)"}},x=e("./node_modules/core-js/modules/es.string.replace.js"),S=e("./node_modules/core-js/modules/es.regexp.exec.js"),I=e("./node_modules/core-js/modules/es.number.is-nan.js"),k=e("./node_modules/core-js/modules/es.number.constructor.js"),j=e("./node_modules/core-js/modules/es.parse-int.js"),y=e("./node_modules/core-js/modules/es.array.map.js"),l=e("./node_modules/core-js/modules/es.string.split.js"),d=e("./node_modules/core-js/modules/es.string.starts-with.js"),g=e("./node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/core-js/modules/es.symbol.js"),r=e("./node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/core-js/modules/es.symbol.iterator.js"),o=e("./node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/core-js/modules/es.array.iterator.js"),_=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e("./node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/core-js/modules/es.array.from.js");function m(le,ne){return E(le)||h(le,ne)||p(le,ne)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(le,ne){if(!!le){if(typeof le=="string")return O(le,ne);var ie=Object.prototype.toString.call(le).slice(8,-1);if(ie==="Object"&&le.constructor&&(ie=le.constructor.name),ie==="Map"||ie==="Set")return Array.from(le);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return O(le,ne)}}function O(le,ne){(ne==null||ne>le.length)&&(ne=le.length);for(var ie=0,de=new Array(ne);ie<ne;ie++)de[ie]=le[ie];return de}function h(le,ne){var ie=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ie!=null){var de=[],he=!0,Se=!1,ke,Ce;try{for(ie=ie.call(le);!(he=(ke=ie.next()).done)&&(de.push(ke.value),!(ne&&de.length===ne));he=!0);}catch(Ie){Se=!0,Ce=Ie}finally{try{!he&&ie.return!=null&&ie.return()}finally{if(Se)throw Ce}}return de}}function E(le){if(Array.isArray(le))return le}var v=function(ne){var ie=ne.replace("#","");return typeof ie=="string"&&ie.length===6&&!Number.isNaN(Number("0x"+ie))},P=function(ne){var ie=ne.replace("#",""),de=parseInt(ie,16),he=de>>16&255,Se=de>>8&255,ke=de&255;return{r:he,g:Se,b:ke,a:1}},M=function(ne){var ie=ne.replace(/[^0-9,.]/g,"").split(",").map(Number),de=m(ie,4),he=de[0],Se=de[1],ke=de[2],Ce=de[3];return{r:he,g:Se,b:ke,a:Ce||1}},C=function(ne){return v(ne)?P(ne):ne.startsWith("rgb")?M(ne):{r:0,g:0,b:0,a:1}},H=function(ne,ie){if(typeof ne!="string"||ie>1||ie<0)return"rgba(0, 0, 0, 1)";var de=C(ne),he=de.r,Se=de.g,ke=de.b;return"rgba("+he+", "+Se+", "+ke+", "+ie+")"},N=function(ne,ie){var de=C(ne),he=de.r,Se=de.g,ke=de.b,Ce=de.a,Ie=1-ie,Re=function(Pe){return Math.round(Pe*Ie)};return"rgba("+Re(he)+", "+Re(Se)+", "+Re(ke)+", "+Ce+")"},te=function(ne,ie){var de=C(ne),he=de.r,Se=de.g,ke=de.b,Ce=de.a,Ie=function(Le){return Math.round(Le+(255-Le)*ie)};return"rgba("+Ie(he)+", "+Ie(Se)+", "+Ie(ke)+", "+Ce+")"},se=function(ne){return ne*8},ye={linearGradient:G,radialGradient:B,smallerThan:D,largerThan:T,rgba:H,size:A,darken:N,lighten:te,spacing:se},ue=function(ne){return Object.assign({},ne,{fn:{largerThan:ye.largerThan(ne),smallerThan:ye.smallerThan(ne),radialGradient:ye.radialGradient,linearGradient:ye.linearGradient,rgba:ye.rgba,size:ye.size,lighten:ye.lighten,darken:ye.darken,spacing:ye.spacing}})},ae=Object.keys(W),pe=Object.keys(V),ve=["xsmall","small","medium","large"],Oe=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],xe=function(ne){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:ne.fontFamily||"sans-serif"}},be={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:V.black,colors:V,palettes:W,shadows:X,fontSizes:Y,lineHeights:Z,radius:U,spacing:q,breakpoints:w,headings:K,opacity:F,zIndex:J,extra:{},media:$},De=ue(be)},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return y});var z=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),Y=e("./node_modules/core-js/modules/es.array.for-each.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),U=e("./node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),K=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),$=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),ee=e("./node_modules/core-js/modules/es.array.from.js");function G(l,d){return x(l)||D(l,d)||A(l,d)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(l,d){if(!!l){if(typeof l=="string")return T(l,d);var g=Object.prototype.toString.call(l).slice(8,-1);if(g==="Object"&&l.constructor&&(g=l.constructor.name),g==="Map"||g==="Set")return Array.from(l);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return T(l,d)}}function T(l,d){(d==null||d>l.length)&&(d=l.length);for(var g=0,f=new Array(d);g<d;g++)f[g]=l[g];return f}function D(l,d){var g=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(g!=null){var f=[],r=!0,n=!1,t,o;try{for(g=g.call(l);!(r=(t=g.next()).done)&&(f.push(t.value),!(d&&f.length===d));r=!0);}catch(a){n=!0,o=a}finally{try{!r&&g.return!=null&&g.return()}finally{if(n)throw o}}return f}}function x(l){if(Array.isArray(l))return l}function S(l){var d={};return Object.keys(l).forEach(function(g){var f=G(l[g],2),r=f[0],n=f[1];d[r]=n}),d}var I=e("./node_modules/core-js/modules/es.array.reduce.js");function k(l,d,g){return Object.keys(d).reduce(function(f,r){return f[r]=l(d[r],g?"tm-"+g+"-"+r:null),f},{})}var j=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function y(l){var d=typeof l=="function"?l:function(){return l};function g(f,r){var n=Object(X.c)(),t=Object(X.d)()[r==null?void 0:r.name],o=Object(j.a)(),a=o.css,_=o.cx,u=0;function i(h){return u+=1,"tm-ref_"+(h||"")+"_"+u}var c=d(n,f,i),m=typeof(r==null?void 0:r.overrideStyles)=="function"?r==null?void 0:r.overrideStyles(n):(r==null?void 0:r.overrideStyles)||{},s=typeof t=="function"?t(n):t||{},p=typeof(r==null?void 0:r.co)=="function"?r.co(n):r==null?void 0:r.co,O=S(Object.keys(c).map(function(h){var E=_(a(c[h]),a(s[h]),a(m[h]),a(p));return[h,E]}));return{classes:k(_,O,r==null?void 0:r.name),cx:_,theme:n}}return g}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(re,b,e){"use strict";e.d(b,"a",function(){return O});var z=e("./node_modules/core-js/modules/es.object.assign.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),q=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),K=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/clsx/dist/clsx.m.js"),$=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),R=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),ee=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.array.map.js"),B=e("./node_modules/react/index.js");function A(h){return S(h)||x(h)||D(h)||T()}function T(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(h,E){if(!!h){if(typeof h=="string")return I(h,E);var v=Object.prototype.toString.call(h).slice(8,-1);if(v==="Object"&&h.constructor&&(v=h.constructor.name),v==="Map"||v==="Set")return Array.from(h);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return I(h,E)}}function x(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function S(h){if(Array.isArray(h))return I(h)}function I(h,E){(E==null||E>h.length)&&(E=h.length);for(var v=0,P=new Array(E);v<E;v++)P[v]=h[v];return P}function k(h,E){var v=Object(B.useRef)();return(!v.current||E.length!==v.current.prevDeps.length||v.current.prevDeps.map(function(P,M){return P===E[M]}).indexOf(!1)>=0)&&(v.current={v:h(),prevDeps:A(E)}),v.current.v}var j=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),y=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),l=e("./node_modules/react/jsx-runtime.js"),d=function(){var h;function E(v){return h===void 0&&(h=Object(j.a)(v||{key:"co",prepend:!0})),h}return{getCache:E}}(),g=d.getCache,f=Object(B.createContext)(void 0);function r(){var h=Object(y.b)();return Object(B.useContext)(f)||g(h)}function n(h){var E=h.children,v=h.value;return Object(l.jsx)(f.Provider,{value:v,children:E})}n.displayName="CacheProvider";function t(h,E){return i(h)||u(h,E)||a(h,E)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(h,E){if(!!h){if(typeof h=="string")return _(h,E);var v=Object.prototype.toString.call(h).slice(8,-1);if(v==="Object"&&h.constructor&&(v=h.constructor.name),v==="Map"||v==="Set")return Array.from(h);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return _(h,E)}}function _(h,E){(E==null||E>h.length)&&(E=h.length);for(var v=0,P=new Array(E);v<E;v++)P[v]=h[v];return P}function u(h,E){var v=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(v!=null){var P=[],M=!0,C=!1,H,N;try{for(v=v.call(h);!(M=(H=v.next()).done)&&(P.push(H.value),!(E&&P.length===E));M=!0);}catch(te){C=!0,N=te}finally{try{!M&&v.return!=null&&v.return()}finally{if(C)throw N}}return P}}function i(h){if(Array.isArray(h))return h}var c="ref";function m(h){var E;if(h.length!==1)return{args:h,ref:E};var v=t(h,1),P=v[0];if(!(P instanceof Object))return{args:h,ref:E};if(!(c in P))return{args:h,ref:E};E=P[c];var M=Object.assign({},P);return delete M[c],{args:[M],ref:E}}var s=function(){function h(v,P,M){var C=[],H=Object(R.a)(v,C,M);return C.length<2?M:H+P(C)}function E(v){var P=v.cache,M=function(){for(var N=arguments.length,te=new Array(N),se=0;se<N;se++)te[se]=arguments[se];var ye=m(te),ue=ye.ref,ae=ye.args,pe=Object($.a)(ae,P.registered);return Object(R.b)(P,pe,!1),P.key+"-"+pe.name+(ue===void 0?"":" "+ue)},C=function(){for(var N=arguments.length,te=new Array(N),se=0;se<N;se++)te[se]=arguments[se];return h(P.registered,M,Object(L.a)(te))};return{css:M,cx:C}}return{cssFactory:E}}(),p=s.cssFactory;function O(){var h=r();return k(function(){return p({cache:h})},[h])}},"./storybook-init-framework-entry.js":function(re,b,e){"use strict";e.r(b);var z=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(re,b,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),re.exports=e("./generated-stories-entry.js")},1:function(re,b){}},[[0,4,5]]]);
