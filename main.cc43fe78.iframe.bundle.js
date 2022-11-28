(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(ee,_,e){"use strict";e.r(_);var Q={};e.r(Q),e.d(Q,"parameters",function(){return g}),e.d(Q,"decorators",function(){return x});var $=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.filter.js"),X=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),G=e("./node_modules/core-js/modules/es.array.for-each.js"),E=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),F=e("./node_modules/core-js/modules/es.object.define-properties.js"),L=e("./node_modules/core-js/modules/es.object.define-property.js"),w=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./node_modules/core-js/modules/es.string.iterator.js"),D=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e("./node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/core-js/modules/es.array.from.js"),r=e("./node_modules/react/index.js"),u=e("./node_modules/react/jsx-runtime.js");function t(n,f){return O(n)||o(n,f)||R(n,f)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(n,f){if(!!n){if(typeof n=="string")return I(n,f);var S=Object.prototype.toString.call(n).slice(8,-1);if(S==="Object"&&n.constructor&&(S=n.constructor.name),S==="Map"||S==="Set")return Array.from(n);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return I(n,f)}}function I(n,f){(f==null||f>n.length)&&(f=n.length);for(var S=0,h=new Array(f);S<f;S++)h[S]=n[S];return h}function o(n,f){var S=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(S!=null){var h=[],C=!0,M=!1,q,se;try{for(S=S.call(n);!(C=(q=S.next()).done)&&(h.push(q.value),!(f&&h.length===f));C=!0);}catch(N){M=!0,se=N}finally{try{!C&&S.return!=null&&S.return()}finally{if(M)throw se}}return h}}function O(n){if(Array.isArray(n))return n}var k=Object(r.createContext)(null),T=function(){var f=Object(r.useContext)(k);if(!f)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return f},b=function(f){var S=f.colorScheme,h=f.toggleColorScheme,C=f.children,M=Object(r.useState)("init"),q=t(M,2),se=q[0],N=q[1];return Object(r.useEffect)(function(){N("update")},[]),Object(u.jsx)(k.Provider,{value:{colorScheme:S,toggleColorScheme:h},children:C},se)};b.displayName="ColorSchemeProvider",b.displayName="@travelmakers-design/styles/ColorSchemeProvider";var s=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),m=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),p=e("./node_modules/storybook-dark-mode/dist/index.js"),g={layout:"fullscreen",docs:{theme:m.themes.light},darkMode:{current:"light"}};function j(n){var f=Object(p.useDarkMode)()?"dark":"light";return Object(u.jsx)(b,{colorScheme:f,toggleColorScheme:function(){},children:Object(u.jsx)(s.a,{theme:{colorScheme:f},withGlobalStyles:!0,withNormalizeCSS:!0,children:n.children})})}j.displayName="ThemeWrapper";var x=[function(n){return Object(u.jsx)(j,{children:n()})}];function d(n,f){var S=Object.keys(n);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(n);f&&(h=h.filter(function(C){return Object.getOwnPropertyDescriptor(n,C).enumerable})),S.push.apply(S,h)}return S}function v(n){for(var f=1;f<arguments.length;f++){var S=arguments[f]!=null?arguments[f]:{};f%2?d(Object(S),!0).forEach(function(h){a(n,h,S[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(S)):d(Object(S)).forEach(function(h){Object.defineProperty(n,h,Object.getOwnPropertyDescriptor(S,h))})}return n}function a(n,f,S){return f in n?Object.defineProperty(n,f,{value:S,enumerable:!0,configurable:!0,writable:!0}):n[f]=S,n}Object.keys(Q).forEach(function(n){var f=Q[n];switch(n){case"args":return Object(w.d)(f);case"argTypes":return Object(w.b)(f);case"decorators":return f.forEach(function(h){return Object(w.f)(h,!1)});case"loaders":return f.forEach(function(h){return Object(w.g)(h,!1)});case"parameters":return Object(w.h)(v({},f),!1);case"argTypesEnhancers":return f.forEach(function(h){return Object(w.c)(h)});case"argsEnhancers":return f.forEach(function(h){return Object(w.e)(h)});case"render":return Object(w.i)(f);case"globals":case"globalTypes":{var S={};return S[n]=f,Object(w.h)(S,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(n+" was not supported :( !")}})},"./generated-stories-entry.js":function(ee,_,e){"use strict";(function(Q){var $=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,$.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],Q,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(ee))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(ee,_,e){var Q={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx","./travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx","./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx":"./packages/travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx","./travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx":"./packages/travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx","./travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx","./travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx","./travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx","./travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx","./travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx","./travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx","./travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx":"./packages/travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx","./travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx":"./packages/travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx","./travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx","./travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx":"./packages/travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function $(re){var X=H(re);return e(X)}function H(re){if(!e.o(Q,re)){var X=new Error("Cannot find module '"+re+"'");throw X.code="MODULE_NOT_FOUND",X}return Q[re]}$.keys=function(){return Object.keys(Q)},$.resolve=H,ee.exports=$,$.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-arrow-next-disable.3c4032c4.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-arrow-next-navy.12beec86.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-arrow-next-white.6fbf74f2.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-arrow-previous-disable.b7f070b7.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-arrow-previous-navy.6975204f.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-arrow-previous-white.5df27b44.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-arrow-single.e8e002c5.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-mini.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-mini.6062cd2f.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-residence.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-residence.bafff8f9.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-star.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-star.324cfafe.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-navy.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-timesale-navy.db963f79.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-white.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-timesale-white.29d12dd5.svg"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return b});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.from.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),re=e("./node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/react/index.js"),A=e("./node_modules/react/jsx-runtime.js"),B=function(m){return Object(A.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m,{children:[Object(A.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#D7D7D7"}),Object(A.jsx)("path",{d:"M6 10.7681L10.1205 16L18 8",stroke:"white","stroke-width":"2"})]}))};B.displayName="AccordionCheck",B.displayName="@travelmakers-design/core/AccordionCheck";var D=function(m){return Object(A.jsx)("svg",Object.assign({width:"33",height:"32",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg"},m,{children:Object(A.jsx)("path",{stroke:"#30373F","stroke-width":"2",d:"m3 9 13 14L29 9",fill:"none","fill-rule":"evenodd"})}))};D.displayName="AccordionIcon",D.displayName="@travelmakers-design/core/AccordionIcon";var P=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),l=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),i=Object(P.a)(function(s,m){var p,g,j,x,d,v,a,n=m.open;return{container:Object.assign({},Object(l.b)(s),(p={display:"flex",flexDirection:"column",width:"100%",backgroundColor:s.colors.white,marginBottom:"4px"},p["&:last-child"]={marginBottom:0},p)),row:(g={display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"14px 24px 14px 24px"},g[""+s.media.desktop]={padding:"12px 16px 12px 16px"},g),titleWrap:{display:"flex",width:"100%"},titleIndex:{fontWeight:"bold",fontFamily:"pt serif",color:s.colors.cover1,fontStyle:"italic",marginRight:"4px"},title:(j={display:"block",width:"100%",fontSize:s.fontSizes.b1,lineHeight:s.lineHeights.b1+"px",fontWeight:"bold",color:s.colors.navy1},j[""+s.media.mobile]={fontSize:s.fontSizes.b2,lineHeight:s.lineHeights.b2+"px",fontWeight:"400"},j),icon:(x={width:"32px",height:"32px",cursor:"pointer",marginLeft:"4px"},x[""+s.media.mobile]={width:"24px",height:"24px"},x),content:(d={padding:"0 24px 14px 24px"},d[""+s.media.desktop]={padding:"0 16px 12px 16px"},d),divider:(v={width:"100%",height:"1px",backgroundColor:s.colors.navy1,marginBottom:"14px"},v[""+s.media.desktop]={marginBottom:"11px"},v),answerText:{display:"flex",lineHeight:"1.5"},answer:(a={fontSize:s.fontSizes.b1,lineHeight:s.lineHeights.b1+"px",color:s.colors.navy1,width:"100%"},a[""+s.media.desktop]={marginTop:"3px"},a[""+s.media.mobile]={fontSize:s.fontSizes.b2,lineHeight:s.lineHeights.b2+"px"},a)}});function c(s,m){return R(s)||y(s,m)||u(s,m)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(s,m){if(!!s){if(typeof s=="string")return t(s,m);var p=Object.prototype.toString.call(s).slice(8,-1);if(p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set")return Array.from(s);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return t(s,m)}}function t(s,m){(m==null||m>s.length)&&(m=s.length);for(var p=0,g=new Array(m);p<m;p++)g[p]=s[p];return g}function y(s,m){var p=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(p!=null){var g=[],j=!0,x=!1,d,v;try{for(p=p.call(s);!(j=(d=p.next()).done)&&(g.push(d.value),!(m&&g.length===m));j=!0);}catch(a){x=!0,v=a}finally{try{!j&&p.return!=null&&p.return()}finally{if(x)throw v}}return g}}function R(s){if(Array.isArray(s))return s}var I=Object(Z.forwardRef)(function(s,m){var p=s.component,g=s.type,j=g===void 0?"Default":g,x=s.data,d=s.className,v=s.containerStyle,a=s.iconStyle,n=s.overrideStyles,f=s.__staticSelector,S=f===void 0?"div":f,h=Object(Z.useState)(Array.from({length:x.length},function(U,ne){return!1})),C=c(h,2),M=C[0],q=C[1],se=p||"div",N=i({open:M},{overrideStyles:n,name:"div"}),Y=N.classes,K=N.cx;return Object(A.jsx)("div",{className:K(v),children:x==null?void 0:x.map(function(U,ne){return Object(A.jsxs)(se,{ref:m,className:K(Y.container,d),children:[Object(A.jsxs)("div",{className:K(Y.row),onClick:function(){return q(function(be){return be==null?void 0:be.map(function(W,oe){return ne===oe?!W:W})})},children:[Object(A.jsxs)("div",{className:K(Y.titleWrap),children:[j==="Number"&&Object(A.jsxs)("span",{className:K(Y.titleIndex),children:[ne+1,"."]}),j==="Checkbox"&&Object(A.jsx)("div",{style:{marginRight:8},children:Object(A.jsx)(B,{})}),Object(A.jsx)("span",{className:K(Y.title),children:U.question})]}),Object(A.jsx)(D,{className:K(Y.icon),style:Object.assign({transform:"rotate("+(M[ne]?180:0)+"deg)"},a)})]}),M[ne]&&Object(A.jsxs)("div",{className:K(Y.content),children:[Object(A.jsx)("div",{className:K(Y.divider)}),Object(A.jsx)("div",{className:K(Y.answerText),children:Object(A.jsx)("span",{className:K(Y.answer),dangerouslySetInnerHTML:{__html:U==null?void 0:U.answer}})})]})]},"accordion-"+ne)})})});I.displayName="@travelmakers-design/core/Accordion";var o=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}},o=`import { Accordion } from "../Accordion";
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
`,O={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},k=[{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."},{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."}],T=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}}}},title:"@travelmakers-design/core/Component/Accordion",component:I,argTypes:{type:{defaultValue:"Default",description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",options:["Default","Number","Checkbox"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},data:{defaultValue:k,description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:typeof k}},control:{type:"array"}},containerStyle:{description:"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}},iconStyle:{description:"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}}}},b=function(m){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(I,Object.assign({},m))})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-core/src/components/Badge/Badge.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return A});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),E=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),z=function(D,P){return{small:{fontFamily:"Pretendard",fontWeight:P==="text"?"bold":"normal",lineHeight:D.lineHeights.caption+"px",fontSize:D.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:P==="text"?"bold":"normal",lineHeight:D.lineHeights.b3+"px",fontSize:D.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:P==="text"?"bold":"normal",lineHeight:D.lineHeights.b2+"px",fontSize:D.fontSizes.b2}}},F=function(D,P){return{small:{padding:P==="text"?"0px 4px":"0px 8px"},medium:{padding:P==="text"?"0px 5px":"0px 8px"},large:{padding:P==="text"?"1px 7px":"0px 8px"}}},L=Object(G.a)(function(B,D){var P=D.size,l=D.type;return{container:Object.assign({},Object(E.b)(B),z(B,l)[P],F(B,l)[P],{display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",height:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:B.colors.white,borderRadius:l==="text"?"6px":B.radius.round,backgroundColor:B.colors.red2})}}),w=e("./node_modules/react/jsx-runtime.js"),J=["component","size","type","children","className","overrideStyles","__staticSelector"];function V(B,D){if(B==null)return{};var P=Z(B,D),l,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(B);for(i=0;i<c.length;i++)l=c[i],!(D.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(B,l)||(P[l]=B[l]))}return P}function Z(B,D){if(B==null)return{};var P={},l=Object.keys(B),i,c;for(c=0;c<l.length;c++)i=l[c],!(D.indexOf(i)>=0)&&(P[i]=B[i]);return P}var A=Object(X.forwardRef)(function(B,D){var P=B.component,l=B.size,i=l===void 0?"small":l,c=B.type,r=c===void 0?"text":c,u=B.children,t=B.className,y=B.overrideStyles,R=B.__staticSelector,I=R===void 0?"span":R,o=V(B,J),O=P||"span",k=L({size:i,type:r},{overrideStyles:y,name:"span"}),T=k.classes,b=k.cx;return Object(w.jsx)(O,Object.assign({ref:D,className:b(T.container,t)},o,{children:u}))});A.displayName="@travelmakers-design/core/Badge"},"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return w}),e.d(_,"TextType",function(){return J}),e.d(_,"NumberType",function(){return V});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/Badge/Badge.tsx"),X=e("./node_modules/react/index.js"),G=e.n(X),E=e("./node_modules/react/jsx-runtime.js"),z=e.n(E),F=`
    
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,L={Default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},TextType:{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},NumberType:{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}},F=`import {
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
`,L={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}},TextType:{startLoc:{col:24,line:69},endLoc:{col:1,line:88},startBody:{col:24,line:69},endBody:{col:1,line:88}},NumberType:{startLoc:{col:26,line:90},endLoc:{col:1,line:119},startBody:{col:26,line:90},endBody:{col:1,line:119}}};_.default={title:"@travelmakers-design/core/Component/Badge",component:re.a,argTypes:{size:{defaultValue:"small",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"text",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.",options:["text","number"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,locationsMap:{default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},"text-type":{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},"number-type":{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(H.g,{}),Object(E.jsx)(H.f,{}),Object(E.jsx)(H.b,{}),Object(E.jsx)(H.d,{}),Object(E.jsx)(H.a,{story:H.c}),Object(E.jsx)(H.e,{})]})}},actions:{handles:["click button"]}}};var w=function(A){return Object(E.jsx)("div",{style:{padding:24,display:"flex"},children:Object(E.jsx)(re.a,Object.assign({},A,{children:"N"}))})};w.displayName="Default";var J=function(A){return Object(E.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(E.jsx)(re.a,Object.assign({},A,{type:"text",size:"small",style:{marginRight:"4px"},children:"N"})),Object(E.jsx)(re.a,Object.assign({},A,{type:"text",size:"medium",style:{marginRight:"4px"},children:"N"})),Object(E.jsx)(re.a,Object.assign({},A,{type:"text",size:"large",style:{marginRight:"4px"},children:"N"}))]})};J.displayName="TextType";var V=function(A){return Object(E.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(E.jsx)(re.a,Object.assign({},A,{type:"number",size:"small",style:{marginRight:"4px"},children:"1"})),Object(E.jsx)(re.a,Object.assign({},A,{type:"number",size:"medium",style:{marginRight:"4px"},children:"1"})),Object(E.jsx)(re.a,Object.assign({},A,{type:"number",size:"large",style:{marginRight:"4px"},children:"1"}))]})};V.displayName="NumberType",w.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props}>N</Badge>
    </div>
  );
}`}},w.parameters),J.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},J.parameters),V.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},V.parameters)},"./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json":function(ee){ee.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json":function(ee){ee.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"},{"key":"MARKETING","label":"\uB9C8\uCF00\uD305 \uC218\uC2E0 \uB3D9\uC758(\uC120\uD0DD)","content":"1. \uAD11\uACE0\uC131 \uC815\uBCF4\uC758 \uC774\uC6A9 \uBAA9\uC801\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4(\uC81C\uD488) \uAC1C\uBC1C \uBC0F \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC \uAE30\uD68C \uC81C\uACF5, \uC2E0\uADDC \uC18C\uC2DD \uC548\uB0B4 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778 \uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uC11C\uBE44\uC2A4 \uD654\uBA74, \uC804\uD654, e-mail, \uD734\uB300\uD3F0 \uBB38\uC790(SMS, LMS, MMS), \uC6B0\uD3B8\uBB3C, \uC571 \uD478\uC2DC, \uCE74\uCE74\uC624 \uCC44\uB110 \uB4F1\uC758 \uBC29\uBC95\uC73C\uB85C \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC5D0\uAC8C \uC81C\uACF5\uB420 \uC218 \uC788\uC73C\uBA70, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC9C4\uD589 \uC0AC\uD56D, \uC608\uC57D \uD655\uC778 \uB4F1 \uC758\uBB34\uC801\uC73C\uB85C \uC548\uB0B4\uB418\uC5B4\uC57C \uD558\uB294 \uC815\uBCF4\uC131 \uB0B4\uC6A9\uC740 \uC218\uC2E0 \uB3D9\uC758 \uC5EC\uBD80\uC640 \uBB34\uAD00\uD558\uAC8C \uC81C\uACF5\uB429\uB2C8\uB2E4.\\n\\n2. \uBBF8\uB3D9\uC758 \uC2DC \uBD88\uC774\uC775 \uC0AC\uD56D\\n\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uACBD\uC6B0 \uC2E0\uADDC \uD638\uD154 \uC624\uD508 \uC18C\uC2DD, \uD504\uB85C\uBAA8\uC158 \uD2B9\uAC00 \uC18C\uC2DD, \uACE0\uAC1D \uB300\uC0C1 \uC774\uBCA4\uD2B8 \uC18C\uC2DD \uB4F1 \uD61C\uD0DD \uC0AC\uD56D \uC801\uC6A9\uC774 \uBD88\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C22\uC870 \uC81C5\uD56D\uC5D0 \uC758\uD574 \uC120\uD0DD \uC815\uBCF4 \uC0AC\uD56D\uC5D0 \uB300\uD574\uC11C\uB294 \uB3D9\uC758 \uAC70\uBD80\uD558\uC2DC\uB354\uB77C\uB3C4 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC81C\uD55C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uACF5\uACE0\uC77C\uC790 : 2020.11.15\\n\uC2DC\uD589\uC77C\uC790 : 2020.11.16"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return be});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),E=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),Z=e("./node_modules/core-js/modules/es.object.keys.js"),A=e("./node_modules/core-js/modules/es.array.index-of.js"),B=e("./node_modules/core-js/modules/es.array.filter.js"),D=e("./node_modules/core-js/modules/es.object.values.js"),P=e("./node_modules/core-js/modules/es.array.reduce.js"),l=e("./node_modules/core-js/modules/es.array.includes.js"),i=e("./node_modules/core-js/modules/es.string.includes.js"),c=e("./node_modules/core-js/modules/es.array.map.js"),r=e("./node_modules/react/index.js"),u=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),t=e("./node_modules/react/jsx-runtime.js"),y=function(oe){return Object(t.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(t.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(t.jsx)("circle",{fill:"#30373F",cx:"12",cy:"12",r:"12"}),Object(t.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m7.405 10.84 3.296 4.185 6.304-6.4"})]})}))};y.displayName="IcChecked",y.displayName="@travelmakers-design/core/IcChecked";var R=function(oe){return Object(t.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},oe,{children:Object(t.jsx)("g",{fill:"none","fill-rule":"evenodd",children:Object(t.jsx)("g",{children:Object(t.jsx)("g",{children:Object(t.jsxs)("g",{transform:"translate(-73 -67) translate(7 67) translate(66)",children:[Object(t.jsx)("circle",{cx:"15",cy:"15",r:"15",fill:"#C1A485"}),Object(t.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"M9.256 13.55L13.376 18.781 21.256 10.781"})]})})})})}))};R.displayName="IcCheckSelectedBeige",R.displayName="@travelmakers-design/core/IcCheckSelectedBeige";var I=function(oe){return Object(t.jsx)("svg",Object.assign({width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(t.jsx)("path",{d:"M2.423 5.587 9 12.573l6.577-6.986",stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})}))};I.displayName="IcDropDown",I.displayName="@travelmakers-design/core/IcDropDown";var o=function(oe){return Object(t.jsx)("svg",Object.assign({width:"9",height:"15",viewBox:"0 0 9 15",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(t.jsx)("path",{d:"m.5 14.31 7-7-7-7",stroke:"#FFF","stroke-width":"2",fill:"none","fill-rule":"evenodd"})}))};o.displayName="IcDropDownWhite",o.displayName="@travelmakers-design/core/IcDropDownWhite";var O=function(oe){return Object(t.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(t.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(t.jsx)("circle",{fill:"#D7D7D7",cx:"10",cy:"10",r:"10"}),Object(t.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m6.17 9.033 2.748 3.488 5.253-5.333"})]})}))};O.displayName="IcUnCheck",O.displayName="@travelmakers-design/core/IcUnCheck";var k=e("./node_modules/core-js/modules/es.string.small.js"),T=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),b=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),s=function(oe,ie){if(ie>1){var ue,ye;return ye={},ye["&:first-of-type"]=(ue={padding:"10px 16px",backgroundColor:oe.colors.gray6},ue["& > img"]={width:"16px",height:"16px",marginRight:"8px"},ue["& > span"]={fontWeight:"700"},ue),ye}else return{}},m=Object(T.a)(function(W,oe){var ie,ue,ye,pe,ge,le=oe.length,te=oe.popup;return{container:Object.assign({},Object(b.b)(W),{display:"block",width:"100%",border:"solid 1px #d7d7d7",borderRadius:W.radius.small}),option:Object.assign((ie={display:"flex",alignItems:"center",width:"100%",padding:"12px 16px",borderBottom:"solid 1px #d7d7d7",backgroundColor:"white",cursor:"pointer"},ie["&:last-child"]={borderBottom:0},ie[".transparent-agreement"]={backgroundColor:"transparent"},ie),s(W,le)),optionIcon:{width:"16px",height:"16px",marginRight:"12px",cursor:"pointer"},moreIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",cursor:"pointer"},labelContainer:{display:"flex",width:"100%",justifyContent:"space-between",cursor:"pointer"},label:(ue={fontSize:"12px",color:W.colors.navy1,lineHeight:"20px",wordBreak:"keep-all"},ue[".transparent-agreement &"]={color:W.colors.white},ue),moteIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",marginLeft:"auto",cursor:"pointer"},modalContentText:(ge={display:"block",width:"100%",maxHeight:"100%",lineHeight:"1.5",whiteSpace:"pre-wrap",color:"${colors.navy}",overflowY:"auto",paddingBottom:"16px"},ge[""+W.media.desktop]={fontSize:"12px",padding:"12px 20px"},ge["&.Agreement"]=(pe={height:"calc(100% - 44px)"},pe["@media screen and (min-width: 768px)"]=(ye={height:"calc(100% - 104px)"},ye["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},ye),pe),ge)}}),p=["component","transparent","options","value","defaultSelect","setValue","containerStyle","popup","children","className","overrideStyles","__staticSelector"];function g(W,oe){return a(W)||v(W,oe)||x(W,oe)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(W,oe){if(!!W){if(typeof W=="string")return d(W,oe);var ie=Object.prototype.toString.call(W).slice(8,-1);if(ie==="Object"&&W.constructor&&(ie=W.constructor.name),ie==="Map"||ie==="Set")return Array.from(W);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return d(W,oe)}}function d(W,oe){(oe==null||oe>W.length)&&(oe=W.length);for(var ie=0,ue=new Array(oe);ie<oe;ie++)ue[ie]=W[ie];return ue}function v(W,oe){var ie=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(ie!=null){var ue=[],ye=!0,pe=!1,ge,le;try{for(ie=ie.call(W);!(ye=(ge=ie.next()).done)&&(ue.push(ge.value),!(oe&&ue.length===oe));ye=!0);}catch(te){pe=!0,le=te}finally{try{!ye&&ie.return!=null&&ie.return()}finally{if(pe)throw le}}return ue}}function a(W){if(Array.isArray(W))return W}function n(W,oe){if(W==null)return{};var ie=f(W,oe),ue,ye;if(Object.getOwnPropertySymbols){var pe=Object.getOwnPropertySymbols(W);for(ye=0;ye<pe.length;ye++)ue=pe[ye],!(oe.indexOf(ue)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,ue)||(ie[ue]=W[ue]))}return ie}function f(W,oe){if(W==null)return{};var ie={},ue=Object.keys(W),ye,pe;for(pe=0;pe<ue.length;pe++)ye=ue[pe],!(oe.indexOf(ye)>=0)&&(ie[ye]=W[ye]);return ie}var S=Object(r.forwardRef)(function(W,oe){var ie=W.component,ue=W.transparent,ye=ue===void 0?!1:ue,pe=W.options,ge=pe===void 0?[]:pe,le=W.value,te=W.defaultSelect,ce=te===void 0?null:te,de=W.setValue,xe=W.containerStyle,Oe=xe===void 0?{}:xe,Te=W.popup,Be=Te===void 0?!1:Te,Ae=W.children,Pe=W.className,Le=W.overrideStyles,He=W.__staticSelector,me=He===void 0?"div":He,ae=n(W,p),_e=ie||"div",he=m({},{overrideStyles:Le,name:"div"}),fe=he.classes,je=he.cx,De=Object(r.useState)(null),Ee=g(De,2),ke=Ee[0],Se=Ee[1],Ce=Object(r.useState)(!1),Re=g(Ce,2),we=Re[0],Ue=Re[1],We=Object(r.useMemo)(function(){if(le)return Object.values(le).filter(function(Ie){return!!Ie}).length===ge.length},[le,ge.length]);Object(r.useEffect)(function(){de==null||de(ge.reduce(function(Ie,Ve){return ce!==null&&ce.includes(Ve.key)?Ie[Ve.key]=!0:Ie[Ve.key]=!1,Ie},{}))},[]);var ze=function(){var Ve={};ge.map(function(Ye){return Ve[Ye.key]=!We}),de==null||de(Ve)},Fe=function(Ve){Se(Ve),Ue(!0)},Ke=function(){Ue(!1)},$e=function(Ve){de==null||de(function(Ye){var Me;return Object.assign({},Ye,(Me={},Me[Ve.key]=!0,Me))}),Ue(!1)};return Object(t.jsxs)(_e,Object.assign({ref:oe,className:je(fe.container,ye&&"transparent-agreement",Pe),style:Oe},ae,{children:[ge.length>1&&Object(t.jsxs)("div",{className:je(fe.option),onClick:function(){return ze()},children:[We?ye?Object(t.jsx)(R,{className:je(fe.optionIcon)}):Object(t.jsx)(y,{className:je(fe.optionIcon)}):Object(t.jsx)(O,{className:je(fe.optionIcon)}),Object(t.jsx)("span",{className:je(fe.label),children:"\uC804\uCCB4 \uB3D9\uC758"})]}),ge.map(function(Ie,Ve){return Object(t.jsxs)("div",{className:je(fe.option),children:[le!=null&&le[Ie.key]?ye?Object(t.jsx)(R,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ie.key]=!Me[Ie.key]===void 0?!0:!Me[Ie.key],Ne))})}}):Object(t.jsx)(y,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ie.key]=!Me[Ie.key]===void 0?!0:!Me[Ie.key],Ne))})}}):Object(t.jsx)(O,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Me){var Ne;return Object.assign({},Me,(Ne={},Ne[Ie.key]=!Me[Ie.key]===void 0?!0:!Me[Ie.key],Ne))})}}),Object(t.jsxs)("div",{className:je(fe.labelContainer),onClick:function(){return Fe(Ie)},children:[Object(t.jsx)("span",{className:je(fe.label),children:Ie.label}),ye?Object(t.jsx)(o,{className:je(fe.moreIcon),style:{transform:"rotate(0)"}}):Object(t.jsx)(I,{className:je(fe.moreIcon),style:{transform:"rotate(-90deg)"}})]})]},"option-"+Ie.key)}),ke&&we&&Object(t.jsx)(u.a,{open:we,onClose:Ke,modalPopup:Be,ModalContainerClassName:"max-h",handleAgree:function(){return $e(ke)},title:ke==null?void 0:ke.label,backIcon:!0,children:ke==null?void 0:ke.content})]}))});S.displayName="@travelmakers-design/core/BottomSheet";function h(W,oe){return N(W)||se(W,oe)||M(W,oe)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(W,oe){if(!!W){if(typeof W=="string")return q(W,oe);var ie=Object.prototype.toString.call(W).slice(8,-1);if(ie==="Object"&&W.constructor&&(ie=W.constructor.name),ie==="Map"||ie==="Set")return Array.from(W);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return q(W,oe)}}function q(W,oe){(oe==null||oe>W.length)&&(oe=W.length);for(var ie=0,ue=new Array(oe);ie<oe;ie++)ue[ie]=W[ie];return ue}function se(W,oe){var ie=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(ie!=null){var ue=[],ye=!0,pe=!1,ge,le;try{for(ie=ie.call(W);!(ye=(ge=ie.next()).done)&&(ue.push(ge.value),!(oe&&ue.length===oe));ye=!0);}catch(te){pe=!0,le=te}finally{try{!ye&&ie.return!=null&&ie.return()}finally{if(pe)throw le}}return ue}}function N(W){if(Array.isArray(W))return W}var Y=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,K={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}},Y=`import {
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
`,K={Default:{startLoc:{col:23,line:59},endLoc:{col:1,line:72},startBody:{col:23,line:59},endBody:{col:1,line:72}}},U=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json"),ne=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json"),ve=_.default={title:"@travelmakers-design/core/Component/BottomSheet",component:S,argTypes:{popup:{defaultValue:!1,description:"\uD31D\uC5C5 \uC5EC\uBD80",table:{type:{summary:"boolean"}},control:{type:"boolean"}},options:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}}},docs:{page:function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(V.g,{}),Object(t.jsx)(V.f,{}),Object(t.jsx)(V.b,{}),Object(t.jsx)(V.d,{}),Object(t.jsx)(V.a,{story:V.c}),Object(t.jsx)(V.e,{})]})}}}},be=function(oe){var ie=Object(r.useState)({}),ue=h(ie,2),ye=ue[0],pe=ue[1];return Object(t.jsx)("div",{style:{padding:24,display:"flex"},children:Object(t.jsx)(S,Object.assign({},oe,{options:ne,value:ye,setValue:pe,popup:!0}))})};be.displayName="Default",be.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},be.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return u});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/react/index.js"),E=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.string.small.js"),F=e("./node_modules/core-js/modules/es.array.reduce.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),J=e("./packages/travelmakers-design-core/src/constants/index.ts"),V=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Z={xsmall:{height:J.a.xsmall,padding:"0 24px"},small:{height:J.a.small,padding:"0 24px"},medium:{height:J.a.medium,padding:"0 24px"},large:{height:J.a.large,padding:"0 24px"}},A=function(y){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:y.lineHeights.caption+"px",fontSize:y.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:y.lineHeights.b3+"px",fontSize:y.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:y.lineHeights.b2+"px",fontSize:y.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:y.lineHeights.h5+"px",fontSize:y.fontSizes.h5}}},B=Object.keys(Z).reduce(function(t,y){return t[y]=Z[y].height,t},{}),D=function(y){return{display:y?"block":"inline-block",width:y?"100%":"auto"}},P=Object(L.a)(function(t,y,R){var I,o,O,k=y.variant,T=y.size,b=y.fullWidth,s=y.roundness,m=y.line,p=R("loading"),g=R("inner"),j=R("spinner"),x=k||t.colors.navy1;return{loading:(I={ref:p,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},I["."+g]={opacity:0},I["."+j]={display:"flex"},I),solid:(o={backgroundColor:t.palettes[x][t.colorScheme==="light",0],color:x==="white"?t.colors.navy1:t.colors.white,"&:not(:disabled):hover":{backgroundColor:t.palettes[x][t.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:t.palettes[x][t.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:s?t.radius.round:2,outline:"1px solid "+t.palettes[x][t.colorScheme==="light",0]}}},o["&:disabled:not(."+p+")"]={backgroundColor:t.colors.gray5,color:m?t.colors.black:t.colors.white},o),ghost:(O={backgroundColor:t.colors.transparent,border:"1px solid "+t.palettes[x][t.colorScheme==="light",0],color:x==="white"?t.colors.white:t.palettes[x][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:s?t.radius.round:2,outline:"1px solid "+t.palettes[x][t.colorScheme==="light",0]}}},O["&:disabled:not(."+p+")"]={color:Object(V.a)(t.palettes[x][1],t.opacity.opacity3),border:"1px solid "+Object(V.a)(t.palettes[x][1],t.opacity.opacity3)},O),root:Object.assign({},Z[T],D(b),Object(w.b)(t),A(t)[T],{borderRadius:s?t.radius.round:t.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:g,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:j,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),l=e("./node_modules/react/jsx-runtime.js"),i=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function c(t,y){if(t==null)return{};var R=r(t,y),I,o;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(t);for(o=0;o<O.length;o++)I=O[o],!(y.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,I)||(R[I]=t[I]))}return R}function r(t,y){if(t==null)return{};var R={},I=Object.keys(t),o,O;for(O=0;O<I.length;O++)o=I[O],!(y.indexOf(o)>=0)&&(R[o]=t[o]);return R}var u=Object(G.forwardRef)(function(t,y){var R=t.children,I=t.component,o=t.size,O=o===void 0?"medium":o,k=t.variant,T=k===void 0?"primary":k,b=t.line,s=b===void 0?!1:b,m=t.roundness,p=m===void 0?!1:m,g=t.fullWidth,j=g===void 0?!1:g,x=t.type,d=x===void 0?"button":x,v=t.disabled,a=v===void 0?!1:v,n=t.leftIcon,f=n===void 0?"":n,S=t.rightIcon,h=S===void 0?"":S,C=t.className,M=t.co,q=t.overrideStyles,se=c(t,i),N=Object(X.c)(),Y=P({variant:T,size:O,fullWidth:j,roundness:p,line:s},{overrideStyles:q,name:"Button"}),K=Y.classes,U=Y.cx;return Object(l.jsx)(E.a,Object.assign({component:I||"button",ref:y,type:d,disabled:a,className:U(K.root,K[s?"ghost":"solid"],C),co:M,onTouchStart:function(){}},se,{children:Object(l.jsxs)("div",{className:K.inner,children:[f&&Object(l.jsx)("span",{className:U(K.icon,K.leftIcon),children:f}),Object(l.jsx)("span",{className:K.label,children:R}),h&&Object(l.jsx)("span",{className:U(K.icon,K.rightIcon),children:h})]})}))});u.displayName="@travelmakers-design/core/Button"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return w});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),X=e("./node_modules/react/index.js"),G=e.n(X),E=e("./node_modules/react/jsx-runtime.js"),z=e.n(E),F=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},F=`import {
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
`,L={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}};_.default={title:"@travelmakers-design/core/Component/Button",component:re.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(H.g,{}),Object(E.jsx)(H.f,{}),Object(E.jsx)(H.b,{}),Object(E.jsx)(H.d,{}),Object(E.jsx)(H.a,{story:H.c}),Object(E.jsx)(H.e,{})]})}},actions:{handles:["click button"]}}};var w=function(V){return Object(E.jsx)("div",{style:{margin:"0 auto"},children:Object(E.jsx)(re.a,Object.assign({},V,{children:"Button"}))})};w.displayName="Default",w.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},w.parameters)},"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return l});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=Object(z.a)(function(i,c){var r=c.type,u=r===void 0?"default":r;return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"20px 24px",gap:"8px",backgroundColor:""+i.colors.gray6},titleWrapper:{display:"flex",flexDirection:"row",alignItems:"center",padding:0,gap:"8px"},title:{color:u==="default"?i.colors.green2:i.colors.red2,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:i.fontSizes.b2,lineHeight:i.lineHeights.b2+"px"},content:{color:i.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:i.fontSizes.b2,lineHeight:i.lineHeights.b2+"px"}}}),L=e("./node_modules/react/jsx-runtime.js"),w=function(c){var r=c.color;return Object(L.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(L.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.51543 8.05002L7.70005 3.15002H6.30005L6.48466 8.03055L7.51543 8.05002ZM7.00005 10.5C7.38665 10.5 7.70005 10.1866 7.70005 9.80002C7.70005 9.41342 7.38665 9.10002 7.00005 9.10002C6.61345 9.10002 6.30005 9.41342 6.30005 9.80002C6.30005 10.1866 6.61345 10.5 7.00005 10.5Z",fill:r!=null?r:"#0D5E49"}),Object(L.jsx)("rect",{x:"0.5",y:"0.5",width:"13",height:"13",rx:"6.5",stroke:r!=null?r:"#0D5E49"})]})};w.displayName="CalloutAlertIcon",w.displayName="@travelmakers-design/core/CalloutAlertIcon";var J=["type","title","content","color","className","co","overrideStyles"];function V(i,c){if(i==null)return{};var r=Z(i,c),u,t;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(i);for(t=0;t<y.length;t++)u=y[t],!(c.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,u)||(r[u]=i[u]))}return r}function Z(i,c){if(i==null)return{};var r={},u=Object.keys(i),t,y;for(y=0;y<u.length;y++)t=u[y],!(c.indexOf(t)>=0)&&(r[t]=i[t]);return r}var A=Object($.forwardRef)(function(i,c){var r=i.type,u=r===void 0?"default":r,t=i.title,y=i.content,R=i.color,I=i.className,o=i.co,O=i.overrideStyles,k=V(i,J),T=Object(G.c)(),b=F({type:u},{overrideStyles:O,name:"Callout"}),s=b.classes,m=b.cx;return Object(L.jsxs)(E.a,Object.assign({ref:c,className:m(s.root,I),co:o},k,{children:[Object(L.jsxs)("div",{className:m(s.titleWrapper),children:[Object(L.jsx)(w,{color:u==="default"?T.colors.green2:T.colors.red2}),Object(L.jsx)("span",{className:m(s.title),children:t})]}),Object(L.jsx)("span",{className:m(s.content),children:y})]}))});A.displayName="@travelmakers-design/core/Callout";var B=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}},B=`import React from "react";
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
`,D={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:39},startBody:{col:23,line:37},endBody:{col:1,line:39}}},P=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}}}},title:"@travelmakers-design/core/Component/Callout",component:A,argTypes:{type:{defaultValue:"default",description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","warning"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},content:{defaultValue:"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},l=function(c){return Object(L.jsx)(A,Object.assign({},c))};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout {...props} />;
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),D=e("./packages/travelmakers-design-core/src/components/Progress/Progress.tsx"),P=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),l=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),i=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),c=Object(i.a)(function(d,v){var a=v.size,n=a===void 0?"small":a;return{root:{display:"flex",alignItems:"center",justifyContent:"space-between"},buttonContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",width:n==="small"?"56px":"84px"},button:{width:n==="small"?"24px":"32px",height:n==="small"?"24px":"32px",cursor:"pointer"}}}),r=e("./node_modules/react/jsx-runtime.js"),u=["color","size","totalPage","currentPage","activeBarTransition","infinity","title","className","co","previousClick","nextClick","overrideStyles"];function t(d,v){return O(d)||o(d,v)||R(d,v)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(d,v){if(!!d){if(typeof d=="string")return I(d,v);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(d,v)}}function I(d,v){(v==null||v>d.length)&&(v=d.length);for(var a=0,n=new Array(v);a<v;a++)n[a]=d[a];return n}function o(d,v){var a=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var n=[],f=!0,S=!1,h,C;try{for(a=a.call(d);!(f=(h=a.next()).done)&&(n.push(h.value),!(v&&n.length===v));f=!0);}catch(M){S=!0,C=M}finally{try{!f&&a.return!=null&&a.return()}finally{if(S)throw C}}return n}}function O(d){if(Array.isArray(d))return d}function k(d,v){if(d==null)return{};var a=T(d,v),n,f;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(d);for(f=0;f<S.length;f++)n=S[f],!(v.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,n)||(a[n]=d[n]))}return a}function T(d,v){if(d==null)return{};var a={},n=Object.keys(d),f,S;for(S=0;S<n.length;S++)f=n[S],!(v.indexOf(f)>=0)&&(a[f]=d[f]);return a}var b=1;function s(){return b}var m=Object($.forwardRef)(function(d,v){var a=d.color,n=a===void 0?"navy":a,f=d.size,S=f===void 0?"small":f,h=d.totalPage,C=h===void 0?1:h,M=d.currentPage,q=M===void 0?1:M,se=d.activeBarTransition,N=se===void 0?!1:se,Y=d.infinity,K=Y===void 0?!1:Y,U=d.title,ne=d.className,ve=d.co,be=d.previousClick,W=d.nextClick,oe=d.overrideStyles,ie=k(d,u),ue=Object(B.c)(),ye=c({size:S},{overrideStyles:oe,name:"ControlIndicator"}),pe=ye.classes,ge=ye.cx,le=Object($.useState)(b),te=t(le,2),ce=te[0],de=te[1],xe=e(n==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg"),Oe=e(n==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg");K||((ce>C||ce<=1)&&(xe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")),ce>=C&&(Oe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")));var Te=function(){var Pe=1;K?ce-1===0?Pe=C:Pe=ce-1:ce-1===0?(Pe=1,xe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")):Pe=ce-1,de(Pe),b=Pe,be()},Be=function(){var Pe=1;K?ce===C?Pe=1:Pe=ce+1:ce===C?(Pe=C,Oe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")):Pe=ce+1,de(Pe),b=Pe,W()};return Object(r.jsxs)(l.a,Object.assign({ref:v,className:ge(pe.root,ne),co:ve},ie,{children:[Object(r.jsx)(D.a,{color:n,size:S,totalPage:C,currentPage:ce,activeBarTransition:N,indicator:!0}),Object(r.jsxs)("div",{className:ge(pe.buttonContainer),children:[Object(r.jsx)(P.a,{src:xe,className:ge(pe.button),onClick:Te}),Object(r.jsx)(P.a,{src:Oe,className:ge(pe.button),onClick:Be})]})]}))});m.displayName="@travelmakers-design/core/Header/ControlIndicator";var p=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { ControlIndicator } from \\"../ControlIndicator\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/ControlIndicator\\",\\n  component: ControlIndicator,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815\\n    // currentPage: {\\n    //   defaultValue: 1,\\n    //   description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n    //   table: {\\n    //     type: {\\n    //       summary: \\"number\\",\\n    //     },\\n    //   },\\n    //   control: { type: \\"number\\" },\\n    // },\\n    activeBarTransition: {\\n      defaultValue: false,\\n      description:\\n        \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    infinity: {\\n      defaultValue: false,\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlIndicator {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":65},"endLoc":{"col":1,"line":71},"startBody":{"col":23,"line":65},"endBody":{"col":1,"line":71}}};
    
import React from "react";
import { ControlIndicator } from "../ControlIndicator";

export default {
  title: "@travelmakers-design/core/Component/ControlIndicator",
  component: ControlIndicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815
    // currentPage: {
    //   defaultValue: 1,
    //   description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
    //   table: {
    //     type: {
    //       summary: "number",
    //     },
    //   },
    //   control: { type: "number" },
    // },
    activeBarTransition: {
      defaultValue: false,
      description:
        "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    infinity: {
      defaultValue: false,
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
      <ControlIndicator {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlIndicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},p=`import React from "react";
import { ControlIndicator } from "../ControlIndicator";

export default {
  title: "@travelmakers-design/core/Component/ControlIndicator",
  component: ControlIndicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815
    // currentPage: {
    //   defaultValue: 1,
    //   description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
    //   table: {
    //     type: {
    //       summary: "number",
    //     },
    //   },
    //   control: { type: "number" },
    // },
    activeBarTransition: {
      defaultValue: false,
      description:
        "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    infinity: {
      defaultValue: false,
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
      <ControlIndicator {...props} />
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},j=_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { ControlIndicator } from \\"../ControlIndicator\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/ControlIndicator\\",\\n  component: ControlIndicator,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815\\n    // currentPage: {\\n    //   defaultValue: 1,\\n    //   description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n    //   table: {\\n    //     type: {\\n    //       summary: \\"number\\",\\n    //     },\\n    //   },\\n    //   control: { type: \\"number\\" },\\n    // },\\n    activeBarTransition: {\\n      defaultValue: false,\\n      description:\\n        \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    infinity: {\\n      defaultValue: false,\\n      description: \\"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlIndicator {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":65},"endLoc":{"col":1,"line":71},"startBody":{"col":23,"line":65},"endBody":{"col":1,"line":71}}};
    
import React from "react";
import { ControlIndicator } from "../ControlIndicator";

export default {
  title: "@travelmakers-design/core/Component/ControlIndicator",
  component: ControlIndicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815
    // currentPage: {
    //   defaultValue: 1,
    //   description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
    //   table: {
    //     type: {
    //       summary: "number",
    //     },
    //   },
    //   control: { type: "number" },
    // },
    activeBarTransition: {
      defaultValue: false,
      description:
        "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    infinity: {
      defaultValue: false,
      description: "ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
      <ControlIndicator {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlIndicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}}}},title:"@travelmakers-design/core/Component/ControlIndicator",component:m,argTypes:{color:{defaultValue:"navy",description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},size:{defaultValue:"small",description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},totalPage:{defaultValue:1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},activeBarTransition:{defaultValue:!1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},infinity:{defaultValue:!1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},x=function(v){return Object(r.jsx)("div",{style:{padding:24},children:Object(r.jsx)(m,Object.assign({},v))})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlIndicator {...props} />
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),D=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),P=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),l=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),i=function(v){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b2+"px",fontSize:v.fontSizes.b2,marginRight:"12px",marginLeft:"12px",width:"50px"},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.h5+"px",fontSize:v.fontSizes.h5,marginRight:"20px",marginLeft:"20px",width:"70px"}}},c=Object(l.a)(function(d,v){var a=v.color,n=a===void 0?"navy":a,f=v.size,S=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center"},indicator:Object.assign({},i(d)[S],{color:n,textAlign:"center"}),button:{width:"32px",height:"32px",cursor:"pointer"}}}),r=e("./node_modules/react/jsx-runtime.js"),u=["color","size","totalPage","currentPage","infinity","className","co","previousClick","nextClick","overrideStyles"];function t(d,v){return O(d)||o(d,v)||R(d,v)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(d,v){if(!!d){if(typeof d=="string")return I(d,v);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(d,v)}}function I(d,v){(v==null||v>d.length)&&(v=d.length);for(var a=0,n=new Array(v);a<v;a++)n[a]=d[a];return n}function o(d,v){var a=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var n=[],f=!0,S=!1,h,C;try{for(a=a.call(d);!(f=(h=a.next()).done)&&(n.push(h.value),!(v&&n.length===v));f=!0);}catch(M){S=!0,C=M}finally{try{!f&&a.return!=null&&a.return()}finally{if(S)throw C}}return n}}function O(d){if(Array.isArray(d))return d}function k(d,v){if(d==null)return{};var a=T(d,v),n,f;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(d);for(f=0;f<S.length;f++)n=S[f],!(v.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,n)||(a[n]=d[n]))}return a}function T(d,v){if(d==null)return{};var a={},n=Object.keys(d),f,S;for(S=0;S<n.length;S++)f=n[S],!(v.indexOf(f)>=0)&&(a[f]=d[f]);return a}var b=1;function s(){return b}var m=Object($.forwardRef)(function(d,v){var a=d.color,n=a===void 0?"navy":a,f=d.size,S=f===void 0?"small":f,h=d.totalPage,C=h===void 0?1:h,M=d.currentPage,q=M===void 0?1:M,se=d.infinity,N=se===void 0?!1:se,Y=d.className,K=d.co,U=d.previousClick,ne=d.nextClick,ve=d.overrideStyles,be=k(d,u),W=Object(B.c)(),oe=c({color:n,size:S},{overrideStyles:ve,name:"ControlPagination"}),ie=oe.classes,ue=oe.cx,ye=Object($.useState)(b),pe=t(ye,2),ge=pe[0],le=pe[1],te=e(n==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg"),ce=e(n==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg");N||((ge>C||ge<=1)&&(te=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")),ge>=C&&(ce=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")));var de=function(){var Te=1;N?ge-1===0?Te=C:Te=ge-1:ge-1===0?(Te=1,te=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")):Te=ge-1,le(Te),b=Te,U()},xe=function(){var Te=1;N?ge===C?Te=1:Te=ge+1:ge===C?(Te=C,ce=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")):Te=ge+1,le(Te),b=Te,ne()};return Object(r.jsxs)(P.a,Object.assign({ref:v,className:ue(ie.root,Y),co:K},be,{children:[Object(r.jsx)(D.a,{src:te,className:ue(ie.button),onClick:de}),Object(r.jsxs)("span",{className:ue(ie.indicator),children:[ge," / ",C]}),Object(r.jsx)(D.a,{src:ce,className:ue(ie.button),onClick:xe})]}))});m.displayName="@travelmakers-design/core/Header/ControlPagination";var p=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\n\\nimport { ControlPagination } from \\"../ControlPagination\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/ControlPagination\\",\\n  component: ControlPagination,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    infinity: {\\n      defaultValue: false,\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815\\n    // currentPage: {\\n    //   defaultValue: 1,\\n    //   description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n    //   table: {\\n    //     type: {\\n    //       summary: \\"number\\",\\n    //     },\\n    //   },\\n    //   control: { type: \\"number\\" },\\n    // },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlPagination {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":55},"endLoc":{"col":1,"line":61},"startBody":{"col":23,"line":55},"endBody":{"col":1,"line":61}}};
    
import React from "react";

import { ControlPagination } from "../ControlPagination";

export default {
  title: "@travelmakers-design/core/Component/ControlPagination",
  component: ControlPagination,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    infinity: {
      defaultValue: false,
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    totalPage: {
      defaultValue: 1,
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815
    // currentPage: {
    //   defaultValue: 1,
    //   description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
    //   table: {
    //     type: {
    //       summary: "number",
    //     },
    //   },
    //   control: { type: "number" },
    // },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlPagination {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlPagination {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:63},endLoc:{col:1,line:69},startBody:{col:23,line:63},endBody:{col:1,line:69}}},p=`import React from "react";

import { ControlPagination } from "../ControlPagination";

export default {
  title: "@travelmakers-design/core/Component/ControlPagination",
  component: ControlPagination,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    infinity: {
      defaultValue: false,
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    totalPage: {
      defaultValue: 1,
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815
    // currentPage: {
    //   defaultValue: 1,
    //   description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
    //   table: {
    //     type: {
    //       summary: "number",
    //     },
    //   },
    //   control: { type: "number" },
    // },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlPagination {...props} />
    </div>
  );
};
`,g={Default:{startLoc:{col:23,line:55},endLoc:{col:1,line:61},startBody:{col:23,line:55},endBody:{col:1,line:61}}},j=_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\n\\nimport { ControlPagination } from \\"../ControlPagination\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/ControlPagination\\",\\n  component: ControlPagination,\\n  argTypes: {\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    infinity: {\\n      defaultValue: false,\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    totalPage: {\\n      defaultValue: 1,\\n      description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815\\n    // currentPage: {\\n    //   defaultValue: 1,\\n    //   description: \\"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n    //   table: {\\n    //     type: {\\n    //       summary: \\"number\\",\\n    //     },\\n    //   },\\n    //   control: { type: \\"number\\" },\\n    // },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlPagination {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":55},"endLoc":{"col":1,"line":61},"startBody":{"col":23,"line":55},"endBody":{"col":1,"line":61}}};
    
import React from "react";

import { ControlPagination } from "../ControlPagination";

export default {
  title: "@travelmakers-design/core/Component/ControlPagination",
  component: ControlPagination,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    infinity: {
      defaultValue: false,
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    totalPage: {
      defaultValue: 1,
      description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    // [\uCD94\uAC00]: \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC5D0\uC11C current page \uB97C \uAD00\uB9AC\uD574\uC57C \uBC84\uD2BC \uB3D9\uC791\uC744 \uCEE8\uD2B8\uB864 \uD560 \uC218 \uC788\uC5B4\uC11C \uC678\uBD80\uC5D0\uC11C current page\uB97C \uC785\uB825 \uBC1B\uB294 \uAC83\uC740 \uCD94\uD6C4 \uC870\uC815 \uC608\uC815
    // currentPage: {
    //   defaultValue: 1,
    //   description: "ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",
    //   table: {
    //     type: {
    //       summary: "number",
    //     },
    //   },
    //   control: { type: "number" },
    // },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlPagination {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlPagination {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:63},endLoc:{col:1,line:69},startBody:{col:23,line:63},endBody:{col:1,line:69}}}}},title:"@travelmakers-design/core/Component/ControlPagination",component:m,argTypes:{color:{defaultValue:"navy",description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},size:{defaultValue:"small",description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},infinity:{defaultValue:!1,description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},totalPage:{defaultValue:1,description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}}}},x=function(v){return Object(r.jsx)("div",{style:{padding:24},children:Object(r.jsx)(m,Object.assign({},v))})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlPagination {...props} />
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),L=function(r){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:r.fontSizes.h4,lineHeight:r.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:r.fontSizes.h1,lineHeight:r.lineHeights.h1+"px"}}},w=Object(z.a)(function(c,r){var u=r.size,t=u===void 0?"small":u,y=r.color,R=y===void 0?"navy":y;return{root:{},titleWrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:F.a.maxSize},title:Object.assign({},L(c)[t],{color:R==="navy"?c.colors.navy1:c.colors.white,margin:"0 35px"}),divider:{backgroundColor:R==="navy"?c.colors.navy1:c.colors.white,flex:1,height:"1px"}}}),J=e("./node_modules/react/jsx-runtime.js"),V=["size","color","title","className","co","overrideStyles"];function Z(c,r){if(c==null)return{};var u=A(c,r),t,y;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(c);for(y=0;y<R.length;y++)t=R[y],!(r.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,t)||(u[t]=c[t]))}return u}function A(c,r){if(c==null)return{};var u={},t=Object.keys(c),y,R;for(R=0;R<t.length;R++)y=t[R],!(r.indexOf(y)>=0)&&(u[y]=c[y]);return u}var B=Object($.forwardRef)(function(c,r){var u=c.size,t=u===void 0?"small":u,y=c.color,R=y===void 0?"navy":y,I=c.title,o=c.className,O=c.co,k=c.overrideStyles,T=Z(c,V),b=Object(G.c)(),s=w({size:t,color:R},{overrideStyles:k,name:"HeaderPage"}),m=s.classes,p=s.cx;return Object(J.jsx)(E.a,Object.assign({ref:r,className:p(m.root,o),co:O},T,{children:Object(J.jsxs)("div",{className:p(m.titleWrapper),children:[Object(J.jsx)("span",{className:p(m.divider)}),Object(J.jsx)("span",{className:p(m.title),children:I}),Object(J.jsx)("span",{className:p(m.divider)})]})}))});B.displayName="@travelmakers-design/core/Header/Section";var D=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,P={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}},D=`import React from "react";
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
`,P={Default:{startLoc:{col:23,line:33},endLoc:{col:1,line:35},startBody:{col:23,line:33},endBody:{col:1,line:35}}},l=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}}}},title:"@travelmakers-design/core/Component/HeaderPage",component:B,argTypes:{size:{defaultValue:"small",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},i=function(r){return Object(J.jsx)(B,Object.assign({},r))};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderPage {...props} />;
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/react/jsx-runtime.js"),F=function(r){var u,t;return Object(z.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r,{children:Object(z.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(z.jsx)("path",{stroke:(u=r.color)!==null&&u!==void 0?u:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(z.jsx)("path",{fill:(t=r.color)!==null&&t!==void 0?t:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};F.displayName="BackIcon",F.displayName="@travelmakers-design/core/BackIcon";var L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=function(r){return{small:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:r.fontSizes.b3,lineHeight:r.lineHeights.b3+"px"},large:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:r.fontSizes.h6,lineHeight:r.lineHeights.h6+"px"}}},J=Object(L.a)(function(c,r){var u=r.size,t=u===void 0?"small":u;return{root:{display:"flex",alignItems:"center",width:"100%",height:t==="small"?"44px":"64px",maxWidth:"calc(1200px - 16px * 2)",padding:"0 16px",backgroundColor:c.colors.navy1},wrapper:{display:"flex",alignItems:"center",cursor:"pointer",width:"100%"},title:Object.assign({},w(c)[t],{color:c.colors.white,marginLeft:24})}}),V=["size","title","className","co","overrideStyles"];function Z(c,r){if(c==null)return{};var u=A(c,r),t,y;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(c);for(y=0;y<R.length;y++)t=R[y],!(r.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,t)||(u[t]=c[t]))}return u}function A(c,r){if(c==null)return{};var u={},t=Object.keys(c),y,R;for(R=0;R<t.length;R++)y=t[R],!(r.indexOf(y)>=0)&&(u[y]=c[y]);return u}var B=Object($.forwardRef)(function(c,r){var u=c.size,t=u===void 0?"small":u,y=c.title,R=c.className,I=c.co,o=c.overrideStyles,O=Z(c,V),k=Object(G.c)(),T=J({size:t},{overrideStyles:o,name:"HeaderSection"}),b=T.classes,s=T.cx;return Object(z.jsx)(E.a,Object.assign({ref:r,className:s(b.root,R),co:I},O,{children:Object(z.jsxs)("div",{className:s(b.wrapper),children:[Object(z.jsx)(F,{width:t==="small"?"16px":"24px",height:t==="small"?"16px":"24px"}),Object(z.jsx)("span",{className:s(b.title),children:y})]})}))});B.displayName="@travelmakers-design/core/Header/Section";var D=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,P={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}},D=`import React from "react";
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
`,P={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},l=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}}}},title:"@travelmakers-design/core/Component/HeaderSection",component:B,argTypes:{size:{defaultValue:"small",description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},title:{defaultValue:"\uD398\uC774\uC9C0 \uC774\uB984",table:{type:{summary:"React.ReactNode"}},description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},i=function(r){return Object(z.jsx)(B,Object.assign({},r))};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderSection {...props} />;
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return I});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.array.map.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),F=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),L=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),w=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),J=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function D(o){if(o==null)throw new TypeError("Cannot destructure undefined")}var P=Object(B.a)(function(o,O){var k,T,b,s,m,p,g,j,x;D(O);var d="580px",v="264px",a="328px",n="200px";return{root:{display:"flex",alignItems:"center",cursor:"default"},cardContainer:(k={display:"block",position:"relative",width:d},k[""+o.media.mobile]={width:a},k),flexBox:{display:"flex",flexDirection:"row",alignItems:"center"},spaceBetweenBox:{justifyContent:"space-between"},groupLabel:(T={position:"absolute",width:"100%",paddingLeft:"32px",paddingRight:"12px",alignItems:"flex-start"},T[""+o.media.mobile]={paddingLeft:"16px"},T),soldOutBox:(b={display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0,height:v},b[""+o.media.mobile]={height:n},b["& > b"]={color:o.colors.white,fontFamily:"PT Serif",fontStyle:"italic",fontWeight:700,fontSize:o.fontSizes.h1,lineHeight:o.lineHeights.h1+"px"},b["& > small"]={color:o.colors.white,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:o.fontSizes.h5,lineHeight:o.lineHeights.h5+"px"},b),individualLabel:{marginRight:0},divider:{backgroundColor:o.colors.navy2,flex:1,height:"1px",margin:"12px 0 15px 0"},textRed:{color:o.colors.red2},textNavy1:{color:o.colors.navy1},textGray2:{color:o.colors.gray2},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},mr2:{marginRight:"2px"},labelImageBox:{height:"20px"},cardImageBox:(s={width:d,height:v,overflow:"hidden"},s[""+o.media.mobile]={width:a,height:n},s),labelBox:{height:"20px"},priceBox:{height:"36px"},addressBox:(m={marginTop:"11px"},m[""+o.media.mobile]={marginTop:"8px"},m),imageWrapper:(p={width:d,height:v},p[""+o.media.mobile]={width:a,height:n},p),image:(g={width:d,height:v,position:"inherit",display:"flex",justifyContent:"center",alignItems:"end"},g["&: hover"]={width:"110%",height:"110%",transition:"width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)"},g[""+o.media.mobile]={width:a,height:n},g),textWrapper:(j={padding:"16px 32px"},j[""+o.media.mobile]={padding:"16px 16px"},j.backgroundColor=o.colors.white,j),tagBox:{marginTop:"12px"},sellout:(x={marginTop:"49px"},x[""+o.media.mobile]={marginTop:"41.5px"},x)}}),l=e("./node_modules/react/jsx-runtime.js"),i=["type","hotelImage","hotelItems","addressText","hotelName","percentText","beforePrice","startPrice","priceText","couponBoolean","coupons","timelineTags","soldOut","className","co","overrideStyles"];function c(o,O){if(o==null)return{};var k=r(o,O),T,b;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);for(b=0;b<s.length;b++)T=s[b],!(O.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,T)||(k[T]=o[T]))}return k}function r(o,O){if(o==null)return{};var k={},T=Object.keys(o),b,s;for(s=0;s<T.length;s++)b=T[s],!(O.indexOf(b)>=0)&&(k[b]=o[b]);return k}var u=Object($.forwardRef)(function(o,O){var k=o.type,T=k===void 0?"default":k,b=o.hotelImage,s=o.hotelItems,m=s===void 0?[]:s,p=o.addressText,g=o.hotelName,j=o.percentText,x=o.beforePrice,d=o.startPrice,v=o.priceText,a=o.couponBoolean,n=a===void 0?!1:a,f=o.coupons,S=o.timelineTags,h=o.soldOut,C=h===void 0?!1:h,M=o.className,q=o.co,se=o.overrideStyles,N=c(o,i),Y=Object(E.c)(),K=P({},{overrideStyles:se,name:"HotelCard"}),U=K.classes,ne=K.cx,ve=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:ne(U.flexBox,U.labelBox),children:[Object(l.jsx)(Z.a,{family:"Pretendard",level:"b3",color:Y.colors.navy1,className:ne(U.label,U.textNavy1),children:j&&"\uC815\uAC00"}),Object(l.jsx)(Z.a,{family:"Pretendard",level:"b3",color:Y.colors.navy1,className:ne(U.label,U.textNavy1),children:x}),n&&Object(l.jsx)(L.a,{fill:!0,children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]}),Object(l.jsx)("div",{className:ne(U.flexBox,U.priceBox),children:Object(l.jsx)(J.a,{couponBool:!0,percentBool:!!j,priceBool:!!v,nightBool:!1,percentText:j,priceStartBool:!!d,priceStartText:d,priceText:v,type:"primary"})})]})},be=function(){return Object(l.jsx)("div",{className:ne(U.sellout),children:Object(l.jsx)(Z.a,{family:"Pretendard",level:"b2",color:Y.colors.gray4,className:ne(U.label),children:"\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})})};return Object(l.jsx)(A.a,Object.assign({ref:O,className:ne(U.root,M),co:q},N,{children:Object(l.jsxs)("div",{className:ne(U.cardContainer),children:[Object(l.jsxs)("div",{className:ne(U.imageWrapper),children:[Object(l.jsxs)("div",{className:ne(U.flexBox,U.spaceBetweenBox,U.groupLabel),children:[Object(l.jsx)("div",{className:ne(U.flexBox),children:m.map(function(W,oe){return Object(l.jsx)(V.a,{color:(oe+1)%2===0?"blue":(oe+1)%3===0?"purple":"green",fill:!0,size:"medium",className:ne(U.individualLabel),children:W})})}),Object(l.jsx)("div",{className:ne(U.addressBox),children:Object(l.jsx)(Z.a,{family:"Pretendard",level:"b1",color:"rgba(255, 255, 255, 0.8)",children:p})})]}),Object(l.jsx)("div",{className:ne(U.cardImageBox),children:Object(l.jsx)(w.a,{className:ne(U.image),src:b,height:"100%",children:C&&Object(l.jsxs)("div",{className:ne(U.soldOutBox),children:[Object(l.jsx)("b",{children:"Sold Out"}),Object(l.jsx)("small",{children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})})})]}),Object(l.jsxs)("div",{className:ne(U.textWrapper),children:[Object(l.jsx)(Z.a,{family:"Pretendard",level:"h4",mobileLevel:"b2",color:C?Y.colors.gray4:Y.colors.navy1,strong:!0,children:g}),Object(l.jsx)("div",{className:ne(U.flexBox,U.labelImageBox),children:Object(l.jsx)(F.a,{type:T,soldOut:C})}),Object(l.jsx)("div",{className:ne(U.divider)}),C?Object(l.jsx)(be,{}):Object(l.jsx)(ve,{}),Object(l.jsx)("div",{className:ne(U.flexBox,U.tagBox),children:Object(l.jsx)(z.a,{items:S,soldOut:C,fill:!0})})]})]})}))});u.displayName="@travelmakers-design/core/Header/Section";var t=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelCard } from \\"../HotelCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelCard\\",\\n  component: HotelCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":125},"endLoc":{"col":1,"line":131},"startBody":{"col":23,"line":125},"endBody":{"col":1,"line":131}}};
    
import React from "react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design/core/Component/HotelCard",
  component: HotelCard,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    hotelItems: {
      defaultValue: ["\uD68C\uC6D0\uD560\uC778\uAC00"],
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    addressText: {
      defaultValue: "address",
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelName: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "80",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    beforePrice: {
      defaultValue: "100,000\uC6D0",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    startPrice: {
      defaultValue: "1\uBC15 50,000\uC6D0 \uBD80\uD130",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: 200000,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    couponBoolean: {
      defaultValue: true,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    coupons: {
      defaultValue: [],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    timelineTags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <HotelCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}},t=`import React from "react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design/core/Component/HotelCard",
  component: HotelCard,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    hotelItems: {
      defaultValue: ["\uD68C\uC6D0\uD560\uC778\uAC00"],
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    addressText: {
      defaultValue: "address",
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelName: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "80",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    beforePrice: {
      defaultValue: "100,000\uC6D0",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    startPrice: {
      defaultValue: "1\uBC15 50,000\uC6D0 \uBD80\uD130",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: 200000,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    couponBoolean: {
      defaultValue: true,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    coupons: {
      defaultValue: [],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    timelineTags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <HotelCard {...props} />
    </div>
  );
};
`,y={Default:{startLoc:{col:23,line:125},endLoc:{col:1,line:131},startBody:{col:23,line:125},endBody:{col:1,line:131}}},R=_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelCard } from \\"../HotelCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelCard\\",\\n  component: HotelCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":125},"endLoc":{"col":1,"line":131},"startBody":{"col":23,"line":125},"endBody":{"col":1,"line":131}}};
    
import React from "react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design/core/Component/HotelCard",
  component: HotelCard,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    hotelItems: {
      defaultValue: ["\uD68C\uC6D0\uD560\uC778\uAC00"],
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    addressText: {
      defaultValue: "address",
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description:
        "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelName: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "80",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    beforePrice: {
      defaultValue: "100,000\uC6D0",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    startPrice: {
      defaultValue: "1\uBC15 50,000\uC6D0 \uBD80\uD130",
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: 200000,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    couponBoolean: {
      defaultValue: true,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    coupons: {
      defaultValue: [],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    timelineTags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <HotelCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}}}},title:"@travelmakers-design/core/Component/HotelCard",component:u,argTypes:{type:{defaultValue:"default",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},hotelItems:{defaultValue:["\uD68C\uC6D0\uD560\uC778\uAC00"],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},addressText:{defaultValue:"address",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelName:{defaultValue:"\uD638\uD154\uBA85",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"80",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},beforePrice:{defaultValue:"100,000\uC6D0",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},startPrice:{defaultValue:"1\uBC15 50,000\uC6D0 \uBD80\uD130",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:2e5,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},couponBoolean:{defaultValue:!0,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},coupons:{defaultValue:[],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",control:{type:"object"}},timelineTags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},soldOut:{defaultValue:!1,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},I=function(O){return Object(l.jsx)("div",{style:{padding:24},children:Object(l.jsx)(u,Object.assign({},O))})};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelCard {...props} />
    </div>
  );
}`}},I.parameters)},"./packages/travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return I});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.array.map.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),F=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),L=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),w=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),J=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),B=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function D(o){if(o==null)throw new TypeError("Cannot destructure undefined")}var P=Object(B.a)(function(o,O){var k,T,b,s,m,p,g,j,x,d,v,a,n;D(O);var f="533px",S="344px",h="296px",C="180px",M="328px";return{root:(k={display:"inline-flex",alignItems:"center",cursor:"default",backgroundColor:o.colors.white,height:M},k[""+o.media.tablet]={height:"auto"},k),cardContainer:(T={display:"inline-flex",height:M,paddingLeft:"24px",position:"relative"},T[""+o.media.tablet]={display:"block",height:"auto",padding:"0"},T),flexBox:{display:"flex",flexDirection:"row",alignItems:"center"},goImageflexBox:(b={display:"flex",flexDirection:"row",alignItems:"baseline",width:"fit-content",borderBottom:"1px solid "+o.colors.navy1,marginLeft:"41px"},b[""+o.media.tablet]={display:"none"},b),spaceBetweenBox:{justifyContent:"space-between"},groupLabel:(s={position:"absolute",zIndex:1,top:"-32px",width:"100%",paddingLeft:"32px",paddingRight:"12px",alignItems:"flex-start"},s[""+o.media.tablet]={paddingLeft:"16px"},s),soldOutBox:(m={display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0,height:S},m[""+o.media.tablet]={height:C},m["& > b"]={color:o.colors.white,fontFamily:"PT Serif",fontStyle:"italic",fontWeight:700,fontSize:o.fontSizes.h1,lineHeight:o.lineHeights.h1+"px"},m["& > small"]={color:o.colors.white,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:o.fontSizes.h5,lineHeight:o.lineHeights.h5+"px"},m),individualLabel:{marginRight:0},divider:{backgroundColor:o.colors.navy2,flex:1,height:"1px",margin:"45px 0 14px 0"},textRed:{color:o.colors.red2},textNavy1:{color:o.colors.navy1},textGray2:{color:o.colors.gray2},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},mr2:{marginRight:"2px"},labelImageBox:{height:"20px"},cardImageBox:(p={width:f,height:S,overflow:"hidden",position:"absolute",bottom:16},p[""+o.media.tablet]={width:h,height:C,top:"-32px",left:"50%",transform:"translate(-50%, 0)"},p),labelBox:{height:"20px"},priceBox:{height:"36px"},addressBox:(g={marginTop:"11px"},g[""+o.media.tablet]={marginTop:"8px"},g),imageWrapper:(j={width:f,height:S},j[""+o.media.tablet]={width:h,height:C},j.position="relative",j),image:(x={width:f,height:S,position:"inherit",display:"flex",justifyContent:"center",alignItems:"end"},x["&: hover"]={width:"110%",height:"110%",transition:"width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)"},x[""+o.media.tablet]={width:h,height:C},x),textWrapper:(d={padding:"0 72px 16px 72px"},d[""+o.media.tablet]={padding:"0 16px 16px 16px"},d.backgroundColor=o.colors.white,d),timer:(v={padding:"0 16px",backgroundColor:o.colors.green3},v[""+o.media.tablet]={width:h,margin:"auto"},v),tagBox:{marginTop:"24px"},sellout:(a={marginTop:"49px"},a[""+o.media.tablet]={marginTop:"41.5px"},a),arrowImage:{width:"21px",marginLeft:"9.5px"},bottomSection:(n={},n[""+o.media.tablet]={marginTop:"-32px"},n)}}),l=e("./node_modules/react/jsx-runtime.js"),i=["type","hotelImage","hotelItems","addressText","hotelName","percentText","beforePrice","startPrice","priceText","couponBoolean","coupons","timelineTags","soldOut","className","co","overrideStyles"];function c(o,O){if(o==null)return{};var k=r(o,O),T,b;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);for(b=0;b<s.length;b++)T=s[b],!(O.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,T)||(k[T]=o[T]))}return k}function r(o,O){if(o==null)return{};var k={},T=Object.keys(o),b,s;for(s=0;s<T.length;s++)b=T[s],!(O.indexOf(b)>=0)&&(k[b]=o[b]);return k}var u=Object($.forwardRef)(function(o,O){var k=o.type,T=k===void 0?"default":k,b=o.hotelImage,s=o.hotelItems,m=s===void 0?[]:s,p=o.addressText,g=o.hotelName,j=o.percentText,x=o.beforePrice,d=o.startPrice,v=o.priceText,a=o.couponBoolean,n=a===void 0?!1:a,f=o.coupons,S=o.timelineTags,h=o.soldOut,C=h===void 0?!1:h,M=o.className,q=o.co,se=o.overrideStyles,N=c(o,i),Y=Object(E.c)(),K=P({},{overrideStyles:se,name:"HotelFeatureCard"}),U=K.classes,ne=K.cx,ve=function(oe){var ie=oe.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:ne(U.flexBox,U.labelBox),children:[Object(l.jsx)(Z.a,{family:"Pretendard",level:"b3",color:Y.colors.navy1,className:ne(U.label,U.textNavy1),children:j&&"\uC815\uAC00"}),Object(l.jsx)(Z.a,{family:"Pretendard",level:"b3",color:Y.colors.navy1,className:ne(U.label,U.textNavy1),children:x}),n&&Object(l.jsx)(L.a,{fill:!0,children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]}),Object(l.jsxs)("div",{className:ne(U.flexBox,U.priceBox),children:[Object(l.jsx)(J.a,{couponBool:!0,percentBool:!!j,priceBool:!!v,nightBool:!1,percentText:j,priceStartBool:!!d,priceStartText:d,priceText:v,type:"primary"}),ie]})]})},be=function(){return Object(l.jsx)("div",{className:ne(U.sellout),children:Object(l.jsx)(Z.a,{family:"Pretendard",level:"b2",color:Y.colors.gray4,className:ne(U.label),children:"\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})})};return Object(l.jsx)(A.a,Object.assign({ref:O,className:ne(U.root,M),co:q},N,{children:Object(l.jsxs)("div",{className:ne(U.cardContainer),children:[Object(l.jsx)("div",{className:ne(U.imageWrapper),children:Object(l.jsxs)("div",{className:ne(U.flexBox,U.spaceBetweenBox,U.groupLabel),children:[Object(l.jsx)("div",{className:ne(U.flexBox),children:m.map(function(W,oe){return Object(l.jsx)(V.a,{color:(oe+1)%2===0?"blue":(oe+1)%3===0?"purple":"green",fill:!0,size:"medium",className:ne(U.individualLabel),children:W})})}),Object(l.jsx)("div",{className:ne(U.addressBox),children:Object(l.jsx)(Z.a,{family:"Pretendard",level:"b1",color:"rgba(255, 255, 255, 0.8)",children:p})})]})}),Object(l.jsx)("div",{className:ne(U.cardImageBox),children:Object(l.jsx)(w.a,{className:ne(U.image),src:b,height:"100%",children:C&&Object(l.jsxs)("div",{className:ne(U.soldOutBox),children:[Object(l.jsx)("b",{children:"Sold Out"}),Object(l.jsx)("small",{children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})})}),Object(l.jsxs)("div",{className:ne(U.bottomSection),children:[Object(l.jsx)("div",{className:ne(U.timer),children:"timer"}),Object(l.jsxs)("div",{className:ne(U.textWrapper),children:[Object(l.jsx)("div",{className:ne(U.flexBox,U.tagBox),children:Object(l.jsx)(z.a,{items:S,soldOut:C,fill:!1})}),Object(l.jsx)(Z.a,{family:"Pretendard",level:"h4",mobileLevel:"b2",style:{marginTop:"12px"},color:C?Y.colors.gray4:Y.colors.navy1,strong:!0,children:g}),Object(l.jsx)("div",{className:ne(U.flexBox,U.labelImageBox),children:Object(l.jsx)(F.a,{type:T,soldOut:C})}),Object(l.jsx)("div",{className:ne(U.divider)}),C?Object(l.jsx)(be,{}):Object(l.jsx)(ve,{children:Object(l.jsxs)("div",{className:ne(U.goImageflexBox),children:[Object(l.jsx)(Z.a,{family:"PT Serif",level:"h4",mobileLevel:"b2",style:{width:"auto",lineHeight:"24px"},color:Y.colors.navy1,children:"Go"}),Object(l.jsx)(w.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg"),className:ne(U.arrowImage)})]})})]})]})]})}))});u.displayName="@travelmakers-design/core/Header/Section";var t=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelFeatureCard } from \\"../HotelFeatureCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelFeatureCard\\",\\n  component: HotelFeatureCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":125},"endLoc":{"col":1,"line":131},"startBody":{"col":23,"line":125},"endBody":{"col":1,"line":131}}};
    
import React from "react";
import { HotelFeatureCard } from "../HotelFeatureCard";

export default {
  title: "@travelmakers-design/core/Component/HotelFeatureCard",
  component: HotelFeatureCard,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    hotelItems: {
      defaultValue: ["\uD68C\uC6D0\uD560\uC778\uAC00"],
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    addressText: {
      defaultValue: "address",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelName: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "80",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    beforePrice: {
      defaultValue: "100,000\uC6D0",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    startPrice: {
      defaultValue: "1\uBC15 50,000\uC6D0 \uBD80\uD130",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: 200000,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    couponBoolean: {
      defaultValue: true,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    coupons: {
      defaultValue: [],
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    timelineTags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
    <div style={{ padding: 40 }}>
      <HotelFeatureCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,y={Default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}},t=`import React from "react";
import { HotelFeatureCard } from "../HotelFeatureCard";

export default {
  title: "@travelmakers-design/core/Component/HotelFeatureCard",
  component: HotelFeatureCard,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    hotelItems: {
      defaultValue: ["\uD68C\uC6D0\uD560\uC778\uAC00"],
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    addressText: {
      defaultValue: "address",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelName: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "80",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    beforePrice: {
      defaultValue: "100,000\uC6D0",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    startPrice: {
      defaultValue: "1\uBC15 50,000\uC6D0 \uBD80\uD130",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: 200000,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    couponBoolean: {
      defaultValue: true,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    coupons: {
      defaultValue: [],
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    timelineTags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
    <div style={{ padding: 40 }}>
      <HotelFeatureCard {...props} />
    </div>
  );
};
`,y={Default:{startLoc:{col:23,line:125},endLoc:{col:1,line:131},startBody:{col:23,line:125},endBody:{col:1,line:131}}},R=_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelFeatureCard } from \\"../HotelFeatureCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelFeatureCard\\",\\n  component: HotelFeatureCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":125},"endLoc":{"col":1,"line":131},"startBody":{"col":23,"line":125},"endBody":{"col":1,"line":131}}};
    
import React from "react";
import { HotelFeatureCard } from "../HotelFeatureCard";

export default {
  title: "@travelmakers-design/core/Component/HotelFeatureCard",
  component: HotelFeatureCard,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    hotelItems: {
      defaultValue: ["\uD68C\uC6D0\uD560\uC778\uAC00"],
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    addressText: {
      defaultValue: "address",
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelName: {
      defaultValue: "\uD638\uD154\uBA85",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "80",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    beforePrice: {
      defaultValue: "100,000\uC6D0",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    startPrice: {
      defaultValue: "1\uBC15 50,000\uC6D0 \uBD80\uD130",
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: 200000,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    couponBoolean: {
      defaultValue: true,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    coupons: {
      defaultValue: [],
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    timelineTags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description:
        "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
    <div style={{ padding: 40 }}>
      <HotelFeatureCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}}}},title:"@travelmakers-design/core/Component/HotelFeatureCard",component:u,argTypes:{type:{defaultValue:"default",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},hotelItems:{defaultValue:["\uD68C\uC6D0\uD560\uC778\uAC00"],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},addressText:{defaultValue:"address",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelName:{defaultValue:"\uD638\uD154\uBA85",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"80",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},beforePrice:{defaultValue:"100,000\uC6D0",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},startPrice:{defaultValue:"1\uBC15 50,000\uC6D0 \uBD80\uD130",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:2e5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},couponBoolean:{defaultValue:!0,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},coupons:{defaultValue:[],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",control:{type:"object"}},timelineTags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},soldOut:{defaultValue:!1,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},I=function(O){return Object(l.jsx)("div",{style:{padding:40},children:Object(l.jsx)(u,Object.assign({},O))})};I.displayName="Default",I.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 40 }}>
      <HotelFeatureCard {...props} />
    </div>
  );
}`}},I.parameters)},"./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return P});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),G=e("./node_modules/core-js/modules/es.object.assign.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./node_modules/react/index.js"),F=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function J(l){if(l==null)throw new TypeError("Cannot destructure undefined")}var V=Object(w.a)(function(l,i){J(i);var c=["#03936e","#1a749e","#73327a","#ab253e","#b2622e"];return{root:{display:"flex"},item:{}}}),Z=e("./node_modules/react/jsx-runtime.js"),A=["items","soldOut","fill","title","className","co","overrideStyles"];function B(l,i){if(l==null)return{};var c=D(l,i),r,u;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);for(u=0;u<t.length;u++)r=t[u],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,r)||(c[r]=l[r]))}return c}function D(l,i){if(l==null)return{};var c={},r=Object.keys(l),u,t;for(t=0;t<r.length;t++)u=r[t],!(i.indexOf(u)>=0)&&(c[u]=l[u]);return c}var P=Object(z.forwardRef)(function(l,i){var c=l.items,r=c===void 0?[]:c,u=l.soldOut,t=u===void 0?!1:u,y=l.fill,R=y===void 0?!1:y,I=l.title,o=l.className,O=l.co,k=l.overrideStyles,T=B(l,A),b=Object(E.c)(),s=V({},{overrideStyles:k,name:"HotelItems"}),m=s.classes,p=s.cx,g=function(){return Object(Z.jsx)(Z.Fragment,{children:r.map(function(x){return Object(Z.jsx)(F.a,{color:"gray",disabled:t,fill:R,roundness:!0,size:"medium",children:x})})})};return Object(Z.jsx)(L.a,Object.assign({ref:i,className:p(m.root,o),co:O},T,{children:Object(Z.jsx)(g,{})}))});P.displayName="@travelmakers-design/core/HotelItems"},"./packages/travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelItems } from \\"../HotelItems\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelItems\\",\\n  component: HotelItems,\\n  argTypes: {\\n    items: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelItems \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelItems {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":16},"endLoc":{"col":1,"line":22},"startBody":{"col":23,"line":16},"endBody":{"col":1,"line":22}}};
    
import React from "react";
import { HotelItems } from "../HotelItems";

export default {
  title: "@travelmakers-design/core/Component/HotelItems",
  component: HotelItems,
  argTypes: {
    items: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelItems \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.",
      control: { type: "object" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelItems {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelItems {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:24},endLoc:{col:1,line:30},startBody:{col:23,line:24},endBody:{col:1,line:30}}},z=`import React from "react";
import { HotelItems } from "../HotelItems";

export default {
  title: "@travelmakers-design/core/Component/HotelItems",
  component: HotelItems,
  argTypes: {
    items: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelItems \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.",
      control: { type: "object" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelItems {...props} />
    </div>
  );
};
`,F={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:22},startBody:{col:23,line:16},endBody:{col:1,line:22}}};_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelItems } from \\"../HotelItems\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelItems\\",\\n  component: HotelItems,\\n  argTypes: {\\n    items: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelItems \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelItems {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":16},"endLoc":{"col":1,"line":22},"startBody":{"col":23,"line":16},"endBody":{"col":1,"line":22}}};
    
import React from "react";
import { HotelItems } from "../HotelItems";

export default {
  title: "@travelmakers-design/core/Component/HotelItems",
  component: HotelItems,
  argTypes: {
    items: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelItems \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.",
      control: { type: "object" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelItems {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelItems {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:24},endLoc:{col:1,line:30},startBody:{col:23,line:24},endBody:{col:1,line:30}}}}},title:"@travelmakers-design/core/Component/HotelItems",component:X.a,argTypes:{items:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelItems \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.",control:{type:"object"}}}};var L=function(J){return Object(G.jsx)("div",{style:{padding:24},children:Object(G.jsx)(X.a,Object.assign({},J))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelItems {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return D});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/react/index.js"),E=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),F=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function w(P){if(P==null)throw new TypeError("Cannot destructure undefined")}var J=Object(L.a)(function(P,l){return w(l),{root:{display:"flex",alignItems:"center"},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},textGray2:{color:P.colors.gray2}}}),V=e("./node_modules/react/jsx-runtime.js"),Z=["type","soldOut","title","className","co","overrideStyles"];function A(P,l){if(P==null)return{};var i=B(P,l),c,r;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(P);for(r=0;r<u.length;r++)c=u[r],!(l.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,c)||(i[c]=P[c]))}return i}function B(P,l){if(P==null)return{};var i={},c=Object.keys(P),r,u;for(u=0;u<c.length;u++)r=c[u],!(l.indexOf(r)>=0)&&(i[r]=P[r]);return i}var D=Object(G.forwardRef)(function(P,l){var i=P.type,c=i===void 0?"navy":i,r=P.soldOut,u=r===void 0?!1:r,t=P.title,y=P.className,R=P.co,I=P.overrideStyles,o=A(P,Z),O=Object(X.c)(),k=J({},{overrideStyles:I,name:"HotelLabelType"}),T=k.classes,b=k.cx,s=function(x){var d=x.type;switch(d){case"hotel-mini":return Object(V.jsx)(p,{});case"residence":return Object(V.jsx)(g,{});default:return Object(V.jsx)(m,{})}},m=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(E.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-star.svg"),className:b(T.textImage),height:"16px"}),Object(V.jsx)(z.a,{family:"Pretendard",level:"b3",color:u?O.colors.gray4:O.colors.navy2,children:"5\uC131\uAE09 | \uD638\uD154"})]})},p=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(E.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-mini.svg"),className:b(T.textImage),height:"16px"}),Object(V.jsx)(z.a,{family:"Pretendard",level:"b3",color:u?O.colors.gray4:O.colors.navy2,children:"| \uBBF8\uB2C8 \uD638\uD154"})]})},g=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(E.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-residence.svg"),className:b(T.textImage),height:"16px"}),Object(V.jsx)(z.a,{family:"Pretendard",level:"b3",color:u?O.colors.gray4:O.colors.navy2,children:"| \uB808\uC9C0\uB358\uC2A4 \uD638\uD154"})]})};return Object(V.jsx)(F.a,Object.assign({ref:l,className:b(T.root,y),co:R},o,{children:Object(V.jsx)(s,{type:c})}))});D.displayName="@travelmakers-design/core/HotelLabelType"},"./packages/travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelLabelType } from \\"../HotelLabelType\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelLabelType\\",\\n  component: HotelLabelType,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelLabelType {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":27},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":27},"endBody":{"col":1,"line":33}}};
    
import React from "react";
import { HotelLabelType } from "../HotelLabelType";

export default {
  title: "@travelmakers-design/core/Component/HotelLabelType",
  component: HotelLabelType,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <HotelLabelType {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelLabelType {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:41},startBody:{col:23,line:35},endBody:{col:1,line:41}}},z=`import React from "react";
import { HotelLabelType } from "../HotelLabelType";

export default {
  title: "@travelmakers-design/core/Component/HotelLabelType",
  component: HotelLabelType,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <HotelLabelType {...props} />
    </div>
  );
};
`,F={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:33},startBody:{col:23,line:27},endBody:{col:1,line:33}}};_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelLabelType } from \\"../HotelLabelType\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/HotelLabelType\\",\\n  component: HotelLabelType,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelLabelType {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":27},"endLoc":{"col":1,"line":33},"startBody":{"col":23,"line":27},"endBody":{"col":1,"line":33}}};
    
import React from "react";
import { HotelLabelType } from "../HotelLabelType";

export default {
  title: "@travelmakers-design/core/Component/HotelLabelType",
  component: HotelLabelType,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <HotelLabelType {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelLabelType {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:41},startBody:{col:23,line:35},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/core/Component/HotelLabelType",component:X.a,argTypes:{type:{defaultValue:"default",description:"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},soldOut:{defaultValue:!1,description:"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var L=function(J){return Object(G.jsx)("div",{style:{padding:24},children:Object(G.jsx)(X.a,Object.assign({},J))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelLabelType {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return E});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./node_modules/react/jsx-runtime.js"),G=e.n(X),E=function(F){return Object(X.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F,{children:Object(X.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};E.displayName="CloseIcon",E.displayName="@travelmakers-design/core/CloseIcon"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return l});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),E=e("./node_modules/core-js/modules/es.string.small.js"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),w=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),J={xsmall:{width:L.a.xsmall,height:L.a.xsmall},small:{width:L.a.small,height:L.a.small},medium:{width:L.a.medium,height:L.a.medium},large:{width:L.a.large,height:L.a.large}},V={xsmall:8,small:8,medium:16,large:16},Z=Object(z.a)(function(i,c,r){var u,t,y,R=c.variant,I=c.size,o=c.line,O=c.roundness,k=r("loading"),T=r("inner"),b=r("spinner"),s=R||i.colors.navy1;return{loading:(u={ref:k,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},u["."+T]={opacity:0},u["."+b]={display:"flex"},u),solid:(t={backgroundColor:i.palettes[s][i.colorScheme==="light",0],color:i.colorScheme==="light"?i.colors.white:i.colors.black,"&:not(:disabled):hover":{backgroundColor:i.palettes[s][i.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:i.palettes[s][i.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:O?i.radius.round:2,outline:"1px solid "+i.palettes[s][i.colorScheme==="light",0]}}},t["&:disabled:not(."+k+")"]={backgroundColor:i.colors.gray5,color:o?i.colors.black:i.colors.white},t),ghost:(y={backgroundColor:i.colors.transparent,border:"1px solid "+i.palettes[s][i.colorScheme==="light",0],color:i.palettes[s][i.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(w.a)(i.palettes[s][i.colorScheme==="light",0],i.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(w.a)(i.palettes[s][i.colorScheme==="light",1],i.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:O?i.radius.round:2,outline:"1px solid "+i.palettes[s][i.colorScheme==="light",0]}}},y["&:disabled:not(."+k+")"]={backgroundColor:i.colors.gray5,color:o?i.colors.black:i.colors.white},y),root:Object.assign({},J[I],Object(F.b)(i),{borderRadius:O?i.radius.round:i.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:T,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:J[I].width-V[I],height:J[I].height-V[I]}},spinnerWrapper:{ref:b,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),A=e("./node_modules/react/jsx-runtime.js"),B=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function D(i,c){if(i==null)return{};var r=P(i,c),u,t;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(i);for(t=0;t<y.length;t++)u=y[t],!(c.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,u)||(r[u]=i[u]))}return r}function P(i,c){if(i==null)return{};var r={},u=Object.keys(i),t,y;for(y=0;y<u.length;y++)t=u[y],!(c.indexOf(t)>=0)&&(r[t]=i[t]);return r}var l=Object(X.forwardRef)(function(i,c){var r=i.children,u=i.component,t=i.size,y=t===void 0?"medium":t,R=i.variant,I=i.line,o=i.type,O=o===void 0?"button":o,k=i.disabled,T=k===void 0?!1:k,b=i.roundness,s=b===void 0?!1:b,m=i.className,p=i.co,g=i.overrideStyles,j=D(i,B),x=Z({variant:R,size:y,line:I,roundness:s},{overrideStyles:g,name:"Button"}),d=x.classes,v=x.cx;return Object(A.jsx)(G.a,Object.assign({component:u||"button",className:v(d.root,d[I?"ghost":"solid"],m),type:O,disabled:T,ref:c,onTouchStart:function(){},co:p},j,{children:Object(A.jsx)("div",{className:d.inner,children:r})}))});l.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return D});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),E=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),F=e("./node_modules/react/jsx-runtime.js"),L=["size","variant"];function w(P,l){if(P==null)return{};var i=J(P,l),c,r;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(P);for(r=0;r<u.length;r++)c=u[r],!(l.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,c)||(i[c]=P[c]))}return i}function J(P,l){if(P==null)return{};var i={},c=Object.keys(P),r,u;for(u=0;u<c.length;u++)r=c[u],!(l.indexOf(r)>=0)&&(i[r]=P[r]);return i}var V=Object(E.forwardRef)(function(P,l){var i=P.size,c=i===void 0?"medium":i,r=P.variant,u=r===void 0?"primary":r,t=w(P,L);return Object(F.jsx)(G.a,Object.assign({size:c,variant:u,ref:l},t,{children:Object(F.jsx)(z.a,{})}))});V.displayName="@travelmakers-design/core/CloseButton";var Z=`
    
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
`,A={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:93},startBody:{col:23,line:91},endBody:{col:1,line:93}}},B=_.default={title:"@travelmakers-design/core/Component/CloseButton",component:V,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}}},docs:{page:function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)($.g,{}),Object(F.jsx)($.f,{}),Object(F.jsx)($.b,{}),Object(F.jsx)($.d,{}),Object(F.jsx)($.a,{story:$.c}),Object(F.jsx)($.e,{})]})}},actions:{handles:["click button"]}}},D=function(l){return Object(F.jsx)(V,Object.assign({},l))};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},D.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return w});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),X=e("./node_modules/react/index.js"),G=e.n(X),E=e("./node_modules/react/jsx-runtime.js"),z=e.n(E),F=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}},F=`import {
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
`,L={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:102},startBody:{col:23,line:91},endBody:{col:1,line:102}}};_.default={title:"@travelmakers-design/core/Component/IconButton",component:re.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(H.g,{}),Object(E.jsx)(H.f,{}),Object(E.jsx)(H.b,{}),Object(E.jsx)(H.d,{}),Object(E.jsx)(H.a,{story:H.c}),Object(E.jsx)(H.e,{})]})}},actions:{handles:["click button"]}}};var w=function(V){var Z=Object(E.jsx)("svg",{viewBox:"0 0 24 24",children:Object(E.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(E.jsx)(re.a,Object.assign({},V,{children:Z}))};w.displayName="Default",w.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},w.parameters)},"./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return P});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/react/index.js"),E=e("./node_modules/react/jsx-runtime.js"),z=function(i){return Object(E.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i,{children:[Object(E.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(E.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(E.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(E.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};z.displayName="CouponPercentIcon",z.displayName="@travelmakers-design/core/CouponPercentIcon";var F=e("./node_modules/core-js/modules/es.string.small.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),J=function(i){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:i.lineHeights.caption+"px",fontSize:i.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:i.lineHeights.b3+"px",fontSize:i.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:i.lineHeights.b2+"px",fontSize:i.fontSizes.b2}}},V=function(i){return{small:{padding:"2px 4px"},medium:{padding:"0px 12px"},large:{padding:"0px 16px"}}},Z=Object(L.a)(function(l,i){var c,r=i.fill;return{container:Object.assign({},Object(w.b)(l),J(l).small,V(l).small,(c={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:l.colors.green3,marginRight:"6px",gap:"5px",borderRadius:l.radius.medium,backgroundColor:l.colors.green5},c["&:last-child"]={marginRight:0},c)),line:{color:l.colors.green3,background:"inherit",border:"1px solid"}}}),A=["component","fill","children","className","overrideStyles","__staticSelector"];function B(l,i){if(l==null)return{};var c=D(l,i),r,u;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);for(u=0;u<t.length;u++)r=t[u],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,r)||(c[r]=l[r]))}return c}function D(l,i){if(l==null)return{};var c={},r=Object.keys(l),u,t;for(t=0;t<r.length;t++)u=r[t],!(i.indexOf(u)>=0)&&(c[u]=l[u]);return c}var P=Object(G.forwardRef)(function(l,i){var c=l.component,r=l.fill,u=r===void 0?!1:r,t=l.children,y=l.className,R=l.overrideStyles,I=l.__staticSelector,o=I===void 0?"span":I,O=B(l,A),k=c||"span",T=Z({fill:u},{overrideStyles:R,name:"span"}),b=T.classes,s=T.cx;return Object(E.jsxs)(k,Object.assign({ref:i,className:s(b.container,!u&&b.line,y)},O,{children:[Object(E.jsx)(z,{}),t]}))});P.displayName="@travelmakers-design/core/IconTag"},"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return a});var Q=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(X),E=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.object.assign.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e.n(A),D=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.string.iterator.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(c),u=e("./node_modules/core-js/modules/es.array.slice.js"),t=e.n(u),y=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(y),I=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),o=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),O=e("./node_modules/react/index.js"),k=e.n(O),T=e("./node_modules/react/jsx-runtime.js"),b=e.n(T);function s(n){return j(n)||g(n)||p(n)||m()}function m(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(n,f){if(!!n){if(typeof n=="string")return x(n,f);var S=Object.prototype.toString.call(n).slice(8,-1);if(S==="Object"&&n.constructor&&(S=n.constructor.name),S==="Map"||S==="Set")return Array.from(n);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return x(n,f)}}function g(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function j(n){if(Array.isArray(n))return x(n)}function x(n,f){(f==null||f>n.length)&&(f=n.length);for(var S=0,h=new Array(f);S<f;S++)h[S]=n[S];return h}var d=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}},d=`import {
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
`,v={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:66},startBody:{col:23,line:49},endBody:{col:1,line:66}}};_.default={title:"@travelmakers-design/core/Component/IconTag",component:o.a,argTypes:{fill:{defaultValue:!0,description:"IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(I.g,{}),Object(T.jsx)(I.f,{}),Object(T.jsx)(I.b,{}),Object(T.jsx)(I.d,{}),Object(T.jsx)(I.a,{story:I.c}),Object(T.jsx)(I.e,{})]})}},actions:{handles:["click button"]}}};var a=function(f){var S=Object(T.jsx)("svg",{viewBox:"0 0 24 24",children:Object(T.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(T.jsx)("div",{style:{padding:24,display:"flex"},children:s(Array(1).keys()).map(function(h,C){return Object(T.jsxs)(o.a,Object.assign({},f,{children:["\uCFE0\uD3F0 \uC801\uC6A9\uAC00",C+1]}))})})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/Image/Image.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return m});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),E=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),A=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),B=e("./node_modules/core-js/modules/es.object.assign.js"),D=e("./node_modules/react/index.js"),P=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),l=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),i=Object(l.a)(function(p,g){var j=g.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:j?j in p.radius?p.radius[j]:j:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(p.colorScheme==="dark",p.palettes.primary[0]),backgroundColor:(p.colorScheme==="dark",p.palettes.primary[0]),borderRadius:j?j in p.radius?p.radius[j]:j:0}}}),c=e("./node_modules/react/jsx-runtime.js"),r=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function u(p,g){return o(p)||I(p,g)||y(p,g)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(p,g){if(!!p){if(typeof p=="string")return R(p,g);var j=Object.prototype.toString.call(p).slice(8,-1);if(j==="Object"&&p.constructor&&(j=p.constructor.name),j==="Map"||j==="Set")return Array.from(p);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return R(p,g)}}function R(p,g){(g==null||g>p.length)&&(g=p.length);for(var j=0,x=new Array(g);j<g;j++)x[j]=p[j];return x}function I(p,g){var j=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(j!=null){var x=[],d=!0,v=!1,a,n;try{for(j=j.call(p);!(d=(a=j.next()).done)&&(x.push(a.value),!(g&&x.length===g));d=!0);}catch(f){v=!0,n=f}finally{try{!d&&j.return!=null&&j.return()}finally{if(v)throw n}}return x}}function o(p){if(Array.isArray(p))return p}function O(p,g){if(p==null)return{};var j=k(p,g),x,d;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(p);for(d=0;d<v.length;d++)x=v[d],!(g.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,x)||(j[x]=p[x]))}return j}function k(p,g){if(p==null)return{};var j={},x=Object.keys(p),d,v;for(v=0;v<x.length;v++)d=x[v],!(g.indexOf(d)>=0)&&(j[d]=p[d]);return j}var T=null,b="loadImage",s=function(g,j){g.forEach(function(x){x.isIntersecting&&(j.unobserve(x.target),x.target.dispatchEvent(new CustomEvent(b)))})},m=Object(D.forwardRef)(function(p,g){var j=p.lazy,x=p.threshold,d=x===void 0?.5:x,v=p.placeholder,a=p.src,n=p.radius,f=p.width,S=f===void 0?"100%":f,h=p.height,C=h===void 0?"auto":h,M=p.alt,q=p.fit,se=p.style,N=p.className,Y=p.co,K=p.overrideStyles,U=O(p,r),ne=i({radius:n},{overrideStyles:K,name:"Image"}),ve=ne.classes,be=ne.cx,W=Object(D.useState)(!1),oe=u(W,2),ie=oe[0],ue=oe[1],ye=Object(D.useState)(!1),pe=u(ye,2),ge=pe[0],le=pe[1],te=Object(D.useRef)(null),ce={width:S,height:C,objectFit:q};return Object(D.useImperativeHandle)(g,function(){return te.current}),Object(D.useEffect)(function(){if(!j){le(!0);return}var de=function(){return le(!0)},xe=te.current;return xe&&xe.addEventListener(b,de),function(){xe&&xe.removeEventListener(b,de)}},[j]),Object(D.useEffect)(function(){!j||(T=new IntersectionObserver(s,{threshold:d}),te.current&&T.observe(te.current))},[j,d]),Object(c.jsxs)(P.a,Object.assign({className:be(ve.root,N),co:Y},U,{children:[Object(c.jsx)("img",{ref:te,src:a,alt:M,className:be(ve.image),style:ce,onLoad:function(){return ue(!0)}}),(!ie||j&&!ge)&&v&&Object(c.jsx)("div",{className:ve.placeholder,title:M,children:v}),U.children]}))});m.displayName="@travelmakers-design/core/Image"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return a});var Q=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.symbol.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e.n(A),D=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e.n(D),l=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(c),u=e("./node_modules/core-js/modules/es.array.slice.js"),t=e.n(u),y=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(y),I=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),o=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),O=e("./node_modules/react/index.js"),k=e.n(O),T=e("./node_modules/react/jsx-runtime.js"),b=e.n(T);function s(n){return j(n)||g(n)||p(n)||m()}function m(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(n,f){if(!!n){if(typeof n=="string")return x(n,f);var S=Object.prototype.toString.call(n).slice(8,-1);if(S==="Object"&&n.constructor&&(S=n.constructor.name),S==="Map"||S==="Set")return Array.from(n);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return x(n,f)}}function g(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function j(n){if(Array.isArray(n))return x(n)}function x(n,f){(f==null||f>n.length)&&(f=n.length);for(var S=0,h=new Array(f);S<f;S++)h[S]=n[S];return h}var d=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},d=`import {
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
`,v={Default:{startLoc:{col:23,line:80},endLoc:{col:1,line:90},startBody:{col:23,line:80},endBody:{col:1,line:90}}};_.default={title:"@travelmakers-design/core/Component/Image",component:o.a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},radius:{defaultValue:"small",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},threshold:{defaultValue:.5,description:"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",control:{type:"number"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},fit:{defaultValue:"cover",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",options:["cover","fill","contain"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(I.g,{}),Object(T.jsx)(I.f,{}),Object(T.jsx)(I.b,{}),Object(T.jsx)(I.d,{}),Object(T.jsx)(I.a,{story:I.c}),Object(T.jsx)(I.e,{})]})}}}};var a=function(f){return Object(T.jsx)(T.Fragment,{children:s(new Array(10)).map(function(S,h){return Object(T.jsx)("div",{children:Object(T.jsx)(o.a,Object.assign({placeholder:Object(T.jsx)("div",{children:"Placeholder"})},f))},h)})})};a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return A});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/react/index.js"),E=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),F=function(D){return{small:{fontFamily:"PT Serif",fontSize:D.fontSizes.b3,lineHeight:D.lineHeights.b3+"px"},large:{fontFamily:"PT Serif",fontSize:D.fontSizes.h5,lineHeight:D.lineHeights.h5+"px"}}},L=Object(z.a)(function(B,D){var P=D.type,l=P===void 0?"text":P,i=D.color,c=i===void 0?"navy":i,r=D.size,u=r===void 0?"large":r;return{root:{display:"flex",alignItems:"center"},indicator:Object.assign({},F(B)[u],{fontFamily:"PT Serif",fontWeight:"700",color:c==="white"?"white":B.colors.navy1,letterSpacing:"2.66667px"})}}),w=e("./node_modules/react/jsx-runtime.js"),J=["type","color","size","totalPage","currentPage","className","co","overrideStyles"];function V(B,D){if(B==null)return{};var P=Z(B,D),l,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(B);for(i=0;i<c.length;i++)l=c[i],!(D.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(B,l)||(P[l]=B[l]))}return P}function Z(B,D){if(B==null)return{};var P={},l=Object.keys(B),i,c;for(c=0;c<l.length;c++)i=l[c],!(D.indexOf(i)>=0)&&(P[i]=B[i]);return P}var A=Object(G.forwardRef)(function(B,D){var P=B.type,l=P===void 0?"text":P,i=B.color,c=i===void 0?"navy":i,r=B.size,u=r===void 0?"large":r,t=B.totalPage,y=t===void 0?1:t,R=B.currentPage,I=R===void 0?1:R,o=B.className,O=B.co,k=B.overrideStyles,T=V(B,J),b=Object(X.c)(),s=L({type:l,color:c,size:u},{overrideStyles:k,name:"Indicator"}),m=s.classes,p=s.cx;return Object(w.jsx)(E.a,Object.assign({ref:D,className:p(m.root,o),co:O},T,{children:Object(w.jsxs)("span",{className:p(m.indicator),children:[I,"/",y]})}))});A.displayName="@travelmakers-design/core/Indicator"},"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},z=`import React from "react";
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
`,F={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design/core/Component/Indicator",component:X.a,argTypes:{color:{defaultValue:"navy",description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},type:{defaultValue:"text",description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["text","bullet"],control:{type:"inline-radio"}},totalPage:{defaultValue:1,description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},currentPage:{defaultValue:1,description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}}}};var L=function(J){return Object(G.jsx)("div",{style:{padding:24},children:Object(G.jsx)(X.a,Object.assign({},J))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Indicator {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return t}),e.d(_,"WithIcon",function(){return y}),e.d(_,"WithRightSection",function(){return R}),e.d(_,"Textarea",function(){return I});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.object.keys.js"),H=e("./node_modules/core-js/modules/es.array.index-of.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.string.small.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./node_modules/react/index.js"),F=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),V={xsmall:12,small:14,medium:14,large:14,xlarge:16},Z=Object(w.a)(function(o,O){var k=O.multiline,T=O.roundness,b=O.invalid,s=O.width,m=O.descriptionType,p=o.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(J.b)(o),{height:k?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:k?o.lineHeight:o.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:o.fontSizes.b2,width:s?s+"px":"100%",color:o.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:T?o.radius.round:2,border:"1px solid "+o.colors.gray5,backgroundColor:o.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:o.colors.gray1,color:o.colors.gray1},"&:disabled":{backgroundColor:o.colors.gray7,borderColor:o.colors.gray5,color:o.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:o.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+p,"&::placeholder":{opacity:1}},disabled:{backgroundColor:o.colors.gray7,borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:o.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),A=e("./node_modules/react/jsx-runtime.js"),B=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function D(o,O){if(o==null)return{};var k=P(o,O),T,b;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);for(b=0;b<s.length;b++)T=s[b],!(O.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,T)||(k[T]=o[T]))}return k}function P(o,O){if(o==null)return{};var k={},T=Object.keys(o),b,s;for(s=0;s<T.length;s++)b=T[s],!(O.indexOf(b)>=0)&&(k[b]=o[b]);return k}var l=Object(z.forwardRef)(function(o,O){var k,T,b=o.component,s=o.width,m=o.label,p=o.description,g=o.descriptionType,j=g===void 0?"description":g,x=o.icon,d=o.rightSectionWidth,v=d===void 0?48:d,a=o.rightSection,n=o.rightSectionProps,f=n===void 0?{}:n,S=o.wrapperProps,h=o.invalid,C=h===void 0?!1:h,M=o.required,q=M===void 0?!1:M,se=o.disabled,N=se===void 0?!1:se,Y=o.multiline,K=Y===void 0?!1:Y,U=o.roundness,ne=U===void 0?!1:U,ve=o.className,be=o.style,W=o.co,oe=o.overrideStyles,ie=o.__staticSelector,ue=ie===void 0?"Input":ie,ye=D(o,B),pe=Object(E.c)(),ge=Z({roundness:ne,multiline:K,invalid:C,width:s,descriptionType:j},{overrideStyles:oe,name:ue}),le=ge.classes,te=ge.cx,ce=b||"input";return Object(A.jsxs)(L.a,{style:{width:s?s+"px":"100%"},children:[m&&Object(A.jsx)(F.a,{level:"b2",family:"Pretendard",color:pe.colors.gray1,style:{marginBottom:4},children:m}),Object(A.jsxs)(L.a,Object.assign({className:te(le.wrapper,ve),co:W,style:be},S,{children:[x&&Object(A.jsx)("div",{className:te(le.icon,(k={},k[le.disabled]=N,k)),children:x}),Object(A.jsx)(ce,Object.assign({},ye,{ref:O,className:te(le.input,(T={},T[le.withIcon]=x,T[le.invalid]=C,T[le.disabled]=N,T)),required:q,disabled:N,style:{paddingRight:a?v:pe.spacing.small}})),a&&Object(A.jsx)("div",Object.assign({},f,{style:Object.assign({},f.style,{paddingRight:32}),className:te(le.rightSection,f.className),children:Object(A.jsx)(F.a,{level:"b2",family:"Pretendard",color:pe.colors.green2,children:a})}))]})),p&&j==="description"?Object(A.jsx)(F.a,{level:"b3",family:"Pretendard",color:C?pe.colors.red2:pe.colors.navy3,style:{marginTop:4},children:p}):C&&Object(A.jsx)(F.a,{level:"b3",family:"Pretendard",color:j==="error"?pe.colors.red2:j==="success"?pe.colors.green3:pe.colors.navy3,style:{marginTop:4},children:p})]})});l.displayName="@travelmakers-design/core/Input";var i=`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,c={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},WithIcon:{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},WithRightSection:{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},Textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}},i=`import { Input } from "../Input";
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
`,c={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:120},startBody:{col:23,line:114},endBody:{col:1,line:120}},WithIcon:{startLoc:{col:24,line:122},endLoc:{col:1,line:128},startBody:{col:24,line:122},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:138},startBody:{col:32,line:130},endBody:{col:1,line:138}},Textarea:{startLoc:{col:24,line:140},endLoc:{col:1,line:146},startBody:{col:24,line:140},endBody:{col:1,line:146}}},r=_.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},"with-icon":{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},"with-right-section":{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}}}},title:"@travelmakers-design/core/Component/Input",component:l,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},u=function(){return Object(A.jsx)("svg",{viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};u.displayName="Icon";var t=function(O){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(l,Object.assign({},O))})};t.displayName="Default";var y=function(O){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(l,Object.assign({icon:Object(A.jsx)(u,{})},O))})};y.displayName="WithIcon";var R=function(O){var k="\uC778\uC99D\uC644\uB8CC";return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(l,Object.assign({icon:Object(A.jsx)(u,{})},O,{rightSection:k}))})};R.displayName="WithRightSection";var I=function(O){return Object(A.jsx)("div",{style:{padding:24},children:Object(A.jsx)(l,Object.assign({component:"textarea",multiline:!0},O))})};I.displayName="Textarea",t.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},t.parameters),y.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},y.parameters),R.parameters=Object.assign({storySource:{source:`(props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
}`}},R.parameters),I.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},I.parameters)},"./packages/travelmakers-design-core/src/components/Modal/Modal.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return c});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),G=e("./node_modules/react/index.js"),E=e("./node_modules/react-dom/index.js"),z=e.n(E),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),L=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),w=function(u,t){return{small:{fontFamily:"Pretendard",fontWeight:t==="text"?"bold":"normal",lineHeight:u.lineHeights.caption+"px",fontSize:u.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:t==="text"?"bold":"normal",lineHeight:u.lineHeights.b3+"px",fontSize:u.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:t==="text"?"bold":"normal",lineHeight:u.lineHeights.b2+"px",fontSize:u.fontSizes.b2}}},J=function(u,t){return{small:{padding:t==="text"?"0px 4px":"0px 8px"},medium:{padding:t==="text"?"0px 5px":"0px 8px"},large:{padding:t==="text"?"1px 7px":"0px 8px"}}},V=Object(F.a)(function(r,u){var t,y,R,I,o,O,k,T,b,s,m,p,g,j,x,d,v,a=u.size,n=u.type;return{container:Object.assign({},Object(L.b)(r),{display:"flex",position:"fixed",flexDirection:"column",justifyContent:"flex-end",backgroundColor:"rgba(0, 0, 0, 0.7)",width:"100%",height:"100%",zIndex:"10000",top:"0",left:"0"}),absoluteContainer:(y={width:"100%",height:"100%",position:"absolute",display:"flex",justifyContent:"center",alignItems:"flex-end",top:"0",backgroundColor:r.colors.white},y["&.popup"]={alignItems:"center",backgroundColor:"transparent"},y["&.modalPopup"]=(t={position:"relative",maxWidth:"1200px",margin:"0 auto",maxHeight:"90vh",height:"100%",borderRadius:"30px 30px 0 0"},t[""+r.media.tablet]={maxHeight:"100%",height:"100%",borderRadius:"0"},t),y),closeContainer:{position:"absolute",width:"100%",height:"100%",zIndex:"100"},modalContainer:(R={display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",width:"100%",maxHeight:"100%",borderRadius:"6px",boxSizing:"border-box",zIndex:"200"},R["&.popup"]={justifyContent:"center"},R["&.max-h"]={height:"100%"},R),modalContentsContainer:(o={display:"flex",position:"relative",justifyContent:"center",width:"100%",height:"100%",padding:"40px",overflowY:"hidden"},o[""+r.media.tablet]={padding:"0"},o[""+r.media.desktop]=(I={},I["-ms-overflow-style"]="none",I["&::-webkit-scrollbar"]={display:"none"},I),o["&.optionsBox, &.modalPopup, &.toastPopup"]={padding:0},o["&.Agreement"]={height:"calc(100% - 77px)"},o),modalContents:{display:"block",position:"relative",width:"100%",maxWidth:"768px"},modalHeader:(T={display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"0"},T[""+r.media.desktop]={padding:"24px 16px 12px 24px"},T["&.optionsBox"]=(O={height:"40px",padding:"0 16px",background:r.colors.navy1},O[""+r.media.tablet]={height:"64px"},O),T["&.modalPopup"]=(k={color:r.colors.navy1,height:"auto",padding:"40px 12px"},k["@media screen and (min-width: 800px)"]={padding:"40px 0"},k["@media screen and (max-height: 640px)"]={paddingTop:"24px",paddingBottom:"24px"},k.justifyContent="space-between",k[""+r.media.tablet]={justifyContent:"start",padding:"0 16px",height:"44px",backgroundColor:r.colors.navy1,color:r.colors.white},k),T["&.toastPopup"]={justifyContent:"space-between"},T),modalTitle:(m={fontSize:"18px",fontWeight:"700",lineHeight:"1.39",color:r.colors.navy1,textAlign:"left",whiteSpace:"nowrap"},m["&.optionsBox"]=(b={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:"400",fontSize:"18px",lineHeight:"24px",color:"#FFFFFF"},b[""+r.media.tablet]={fontSize:"14px",lineHeight:"20px"},b),m["&.modalPopup"]=(s={color:r.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px"},s[""+r.media.tablet]={fontWeight:400,fontSize:"12px",lineHeight:"20px",color:r.colors.white},s),m[".toastPopup"]={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:"12px",lineHeight:"20px",color:r.colors.white},m),modalBackIcon:(p={width:"16px",height:"16px",cursor:"pointer",marginRight:"8px",display:"none"},p[""+r.media.tablet]={display:"inline-block"},p),modalCloseIcon:(g={width:"24px",height:"24px",cursor:"pointer",marginRight:"8px",display:"inline-block"},g[""+r.media.tablet]={display:"none"},g),modalContentText:(d={display:"block",width:"100%",maxHeight:"100%",lineHeight:1.5,whiteSpace:"pre-wrap",color:r.colors.navy1,overflowY:"auto",paddingBottom:"16px"},d[""+r.media.desktop]={fontSize:"12px",padding:"12px 20px"},d["&.Agreement"]=(x={height:"calc(100% - 44px)"},x[""+r.media.tablet]=(j={height:"calc(100% - 104px)"},j["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},j),x),d),modalAbsolute:(v={display:"block",position:"fixed",bottom:"0",width:"100%",maxWidth:"768px",zIndex:"100",backgroundColor:"white",padding:"16px 0"},v[""+r.media.desktop]={padding:"16px"},v)}}),Z=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),A=e("./node_modules/react/jsx-runtime.js"),B=function(u){return Object(A.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u,{children:Object(A.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(A.jsx)("path",{stroke:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(A.jsx)("path",{fill:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};B.displayName="IcBackArrow",B.displayName="@travelmakers-design/core/IcBackArrow";var D=function(u){return Object(A.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u,{children:Object(A.jsx)("g",{stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",children:Object(A.jsx)("path",{d:"M4.875 18.712 19.087 4.5M4.875 4.5l14.212 14.212"})})}))};D.displayName="IcClose",D.displayName="@travelmakers-design/core/IcClose";var P=["component","open","ModalContainerClassName","onClose","containerStyle","wrapperStyle","modalPopup","centerPopup","children","className","overrideStyles","title","handleAgree","agreeText","backIcon","__staticSelector"];function l(r,u){if(r==null)return{};var t=i(r,u),y,R;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(r);for(R=0;R<I.length;R++)y=I[R],!(u.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,y)||(t[y]=r[y]))}return t}function i(r,u){if(r==null)return{};var t={},y=Object.keys(r),R,I;for(I=0;I<y.length;I++)R=y[I],!(u.indexOf(R)>=0)&&(t[R]=r[R]);return t}var c=Object(G.forwardRef)(function(r,u){var t=r.component,y=r.open,R=r.ModalContainerClassName,I=r.onClose,o=r.containerStyle,O=o===void 0?{}:o,k=r.wrapperStyle,T=k===void 0?{}:k,b=r.modalPopup,s=b===void 0?!1:b,m=r.centerPopup,p=m===void 0?!1:m,g=r.children,j=r.className,x=r.overrideStyles,d=r.title,v=d===void 0?"":d,a=r.handleAgree,n=r.agreeText,f=n===void 0?"\uB3D9\uC758\uD558\uAE30":n,S=r.backIcon,h=S===void 0?!0:S,C=r.__staticSelector,M=C===void 0?"span":C,q=l(r,P),se=t||"span",N=V({},{overrideStyles:x,name:"span"}),Y=N.classes,K=N.cx,U=document.createElement("div");return document.body.appendChild(U),Object(X.b)(y),Object(A.jsx)(A.Fragment,{children:y?z.a.createPortal(Object(A.jsx)(se,Object.assign({ref:u,className:K(Y.container,j)},q,{children:Object(A.jsx)("div",{className:K(Y.absoluteContainer,(s?"modalPopup":"")+(p?" popup":"")),style:O,children:Object(A.jsx)("div",{onClick:I,className:K(Y.closeContainer,(s?"modalPopup":"")+(p?" popup":"")),children:Object(A.jsx)("div",{className:K(Y.modalContainer,R||(s?" modalPopup":"")+(p?" popup":"")),style:T,children:Object(A.jsxs)("div",{className:K(Y.modalContentsContainer),children:[Object(A.jsxs)("div",{className:K(Y.modalContents,"modalPopup Agreement"),children:[Object(A.jsxs)("div",{className:K(Y.modalHeader,"modalPopup Agreement"),children:[Object(A.jsx)(B,{onClick:I,className:K(Y.modalBackIcon,"modalPopup Agreement")}),Object(A.jsx)("span",{className:K(Y.modalTitle,"modalPopup Agreement"),children:v}),Object(A.jsx)(D,{onClick:I,className:K(Y.modalCloseIcon,"modalPopup Agreement")})]}),Object(A.jsx)("div",{className:K(Y.modalContentText),children:Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:g}})})]}),Object(A.jsx)("div",{className:K(Y.modalAbsolute),children:Object(A.jsx)(Z.a,{fullWidth:!0,onClick:a,children:f})})]})})})})})),document.body):null})});c.displayName="@travelmakers-design/core/Modal"},"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return v});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e.n(A),D=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.array.slice.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(c),u=e("./node_modules/core-js/modules/es.array.from.js"),t=e.n(u),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),R=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),I=e("./node_modules/react/index.js"),o=e.n(I),O=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),k=e("./node_modules/react/jsx-runtime.js"),T=e.n(k);function b(a,n){return j(a)||g(a,n)||m(a,n)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(a,n){if(!!a){if(typeof a=="string")return p(a,n);var f=Object.prototype.toString.call(a).slice(8,-1);if(f==="Object"&&a.constructor&&(f=a.constructor.name),f==="Map"||f==="Set")return Array.from(a);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return p(a,n)}}function p(a,n){(n==null||n>a.length)&&(n=a.length);for(var f=0,S=new Array(n);f<n;f++)S[f]=a[f];return S}function g(a,n){var f=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(f!=null){var S=[],h=!0,C=!1,M,q;try{for(f=f.call(a);!(h=(M=f.next()).done)&&(S.push(M.value),!(n&&S.length===n));h=!0);}catch(se){C=!0,q=se}finally{try{!h&&f.return!=null&&f.return()}finally{if(C)throw q}}return S}}function j(a){if(Array.isArray(a))return a}var x=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}},x=`import {
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
`,d={Default:{startLoc:{col:23,line:97},endLoc:{col:1,line:114},startBody:{col:23,line:97},endBody:{col:1,line:114}}};_.default={title:"@travelmakers-design/core/Component/Modal",component:R.a,argTypes:{open:{defaultValue:!1,description:"Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},modalPopup:{defaultValue:!1,description:"\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",table:{type:{summary:"boolean"}},control:{type:"boolean"}},centerPopup:{defaultValue:!1,description:"\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",table:{type:{summary:"boolean"}},control:{type:"boolean"}},ModalContainerClassName:{defaultValue:"",description:"Container\uC758 ClassName \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},agreeText:{defaultValue:"\uB3D9\uC758\uD558\uAE30",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}}},docs:{page:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(y.g,{}),Object(k.jsx)(y.f,{}),Object(k.jsx)(y.b,{}),Object(k.jsx)(y.d,{}),Object(k.jsx)(y.a,{story:y.c}),Object(k.jsx)(y.e,{})]})}}}};var v=function(n){var f=Object(I.useState)(!1),S=b(f,2),h=S[0],C=S[1];return Object(k.jsxs)("div",{style:{padding:24,display:"flex",height:500},children:[Object(k.jsx)(O.a,{onClick:function(){C(function(q){return!q})},style:{zIndex:10001},children:"\uBAA8\uB2EC"}),Object(k.jsx)(R.a,Object.assign({},n,{open:h,title:"title",children:"content"}))]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/Price/Price.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return A});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/react/index.js"),E=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/react/jsx-runtime.js"),F=function(D){return Object(z.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D,{children:[Object(z.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(z.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(z.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(z.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};F.displayName="CouponPercent",F.displayName="@travelmakers-design/core/CouponPercent";var L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=Object(L.a)(function(B,D){var P=D.type,l=P===void 0?"primary":P;return{root:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},percentText:{fontFamily:"Pretendard",fontSize:B.fontSizes.h6,lineHeight:B.lineHeights.h6+"px",fontWeight:"700",color:B.colors.red2,width:"39px"},nightText:{fontFamily:"Pretendard",fontSize:B.fontSizes.b3,lineHeight:B.lineHeights.b3+"px",fontWeight:"700",color:B.colors.navy1,textAlign:"right",width:"28px"},priceText:{fontFamily:"Pretendard",fontSize:B.fontSizes.h4,lineHeight:B.lineHeights.h4+"px",fontWeight:"700",color:B.colors.navy1,marginLeft:"2px"},priceBeforeText:{fontFamily:"Pretendard",fontSize:B.fontSizes.b2,lineHeight:B.lineHeights.b2+"px",fontWeight:"700",color:B.colors.navy1},priceStartText:{fontFamily:"Pretendard",fontSize:B.fontSizes.b3,lineHeight:B.lineHeights.b3+"px",fontWeight:"400",color:B.colors.gray2,marginLeft:"4px"},labelSecondary:{fontFamily:"Pretendard",fontSize:B.fontSizes.b3,lineHeight:B.lineHeights.b3+"px",fontWeight:"400",color:B.colors.navy1,marginRight:"4px"},nightSecondaryText:{fontFamily:"Pretendard",fontSize:B.fontSizes.b3,lineHeight:B.lineHeights.b3+"px",fontWeight:"700",color:B.colors.navy1,textAlign:"right",marginRight:"4px"},priceSecondaryText:{fontFamily:"Pretendard",fontSize:B.fontSizes.b3,lineHeight:B.lineHeights.b3+"px",fontWeight:"400",textDecorationLine:"line-through",color:B.colors.gray2},priceBeforeSecondaryText:{fontFamily:"Pretendard",fontSize:B.fontSizes.b3,lineHeight:B.lineHeights.b3+"px",fontWeight:"400",textDecorationLine:"line-through",color:B.colors.gray2},couponWrap:{display:"flex",alignItems:"center",width:"74px",background:B.colors.green5,borderRadius:"4px",marginLeft:"4px"},couponWord:{display:"block",width:"fit-content",fontFamily:"Pretendard",fontStyle:"normal",fontWeight:"700",fontSize:"10px",lineHeight:"16px",color:B.colors.green3}}}),J=["type","label","percentText","nightText","priceText","priceStartText","percentBool","nightBool","priceBool","priceStartBool","couponBool","className","co","overrideStyles"];function V(B,D){if(B==null)return{};var P=Z(B,D),l,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(B);for(i=0;i<c.length;i++)l=c[i],!(D.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(B,l)||(P[l]=B[l]))}return P}function Z(B,D){if(B==null)return{};var P={},l=Object.keys(B),i,c;for(c=0;c<l.length;c++)i=l[c],!(D.indexOf(i)>=0)&&(P[i]=B[i]);return P}var A=Object(G.forwardRef)(function(B,D){var P=B.type,l=P===void 0?"primary":P,i=B.label,c=i===void 0?"":i,r=B.percentText,u=r===void 0?"":r,t=B.nightText,y=t===void 0?"":t,R=B.priceText,I=B.priceStartText,o=I===void 0?"":I,O=B.percentBool,k=O===void 0?!0:O,T=B.nightBool,b=T===void 0?!0:T,s=B.priceBool,m=s===void 0?!0:s,p=B.priceStartBool,g=p===void 0?!0:p,j=B.couponBool,x=j===void 0?!0:j,d=B.className,v=B.co,a=B.overrideStyles,n=V(B,J),f=Object(X.c)(),S=w({type:l},{overrideStyles:a,name:"Price"}),h=S.classes,C=S.cx,M=function(){return Object(z.jsxs)(E.a,Object.assign({ref:D,className:C(h.root,d),co:v},n,{children:[k&&Object(z.jsxs)("span",{className:C(h.percentText),children:[u,"%"]}),b&&Object(z.jsx)("span",{className:C(h.nightText),children:y}),m&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("span",{className:C(h.priceText),children:R.toLocaleString("ko")}),Object(z.jsx)("span",{className:C(h.priceBeforeText),children:"\uC6D0~"})]}),g&&Object(z.jsxs)("span",{className:C(h.priceStartText),children:["| ",o]})]}))},q=function(){return Object(z.jsxs)(E.a,Object.assign({ref:D,className:C(h.root,d),co:v},n,{children:[c&&Object(z.jsxs)("span",{className:C(h.labelSecondary),children:[c,"%"]}),b&&Object(z.jsx)("span",{className:C(h.nightSecondaryText),children:y}),m&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("span",{className:C(h.priceSecondaryText),children:R.toLocaleString("ko")}),Object(z.jsx)("span",{className:C(h.priceBeforeSecondaryText),children:"\uC6D0"})]}),x&&Object(z.jsxs)("div",{className:C(h.couponWrap),children:[Object(z.jsx)(F,{style:{margin:"0 4px"}}),Object(z.jsx)("span",{className:C(h.couponWord),children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]})]}))};return l==="primary"?Object(z.jsx)(M,{}):Object(z.jsx)(q,{})});A.displayName="@travelmakers-design/core/Price"},"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Price } from \\"../Price\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Price\\",\\n  component: Price,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\\",\\n      description: \\"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"70\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    nightText: {\\n      defaultValue: \\"1\uBC15\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: \\"10000\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    priceStartText: {\\n      defaultValue: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    nightBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    priceBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    priceStartBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    couponBool: {\\n      defaultValue: true,\\n      description:\\n        \\" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Price {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":118},"endLoc":{"col":1,"line":124},"startBody":{"col":23,"line":118},"endBody":{"col":1,"line":124}}};
    
import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers-design/core/Component/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "70",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    nightText: {
      defaultValue: "1\uBC15",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: "10000",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1\uBC15 100,000\uC6D0\uBD80\uD130",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    nightBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceStartBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    couponBool: {
      defaultValue: true,
      description:
        " (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
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
      <Price {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Price {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:126},endLoc:{col:1,line:132},startBody:{col:23,line:126},endBody:{col:1,line:132}}},z=`import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers-design/core/Component/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "70",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    nightText: {
      defaultValue: "1\uBC15",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: "10000",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1\uBC15 100,000\uC6D0\uBD80\uD130",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    nightBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceStartBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    couponBool: {
      defaultValue: true,
      description:
        " (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
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
      <Price {...props} />
    </div>
  );
};
`,F={Default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}};_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Price } from \\"../Price\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Price\\",\\n  component: Price,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\\",\\n      description: \\"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"70\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    nightText: {\\n      defaultValue: \\"1\uBC15\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: \\"10000\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    priceStartText: {\\n      defaultValue: \\"1\uBC15 100,000\uC6D0\uBD80\uD130\\",\\n      description: \\"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    nightBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    priceBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    priceStartBool: {\\n      defaultValue: true,\\n      description: \\" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    couponBool: {\\n      defaultValue: true,\\n      description:\\n        \\" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Price {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":118},"endLoc":{"col":1,"line":124},"startBody":{"col":23,"line":118},"endBody":{"col":1,"line":124}}};
    
import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers-design/core/Component/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "70",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    nightText: {
      defaultValue: "1\uBC15",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: "10000",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1\uBC15 100,000\uC6D0\uBD80\uD130",
      description: "Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    nightBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceStartBool: {
      defaultValue: true,
      description: " Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    couponBool: {
      defaultValue: true,
      description:
        " (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",
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
      <Price {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Price {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:126},endLoc:{col:1,line:132},startBody:{col:23,line:126},endBody:{col:1,line:132}}}}},title:"@travelmakers-design/core/Component/Price",component:X.a,argTypes:{type:{defaultValue:"primary",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],control:{type:"inline-radio"}},label:{defaultValue:"",description:"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"70",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},nightText:{defaultValue:"1\uBC15",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:"10000",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceStartText:{defaultValue:"1\uBC15 100,000\uC6D0\uBD80\uD130",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},nightBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},priceBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},priceStartBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},couponBool:{defaultValue:!0,description:" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var L=function(J){return Object(G.jsx)("div",{style:{padding:24},children:Object(G.jsx)(X.a,Object.assign({},J))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Price {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/Progress/Progress.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),G=e("./node_modules/react/index.js"),E=e("./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),L=function(P){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:P.fontSizes.h4,lineHeight:P.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:P.fontSizes.h1,lineHeight:P.lineHeights.h1+"px"}}},w=Object(F.a)(function(D,P){var l=P.color,i=l===void 0?"navy":l,c=P.indicator,r=c===void 0?!1:c,u=P.size,t=u===void 0?"large":u;return{root:{display:"flex",alignItems:"center"},indicator:{marginRight:"16px"},barContainer:{display:"block",position:"relative",width:"30vw",maxWidth:t==="small"?"171px":"456px",height:"2px",borderRadius:"3px",backgroundColor:i==="white"?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.1)"},barActive:{display:"block",position:"absolute",width:"0%",height:"2px",borderRadius:"3px",backgroundColor:i==="white"?D.colors.white:D.colors.navy1}}}),J=e("./node_modules/react/jsx-runtime.js"),V=["color","indicator","size","totalPage","currentPage","activeBarTransition","title","className","co","overrideStyles"];function Z(D,P){if(D==null)return{};var l=A(D,P),i,c;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(D);for(c=0;c<r.length;c++)i=r[c],!(P.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,i)||(l[i]=D[i]))}return l}function A(D,P){if(D==null)return{};var l={},i=Object.keys(D),c,r;for(r=0;r<i.length;r++)c=i[r],!(P.indexOf(c)>=0)&&(l[c]=D[c]);return l}var B=Object(G.forwardRef)(function(D,P){var l=D.color,i=l===void 0?"navy":l,c=D.indicator,r=c===void 0?!1:c,u=D.size,t=u===void 0?"large":u,y=D.totalPage,R=y===void 0?1:y,I=D.currentPage,o=I===void 0?1:I,O=D.activeBarTransition,k=O===void 0?!1:O,T=D.title,b=D.className,s=D.co,m=D.overrideStyles,p=Z(D,V),g=Object(X.c)(),j=w({color:i,indicator:r,size:t},{overrideStyles:m,name:"Progress"}),x=j.classes,d=j.cx;return Object(J.jsxs)(z.a,Object.assign({ref:P,className:d(x.root,b),co:s},p,{children:[r&&Object(J.jsx)(E.a,{currentPage:o,totalPage:R,color:i,size:t,className:d(x.indicator)}),Object(J.jsx)("div",{className:d(x.barContainer),children:Object(J.jsx)("div",{className:d(x.barActive),style:{width:o/R*100+"%",transition:k?"width 3s linear":"none"}})})]}))});B.displayName="@travelmakers-design/core/Progress"},"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-core/src/components/Progress/Progress.tsx"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},z=`import React from "react";
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
`,F={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}}}},title:"@travelmakers-design/core/Component/Progress",component:X.a,argTypes:{color:{defaultValue:"navy",description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},indicator:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},totalPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},currentPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},activeBarTransition:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var L=function(J){return Object(G.jsx)("div",{style:{padding:24},children:Object(G.jsx)(X.a,Object.assign({},J))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Progress {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return a});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),E=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e("./node_modules/core-js/modules/es.array.fill.js"),D=e("./node_modules/core-js/modules/es.string.small.js"),P=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),l=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),i=e("./node_modules/react/jsx-runtime.js"),c=function(f){return Object(i.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsxs)("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd",children:[Object(i.jsx)("circle",{stroke:"#30373F","stroke-linecap":"round","stroke-linejoin":"round",cx:"4.875",cy:"4.875",r:"4.875"}),Object(i.jsx)("path",{fill:"#30373F",d:"m7.672 8.379.707-.707 4.95 4.95-.708.706z"})]})})};c.displayName="SearchIcon",c.displayName="@travelmakers-design/core/SearchIcon";var r=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),u=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),t=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),R={xsmall:12,small:14,medium:14,large:14,xlarge:16},I=Object(t.a)(function(n,f){var S=f.multiline,h=f.roundness,C=f.invalid,M=f.width,q=f.descriptionType,se=n.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(y.b)(n),{height:S?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:S?n.lineHeight:n.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:n.fontSizes.b2,width:M?M+"px":"100%",color:n.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:h?n.radius.round:2,border:"1px solid "+n.colors.gray5,backgroundColor:n.colors.white,"&:focus, &:focus-within":{outline:"none",color:n.colors.gray1,border:"1px solid "+n.colors.gray1},"&:disabled":{borderColor:n.colors.gray5,color:n.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:n.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:n.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+se,"&::placeholder":{opacity:1}},disabled:{borderColor:n.colors.gray5,color:n.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:n.colors.gray5}},fill:{backgroundColor:n.colors.gray6,color:n.colors.navy3,border:"0px solid "+n.colors.gray5,"&:disabled":{backgroundColor:n.colors.gray6,border:"1px solid "+n.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:n.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),o=["component","width","label","line","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","value","onChange"];function O(n,f){return m(n)||s(n,f)||T(n,f)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(n,f){if(!!n){if(typeof n=="string")return b(n,f);var S=Object.prototype.toString.call(n).slice(8,-1);if(S==="Object"&&n.constructor&&(S=n.constructor.name),S==="Map"||S==="Set")return Array.from(n);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return b(n,f)}}function b(n,f){(f==null||f>n.length)&&(f=n.length);for(var S=0,h=new Array(f);S<f;S++)h[S]=n[S];return h}function s(n,f){var S=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(S!=null){var h=[],C=!0,M=!1,q,se;try{for(S=S.call(n);!(C=(q=S.next()).done)&&(h.push(q.value),!(f&&h.length===f));C=!0);}catch(N){M=!0,se=N}finally{try{!C&&S.return!=null&&S.return()}finally{if(M)throw se}}return h}}function m(n){if(Array.isArray(n))return n}function p(n,f){if(n==null)return{};var S=g(n,f),h,C;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(n);for(C=0;C<M.length;C++)h=M[C],!(f.indexOf(h)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,h)||(S[h]=n[h]))}return S}function g(n,f){if(n==null)return{};var S={},h=Object.keys(n),C,M;for(M=0;M<h.length;M++)C=h[M],!(f.indexOf(C)>=0)&&(S[C]=n[C]);return S}var j=Object($.forwardRef)(function(n,f){var S,h,C=n.component,M=n.width,q=n.label,se=n.line,N=se===void 0?!0:se,Y=n.description,K=n.descriptionType,U=K===void 0?"description":K,ne=n.icon,ve=ne===void 0?Object(i.jsx)(c,{}):ne,be=n.rightSectionWidth,W=be===void 0?48:be,oe=n.rightSection,ie=oe===void 0?Object(i.jsx)(l.a,{}):oe,ue=n.rightSectionProps,ye=ue===void 0?{}:ue,pe=n.wrapperProps,ge=n.invalid,le=ge===void 0?!1:ge,te=n.required,ce=te===void 0?!1:te,de=n.disabled,xe=de===void 0?!1:de,Oe=n.multiline,Te=Oe===void 0?!1:Oe,Be=n.roundness,Ae=Be===void 0?!0:Be,Pe=n.className,Le=n.style,He=n.co,me=n.overrideStyles,ae=n.value,_e=n.onChange,he=p(n,o),fe=Object(P.c)(),je=Object($.useState)(ae),De=O(je,2),Ee=De[0],ke=De[1],Se=I({roundness:Ae,multiline:Te,invalid:le,width:M,descriptionType:U},{overrideStyles:me,name:"Input"}),Ce=Se.classes,Re=Se.cx,we=C||"input",Ue=function(Fe){!xe&&We({target:{value:""}})},We=function(Fe){var Ke;ke(Fe==null||(Ke=Fe.target)===null||Ke===void 0?void 0:Ke.value),_e&&_e(Fe)};return Object(i.jsxs)(u.a,{style:{width:M?M+"px":"100%"},children:[q&&Object(i.jsx)(r.a,{level:"b2",family:"Pretendard",color:fe.colors.gray1,style:{marginBottom:4},children:q}),Object(i.jsxs)(u.a,Object.assign({className:Re(Ce.wrapper,Pe),co:He,style:Le},pe,{children:[ve&&Object(i.jsx)("div",{className:Re(Ce.icon,(S={},S[Ce.disabled]=xe,S)),children:ve}),Object(i.jsx)(we,Object.assign({},he,{ref:f,value:Ee,onChange:We,className:Re(Ce.input,(h={},h[Ce.fill]=!N,h[Ce.withIcon]=ve,h[Ce.invalid]=le,h[Ce.disabled]=xe,h)),required:ce,disabled:xe,style:{paddingRight:ie?W:fe.spacing.small}})),ie&&Object(i.jsx)("div",Object.assign({},ye,{style:Object.assign({},ye.style,{paddingRight:32}),className:Re(Ce.rightSection,ye.className),onClick:Ue,children:ie}))]})),Y&&U==="description"?Object(i.jsx)(r.a,{level:"b3",family:"Pretendard",color:le?fe.colors.red2:fe.colors.navy3,style:{marginTop:4},children:Y}):le&&Object(i.jsx)(r.a,{level:"b3",family:"Pretendard",color:U==="error"?fe.colors.red2:U==="success"?fe.colors.green3:fe.colors.navy3,style:{marginTop:4},children:Y})]})});j.displayName="@travelmakers-design/core/SearchInput";var x=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}},x=`import React from "react";
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
`,d={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:59},startBody:{col:23,line:53},endBody:{col:1,line:59}}},v=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}}}},title:"@travelmakers-design/core/Component/SearchInput",component:j,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},line:{defaultValue:!0,description:"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},a=function(f){return Object(i.jsx)("div",{style:{padding:24},children:Object(i.jsx)(j,Object.assign({},f))})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
}`}},a.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return P});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),E=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-core/src/constants/index.ts"),F=Object(E.a)(function(l,i){var c=i.size,r=i.color,u=r===void 0?l.colorScheme==="light"?l.colors.black:l.colors.white:r in l.palettes?(l.colorScheme==="light",l.palettes[r][0]):r in l.colors?l.colors[r]:r;return{root:{position:"relative",display:"inline-block",width:c in z.a?z.a[c]:c,height:c in z.a?z.a[c]:c,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:u},circle:{fill:u}}}}),L=e("./node_modules/react/jsx-runtime.js"),w=["size","color","className","co","overrideStyles"];function J(l,i){if(l==null)return{};var c=V(l,i),r,u;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);for(u=0;u<t.length;u++)r=t[u],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,r)||(c[r]=l[r]))}return c}function V(l,i){if(l==null)return{};var c={},r=Object.keys(l),u,t;for(t=0;t<r.length;t++)u=r[t],!(i.indexOf(u)>=0)&&(c[u]=l[u]);return c}var Z=Object($.forwardRef)(function(l,i){var c=l.size,r=c===void 0?"medium":c,u=l.color,t=l.className,y=l.co,R=l.overrideStyles,I=J(l,w),o=F({size:r,color:u},{overrideStyles:R,name:"Spinner"}),O=o.classes,k=o.cx,T=Object(L.jsx)("i",{className:O.inner,children:Object(L.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(L.jsxs)("g",{transform:"translate(1 1)",children:[Object(L.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(L.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(L.jsx)(G.a,Object.assign({ref:i,className:k(O.root,t),co:y},I,{children:T}))});Z.displayName="@travelmakers-design/core/Spinner";var A=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},A=`import React from "react";
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
`,B={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},D=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:Z,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},P=function(i){return Object(L.jsx)(Z,Object.assign({},i))};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},P.parameters)},"./packages/travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return l});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function F(i){if(i==null)throw new TypeError("Cannot destructure undefined")}var L=Object(z.a)(function(i,c){return F(c),{root:{position:"sticky"}}}),w=e("./node_modules/react/jsx-runtime.js"),J=["className","co","overrideStyles"];function V(i,c){if(i==null)return{};var r=Z(i,c),u,t;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(i);for(t=0;t<y.length;t++)u=y[t],!(c.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,u)||(r[u]=i[u]))}return r}function Z(i,c){if(i==null)return{};var r={},u=Object.keys(i),t,y;for(y=0;y<u.length;y++)t=u[y],!(c.indexOf(t)>=0)&&(r[t]=i[t]);return r}var A=Object($.forwardRef)(function(i,c){var r=i.className,u=i.co,t=i.overrideStyles,y=V(i,J),R=Object(G.c)(),I=L({},{overrideStyles:t,name:"Sticky"}),o=I.classes,O=I.cx;return Object(w.jsx)(E.a,Object.assign({ref:c,className:O(o.root,r),co:u},y,{children:y.children}))});A.displayName="@travelmakers-design/core/Sticky";var B=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Sticky } from \\"../Sticky\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Sticky\\",\\n  component: Sticky,\\n  argTypes: {},\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Sticky {...props} style={{ background: \\"black\\" }}>\\n        sticky\\n      </Sticky>\\n      <div>sticky</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { Sticky } from "../Sticky";

export default {
  title: "@travelmakers-design/core/Component/Sticky",
  component: Sticky,
  argTypes: {},
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Sticky {...props} style={{ background: "black" }}>
        sticky
      </Sticky>
      <div>sticky</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Sticky {...props} style={{ background: \\"black\\" }}>\\n        sticky\\n      </Sticky>\\n      <div>sticky</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:27},startBody:{col:23,line:18},endBody:{col:1,line:27}}},B=`import React from "react";
import { Sticky } from "../Sticky";

export default {
  title: "@travelmakers-design/core/Component/Sticky",
  component: Sticky,
  argTypes: {},
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Sticky {...props} style={{ background: "black" }}>
        sticky
      </Sticky>
      <div>sticky</div>
    </div>
  );
};
`,D={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:19},startBody:{col:23,line:10},endBody:{col:1,line:19}}},P=_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Sticky } from \\"../Sticky\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Sticky\\",\\n  component: Sticky,\\n  argTypes: {},\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Sticky {...props} style={{ background: \\"black\\" }}>\\n        sticky\\n      </Sticky>\\n      <div>sticky</div>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":10},"endLoc":{"col":1,"line":19},"startBody":{"col":23,"line":10},"endBody":{"col":1,"line":19}}};
    
import React from "react";
import { Sticky } from "../Sticky";

export default {
  title: "@travelmakers-design/core/Component/Sticky",
  component: Sticky,
  argTypes: {},
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Sticky {...props} style={{ background: "black" }}>
        sticky
      </Sticky>
      <div>sticky</div>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Sticky {...props} style={{ background: \\"black\\" }}>\\n        sticky\\n      </Sticky>\\n      <div>sticky</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:27},startBody:{col:23,line:18},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/Component/Sticky",component:A,argTypes:{}},l=function(c){return Object(w.jsxs)("div",{style:{padding:24},children:[Object(w.jsx)(A,Object.assign({},c,{style:{background:"black"},children:"sticky"})),Object(w.jsx)("div",{children:"sticky"})]})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Sticky {...props} style={{ background: "black" }}>
        sticky
      </Sticky>
      <div>sticky</div>
    </div>
  );
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return v});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/react/index.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/core-js/modules/es.array.map.js"),D=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),P=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),l=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),i=function(n){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:n.lineHeights.b1+"px",fontSize:n.fontSizes.b1,paddingRight:24,paddingLeft:24},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:n.lineHeights.h4+"px",fontSize:n.fontSizes.h4,paddingRight:49,paddingLeft:49}}},c=Object(l.a)(function(a,n){var f=n.size,S=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center",position:"relative"},tab:Object.assign({fontWeight:"400",color:a.colors.navy3,cursor:"pointer",whiteSpace:"nowrap",position:"relative"},i(a)[S]),selectedTab:Object.assign({fontWeight:"700",color:a.colors.white,cursor:"pointer",whiteSpace:"nowrap"},i(a)[S],{position:"relative"}),divider:{backgroundColor:a.colors.navy3,width:"1px",height:"20px"},selectedTabBottom:{backgroundColor:a.colors.green3,height:4,width:"100%",position:"absolute",bottom:-6,left:0}}}),r=function(n){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:n.lineHeights.b2+"px",fontSize:n.fontSizes.b2,marginRight:12},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:n.lineHeights.b2+"px",fontSize:n.fontSizes.b2,marginRight:12}}},u=Object(l.a)(function(a,n){var f=n.size,S=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center",position:"relative"},tab:Object.assign({fontWeight:"400",color:a.colors.navy3,cursor:"pointer",whiteSpace:"nowrap",position:"relative"},r(a)[S]),selectedTab:Object.assign({fontWeight:"700",color:a.colors.green3,cursor:"pointer",whiteSpace:"nowrap"},r(a)[S],{position:"relative"}),divider:{backgroundColor:a.colors.navy3,width:"1px",height:"20px"},selectedTabBottom:{backgroundColor:a.colors.green3,height:4,width:"100%",position:"absolute",bottom:-6,left:0}}}),t=e("./node_modules/react/jsx-runtime.js"),y=["type","size","array","className","co","overrideStyles"];function R(a,n){return T(a)||k(a,n)||o(a,n)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(a,n){if(!!a){if(typeof a=="string")return O(a,n);var f=Object.prototype.toString.call(a).slice(8,-1);if(f==="Object"&&a.constructor&&(f=a.constructor.name),f==="Map"||f==="Set")return Array.from(a);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return O(a,n)}}function O(a,n){(n==null||n>a.length)&&(n=a.length);for(var f=0,S=new Array(n);f<n;f++)S[f]=a[f];return S}function k(a,n){var f=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(f!=null){var S=[],h=!0,C=!1,M,q;try{for(f=f.call(a);!(h=(M=f.next()).done)&&(S.push(M.value),!(n&&S.length===n));h=!0);}catch(se){C=!0,q=se}finally{try{!h&&f.return!=null&&f.return()}finally{if(C)throw q}}return S}}function T(a){if(Array.isArray(a))return a}function b(a,n){if(a==null)return{};var f=s(a,n),S,h;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(a);for(h=0;h<C.length;h++)S=C[h],!(n.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,S)||(f[S]=a[S]))}return f}function s(a,n){if(a==null)return{};var f={},S=Object.keys(a),h,C;for(C=0;C<S.length;C++)h=S[C],!(n.indexOf(h)>=0)&&(f[h]=a[h]);return f}var m="";function p(){return m}var g=Object($.forwardRef)(function(a,n){var f=a.type,S=f===void 0?"primary":f,h=a.size,C=h===void 0?"small":h,M=a.array,q=M===void 0?[]:M,se=a.className,N=a.co,Y=a.overrideStyles,K=b(a,y),U=Object(D.c)(),ne=S==="primary"?c({size:C},{overrideStyles:Y,name:"Tab"}):u({size:C},{overrideStyles:Y,name:"Tab"}),ve=ne.classes,be=ne.cx,W=Object($.useState)(""),oe=R(W,2),ie=oe[0],ue=oe[1],ye=function(ge){m=ge,ue(ge)};return Object(t.jsx)(P.a,Object.assign({ref:n,className:be(ve.root,se),co:N},K,{children:q.map(function(pe,ge){var le=!1;return m!==""?le=m===pe:ge===0&&(le=!0,ye(pe)),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("span",{className:be(le?ve.selectedTab:ve.tab),onClick:function(){return ye(pe)},children:[pe,S==="secondary"&&le&&Object(t.jsx)("span",{className:be(ve.selectedTabBottom)})]}),S==="primary"&&ge!==q.length-1&&Object(t.jsx)("span",{className:be(ve.divider)})]})})}))});g.displayName="@travelmakers-design/core/Tab";var j=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Tab } from \\"../Tab\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Tab\\",\\n  component: Tab,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    array: {\\n      defaultValue: [\\"\uC11C\uC6B8\\", \\"\uC81C\uC8FC\\", \\"\uC218\uB3C4\uAD8C\\", \\"\uC804\uB77C\\"],\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}}};
    
import React from "react";
import { Tab } from "../Tab";

export default {
  title: "@travelmakers-design/core/Component/Tab",
  component: Tab,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "primary",
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    array: {
      defaultValue: ["\uC11C\uC6B8", "\uC81C\uC8FC", "\uC218\uB3C4\uAD8C", "\uC804\uB77C"],
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "array" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Tab {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},j=`import React from "react";
import { Tab } from "../Tab";

export default {
  title: "@travelmakers-design/core/Component/Tab",
  component: Tab,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "primary",
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    array: {
      defaultValue: ["\uC11C\uC6B8", "\uC81C\uC8FC", "\uC218\uB3C4\uAD8C", "\uC804\uB77C"],
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "array" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Tab {...props} />
    </div>
  );
};
`,x={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}}},d=_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Tab } from \\"../Tab\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Tab\\",\\n  component: Tab,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"primary\\",\\n      description: \\"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"primary\\", \\"secondary\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    array: {\\n      defaultValue: [\\"\uC11C\uC6B8\\", \\"\uC81C\uC8FC\\", \\"\uC218\uB3C4\uAD8C\\", \\"\uC804\uB77C\\"],\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      description: \\"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"array\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":43},"endLoc":{"col":1,"line":49},"startBody":{"col":23,"line":43},"endBody":{"col":1,"line":49}}};
    
import React from "react";
import { Tab } from "../Tab";

export default {
  title: "@travelmakers-design/core/Component/Tab",
  component: Tab,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "primary",
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["primary", "secondary"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    array: {
      defaultValue: ["\uC11C\uC6B8", "\uC81C\uC8FC", "\uC218\uB3C4\uAD8C", "\uC804\uB77C"],
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.",
      control: { type: "array" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Tab {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design/core/Component/Tab",component:g,argTypes:{size:{defaultValue:"small",description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"primary",description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},array:{defaultValue:["\uC11C\uC6B8","\uC81C\uC8FC","\uC218\uB3C4\uAD8C","\uC804\uB77C"],table:{type:{summary:"React.ReactNode"}},description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"array"}}}},v=function(n){return Object(t.jsx)("div",{style:{padding:24},children:Object(t.jsx)(g,Object.assign({},n))})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Tab {...props} />
    </div>
  );
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/Tag/Tag.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./node_modules/react/index.js"),E=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),F=function(P){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:P.lineHeights.caption+"px",fontSize:P.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:P.lineHeights.b3+"px",fontSize:P.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:P.lineHeights.b2+"px",fontSize:P.fontSizes.b2}}},L=function(P,l){return{small:{padding:l?"2px 8px":"0px 8px"},medium:{padding:l?"2px 12px":"0px 12px"},large:{padding:l?"3px 12px":"0px 16px"}}},w=Object(E.a)(function(D,P){var l,i=P.color,c=P.roundness,r=P.size,u=P.fill,t=P.disabled,y=t===void 0?!1:t;return{container:Object.assign({},Object(z.b)(D),F(D)[r],L(D,u)[r],(l={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:y?D.colors.gray4:i==="gray"?D.colors.navy1:D.colors.white,marginRight:"6px",gap:"8px",borderRadius:c&&D.radius.round,backgroundColor:i==="green"?D.colors.green3:i==="blue"?D.colors.point_sky1:i==="purple"?D.colors.point_purple1:D.colors.gray6},l["&:last-child"]={marginRight:0},l)),line:{color:i==="green"?D.colors.green3:i==="blue"?D.colors.point_sky1:i==="purple"?D.colors.point_purple1:D.colors.gray3,background:"inherit",border:"1px solid"},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"}}}),J=e("./node_modules/react/jsx-runtime.js"),V=["component","size","color","roundness","fill","disabled","children","className","overrideStyles","__staticSelector"];function Z(D,P){if(D==null)return{};var l=A(D,P),i,c;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(D);for(c=0;c<r.length;c++)i=r[c],!(P.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,i)||(l[i]=D[i]))}return l}function A(D,P){if(D==null)return{};var l={},i=Object.keys(D),c,r;for(r=0;r<i.length;r++)c=i[r],!(P.indexOf(c)>=0)&&(l[c]=D[c]);return l}var B=Object(G.forwardRef)(function(D,P){var l=D.component,i=D.size,c=i===void 0?"small":i,r=D.color,u=r===void 0?"green":r,t=D.roundness,y=t===void 0?!1:t,R=D.fill,I=R===void 0?!0:R,o=D.disabled,O=o===void 0?!1:o,k=D.children,T=D.className,b=D.overrideStyles,s=D.__staticSelector,m=s===void 0?"span":s,p=Z(D,V),g=l||"span",j=w({color:u,roundness:y,fill:I,size:c,disabled:O},{overrideStyles:b,name:"span"}),x=j.classes,d=j.cx;return Object(J.jsx)(g,Object.assign({ref:P,className:d(x.container,x[u],!I&&x.line,T)},p,{children:k}))});B.displayName="@travelmakers-design/core/Tag"},"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return v});var Q=e("./node_modules/core-js/modules/es.array.map.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e.n(X),E=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.object.assign.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/es.symbol.description.js"),B=e.n(A),D=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.string.iterator.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(c),u=e("./node_modules/core-js/modules/es.array.slice.js"),t=e.n(u),y=e("./node_modules/core-js/modules/es.function.name.js"),R=e.n(y),I=e("./node_modules/react/index.js"),o=e.n(I),O=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),k=e("./node_modules/react/jsx-runtime.js"),T=e.n(k);function b(a){return g(a)||p(a)||m(a)||s()}function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(a,n){if(!!a){if(typeof a=="string")return j(a,n);var f=Object.prototype.toString.call(a).slice(8,-1);if(f==="Object"&&a.constructor&&(f=a.constructor.name),f==="Map"||f==="Set")return Array.from(a);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return j(a,n)}}function p(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function g(a){if(Array.isArray(a))return j(a)}function j(a,n){(n==null||n>a.length)&&(n=a.length);for(var f=0,S=new Array(n);f<n;f++)S[f]=a[f];return S}var x=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Tag } from \\"../Tag\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Tag\\",\\n  component: Tag,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"green\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"green\\", \\"blue\\", \\"purple\\", \\"gray\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fill: {\\n      defaultValue: true,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":63},"endLoc":{"col":1,"line":71},"startBody":{"col":23,"line":63},"endBody":{"col":1,"line":71}}};
    
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
    disabled: {
      defaultValue: false,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:71},endLoc:{col:1,line:79},startBody:{col:23,line:71},endBody:{col:1,line:79}}},x=`import React from "react";
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
    disabled: {
      defaultValue: false,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
`,d={Default:{startLoc:{col:23,line:63},endLoc:{col:1,line:71},startBody:{col:23,line:63},endBody:{col:1,line:71}}};_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { Tag } from \\"../Tag\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Tag\\",\\n  component: Tag,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"medium\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"green\\",\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"green\\", \\"blue\\", \\"purple\\", \\"gray\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    roundness: {\\n      defaultValue: false,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    fill: {\\n      defaultValue: true,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    disabled: {\\n      defaultValue: false,\\n      description: \\"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":63},"endLoc":{"col":1,"line":71},"startBody":{"col":23,"line":63},"endBody":{"col":1,"line":71}}};
    
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
    disabled: {
      defaultValue: false,
      description: "Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:71},endLoc:{col:1,line:79},startBody:{col:23,line:71},endBody:{col:1,line:79}}}}},title:"@travelmakers-design/core/Component/Tag",component:O.a,argTypes:{size:{defaultValue:"small",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"green",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["green","blue","purple","gray"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fill:{defaultValue:!0,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var v=function(n){return Object(k.jsx)("div",{style:{padding:24,display:"flex"},children:b(Array(10).keys()).map(function(f,S){return Object(k.jsxs)(O.a,Object.assign({},n,{children:["Tag",S+1]}))})})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return u});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),H=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./node_modules/core-js/modules/es.string.small.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),J=function(y){return{xsmall:{fontWeight:"normal",lineHeight:y.lineHeights.h6+"px",fontSize:y.fontSizes.h6},small:{fontWeight:"normal",lineHeight:y.lineHeights.h4+"px",fontSize:y.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:y.lineHeights.h2+"px",fontSize:y.fontSizes.h2},large:{fontWeight:"normal",lineHeight:y.lineHeights.h1+"px",fontSize:y.fontSizes.h1}}},V=function(y){return{display:y?"block":"inline-block",width:y?"100%":"auto"}},Z=Object(L.a)(function(t,y,R){var I,o,O=y.color,k=y.size,T=y.fullWidth,b=y.family,s=y.underline,m=y.leftIcon,p=y.rightIcon,g=R("loading"),j=R("inner"),x=R("spinner"),d=O||t.colors.navy1;return{loading:(I={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},I["."+j]={opacity:0},I["."+x]={display:"flex"},I),solid:(o={color:d==="white"?t.colors.white:t.colors.navy1,"&:not(:disabled):hover":{color:d==="white"?t.colors.white:t.colors.navy1},"&:not(:disabled):active":{color:d==="white"?t.colors.gray6:t.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},o["&:disabled:not(."+g+")"]={color:t.colors.gray5},o),root:Object.assign({},V(T),Object(w.b)(t),J(t)[k],{fontFamily:""+b,borderRadius:t.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:s?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:j,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),A=e("./node_modules/react/jsx-runtime.js"),B=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function D(t,y){if(t==null)return{};var R=P(t,y),I,o;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(t);for(o=0;o<O.length;o++)I=O[o],!(y.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,I)||(R[I]=t[I]))}return R}function P(t,y){if(t==null)return{};var R={},I=Object.keys(t),o,O;for(O=0;O<I.length;O++)o=I[O],!(y.indexOf(o)>=0)&&(R[o]=t[o]);return R}var l=Object(H.forwardRef)(function(t,y){var R=t.children,I=t.component,o=t.family,O=o===void 0?"Pretendard":o,k=t.size,T=k===void 0?"medium":k,b=t.color,s=b===void 0?"navy":b,m=t.fullWidth,p=m===void 0?!1:m,g=t.type,j=g===void 0?"button":g,x=t.disabled,d=x===void 0?!1:x,v=t.underline,a=v===void 0?!1:v,n=t.leftIcon,f=t.rightIcon,S=t.className,h=t.co,C=t.overrideStyles,M=D(t,B),q=Object(E.c)(),se=Z({color:s,size:T,fullWidth:p,family:O,underline:a,leftIcon:n,rightIcon:f},{overrideStyles:C,name:"Button"}),N=se.classes,Y=se.cx;return Object(A.jsx)(z.a,Object.assign({component:I||"button",ref:y,type:j,disabled:d,className:Y(N.root,N.solid,S),co:h,onTouchStart:function(){}},M,{children:Object(A.jsxs)("div",{className:N.inner,children:[n&&Object(A.jsxs)("span",{className:Y(N.icon,N.leftIcon),children:[n,"\xA0"]}),Object(A.jsx)("span",{className:N.label,children:R}),f&&Object(A.jsxs)("span",{className:Y(N.icon,N.rightIcon),children:["\xA0",f]})]})}))});l.displayName="@travelmakers-design/core/TextButton";var i=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}},i=`import {
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
`,c={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},r=_.default={title:"@travelmakers-design/core/Component/TextButton",component:l,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)($.g,{}),Object(A.jsx)($.f,{}),Object(A.jsx)($.b,{}),Object(A.jsx)($.d,{}),Object(A.jsx)($.a,{story:$.c}),Object(A.jsx)($.e,{})]})}},actions:{handles:["click button"]}}},u=function(y){return Object(A.jsx)(l,Object.assign({},y,{children:"Button"}))};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextButton {...props}>Button</TextButton>;
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return h});var Q=e("./node_modules/core-js/modules/es.date.to-string.js"),$=e("./node_modules/core-js/modules/es.object.assign.js"),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/core-js/modules/es.string.replace.js"),D=e("./node_modules/core-js/modules/es.regexp.exec.js"),P=e("./node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/core-js/modules/es.regexp.to-string.js"),i=e("./node_modules/core-js/modules/es.string.pad-start.js"),c=e("./node_modules/core-js/modules/web.timers.js"),r=e("./node_modules/react/index.js"),u=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),t=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),y=function(M,q){return{small:{fontFamily:"Pretendard",color:q==="navy"?M.colors.navy1:M.colors.white,fontSize:M.fontSizes.b3,lineHeight:M.fontSizes.b3},large:{fontFamily:"Pretendard",color:q==="navy"?M.colors.navy1:M.colors.white,fontSize:M.fontSizes.b2,lineHeight:M.lineHeights.b2}}},R=Object(u.a)(function(C,M){var q=M.size,se=q===void 0?"large":q,N=M.color,Y=N===void 0?"navy":N;return{container:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:t.a.maxSize,height:0},labelContainer:{display:"flex",alignItems:"center",position:"relative"},icon:{width:se==="large"?"16px":"12px",height:se==="large"?"16px":"12px"},label:Object.assign({fontWeight:400,marginLeft:"4px"},y(C,Y)[se]),timer:Object.assign({fontWeight:700},y(C,Y)[se])}}),I=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),o=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),O=e("./node_modules/react/jsx-runtime.js"),k=["size","color","label","endAt","className","co","overrideStyles"];function T(C,M){return g(C)||p(C,M)||s(C,M)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(C,M){if(!!C){if(typeof C=="string")return m(C,M);var q=Object.prototype.toString.call(C).slice(8,-1);if(q==="Object"&&C.constructor&&(q=C.constructor.name),q==="Map"||q==="Set")return Array.from(C);if(q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q))return m(C,M)}}function m(C,M){(M==null||M>C.length)&&(M=C.length);for(var q=0,se=new Array(M);q<M;q++)se[q]=C[q];return se}function p(C,M){var q=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(q!=null){var se=[],N=!0,Y=!1,K,U;try{for(q=q.call(C);!(N=(K=q.next()).done)&&(se.push(K.value),!(M&&se.length===M));N=!0);}catch(ne){Y=!0,U=ne}finally{try{!N&&q.return!=null&&q.return()}finally{if(Y)throw U}}return se}}function g(C){if(Array.isArray(C))return C}function j(C,M){if(C==null)return{};var q=x(C,M),se,N;if(Object.getOwnPropertySymbols){var Y=Object.getOwnPropertySymbols(C);for(N=0;N<Y.length;N++)se=Y[N],!(M.indexOf(se)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,se)||(q[se]=C[se]))}return q}function x(C,M){if(C==null)return{};var q={},se=Object.keys(C),N,Y;for(Y=0;Y<se.length;Y++)N=se[Y],!(M.indexOf(N)>=0)&&(q[N]=C[N]);return q}var d=1e3,v="D\uC77C HH : mm : ss",a=Object(r.forwardRef)(function(C,M){var q=C.size,se=q===void 0?"small":q,N=C.color,Y=N===void 0?"navy":N,K=C.label,U=K===void 0?"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529":K,ne=C.endAt,ve=ne===void 0?new Date:ne,be=C.className,W=C.co,oe=C.overrideStyles,ie=j(C,k),ue=R({size:se,color:Y},{overrideStyles:oe,name:"span"}),ye=ue.classes,pe=ue.cx,ge=Object(r.useState)(null),le=T(ge,2),te=le[0],ce=le[1],de=function(){return!ve||!te?"":v.replace("D",te.days).replace("HH",te.hours).replace("mm",te.minutes).replace("ss",te.seconds)},xe=function(){var Te=new Date(ve).getTime()-new Date().getTime(),Be={};Te>0&&(Be={days:Math.floor(Te/(1e3*60*60*24)).toString(),hours:Math.floor(Te/(1e3*60*60)%24).toString().padStart(2,"0"),minutes:Math.floor(Te/1e3/60%60).toString().padStart(2,"0"),seconds:Math.floor(Te/1e3%60).toString().padStart(2,"0")}),ce(Be)};return Object(r.useEffect)(function(){var Oe=setInterval(function(){xe()},d);return function(){return clearInterval(Oe)}},[te]),Object(O.jsxs)(I.a,Object.assign({ref:M,className:pe(ye.container,be),co:W},ie,{children:[Object(O.jsxs)("div",{className:pe(ye.labelContainer),children:[Object(O.jsx)(o.a,{src:e(Y==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-white.svg"),className:pe(ye.icon),alt:"timer"}),Object(O.jsx)("div",{className:pe(ye.label),children:U})]}),Object(O.jsx)("div",{className:pe(ye.timer),children:de()})]}))});a.displayName="@travelmakers-design/core/Timer";var n=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Timer } from \\"../Timer\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Timer\\",\\n  component: Timer,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8\\",\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    endAt: {\\n      defaultValue: new Date(),\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"date\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Timer {...props}></Timer>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":78},"endLoc":{"col":1,"line":84},"startBody":{"col":23,"line":78},"endBody":{"col":1,"line":84}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Timer } from "../Timer";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Timer",
  component: Timer,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "text" },
    },
    endAt: {
      defaultValue: new Date(),
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "date" },
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
    <div style={{ padding: 24, display: "flex" }}>
      <Timer {...props}></Timer>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Timer {...props}></Timer>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:92},startBody:{col:23,line:86},endBody:{col:1,line:92}}},n=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Timer } from "../Timer";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Timer",
  component: Timer,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "text" },
    },
    endAt: {
      defaultValue: new Date(),
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "date" },
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
    <div style={{ padding: 24, display: "flex" }}>
      <Timer {...props}></Timer>
    </div>
  );
};
`,f={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:84},startBody:{col:23,line:78},endBody:{col:1,line:84}}},S=_.default={title:"@travelmakers-design/core/Component/Timer",component:a,argTypes:{size:{defaultValue:"small",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},label:{defaultValue:"\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}},endAt:{defaultValue:new Date,description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"date"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\n\\nimport { Timer } from \\"../Timer\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport React from \\"react\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Timer\\",\\n  component: Timer,\\n  argTypes: {\\n    size: {\\n      defaultValue: \\"small\\",\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"small\\", \\"large\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    color: {\\n      defaultValue: \\"navy\\",\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"navy\\", \\"white\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    label: {\\n      defaultValue: \\"\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8\\",\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    endAt: {\\n      defaultValue: new Date(),\\n      description: \\"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"React.ReactNode\\",\\n        },\\n      },\\n      control: { type: \\"date\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Timer {...props}></Timer>\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":78},"endLoc":{"col":1,"line":84},"startBody":{"col":23,"line":78},"endBody":{"col":1,"line":84}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Timer } from "../Timer";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Timer",
  component: Timer,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",
      options: ["small", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["navy", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8",
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "text" },
    },
    endAt: {
      defaultValue: new Date(),
      description: "Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "date" },
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
    <div style={{ padding: 24, display: "flex" }}>
      <Timer {...props}></Timer>
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Timer {...props}></Timer>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:92},startBody:{col:23,line:86},endBody:{col:1,line:92}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H.g,{}),Object(O.jsx)(H.f,{}),Object(O.jsx)(H.b,{}),Object(O.jsx)(H.d,{}),Object(O.jsx)(H.a,{story:H.c}),Object(O.jsx)(H.e,{})]})}}}},h=function(M){return Object(O.jsx)("div",{style:{padding:24,display:"flex"},children:Object(O.jsx)(a,Object.assign({},M))})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Timer {...props}></Timer>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return r});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),H=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),z=e("./packages/travelmakers-design-core/src/components/Badge/Badge.tsx"),F=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),w=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),J=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),V=Object(w.a)(function(u,t){var y,R,I,o,O,k,T,b,s,m,p=t.mobileType,g=p===void 0?"Expanded":p;return{root:(y={fontFamily:"Pretendard",display:"flex",flexDirection:"column",width:"100%",minHeight:"100vh"},y["@supports (-webkit-touch-callout: none)"]={minHeight:"-webkit-fill-available"},y),container:(R={display:"flex",justifyContent:"center",width:"100%",padding:"16px 0"},R[""+u.media.mobile]={padding:"14px 0"},R.backgroundColor=u.colors.white,R),logo:(I={width:"120px",height:"47px",cursor:"pointer"},I[""+u.media.mobile]={width:"73px",height:"28px"},I),section:{display:"flex",alignItems:"center"},wrapper:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:J.a.maxSize},searchBox:(o={display:"flex",justifyContent:"center",alignItems:"center",height:"40px",padding:"8px 40px",borderRadius:"22px",backgroundColor:u.colors.gray6,cursor:"pointer"},o[""+u.media.mobile]={height:"32px",flex:"1 0"},o[""+u.media.mobile]={backgroundColor:g==="Collapsed"?"inherit":u.colors.gray6,padding:g==="Collapsed"?"0px":"8px 40px"},o),mobileSearchBox:(O={display:"none"},O[""+u.media.mobile]={display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},O),searchIcon:(k={width:"24px",height:"24px",marginRight:"4px",cursor:"pointer"},k[""+u.media.mobile]={width:g==="Collapsed"?"24px":"16px",height:g==="Collapsed"?"24px":"16px"},k),mypageIcon:{width:"24px",height:"24px",marginLeft:"16px",cursor:"pointer"},searchText:(T={fontSize:u.fontSizes.h6,lineHeight:u.lineHeights.h6+"px",fontWeight:400,textAlign:"center",color:u.colors.navy2},T[""+u.media.mobile]={fontSize:u.fontSizes.b1,lineHeight:u.lineHeights.b1+"px",display:g==="Expanded"?"block":"none"},T),divider:(b={display:"block",margin:"auto 12px",width:"1px",height:"16px",backgroundColor:u.colors.navy3},b[""+u.media.mobile]={display:"none"},b),menuText:(s={position:"relative",fontSize:u.fontSizes.h6,lineHeight:u.lineHeights.h6+"px",fontWeight:700,color:u.colors.navy1,cursor:"pointer"},s["&:hover"]={color:u.colors.beige4},s[""+u.media.mobile]={display:"none"},s),newBadge:(m={display:"flex",position:"absolute",width:"16px",height:"16px",top:"-8px",right:"-8px",justifyContent:"center",alignItems:"center",padding:"4px",borderRadius:"6px",backgroundColor:u.colors.red2},m["& > span"]={color:"white",fontSize:u.fontSizes.caption,fontWeight:"bold",marginLeft:"1px"},m[""+u.media.mobile]={width:"5px",height:"5px"},m)}}),Z=e("./node_modules/react/jsx-runtime.js"),A=["mobileType","isLogin","isBadge","logoClick","searchClick","onClick","className","co","overrideStyles"];function B(u,t){if(u==null)return{};var y=D(u,t),R,I;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(u);for(I=0;I<o.length;I++)R=o[I],!(t.indexOf(R)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,R)||(y[R]=u[R]))}return y}function D(u,t){if(u==null)return{};var y={},R=Object.keys(u),I,o;for(o=0;o<R.length;o++)I=R[o],!(t.indexOf(I)>=0)&&(y[I]=u[I]);return y}var P=Object(H.forwardRef)(function(u,t){var y=u.mobileType,R=y===void 0?"Expanded":y,I=u.isLogin,o=I===void 0?!1:I,O=u.isBadge,k=O===void 0?!1:O,T=u.logoClick,b=u.searchClick,s=u.onClick,m=u.className,p=u.co,g=u.overrideStyles,j=B(u,A),x=Object(E.c)(),d=V({mobileType:R},{overrideStyles:g,name:"Price"}),v=d.classes,a=d.cx;return Object(Z.jsx)(F.a,Object.assign({ref:t,className:a(v.root,m),co:p},j,{children:Object(Z.jsx)("div",{className:a(v.container),children:Object(Z.jsxs)("div",{className:a(v.wrapper),children:[Object(Z.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/logo.svg"),className:a(v.logo),onClick:T}),Object(Z.jsxs)("div",{className:a(v.section),children:[Object(Z.jsxs)("div",{className:a(v.searchBox),onClick:b,children:[Object(Z.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/search.svg"),className:a(v.searchIcon)}),Object(Z.jsx)("span",{className:a(v.searchText),children:"\uD638\uD154 \uAC80\uC0C9"})]}),Object(Z.jsx)("div",{className:a(v.divider)}),Object(Z.jsxs)("span",{className:a(v.menuText),onClick:s,children:[o?"\uB9C8\uC774\uD398\uC774\uC9C0":"\uB85C\uADF8\uC778",o&&k&&Object(Z.jsx)(z.a,{className:a(v.newBadge),children:"N"})]}),Object(Z.jsxs)("div",{className:a(v.mobileSearchBox),onClick:s,children:[Object(Z.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/ic-mobile-mypage.svg"),className:a(v.mypageIcon)}),o&&k&&Object(Z.jsx)(z.a,{className:a(v.newBadge)})]})]})]})})}))});P.displayName="@travelmakers-design/core/Topbar";var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\nimport React from \\"react\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport { Topbar } from \\"../Topbar\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Topbar\\",\\n  component: Topbar,\\n  argTypes: {\\n    mobileType: {\\n      defaultValue: \\"Expanded\\",\\n      description: \\"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Expanded\\", \\"Collapsed\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    isLogin: {\\n      defaultValue: false,\\n      description: \\"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    isBadge: {\\n      defaultValue: false,\\n      description: \\"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":64},"endLoc":{"col":1,"line":70},"startBody":{"col":23,"line":64},"endBody":{"col":1,"line":70}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import React from "react";
import { Meta } from "@storybook/react";
import { Topbar } from "../Topbar";

export default {
  title: "@travelmakers-design/core/Component/Topbar",
  component: Topbar,
  argTypes: {
    mobileType: {
      defaultValue: "Expanded",
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["Expanded", "Collapsed"],
      control: { type: "inline-radio" },
    },
    isLogin: {
      defaultValue: false,
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    isBadge: {
      defaultValue: false,
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
  return (
    <div style={{ padding: 24 }}>
      <Topbar {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,i={Default:{startLoc:{col:23,line:72},endLoc:{col:1,line:78},startBody:{col:23,line:72},endBody:{col:1,line:78}}},l=`import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import React from "react";
import { Meta } from "@storybook/react";
import { Topbar } from "../Topbar";

export default {
  title: "@travelmakers-design/core/Component/Topbar",
  component: Topbar,
  argTypes: {
    mobileType: {
      defaultValue: "Expanded",
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["Expanded", "Collapsed"],
      control: { type: "inline-radio" },
    },
    isLogin: {
      defaultValue: false,
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    isBadge: {
      defaultValue: false,
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
  return (
    <div style={{ padding: 24 }}>
      <Topbar {...props} />
    </div>
  );
};
`,i={Default:{startLoc:{col:23,line:64},endLoc:{col:1,line:70},startBody:{col:23,line:64},endBody:{col:1,line:70}}},c=_.default={title:"@travelmakers-design/core/Component/Topbar",component:P,argTypes:{mobileType:{defaultValue:"Expanded",description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["Expanded","Collapsed"],control:{type:"inline-radio"}},isLogin:{defaultValue:!1,description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},isBadge:{defaultValue:!1,description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import {\\n  ArgsTable,\\n  Description,\\n  PRIMARY_STORY,\\n  Primary,\\n  Stories,\\n  Subtitle,\\n  Title,\\n} from \\"@storybook/addon-docs\\";\\nimport React from \\"react\\";\\nimport { Meta } from \\"@storybook/react\\";\\nimport { Topbar } from \\"../Topbar\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Topbar\\",\\n  component: Topbar,\\n  argTypes: {\\n    mobileType: {\\n      defaultValue: \\"Expanded\\",\\n      description: \\"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Expanded\\", \\"Collapsed\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    isLogin: {\\n      defaultValue: false,\\n      description: \\"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    isBadge: {\\n      defaultValue: false,\\n      description: \\"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n  parameters: {\\n    docs: {\\n      page: () => (\\n        <>\\n          <Title />\\n          <Subtitle />\\n          <Description />\\n          <Primary />\\n          <ArgsTable story={PRIMARY_STORY} />\\n          <Stories />\\n        </>\\n      ),\\n    },\\n    actions: {\\n      handles: [\\"click button\\"],\\n    },\\n  },\\n} as Meta;\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":64},"endLoc":{"col":1,"line":70},"startBody":{"col":23,"line":64},"endBody":{"col":1,"line":70}}};
    
import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import React from "react";
import { Meta } from "@storybook/react";
import { Topbar } from "../Topbar";

export default {
  title: "@travelmakers-design/core/Component/Topbar",
  component: Topbar,
  argTypes: {
    mobileType: {
      defaultValue: "Expanded",
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",
      options: ["Expanded", "Collapsed"],
      control: { type: "inline-radio" },
    },
    isLogin: {
      defaultValue: false,
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    isBadge: {
      defaultValue: false,
      description: "Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",
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
  return (
    <div style={{ padding: 24 }}>
      <Topbar {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:72},endLoc:{col:1,line:78},startBody:{col:23,line:72},endBody:{col:1,line:78}}}},docs:{page:function(){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)($.g,{}),Object(Z.jsx)($.f,{}),Object(Z.jsx)($.b,{}),Object(Z.jsx)($.d,{}),Object(Z.jsx)($.a,{story:$.c}),Object(Z.jsx)($.e,{})]})}},actions:{handles:["click button"]}}},r=function(t){return Object(Z.jsx)("div",{style:{padding:24},children:Object(Z.jsx)(P,Object.assign({},t))})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Topbar {...props} />
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/Topbar/svg/ic-mobile-mypage.svg":function(ee,_,e){ee.exports=e.p+"static/media/ic-mobile-mypage.e301c76a.svg"},"./packages/travelmakers-design-core/src/components/Topbar/svg/logo.svg":function(ee,_,e){ee.exports=e.p+"static/media/logo.346e8bbf.svg"},"./packages/travelmakers-design-core/src/components/Topbar/svg/search.svg":function(ee,_,e){ee.exports=e.p+"static/media/search.3e709349.svg"},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return i});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e("./node_modules/core-js/modules/es.array.index-of.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.string.italics.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),G=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),E=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),F=e("./node_modules/core-js/modules/es.array.reduce.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w={h1:{},small:{},medium:{},large:{}},J=function(r){return{caption:{lineHeight:r.lineHeights.caption+"px",fontSize:r.fontSizes.caption},b3:{lineHeight:r.lineHeights.b3+"px",fontSize:r.fontSizes.b3},b2:{lineHeight:r.lineHeights.b2+"px",fontSize:r.fontSizes.b2},b1:{lineHeight:r.lineHeights.b1+"px",fontSize:r.fontSizes.b1},h6:{lineHeight:r.lineHeights.h6+"px",fontSize:r.fontSizes.h6},h5:{lineHeight:r.lineHeights.h5+"px",fontSize:r.fontSizes.h5},h4:{lineHeight:r.lineHeights.h4+"px",fontSize:r.fontSizes.h4},h3:{lineHeight:r.lineHeights.h3+"px",fontSize:r.fontSizes.h3},h2:{lineHeight:r.lineHeights.h2+"px",fontSize:r.fontSizes.h2},h1:{lineHeight:r.lineHeights.h1+"px",fontSize:r.fontSizes.h1}}},V=Object.keys(w).reduce(function(c,r){return c[r]=w[r].height,c},{}),Z=function(r){return{display:"block",width:"100%"}},A=Object(L.a)(function(c,r,u){var t,y,R=r.family,I=r.level,o=r.textAlign,O=r.disabled,k=r.strong,T=r.italic,b=r.underline,s=r.color,m=r.mobile,p=r.tablet,g=u("loading"),j=u("inner"),x=u("spinner");return{loading:(t={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},t["."+j]={opacity:0},t["."+x]={display:"flex"},t),solid:{fontWeight:k?R==="Noto Serif KR"?600:700:400,fontStyle:T?"italic":"normal",textDecoration:b?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},w[I],Z(),J(c)[I],(y={fontFamily:""+R,color:O?c.colors.gray5:s||c.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+o,WebkitAppearance:"none",outline:"none",border:"none"},y[""+c.media.mobile]=Object.assign({},J(c)[m]),y[""+c.media.tablet]=Object.assign({},J(c)[p]),y)),inner:{ref:j,height:"100%",overflow:"visible"},label:{height:"100%"}}}),B=e("./node_modules/react/jsx-runtime.js"),D=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function P(c,r){if(c==null)return{};var u=l(c,r),t,y;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(c);for(y=0;y<R.length;y++)t=R[y],!(r.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,t)||(u[t]=c[t]))}return u}function l(c,r){if(c==null)return{};var u={},t=Object.keys(c),y,R;for(R=0;R<t.length;R++)y=t[R],!(r.indexOf(y)>=0)&&(u[y]=c[y]);return u}var i=Object(E.forwardRef)(function(c,r){var u=c.children,t=c.component,y=c.family,R=y===void 0?"Noto Serif KR":y,I=c.level,o=I===void 0?"h1":I,O=c.mobileLevel,k=c.tabletLevel,T=c.textAlign,b=T===void 0?"left":T,s=c.disabled,m=s===void 0?!1:s,p=c.strong,g=p===void 0?!1:p,j=c.italic,x=j===void 0?!1:j,d=c.underline,v=d===void 0?!1:d,a=c.color,n=c.className,f=c.co,S=c.overrideStyles,h=P(c,D),C=Object(G.c)(),M=A({family:R,level:o,disabled:m,strong:g,italic:x,underline:v,textAlign:b,color:a,mobile:O,tablet:k},{overrideStyles:S,name:"span"}),q=M.classes,se=M.cx;return Object(B.jsx)(z.a,Object.assign({component:t||"span",ref:r,type:"span",disabled:m,className:se(q.root,q.solid,n),co:f,onTouchStart:function(){}},h,{children:Object(B.jsx)("div",{className:q.inner,children:Object(B.jsx)("span",{className:q.label,children:u})})}))});i.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return w});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./node_modules/react/index.js"),X=e.n(re),G=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),E=e("./node_modules/react/jsx-runtime.js"),z=e.n(E),F=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},F=`import {
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
`,L={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};_.default={title:"@travelmakers-design/core/General/Typography",component:G.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(H.g,{}),Object(E.jsx)(H.f,{}),Object(E.jsx)(H.b,{}),Object(E.jsx)(H.d,{}),Object(E.jsx)(H.a,{story:H.c}),Object(E.jsx)(H.e,{})]})}}}};var w=function(V){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(G.a,Object.assign({},V,{level:"h1",children:"h1. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"h2",children:"h2. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"h3",children:"h3. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"h4",children:"h4. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"h5",children:"h5. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"h6",children:"h6. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"b1",children:"b1. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"b2",children:"b2. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"b3",children:"b3. Travelmakers Design"})),Object(E.jsx)(G.a,Object.assign({},V,{level:"caption",children:"caption. Travelmakers Design"}))]})};w.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},w.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(ee,_,e){"use strict";e.d(_,"a",function(){return t});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.array.index-of.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.array.map.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.object.assign.js"),J=e.n(w),V=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./node_modules/react/index.js"),B=e.n(A),D=e("./node_modules/react/jsx-runtime.js"),P=e.n(D),l=["component","className","style","co"];function i(y,R){if(y==null)return{};var I=c(y,R),o,O;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(y);for(O=0;O<k.length;O++)o=k[O],!(R.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,o)||(I[o]=y[o]))}return I}function c(y,R){if(y==null)return{};var I={},o=Object.keys(y),O,k;for(k=0;k<o.length;k++)O=o[k],!(R.indexOf(O)>=0)&&(I[O]=y[O]);return I}function r(y,R){return typeof y=="function"?y(R):y}function u(y,R){var I=Object(V.a)(),o=I.css,O=I.cx,k=Object(Z.c)();return Array.isArray(y)?O(R,y.map(function(T){return o(r(T,k))})):O(R,o(r(y,k)))}var t=Object(A.forwardRef)(function(y,R){var I=y.component,o=y.className,O=y.style,k=y.co,T=i(y,l),b=I||"div";return Object(D.jsx)(b,Object.assign({ref:R,className:u(k,o),style:O},T))});t.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},z=`import React from "react";
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
`,F={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:X.a};var L=function(){return Object(G.jsx)(X.a,{co:function(V){return{width:100,height:100,backgroundColor:V.colors.gray3}}})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return Q});var Q={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return k});var Q=e("./node_modules/core-js/modules/es.string.replace.js"),$=e("./node_modules/core-js/modules/es.regexp.exec.js"),H=e("./node_modules/core-js/modules/es.number.is-nan.js"),re=e("./node_modules/core-js/modules/es.number.constructor.js"),X=e("./node_modules/core-js/modules/es.parse-int.js"),G=e("./node_modules/core-js/modules/es.array.map.js"),E=e("./node_modules/core-js/modules/es.string.split.js"),z=e("./node_modules/core-js/modules/es.string.starts-with.js"),F=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),A=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/core-js/modules/es.array.slice.js"),P=e("./node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/core-js/modules/es.array.from.js");function i(T,b){return y(T)||t(T,b)||r(T,b)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(T,b){if(!!T){if(typeof T=="string")return u(T,b);var s=Object.prototype.toString.call(T).slice(8,-1);if(s==="Object"&&T.constructor&&(s=T.constructor.name),s==="Map"||s==="Set")return Array.from(T);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return u(T,b)}}function u(T,b){(b==null||b>T.length)&&(b=T.length);for(var s=0,m=new Array(b);s<b;s++)m[s]=T[s];return m}function t(T,b){var s=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(s!=null){var m=[],p=!0,g=!1,j,x;try{for(s=s.call(T);!(p=(j=s.next()).done)&&(m.push(j.value),!(b&&m.length===b));p=!0);}catch(d){g=!0,x=d}finally{try{!p&&s.return!=null&&s.return()}finally{if(g)throw x}}return m}}function y(T){if(Array.isArray(T))return T}function R(T){var b=T.replace("#","");return typeof b=="string"&&b.length===6&&!Number.isNaN(Number("0x"+b))}function I(T){var b=T.replace("#",""),s=parseInt(b,16),m=s>>16&255,p=s>>8&255,g=s&255;return{r:m,g:p,b:g,a:1}}function o(T){var b=T.replace(/[^0-9,.]/g,"").split(",").map(Number),s=i(b,4),m=s[0],p=s[1],g=s[2],j=s[3];return{r:m,g:p,b:g,a:j||1}}function O(T){return R(T)?I(T):T.startsWith("rgb")?o(T):{r:0,g:0,b:0,a:1}}var k=function(b,s){var m=O(b),p=m.r,g=m.g,j=m.b;return"rgba("+p+", "+g+", "+j+", "+s+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return X});var Q=e("./node_modules/core-js/modules/es.array.concat.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=function(E){var z=Object(H.useRef)(E);return Object(H.useEffect)(function(){z.current=E},[E]),Object(H.useMemo)(function(){return function(){for(var F,L=arguments.length,w=new Array(L),J=0;J<L;J++)w[J]=arguments[J];return(F=z.current)===null||F===void 0?void 0:F.call.apply(F,[z].concat(w))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return b});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),E=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/web.timers.js");function A(s,m){return i(s)||l(s,m)||D(s,m)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(s,m){if(!!s){if(typeof s=="string")return P(s,m);var p=Object.prototype.toString.call(s).slice(8,-1);if(p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set")return Array.from(s);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return P(s,m)}}function P(s,m){(m==null||m>s.length)&&(m=s.length);for(var p=0,g=new Array(m);p<m;p++)g[p]=s[p];return g}function l(s,m){var p=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(p!=null){var g=[],j=!0,x=!1,d,v;try{for(p=p.call(s);!(j=(d=p.next()).done)&&(g.push(d.value),!(m&&g.length===m));j=!0);}catch(a){x=!0,v=a}finally{try{!j&&p.return!=null&&p.return()}finally{if(x)throw v}}return g}}function i(s){if(Array.isArray(s))return s}var c=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=m.timeout,g=p===void 0?2e3:p,j=Object(V.useState)(null),x=A(j,2),d=x[0],v=x[1],a=Object(V.useState)(!1),n=A(a,2),f=n[0],S=n[1],h=Object(V.useState)(null),C=A(h,2),M=C[0],q=C[1],se=function(U){clearTimeout(M),q(setTimeout(function(){return S(!1)},g)),S(U)},N=function(U){"clipboard"in navigator?navigator.clipboard.writeText(U).then(function(){return se(!0)}).catch(function(ne){return v(ne)}):v(new Error("useClipboard: navigator.clipboard is not supported"))},Y=function(){S(!1),v(null),clearTimeout(M)};return{copy:N,reset:Y,error:d,copied:f}},r=e("./node_modules/react/jsx-runtime.js");function u(s,m){return o(s)||I(s,m)||y(s,m)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(s,m){if(!!s){if(typeof s=="string")return R(s,m);var p=Object.prototype.toString.call(s).slice(8,-1);if(p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set")return Array.from(s);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return R(s,m)}}function R(s,m){(m==null||m>s.length)&&(m=s.length);for(var p=0,g=new Array(m);p<m;p++)g[p]=s[p];return g}function I(s,m){var p=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(p!=null){var g=[],j=!0,x=!1,d,v;try{for(p=p.call(s);!(j=(d=p.next()).done)&&(g.push(d.value),!(m&&g.length===m));j=!0);}catch(a){x=!0,v=a}finally{try{!j&&p.return!=null&&p.return()}finally{if(x)throw v}}return g}}function o(s){if(Array.isArray(s))return s}var O=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,k={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},O=`import React, { useState } from "react";

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
`,k={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},T=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},b=function(){var m=Object(V.useState)(""),p=u(m,2),g=p[0],j=p[1],x=c({timeout:3e3}),d=x.copy,v=x.copied;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",onChange:function(n){return j(n.target.value)}}),Object(r.jsx)("button",{onClick:function(){return d(g)},children:"copy"}),Object(r.jsx)("span",{children:v&&"Copied!!"})]})};b.displayName="Default",b.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},b.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return s});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),E=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),A=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function B(m,p){return c(m)||i(m,p)||P(m,p)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(m,p){if(!!m){if(typeof m=="string")return l(m,p);var g=Object.prototype.toString.call(m).slice(8,-1);if(g==="Object"&&m.constructor&&(g=m.constructor.name),g==="Map"||g==="Set")return Array.from(m);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return l(m,p)}}function l(m,p){(p==null||p>m.length)&&(p=m.length);for(var g=0,j=new Array(p);g<p;g++)j[g]=m[g];return j}function i(m,p){var g=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(g!=null){var j=[],x=!0,d=!1,v,a;try{for(g=g.call(m);!(x=(v=g.next()).done)&&(j.push(v.value),!(p&&j.length===p));x=!0);}catch(n){d=!0,a=n}finally{try{!x&&g.return!=null&&g.return()}finally{if(d)throw a}}return j}}function c(m){if(Array.isArray(m))return m}var r=function(p,g,j){var x=Object(A.a)(p,g),d=B(x,2),v=d[0],a=d[1];return Object(Z.a)(v,j),a},u=e("./node_modules/react/jsx-runtime.js");function t(m,p){return O(m)||o(m,p)||R(m,p)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(m,p){if(!!m){if(typeof m=="string")return I(m,p);var g=Object.prototype.toString.call(m).slice(8,-1);if(g==="Object"&&m.constructor&&(g=m.constructor.name),g==="Map"||g==="Set")return Array.from(m);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return I(m,p)}}function I(m,p){(p==null||p>m.length)&&(p=m.length);for(var g=0,j=new Array(p);g<p;g++)j[g]=m[g];return j}function o(m,p){var g=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(g!=null){var j=[],x=!0,d=!1,v,a;try{for(g=g.call(m);!(x=(v=g.next()).done)&&(j.push(v.value),!(p&&j.length===p));x=!0);}catch(n){d=!0,a=n}finally{try{!x&&g.return!=null&&g.return()}finally{if(d)throw a}}return j}}function O(m){if(Array.isArray(m))return m}var k=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},k=`import React, { useState } from "react";

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
`,T={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},b=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},s=function(){var p=Object(V.useState)(""),g=t(p,2),j=g[0],x=g[1],d=r(function(){alert("Updated!")},1e3,[j]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",onChange:function(a){return x(a.target.value)}}),Object(u.jsx)("button",{onClick:d,children:"Cancel"})]})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`() => {
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
}`}},s.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},z=`import React from "react";
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
`,F={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var L=function(){var J=Object(X.a)();return Object(G.jsxs)("div",{children:[Math.random(),Object(G.jsx)("button",{onClick:J,children:"Update"})]})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return b});var Q=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(A),D=e("./node_modules/core-js/modules/es.array.slice.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.function.name.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(c),u=e("./node_modules/react/index.js"),t=e.n(u);function y(s,m){return k(s)||O(s,m)||I(s,m)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(s,m){if(!!s){if(typeof s=="string")return o(s,m);var p=Object.prototype.toString.call(s).slice(8,-1);if(p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set")return Array.from(s);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return o(s,m)}}function o(s,m){(m==null||m>s.length)&&(m=s.length);for(var p=0,g=new Array(m);p<m;p++)g[p]=s[p];return g}function O(s,m){var p=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(p!=null){var g=[],j=!0,x=!1,d,v;try{for(p=p.call(s);!(j=(d=p.next()).done)&&(g.push(d.value),!(m&&g.length===m));j=!0);}catch(a){x=!0,v=a}finally{try{!j&&p.return!=null&&p.return()}finally{if(x)throw v}}return g}}function k(s){if(Array.isArray(s))return s}var T=function(m){return(m+1)%1e6},b=function(){var m=Object(u.useReducer)(T,0),p=y(m,2),g=p[1];return g}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),G=e("./node_modules/react/jsx-runtime.js"),E=e.n(G),z=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,F={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},z=`import React, { useState } from "react";

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
`,F={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useHiddenBodyOverflow"};var L=function(){return Object(X.a)(!0),Object(G.jsx)("div",{children:Object(G.jsx)("span",{children:"useHiddenBodyOverflow"})})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts":function(ee,_,e){"use strict";e.d(_,"b",function(){return H});var Q=e("./node_modules/react/index.js"),$=e.n(Q),H=function(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function G(F){F.preventDefault()}function E(){document.body.addEventListener("touchmove",G,{passive:!1})}function z(){document.body.removeEventListener("touchmove",G)}return Object(Q.useEffect)(function(){return X&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var F=document.body.style.top;document.body.style.cssText=""}},[]),Object(Q.useEffect)(function(){return X&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[X]),null};_.a=H},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return se});var Q=e("./node_modules/core-js/modules/es.promise.js"),$=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/web.timers.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e("./node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),J=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/react/index.js"),B=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),D=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),P=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),l=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),i=e("./node_modules/core-js/modules/es.object.define-property.js"),c=e("./node_modules/core-js/modules/es.object.create.js"),r=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),u=e("./node_modules/core-js/modules/es.array.for-each.js"),t=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),y=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),R=e("./node_modules/core-js/modules/es.array.reverse.js"),I=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return N};var N={},Y=Object.prototype,K=Y.hasOwnProperty,U=typeof Symbol=="function"?Symbol:{},ne=U.iterator||"@@iterator",ve=U.asyncIterator||"@@asyncIterator",be=U.toStringTag||"@@toStringTag";function W(me,ae,_e){return Object.defineProperty(me,ae,{value:_e,enumerable:!0,configurable:!0,writable:!0}),me[ae]}try{W({},"")}catch(me){W=function(_e,he,fe){return _e[he]=fe}}function oe(me,ae,_e,he){var fe=ae&&ae.prototype instanceof ye?ae:ye,je=Object.create(fe.prototype),De=new Pe(he||[]);return je._invoke=function(Ee,ke,Se){var Ce="suspendedStart";return function(Re,we){if(Ce==="executing")throw new Error("Generator is already running");if(Ce==="completed"){if(Re==="throw")throw we;return He()}for(Se.method=Re,Se.arg=we;;){var Ue=Se.delegate;if(Ue){var We=Te(Ue,Se);if(We){if(We===ue)continue;return We}}if(Se.method==="next")Se.sent=Se._sent=Se.arg;else if(Se.method==="throw"){if(Ce==="suspendedStart")throw Ce="completed",Se.arg;Se.dispatchException(Se.arg)}else Se.method==="return"&&Se.abrupt("return",Se.arg);Ce="executing";var ze=ie(Ee,ke,Se);if(ze.type==="normal"){if(Ce=Se.done?"completed":"suspendedYield",ze.arg===ue)continue;return{value:ze.arg,done:Se.done}}ze.type==="throw"&&(Ce="completed",Se.method="throw",Se.arg=ze.arg)}}}(me,_e,De),je}function ie(me,ae,_e){try{return{type:"normal",arg:me.call(ae,_e)}}catch(he){return{type:"throw",arg:he}}}N.wrap=oe;var ue={};function ye(){}function pe(){}function ge(){}var le={};W(le,ne,function(){return this});var te=Object.getPrototypeOf,ce=te&&te(te(Le([])));ce&&ce!==Y&&K.call(ce,ne)&&(le=ce);var de=ge.prototype=ye.prototype=Object.create(le);function xe(me){["next","throw","return"].forEach(function(ae){W(me,ae,function(_e){return this._invoke(ae,_e)})})}function Oe(me,ae){function _e(fe,je,De,Ee){var ke=ie(me[fe],me,je);if(ke.type!=="throw"){var Se=ke.arg,Ce=Se.value;return Ce&&typeof Ce=="object"&&K.call(Ce,"__await")?ae.resolve(Ce.__await).then(function(Re){_e("next",Re,De,Ee)},function(Re){_e("throw",Re,De,Ee)}):ae.resolve(Ce).then(function(Re){Se.value=Re,De(Se)},function(Re){return _e("throw",Re,De,Ee)})}Ee(ke.arg)}var he;this._invoke=function(fe,je){function De(){return new ae(function(Ee,ke){_e(fe,je,Ee,ke)})}return he=he?he.then(De,De):De()}}function Te(me,ae){var _e=me.iterator[ae.method];if(_e===void 0){if(ae.delegate=null,ae.method==="throw"){if(me.iterator.return&&(ae.method="return",ae.arg=void 0,Te(me,ae),ae.method==="throw"))return ue;ae.method="throw",ae.arg=new TypeError("The iterator does not provide a 'throw' method")}return ue}var he=ie(_e,me.iterator,ae.arg);if(he.type==="throw")return ae.method="throw",ae.arg=he.arg,ae.delegate=null,ue;var fe=he.arg;return fe?fe.done?(ae[me.resultName]=fe.value,ae.next=me.nextLoc,ae.method!=="return"&&(ae.method="next",ae.arg=void 0),ae.delegate=null,ue):fe:(ae.method="throw",ae.arg=new TypeError("iterator result is not an object"),ae.delegate=null,ue)}function Be(me){var ae={tryLoc:me[0]};1 in me&&(ae.catchLoc=me[1]),2 in me&&(ae.finallyLoc=me[2],ae.afterLoc=me[3]),this.tryEntries.push(ae)}function Ae(me){var ae=me.completion||{};ae.type="normal",delete ae.arg,me.completion=ae}function Pe(me){this.tryEntries=[{tryLoc:"root"}],me.forEach(Be,this),this.reset(!0)}function Le(me){if(me){var ae=me[ne];if(ae)return ae.call(me);if(typeof me.next=="function")return me;if(!isNaN(me.length)){var _e=-1,he=function fe(){for(;++_e<me.length;)if(K.call(me,_e))return fe.value=me[_e],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return he.next=he}}return{next:He}}function He(){return{value:void 0,done:!0}}return pe.prototype=ge,W(de,"constructor",ge),W(ge,"constructor",pe),pe.displayName=W(ge,be,"GeneratorFunction"),N.isGeneratorFunction=function(me){var ae=typeof me=="function"&&me.constructor;return!!ae&&(ae===pe||(ae.displayName||ae.name)==="GeneratorFunction")},N.mark=function(me){return Object.setPrototypeOf?Object.setPrototypeOf(me,ge):(me.__proto__=ge,W(me,be,"GeneratorFunction")),me.prototype=Object.create(de),me},N.awrap=function(me){return{__await:me}},xe(Oe.prototype),W(Oe.prototype,ve,function(){return this}),N.AsyncIterator=Oe,N.async=function(me,ae,_e,he,fe){fe===void 0&&(fe=Promise);var je=new Oe(oe(me,ae,_e,he),fe);return N.isGeneratorFunction(ae)?je:je.next().then(function(De){return De.done?De.value:je.next()})},xe(de),W(de,be,"Generator"),W(de,ne,function(){return this}),W(de,"toString",function(){return"[object Generator]"}),N.keys=function(me){var ae=[];for(var _e in me)ae.push(_e);return ae.reverse(),function he(){for(;ae.length;){var fe=ae.pop();if(fe in me)return he.value=fe,he.done=!1,he}return he.done=!0,he}},N.values=Le,Pe.prototype={constructor:Pe,reset:function(ae){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ae),!ae)for(var _e in this)_e.charAt(0)==="t"&&K.call(this,_e)&&!isNaN(+_e.slice(1))&&(this[_e]=void 0)},stop:function(){this.done=!0;var ae=this.tryEntries[0].completion;if(ae.type==="throw")throw ae.arg;return this.rval},dispatchException:function(ae){if(this.done)throw ae;var _e=this;function he(Se,Ce){return De.type="throw",De.arg=ae,_e.next=Se,Ce&&(_e.method="next",_e.arg=void 0),!!Ce}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var je=this.tryEntries[fe],De=je.completion;if(je.tryLoc==="root")return he("end");if(je.tryLoc<=this.prev){var Ee=K.call(je,"catchLoc"),ke=K.call(je,"finallyLoc");if(Ee&&ke){if(this.prev<je.catchLoc)return he(je.catchLoc,!0);if(this.prev<je.finallyLoc)return he(je.finallyLoc)}else if(Ee){if(this.prev<je.catchLoc)return he(je.catchLoc,!0)}else{if(!ke)throw new Error("try statement without catch or finally");if(this.prev<je.finallyLoc)return he(je.finallyLoc)}}}},abrupt:function(ae,_e){for(var he=this.tryEntries.length-1;he>=0;--he){var fe=this.tryEntries[he];if(fe.tryLoc<=this.prev&&K.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var je=fe;break}}je&&(ae==="break"||ae==="continue")&&je.tryLoc<=_e&&_e<=je.finallyLoc&&(je=null);var De=je?je.completion:{};return De.type=ae,De.arg=_e,je?(this.method="next",this.next=je.finallyLoc,ue):this.complete(De)},complete:function(ae,_e){if(ae.type==="throw")throw ae.arg;return ae.type==="break"||ae.type==="continue"?this.next=ae.arg:ae.type==="return"?(this.rval=this.arg=ae.arg,this.method="return",this.next="end"):ae.type==="normal"&&_e&&(this.next=_e),ue},finish:function(ae){for(var _e=this.tryEntries.length-1;_e>=0;--_e){var he=this.tryEntries[_e];if(he.finallyLoc===ae)return this.complete(he.completion,he.afterLoc),Ae(he),ue}},catch:function(ae){for(var _e=this.tryEntries.length-1;_e>=0;--_e){var he=this.tryEntries[_e];if(he.tryLoc===ae){var fe=he.completion;if(fe.type==="throw"){var je=fe.arg;Ae(he)}return je}}throw new Error("illegal catch attempt")},delegateYield:function(ae,_e,he){return this.delegate={iterator:Le(ae),resultName:_e,nextLoc:he},this.method==="next"&&(this.arg=void 0),ue}},N}function O(N,Y,K,U,ne,ve,be){try{var W=N[ve](be),oe=W.value}catch(ie){K(ie);return}W.done?Y(oe):Promise.resolve(oe).then(U,ne)}function k(N){return function(){var Y=this,K=arguments;return new Promise(function(U,ne){var ve=N.apply(Y,K);function be(oe){O(ve,U,ne,be,W,"next",oe)}function W(oe){O(ve,U,ne,be,W,"throw",oe)}be(void 0)})}}function T(N,Y){return g(N)||p(N,Y)||s(N,Y)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(N,Y){if(!!N){if(typeof N=="string")return m(N,Y);var K=Object.prototype.toString.call(N).slice(8,-1);if(K==="Object"&&N.constructor&&(K=N.constructor.name),K==="Map"||K==="Set")return Array.from(N);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return m(N,Y)}}function m(N,Y){(Y==null||Y>N.length)&&(Y=N.length);for(var K=0,U=new Array(Y);K<Y;K++)U[K]=N[K];return U}function p(N,Y){var K=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if(K!=null){var U=[],ne=!0,ve=!1,be,W;try{for(K=K.call(N);!(ne=(be=K.next()).done)&&(U.push(be.value),!(Y&&U.length===Y));ne=!0);}catch(oe){ve=!0,W=oe}finally{try{!ne&&K.return!=null&&K.return()}finally{if(ve)throw W}}return U}}function g(N){if(Array.isArray(N))return N}var j=function(Y){var K=Object(A.useState)(!1),U=T(K,2),ne=U[0],ve=U[1],be=Object(I.a)(Y),W=Object(A.useCallback)(k(o().mark(function oe(){var ie,ue=arguments;return o().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return ve(!0),pe.next=3,be.apply(void 0,ue);case 3:return ie=pe.sent,ve(!1),pe.abrupt("return",ie);case 6:case"end":return pe.stop()}},oe)})),[Y]);return[ne,W]},x=e("./node_modules/react/jsx-runtime.js");function d(N,Y){return S(N)||f(N,Y)||a(N,Y)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(N,Y){if(!!N){if(typeof N=="string")return n(N,Y);var K=Object.prototype.toString.call(N).slice(8,-1);if(K==="Object"&&N.constructor&&(K=N.constructor.name),K==="Map"||K==="Set")return Array.from(N);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return n(N,Y)}}function n(N,Y){(Y==null||Y>N.length)&&(Y=N.length);for(var K=0,U=new Array(Y);K<Y;K++)U[K]=N[K];return U}function f(N,Y){var K=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if(K!=null){var U=[],ne=!0,ve=!1,be,W;try{for(K=K.call(N);!(ne=(be=K.next()).done)&&(U.push(be.value),!(Y&&U.length===Y));ne=!0);}catch(oe){ve=!0,W=oe}finally{try{!ne&&K.return!=null&&K.return()}finally{if(ve)throw W}}return U}}function S(N){if(Array.isArray(N))return N}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,C={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},h=`import React from "react";
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
`,C={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},M=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},q=function(Y){return new Promise(function(K){return setTimeout(K,Y)})},se=function(){var Y=j(q),K=d(Y,2),U=K[0],ne=K[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("button",{onClick:function(){return ne(2e3)},children:"Start"})}),Object(x.jsxs)("div",{children:["Loading: ",""+U]})]})};se.displayName="Default",se.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},se.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e.n(A),D=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.array.slice.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(c),u=e("./node_modules/core-js/modules/es.array.from.js"),t=e.n(u),y=e("./node_modules/react/index.js"),R=e.n(y),I=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),o=e("./node_modules/react/jsx-runtime.js"),O=e.n(o);function k(d,v){return p(d)||m(d,v)||b(d,v)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(d,v){if(!!d){if(typeof d=="string")return s(d,v);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(d,v)}}function s(d,v){(v==null||v>d.length)&&(v=d.length);for(var a=0,n=new Array(v);a<v;a++)n[a]=d[a];return n}function m(d,v){var a=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var n=[],f=!0,S=!1,h,C;try{for(a=a.call(d);!(f=(h=a.next()).done)&&(n.push(h.value),!(v&&n.length===v));f=!0);}catch(M){S=!0,C=M}finally{try{!f&&a.return!=null&&a.return()}finally{if(S)throw C}}return n}}function p(d){if(Array.isArray(d))return d}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},g=`import React, { useEffect } from "react";

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
`,j={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var x=function(){var v=Object(I.a)({width:0,height:0}),a=k(v,2),n=a[0],f=a[1];return Object(y.useEffect)(function(){var S=function(){f({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",S),function(){window.removeEventListener("resize",S)}},[]),Object(o.jsx)("pre",{children:JSON.stringify(n,null,2)})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
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
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return T});var Q=e("./node_modules/core-js/modules/es.array.is-array.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.string.iterator.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e.n(A),D=e("./node_modules/core-js/modules/es.array.slice.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.function.name.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(c),u=e("./node_modules/react/index.js"),t=e.n(u);function y(b,s){return k(b)||O(b,s)||I(b,s)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(b,s){if(!!b){if(typeof b=="string")return o(b,s);var m=Object.prototype.toString.call(b).slice(8,-1);if(m==="Object"&&b.constructor&&(m=b.constructor.name),m==="Map"||m==="Set")return Array.from(b);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return o(b,s)}}function o(b,s){(s==null||s>b.length)&&(s=b.length);for(var m=0,p=new Array(s);m<s;m++)p[m]=b[m];return p}function O(b,s){var m=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(m!=null){var p=[],g=!0,j=!1,x,d;try{for(m=m.call(b);!(g=(x=m.next()).done)&&(p.push(x.value),!(s&&p.length===s));g=!0);}catch(v){j=!0,d=v}finally{try{!g&&m.return!=null&&m.return()}finally{if(j)throw d}}return p}}function k(b){if(Array.isArray(b))return b}var T=function(s){var m=Object(u.useRef)(0),p=Object(u.useState)(s),g=y(p,2),j=g[0],x=g[1],d=Object(u.useCallback)(function(v){cancelAnimationFrame(m.current),m.current=requestAnimationFrame(function(){x(v)})},[]);return[j,d]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return p});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e("./node_modules/core-js/modules/es.symbol.iterator.js"),E=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),F=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),w=e("./node_modules/core-js/modules/es.function.name.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),A=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function B(g,j){return c(g)||i(g,j)||P(g,j)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(g,j){if(!!g){if(typeof g=="string")return l(g,j);var x=Object.prototype.toString.call(g).slice(8,-1);if(x==="Object"&&g.constructor&&(x=g.constructor.name),x==="Map"||x==="Set")return Array.from(g);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return l(g,j)}}function l(g,j){(j==null||j>g.length)&&(j=g.length);for(var x=0,d=new Array(j);x<j;x++)d[x]=g[x];return d}function i(g,j){var x=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(x!=null){var d=[],v=!0,a=!1,n,f;try{for(x=x.call(g);!(v=(n=x.next()).done)&&(d.push(n.value),!(j&&d.length===j));v=!0);}catch(S){a=!0,f=S}finally{try{!v&&x.return!=null&&x.return()}finally{if(a)throw f}}return d}}function c(g){if(Array.isArray(g))return g}var r={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},u=typeof window!="undefined",t=function(){var j=Object(V.useRef)(null),x=Object(A.a)(r),d=B(x,2),v=d[0],a=d[1],n=Object(V.useMemo)(function(){return u?new ResizeObserver(function(f){var S=f[0];S&&a(S.contentRect)}):null},[]);return Object(V.useEffect)(function(){return j.current&&n.observe(j.current),function(){n.disconnect()}},[j.current]),[j,v]},y=e("./node_modules/react/jsx-runtime.js");function R(g,j){return T(g)||k(g,j)||o(g,j)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o(g,j){if(!!g){if(typeof g=="string")return O(g,j);var x=Object.prototype.toString.call(g).slice(8,-1);if(x==="Object"&&g.constructor&&(x=g.constructor.name),x==="Map"||x==="Set")return Array.from(g);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return O(g,j)}}function O(g,j){(j==null||j>g.length)&&(j=g.length);for(var x=0,d=new Array(j);x<j;x++)d[x]=g[x];return d}function k(g,j){var x=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(x!=null){var d=[],v=!0,a=!1,n,f;try{for(x=x.call(g);!(v=(n=x.next()).done)&&(d.push(n.value),!(j&&d.length===j));v=!0);}catch(S){a=!0,f=S}finally{try{!v&&x.return!=null&&x.return()}finally{if(a)throw f}}return d}}function T(g){if(Array.isArray(g))return g}var b=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},b=`import React, { useEffect } from "react";

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
`,s={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},m=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},p=function(){var j=t(),x=R(j,2),d=x[0],v=x[1],a=Object(Z.a)();return Object(V.useEffect)(function(){a()},[]),Object(y.jsxs)("div",{children:[Object(y.jsx)("textarea",{ref:d,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(y.jsx)("div",{children:JSON.stringify(v)})]})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`() => {
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
}`}},p.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e.n(A),D=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.array.slice.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(c),u=e("./node_modules/core-js/modules/es.array.from.js"),t=e.n(u),y=e("./node_modules/react/index.js"),R=e.n(y),I=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),o=e("./node_modules/react/jsx-runtime.js"),O=e.n(o);function k(d,v){return p(d)||m(d,v)||b(d,v)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(d,v){if(!!d){if(typeof d=="string")return s(d,v);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(d,v)}}function s(d,v){(v==null||v>d.length)&&(v=d.length);for(var a=0,n=new Array(v);a<v;a++)n[a]=d[a];return n}function m(d,v){var a=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var n=[],f=!0,S=!1,h,C;try{for(a=a.call(d);!(f=(h=a.next()).done)&&(n.push(h.value),!(v&&n.length===v));f=!0);}catch(M){S=!0,C=M}finally{try{!f&&a.return!=null&&a.return()}finally{if(S)throw C}}return n}}function p(d){if(Array.isArray(d))return d}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},g=`import React from "react";
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
`,j={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var x=function(){var v=Object(I.a)(function(){alert("fire!")},2e3),a=k(v,2),n=a[0],f=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:n,children:"Run"}),Object(o.jsx)("button",{onClick:f,children:"Clear"})]})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return G});var Q=e("./node_modules/core-js/modules/web.timers.js"),$=e.n(Q),H=e("./node_modules/react/index.js"),re=e.n(H),X=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),G=function(z,F){var L=Object(H.useRef)(),w=Object(X.a)(z),J=Object(H.useCallback)(function(){L.current&&clearTimeout(L.current),L.current=setTimeout(function(){w()},F)},[F]),V=Object(H.useCallback)(function(){L.current&&clearTimeout(L.current)},[]);return Object(H.useEffect)(function(){return V},[V]),[J,V]}},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(ee,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e.n(Q),H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(H),X=e("./node_modules/core-js/modules/es.symbol.js"),G=e.n(X),E=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e.n(E),F=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(F),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e.n(w),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),A=e("./node_modules/core-js/modules/es.array.iterator.js"),B=e.n(A),D=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(D),l=e("./node_modules/core-js/modules/es.array.slice.js"),i=e.n(l),c=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(c),u=e("./node_modules/core-js/modules/es.array.from.js"),t=e.n(u),y=e("./node_modules/react/index.js"),R=e.n(y),I=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),o=e("./node_modules/react/jsx-runtime.js"),O=e.n(o);function k(d,v){return p(d)||m(d,v)||b(d,v)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(d,v){if(!!d){if(typeof d=="string")return s(d,v);var a=Object.prototype.toString.call(d).slice(8,-1);if(a==="Object"&&d.constructor&&(a=d.constructor.name),a==="Map"||a==="Set")return Array.from(d);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s(d,v)}}function s(d,v){(v==null||v>d.length)&&(v=d.length);for(var a=0,n=new Array(v);a<v;a++)n[a]=d[a];return n}function m(d,v){var a=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(a!=null){var n=[],f=!0,S=!1,h,C;try{for(a=a.call(d);!(f=(h=a.next()).done)&&(n.push(h.value),!(v&&n.length===v));f=!0);}catch(M){S=!0,C=M}finally{try{!f&&a.return!=null&&a.return()}finally{if(S)throw C}}return n}}function p(d){if(Array.isArray(d))return d}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,j={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},g=`import React, { useEffect, useState } from "react";

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
`,j={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var x=function(){var v=Object(y.useState)(""),a=k(v,2),n=a[0],f=a[1];return Object(y.useEffect)(function(){console.log("useEffect:",n)},[n]),Object(I.a)(function(){console.log("useUpdateEffect:",n)},[n]),Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",onChange:function(h){return f(h.target.value)}})})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`() => {
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
}`}},x.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return H});var Q=e("./node_modules/react/index.js"),$=e.n(Q),H=function(X,G){var E=Object(Q.useRef)(!0);Object(Q.useEffect)(function(){if(!E.current)return X();E.current=!1},G)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(ee,_,e){"use strict";e.d(_,"c",function(){return V}),e.d(_,"d",function(){return Z}),e.d(_,"b",function(){return A}),e.d(_,"a",function(){return D});var Q=e("./node_modules/react/index.js"),$=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),H=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),re=e("./node_modules/react/jsx-runtime.js"),X=function(l){var i=l.styles,c=V();return Object(re.jsx)(H.a,{styles:Object(H.b)(i(c))})};X.displayName="Global";var G={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},E=function(){return Object(re.jsx)(H.a,{styles:G})};E.displayName="NormalizeCSS";var z=e("./node_modules/core-js/modules/es.array.reduce.js"),F=e("./node_modules/core-js/modules/es.object.keys.js"),L=e("./node_modules/core-js/modules/es.object.assign.js");function w(P,l){return l?Object.keys(P).reduce(function(i,c){if(c==="headings"&&l.headings){var r=l.headings?Object.keys(P.headings).reduce(function(u,t){return u[t]=Object.assign({},P.headings[t],l.headings[t]),u},{}):P.headings;return Object.assign({},i,{headings:Object.assign({},P.headings,l.headings,r)})}return i[c]=typeof l[c]=="object"?Object.assign({},P[c],l[c]):l[c]||P[c],i},{}):P}var J=Object(Q.createContext)({theme:$.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function V(){var P;return((P=Object(Q.useContext)(J))===null||P===void 0?void 0:P.theme)||$.a}function Z(){var P;return((P=Object(Q.useContext)(J))===null||P===void 0?void 0:P.styles)||{}}function A(){var P;return((P=Object(Q.useContext)(J))===null||P===void 0?void 0:P.emotionOptions)||{key:"co",prepend:!0}}var B=function(){return Object(re.jsx)(X,{styles:function(i){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:i.fontFamily,backgroundColor:i.colorScheme==="dark"?i.colors.black:i.colors.white,color:i.colorScheme==="dark"?i.colors.white:i.colors.black,lineHeight:i.lineHeight,fontSizes:i.fontSizes.b3}}}})};B.displayName="GlobalStyles";var D=function(l){var i=l.theme,c=l.styles,r=c===void 0?{}:c,u=l.emotionOptions,t=l.withNormalizeCSS,y=t===void 0?!1:t,R=l.withGlobalStyles,I=R===void 0?!1:R,o=l.children;return Object(re.jsxs)(J.Provider,{value:{theme:w($.a,i),styles:r,emotionOptions:u},children:[y&&Object(re.jsx)(E,{}),I&&Object(re.jsx)(B,{}),o]})};D.displayName="TmProvider",D.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(ee,_,e){"use strict";e.d(_,"b",function(){return ye}),e.d(_,"a",function(){return ge});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),$={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},H={primary:[$.navy1,$.navy1,$.navy2],secondary:[$.green2,$.green2,$.green1],tertiary:[$.white,$.white,$.gray6],red:[$.red2,$.red2,$.red1]},re={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},X={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},G={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},E={small:2,medium:4,large:8,round:100,circular:"50%"},z={xsmall:4,small:8,medium:16,large:24},F={xsmall:576,small:768,medium:1024,large:1408},L={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},w={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},J={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},V=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),Z={mobile:"@media (max-width: "+V.a.mobile+"px)",tablet:"@media (max-width: "+V.a.tablet+"px)",desktop:"@media (max-width: "+V.a.desktop+"px)",largeDesktop:"@media (max-width: "+V.a.maxSize+"px)"},A=e("./node_modules/core-js/modules/es.object.assign.js"),B=function(te){for(var ce="",de=1;de<te.length-1;de+=1)ce+=te[de]+" "+de/(te.length-1)*100+"%, ";return te[0]+" 0%, "+ce+te[te.length-1]+" 100%"},D=function(te){for(var ce=arguments.length,de=new Array(ce>1?ce-1:0),xe=1;xe<ce;xe++)de[xe-1]=arguments[xe];return"linear-gradient("+te+"deg, "+B(de)+")"},P=function(){for(var te=arguments.length,ce=new Array(te),de=0;de<te;de++)ce[de]=arguments[de];return"radial-gradient(circle, "+B(ce)+")"},l=function(te){return typeof te.size=="number"?te.size:te.sizes[te.size]||te.size||te.sizes.medium},i=function(te){return function(ce){return"@media (min-width: "+(l({size:ce,sizes:te.breakpoints})+1)+"px)"}},c=function(te){return function(ce){return"@media (max-width: "+l({size:ce,sizes:te.breakpoints})+"px)"}},r=e("./node_modules/core-js/modules/es.string.replace.js"),u=e("./node_modules/core-js/modules/es.regexp.exec.js"),t=e("./node_modules/core-js/modules/es.number.is-nan.js"),y=e("./node_modules/core-js/modules/es.number.constructor.js"),R=e("./node_modules/core-js/modules/es.parse-int.js"),I=e("./node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/core-js/modules/es.string.split.js"),O=e("./node_modules/core-js/modules/es.string.starts-with.js"),k=e("./node_modules/core-js/modules/es.array.is-array.js"),T=e("./node_modules/core-js/modules/es.symbol.js"),b=e("./node_modules/core-js/modules/es.symbol.description.js"),s=e("./node_modules/core-js/modules/es.object.to-string.js"),m=e("./node_modules/core-js/modules/es.symbol.iterator.js"),p=e("./node_modules/core-js/modules/es.string.iterator.js"),g=e("./node_modules/core-js/modules/es.array.iterator.js"),j=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e("./node_modules/core-js/modules/es.array.slice.js"),d=e("./node_modules/core-js/modules/es.function.name.js"),v=e("./node_modules/core-js/modules/es.array.from.js");function a(le,te){return C(le)||h(le,te)||f(le,te)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(le,te){if(!!le){if(typeof le=="string")return S(le,te);var ce=Object.prototype.toString.call(le).slice(8,-1);if(ce==="Object"&&le.constructor&&(ce=le.constructor.name),ce==="Map"||ce==="Set")return Array.from(le);if(ce==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ce))return S(le,te)}}function S(le,te){(te==null||te>le.length)&&(te=le.length);for(var ce=0,de=new Array(te);ce<te;ce++)de[ce]=le[ce];return de}function h(le,te){var ce=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ce!=null){var de=[],xe=!0,Oe=!1,Te,Be;try{for(ce=ce.call(le);!(xe=(Te=ce.next()).done)&&(de.push(Te.value),!(te&&de.length===te));xe=!0);}catch(Ae){Oe=!0,Be=Ae}finally{try{!xe&&ce.return!=null&&ce.return()}finally{if(Oe)throw Be}}return de}}function C(le){if(Array.isArray(le))return le}var M=function(te){var ce=te.replace("#","");return typeof ce=="string"&&ce.length===6&&!Number.isNaN(Number("0x"+ce))},q=function(te){var ce=te.replace("#",""),de=parseInt(ce,16),xe=de>>16&255,Oe=de>>8&255,Te=de&255;return{r:xe,g:Oe,b:Te,a:1}},se=function(te){var ce=te.replace(/[^0-9,.]/g,"").split(",").map(Number),de=a(ce,4),xe=de[0],Oe=de[1],Te=de[2],Be=de[3];return{r:xe,g:Oe,b:Te,a:Be||1}},N=function(te){return M(te)?q(te):te.startsWith("rgb")?se(te):{r:0,g:0,b:0,a:1}},Y=function(te,ce){if(typeof te!="string"||ce>1||ce<0)return"rgba(0, 0, 0, 1)";var de=N(te),xe=de.r,Oe=de.g,Te=de.b;return"rgba("+xe+", "+Oe+", "+Te+", "+ce+")"},K=function(te,ce){var de=N(te),xe=de.r,Oe=de.g,Te=de.b,Be=de.a,Ae=1-ce,Pe=function(He){return Math.round(He*Ae)};return"rgba("+Pe(xe)+", "+Pe(Oe)+", "+Pe(Te)+", "+Be+")"},U=function(te,ce){var de=N(te),xe=de.r,Oe=de.g,Te=de.b,Be=de.a,Ae=function(Le){return Math.round(Le+(255-Le)*ce)};return"rgba("+Ae(xe)+", "+Ae(Oe)+", "+Ae(Te)+", "+Be+")"},ne=function(te){return te*8},ve={linearGradient:D,radialGradient:P,smallerThan:c,largerThan:i,rgba:Y,size:l,darken:K,lighten:U,spacing:ne},be=function(te){return Object.assign({},te,{fn:{largerThan:ve.largerThan(te),smallerThan:ve.smallerThan(te),radialGradient:ve.radialGradient,linearGradient:ve.linearGradient,rgba:ve.rgba,size:ve.size,lighten:ve.lighten,darken:ve.darken,spacing:ve.spacing}})},W=Object.keys(H),oe=Object.keys($),ie=["xsmall","small","medium","large"],ue=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],ye=function(te){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:te.fontFamily||"sans-serif"}},pe={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:$.black,colors:$,palettes:H,shadows:re,fontSizes:X,lineHeights:G,radius:E,spacing:z,breakpoints:F,headings:L,opacity:w,zIndex:J,extra:{},media:Z},ge=be(pe)},"./packages/travelmakers-design-styles/src/theme/types/TmSize.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return Q});var Q={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200}},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return I});var Q=e("./node_modules/core-js/modules/es.function.name.js"),$=e("./node_modules/core-js/modules/es.array.map.js"),H=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),G=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),E=e("./node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),J=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/core-js/modules/es.array.slice.js"),B=e("./node_modules/core-js/modules/es.array.from.js");function D(o,O){return r(o)||c(o,O)||l(o,O)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(o,O){if(!!o){if(typeof o=="string")return i(o,O);var k=Object.prototype.toString.call(o).slice(8,-1);if(k==="Object"&&o.constructor&&(k=o.constructor.name),k==="Map"||k==="Set")return Array.from(o);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return i(o,O)}}function i(o,O){(O==null||O>o.length)&&(O=o.length);for(var k=0,T=new Array(O);k<O;k++)T[k]=o[k];return T}function c(o,O){var k=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(k!=null){var T=[],b=!0,s=!1,m,p;try{for(k=k.call(o);!(b=(m=k.next()).done)&&(T.push(m.value),!(O&&T.length===O));b=!0);}catch(g){s=!0,p=g}finally{try{!b&&k.return!=null&&k.return()}finally{if(s)throw p}}return T}}function r(o){if(Array.isArray(o))return o}function u(o){var O={};return Object.keys(o).forEach(function(k){var T=D(o[k],2),b=T[0],s=T[1];O[b]=s}),O}var t=e("./node_modules/core-js/modules/es.array.reduce.js");function y(o,O,k){return Object.keys(O).reduce(function(T,b){return T[b]=o(O[b],k?"tm-"+k+"-"+b:null),T},{})}var R=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function I(o){var O=typeof o=="function"?o:function(){return o};function k(T,b){var s=Object(re.c)(),m=Object(re.d)()[b==null?void 0:b.name],p=Object(R.a)(),g=p.css,j=p.cx,x=0;function d(h){return x+=1,"tm-ref_"+(h||"")+"_"+x}var v=O(s,T,d),a=typeof(b==null?void 0:b.overrideStyles)=="function"?b==null?void 0:b.overrideStyles(s):(b==null?void 0:b.overrideStyles)||{},n=typeof m=="function"?m(s):m||{},f=typeof(b==null?void 0:b.co)=="function"?b.co(s):b==null?void 0:b.co,S=u(Object.keys(v).map(function(h){var C=j(g(v[h]),g(n[h]),g(a[h]),g(f));return[h,C]}));return{classes:y(j,S,b==null?void 0:b.name),cx:j,theme:s}}return k}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(ee,_,e){"use strict";e.d(_,"a",function(){return S});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),$=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),E=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/core-js/modules/es.array.slice.js"),J=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/clsx/dist/clsx.m.js"),Z=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),A=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),B=e("./node_modules/core-js/modules/es.array.index-of.js"),D=e("./node_modules/core-js/modules/es.array.map.js"),P=e("./node_modules/react/index.js");function l(h){return u(h)||r(h)||c(h)||i()}function i(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(h,C){if(!!h){if(typeof h=="string")return t(h,C);var M=Object.prototype.toString.call(h).slice(8,-1);if(M==="Object"&&h.constructor&&(M=h.constructor.name),M==="Map"||M==="Set")return Array.from(h);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return t(h,C)}}function r(h){if(typeof Symbol!="undefined"&&h[Symbol.iterator]!=null||h["@@iterator"]!=null)return Array.from(h)}function u(h){if(Array.isArray(h))return t(h)}function t(h,C){(C==null||C>h.length)&&(C=h.length);for(var M=0,q=new Array(C);M<C;M++)q[M]=h[M];return q}function y(h,C){var M=Object(P.useRef)();return(!M.current||C.length!==M.current.prevDeps.length||M.current.prevDeps.map(function(q,se){return q===C[se]}).indexOf(!1)>=0)&&(M.current={v:h(),prevDeps:l(C)}),M.current.v}var R=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),I=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),o=e("./node_modules/react/jsx-runtime.js"),O=function(){var h;function C(M){return h===void 0&&(h=Object(R.a)(M||{key:"co",prepend:!0})),h}return{getCache:C}}(),k=O.getCache,T=Object(P.createContext)(void 0);function b(){var h=Object(I.b)();return Object(P.useContext)(T)||k(h)}function s(h){var C=h.children,M=h.value;return Object(o.jsx)(T.Provider,{value:M,children:C})}s.displayName="CacheProvider";function m(h,C){return d(h)||x(h,C)||g(h,C)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(h,C){if(!!h){if(typeof h=="string")return j(h,C);var M=Object.prototype.toString.call(h).slice(8,-1);if(M==="Object"&&h.constructor&&(M=h.constructor.name),M==="Map"||M==="Set")return Array.from(h);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return j(h,C)}}function j(h,C){(C==null||C>h.length)&&(C=h.length);for(var M=0,q=new Array(C);M<C;M++)q[M]=h[M];return q}function x(h,C){var M=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(M!=null){var q=[],se=!0,N=!1,Y,K;try{for(M=M.call(h);!(se=(Y=M.next()).done)&&(q.push(Y.value),!(C&&q.length===C));se=!0);}catch(U){N=!0,K=U}finally{try{!se&&M.return!=null&&M.return()}finally{if(N)throw K}}return q}}function d(h){if(Array.isArray(h))return h}var v="ref";function a(h){var C;if(h.length!==1)return{args:h,ref:C};var M=m(h,1),q=M[0];if(!(q instanceof Object))return{args:h,ref:C};if(!(v in q))return{args:h,ref:C};C=q[v];var se=Object.assign({},q);return delete se[v],{args:[se],ref:C}}var n=function(){function h(M,q,se){var N=[],Y=Object(A.a)(M,N,se);return N.length<2?se:Y+q(N)}function C(M){var q=M.cache,se=function(){for(var K=arguments.length,U=new Array(K),ne=0;ne<K;ne++)U[ne]=arguments[ne];var ve=a(U),be=ve.ref,W=ve.args,oe=Object(Z.a)(W,q.registered);return Object(A.b)(q,oe,!1),q.key+"-"+oe.name+(be===void 0?"":" "+be)},N=function(){for(var K=arguments.length,U=new Array(K),ne=0;ne<K;ne++)U[ne]=arguments[ne];return h(q.registered,se,Object(V.a)(U))};return{css:se,cx:N}}return{cssFactory:C}}(),f=n.cssFactory;function S(){var h=b();return y(function(){return f({cache:h})},[h])}},"./storybook-init-framework-entry.js":function(ee,_,e){"use strict";e.r(_);var Q=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(ee,_,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),ee.exports=e("./generated-stories-entry.js")},1:function(ee,_){}},[[0,4,5]]]);
