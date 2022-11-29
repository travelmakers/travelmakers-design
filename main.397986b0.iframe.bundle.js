(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(q,b,e){"use strict";e.r(b);var Q={};e.r(Q),e.d(Q,"parameters",function(){return g}),e.d(Q,"decorators",function(){return T});var Y=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.filter.js"),X=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),J=e("./node_modules/core-js/modules/es.array.for-each.js"),A=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),H=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),w=e("./node_modules/core-js/modules/es.object.define-properties.js"),L=e("./node_modules/core-js/modules/es.object.define-property.js"),U=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),D=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s=e("./node_modules/core-js/modules/es.array.slice.js"),d=e("./node_modules/core-js/modules/es.function.name.js"),u=e("./node_modules/core-js/modules/es.array.from.js"),r=e("./node_modules/react/index.js"),p=e("./node_modules/react/jsx-runtime.js");function n(o,f){return v(o)||t(o,f)||P(o,f)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(o,f){if(!!o){if(typeof o=="string")return x(o,f);var S=Object.prototype.toString.call(o).slice(8,-1);if(S==="Object"&&o.constructor&&(S=o.constructor.name),S==="Map"||S==="Set")return Array.from(o);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return x(o,f)}}function x(o,f){(f==null||f>o.length)&&(f=o.length);for(var S=0,C=new Array(f);S<f;S++)C[S]=o[S];return C}function t(o,f){var S=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(S!=null){var C=[],I=!0,E=!1,ee,se;try{for(S=S.call(o);!(I=(ee=S.next()).done)&&(C.push(ee.value),!(f&&C.length===f));I=!0);}catch(N){E=!0,se=N}finally{try{!I&&S.return!=null&&S.return()}finally{if(E)throw se}}return C}}function v(o){if(Array.isArray(o))return o}var k=Object(r.createContext)(null),O=function(){var f=Object(r.useContext)(k);if(!f)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return f},j=function(f){var S=f.colorScheme,C=f.toggleColorScheme,I=f.children,E=Object(r.useState)("init"),ee=n(E,2),se=ee[0],N=ee[1];return Object(r.useEffect)(function(){N("update")},[]),Object(p.jsx)(k.Provider,{value:{colorScheme:S,toggleColorScheme:C},children:I},se)};j.displayName="ColorSchemeProvider",j.displayName="@travelmakers-design/styles/ColorSchemeProvider";var a=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),y=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),m=e("./node_modules/storybook-dark-mode/dist/index.js"),g={layout:"fullscreen",docs:{theme:y.themes.light},darkMode:{current:"light"}};function h(o){var f=Object(m.useDarkMode)()?"dark":"light";return Object(p.jsx)(j,{colorScheme:f,toggleColorScheme:function(){},children:Object(p.jsx)(a.a,{theme:{colorScheme:f},withGlobalStyles:!0,withNormalizeCSS:!0,children:o.children})})}h.displayName="ThemeWrapper";var T=[function(o){return Object(p.jsx)(h,{children:o()})}];function l(o,f){var S=Object.keys(o);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(o);f&&(C=C.filter(function(I){return Object.getOwnPropertyDescriptor(o,I).enumerable})),S.push.apply(S,C)}return S}function _(o){for(var f=1;f<arguments.length;f++){var S=arguments[f]!=null?arguments[f]:{};f%2?l(Object(S),!0).forEach(function(C){i(o,C,S[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(S)):l(Object(S)).forEach(function(C){Object.defineProperty(o,C,Object.getOwnPropertyDescriptor(S,C))})}return o}function i(o,f,S){return f in o?Object.defineProperty(o,f,{value:S,enumerable:!0,configurable:!0,writable:!0}):o[f]=S,o}Object.keys(Q).forEach(function(o){var f=Q[o];switch(o){case"args":return Object(U.d)(f);case"argTypes":return Object(U.b)(f);case"decorators":return f.forEach(function(C){return Object(U.f)(C,!1)});case"loaders":return f.forEach(function(C){return Object(U.g)(C,!1)});case"parameters":return Object(U.h)(_({},f),!1);case"argTypesEnhancers":return f.forEach(function(C){return Object(U.c)(C)});case"argsEnhancers":return f.forEach(function(C){return Object(U.e)(C)});case"render":return Object(U.i)(f);case"globals":case"globalTypes":{var S={};return S[o]=f,Object(U.h)(S,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})},"./generated-stories-entry.js":function(q,b,e){"use strict";(function(Q){var Y=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,Y.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],Q,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(q))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(q,b,e){var Q={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx","./travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx","./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/CarouselTitleCard/stories/CarouselTitleCard.stories.tsx":"./packages/travelmakers-design-core/src/components/CarouselTitleCard/stories/CarouselTitleCard.stories.tsx","./travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx":"./packages/travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx","./travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx":"./packages/travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx","./travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx","./travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx","./travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx","./travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx","./travelmakers-design-core/src/components/HotelReviewCard/stories/HotelReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelReviewCard/stories/HotelReviewCard.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/MainReviewCard/stories/MainReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/MainReviewCard/stories/MainReviewCard.stories.tsx","./travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx","./travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx","./travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx","./travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx":"./packages/travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx","./travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx":"./packages/travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx","./travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx","./travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx":"./packages/travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function Y(re){var X=W(re);return e(X)}function W(re){if(!e.o(Q,re)){var X=new Error("Cannot find module '"+re+"'");throw X.code="MODULE_NOT_FOUND",X}return Q[re]}Y.keys=function(){return Object.keys(Q)},Y.resolve=W,q.exports=Y,Y.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/assets/svg/ic-angle.svg":function(q,b,e){q.exports=e.p+"static/media/ic-angle.120d8dd5.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg":function(q,b,e){q.exports=e.p+"static/media/ic-arrow-next-disable.3c4032c4.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":function(q,b,e){q.exports=e.p+"static/media/ic-arrow-next-navy.12beec86.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg":function(q,b,e){q.exports=e.p+"static/media/ic-arrow-next-white.6fbf74f2.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg":function(q,b,e){q.exports=e.p+"static/media/ic-arrow-previous-disable.b7f070b7.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":function(q,b,e){q.exports=e.p+"static/media/ic-arrow-previous-navy.6975204f.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg":function(q,b,e){q.exports=e.p+"static/media/ic-arrow-previous-white.5df27b44.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg":function(q,b,e){q.exports=e.p+"static/media/ic-arrow-single.e8e002c5.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-mini.svg":function(q,b,e){q.exports=e.p+"static/media/ic-mini.6062cd2f.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-residence.svg":function(q,b,e){q.exports=e.p+"static/media/ic-residence.bafff8f9.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-star.svg":function(q,b,e){q.exports=e.p+"static/media/ic-star.324cfafe.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-navy.svg":function(q,b,e){q.exports=e.p+"static/media/ic-timesale-navy.db963f79.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-white.svg":function(q,b,e){q.exports=e.p+"static/media/ic-timesale-white.29d12dd5.svg"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/core-js/modules/es.string.iterator.js"),re=e("./node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/react/index.js"),B=e("./node_modules/react/jsx-runtime.js"),M=function(y){return Object(B.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y,{children:[Object(B.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#D7D7D7"}),Object(B.jsx)("path",{d:"M6 10.7681L10.1205 16L18 8",stroke:"white","stroke-width":"2"})]}))};M.displayName="AccordionCheck",M.displayName="@travelmakers-design/core/AccordionCheck";var R=function(y){return Object(B.jsx)("svg",Object.assign({width:"33",height:"32",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg"},y,{children:Object(B.jsx)("path",{stroke:"#30373F","stroke-width":"2",d:"m3 9 13 14L29 9",fill:"none","fill-rule":"evenodd"})}))};R.displayName="AccordionIcon",R.displayName="@travelmakers-design/core/AccordionIcon";var D=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),d=Object(D.a)(function(a,y){var m,g,h,T,l,_,i,o=y.open;return{container:Object.assign({},Object(s.b)(a),(m={display:"flex",flexDirection:"column",width:"100%",backgroundColor:a.colors.white,marginBottom:"4px"},m["&:last-child"]={marginBottom:0},m)),row:(g={display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"14px 24px 14px 24px"},g[""+a.media.desktop]={padding:"12px 16px 12px 16px"},g),titleWrap:{display:"flex",width:"100%"},titleIndex:{fontWeight:"bold",fontFamily:"pt serif",color:a.colors.cover1,fontStyle:"italic",marginRight:"4px"},title:(h={display:"block",width:"100%",fontSize:a.fontSizes.b1,lineHeight:a.lineHeights.b1+"px",fontWeight:"bold",color:a.colors.navy1},h[""+a.media.mobile]={fontSize:a.fontSizes.b2,lineHeight:a.lineHeights.b2+"px",fontWeight:"400"},h),icon:(T={width:"32px",height:"32px",cursor:"pointer",marginLeft:"4px"},T[""+a.media.mobile]={width:"24px",height:"24px"},T),content:(l={padding:"0 24px 14px 24px"},l[""+a.media.desktop]={padding:"0 16px 12px 16px"},l),divider:(_={width:"100%",height:"1px",backgroundColor:a.colors.navy1,marginBottom:"14px"},_[""+a.media.desktop]={marginBottom:"11px"},_),answerText:{display:"flex",lineHeight:"1.5"},answer:(i={fontSize:a.fontSizes.b1,lineHeight:a.lineHeights.b1+"px",color:a.colors.navy1,width:"100%"},i[""+a.media.desktop]={marginTop:"3px"},i[""+a.media.mobile]={fontSize:a.fontSizes.b2,lineHeight:a.lineHeights.b2+"px"},i)}});function u(a,y){return P(a)||c(a,y)||p(a,y)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(a,y){if(!!a){if(typeof a=="string")return n(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(a,y)}}function n(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function c(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],h=!0,T=!1,l,_;try{for(m=m.call(a);!(h=(l=m.next()).done)&&(g.push(l.value),!(y&&g.length===y));h=!0);}catch(i){T=!0,_=i}finally{try{!h&&m.return!=null&&m.return()}finally{if(T)throw _}}return g}}function P(a){if(Array.isArray(a))return a}var x=Object(Z.forwardRef)(function(a,y){var m=a.component,g=a.type,h=g===void 0?"Default":g,T=a.data,l=a.className,_=a.containerStyle,i=a.iconStyle,o=a.overrideStyles,f=a.__staticSelector,S=f===void 0?"div":f,C=Object(Z.useState)(Array.from({length:T.length},function(F,ne){return!1})),I=u(C,2),E=I[0],ee=I[1],se=m||"div",N=d({open:E},{overrideStyles:o,name:"div"}),K=N.classes,$=N.cx;return Object(B.jsx)("div",{className:$(_),children:T==null?void 0:T.map(function(F,ne){return Object(B.jsxs)(se,{ref:y,className:$(K.container,l),children:[Object(B.jsxs)("div",{className:$(K.row),onClick:function(){return ee(function(be){return be==null?void 0:be.map(function(z,oe){return ne===oe?!z:z})})},children:[Object(B.jsxs)("div",{className:$(K.titleWrap),children:[h==="Number"&&Object(B.jsxs)("span",{className:$(K.titleIndex),children:[ne+1,"."]}),h==="Checkbox"&&Object(B.jsx)("div",{style:{marginRight:8},children:Object(B.jsx)(M,{})}),Object(B.jsx)("span",{className:$(K.title),children:F.question})]}),Object(B.jsx)(R,{className:$(K.icon),style:Object.assign({transform:"rotate("+(E[ne]?180:0)+"deg)"},i)})]}),E[ne]&&Object(B.jsxs)("div",{className:$(K.content),children:[Object(B.jsx)("div",{className:$(K.divider)}),Object(B.jsx)("div",{className:$(K.answerText),children:Object(B.jsx)("span",{className:$(K.answer),dangerouslySetInnerHTML:{__html:F==null?void 0:F.answer}})})]})]},"accordion-"+ne)})})});x.displayName="@travelmakers-design/core/Accordion";var t=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}},t=`import { Accordion } from "../Accordion";
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
`,v={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},k=[{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."},{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."}],O=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}}}},title:"@travelmakers-design/core/Component/Accordion",component:x,argTypes:{type:{defaultValue:"Default",description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",options:["Default","Number","Checkbox"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},data:{defaultValue:k,description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:typeof k}},control:{type:"array"}},containerStyle:{description:"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}},iconStyle:{description:"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}}}},j=function(y){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(x,Object.assign({},y))})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/Badge/Badge.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),A=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),H=function(R,D){return{small:{fontFamily:"Pretendard",fontWeight:D==="text"?"bold":"normal",lineHeight:R.lineHeights.caption+"px",fontSize:R.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:D==="text"?"bold":"normal",lineHeight:R.lineHeights.b3+"px",fontSize:R.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:D==="text"?"bold":"normal",lineHeight:R.lineHeights.b2+"px",fontSize:R.fontSizes.b2}}},w=function(R,D){return{small:{padding:D==="text"?"0px 4px":"0px 8px"},medium:{padding:D==="text"?"0px 5px":"0px 8px"},large:{padding:D==="text"?"1px 7px":"0px 8px"}}},L=Object(J.a)(function(M,R){var D=R.size,s=R.type;return{container:Object.assign({},Object(A.b)(M),H(M,s)[D],w(M,s)[D],{display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",height:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:M.colors.white,borderRadius:s==="text"?"6px":M.radius.round,backgroundColor:M.colors.red2})}}),U=e("./node_modules/react/jsx-runtime.js"),G=["component","size","type","children","className","overrideStyles","__staticSelector"];function V(M,R){if(M==null)return{};var D=Z(M,R),s,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(d=0;d<u.length;d++)s=u[d],!(R.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,s)||(D[s]=M[s]))}return D}function Z(M,R){if(M==null)return{};var D={},s=Object.keys(M),d,u;for(u=0;u<s.length;u++)d=s[u],!(R.indexOf(d)>=0)&&(D[d]=M[d]);return D}var B=Object(X.forwardRef)(function(M,R){var D=M.component,s=M.size,d=s===void 0?"small":s,u=M.type,r=u===void 0?"text":u,p=M.children,n=M.className,c=M.overrideStyles,P=M.__staticSelector,x=P===void 0?"span":P,t=V(M,G),v=D||"span",k=L({size:d,type:r},{overrideStyles:c,name:"span"}),O=k.classes,j=k.cx;return Object(U.jsx)(v,Object.assign({ref:R,className:j(O.container,n)},t,{children:p}))});B.displayName="@travelmakers-design/core/Badge"},"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U}),e.d(b,"TextType",function(){return G}),e.d(b,"NumberType",function(){return V});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/Badge/Badge.tsx"),X=e("./node_modules/react/index.js"),J=e.n(X),A=e("./node_modules/react/jsx-runtime.js"),H=e.n(A),w=`
    
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,L={Default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},TextType:{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},NumberType:{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}},w=`import {
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
`,L={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}},TextType:{startLoc:{col:24,line:69},endLoc:{col:1,line:88},startBody:{col:24,line:69},endBody:{col:1,line:88}},NumberType:{startLoc:{col:26,line:90},endLoc:{col:1,line:119},startBody:{col:26,line:90},endBody:{col:1,line:119}}};b.default={title:"@travelmakers-design/core/Component/Badge",component:re.a,argTypes:{size:{defaultValue:"small",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"text",description:"Badge \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744(text, number) \uC815\uD569\uB2C8\uB2E4.",options:["text","number"],table:{type:{summary:"string"}},control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,locationsMap:{default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},"text-type":{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},"number-type":{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(W.g,{}),Object(A.jsx)(W.f,{}),Object(A.jsx)(W.b,{}),Object(A.jsx)(W.d,{}),Object(A.jsx)(W.a,{story:W.c}),Object(A.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var U=function(B){return Object(A.jsx)("div",{style:{padding:24,display:"flex"},children:Object(A.jsx)(re.a,Object.assign({},B,{children:"N"}))})};U.displayName="Default";var G=function(B){return Object(A.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(A.jsx)(re.a,Object.assign({},B,{type:"text",size:"small",style:{marginRight:"4px"},children:"N"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"text",size:"medium",style:{marginRight:"4px"},children:"N"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"text",size:"large",style:{marginRight:"4px"},children:"N"}))]})};G.displayName="TextType";var V=function(B){return Object(A.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(A.jsx)(re.a,Object.assign({},B,{type:"number",size:"small",style:{marginRight:"4px"},children:"1"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"number",size:"medium",style:{marginRight:"4px"},children:"1"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"number",size:"large",style:{marginRight:"4px"},children:"1"}))]})};V.displayName="NumberType",U.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Badge {...props}>N</Badge>
    </div>
  );
}`}},U.parameters),G.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},G.parameters),V.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},V.parameters)},"./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json":function(q){q.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json":function(q){q.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"},{"key":"MARKETING","label":"\uB9C8\uCF00\uD305 \uC218\uC2E0 \uB3D9\uC758(\uC120\uD0DD)","content":"1. \uAD11\uACE0\uC131 \uC815\uBCF4\uC758 \uC774\uC6A9 \uBAA9\uC801\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4(\uC81C\uD488) \uAC1C\uBC1C \uBC0F \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC \uAE30\uD68C \uC81C\uACF5, \uC2E0\uADDC \uC18C\uC2DD \uC548\uB0B4 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778 \uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uC11C\uBE44\uC2A4 \uD654\uBA74, \uC804\uD654, e-mail, \uD734\uB300\uD3F0 \uBB38\uC790(SMS, LMS, MMS), \uC6B0\uD3B8\uBB3C, \uC571 \uD478\uC2DC, \uCE74\uCE74\uC624 \uCC44\uB110 \uB4F1\uC758 \uBC29\uBC95\uC73C\uB85C \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC5D0\uAC8C \uC81C\uACF5\uB420 \uC218 \uC788\uC73C\uBA70, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC9C4\uD589 \uC0AC\uD56D, \uC608\uC57D \uD655\uC778 \uB4F1 \uC758\uBB34\uC801\uC73C\uB85C \uC548\uB0B4\uB418\uC5B4\uC57C \uD558\uB294 \uC815\uBCF4\uC131 \uB0B4\uC6A9\uC740 \uC218\uC2E0 \uB3D9\uC758 \uC5EC\uBD80\uC640 \uBB34\uAD00\uD558\uAC8C \uC81C\uACF5\uB429\uB2C8\uB2E4.\\n\\n2. \uBBF8\uB3D9\uC758 \uC2DC \uBD88\uC774\uC775 \uC0AC\uD56D\\n\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uACBD\uC6B0 \uC2E0\uADDC \uD638\uD154 \uC624\uD508 \uC18C\uC2DD, \uD504\uB85C\uBAA8\uC158 \uD2B9\uAC00 \uC18C\uC2DD, \uACE0\uAC1D \uB300\uC0C1 \uC774\uBCA4\uD2B8 \uC18C\uC2DD \uB4F1 \uD61C\uD0DD \uC0AC\uD56D \uC801\uC6A9\uC774 \uBD88\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C22\uC870 \uC81C5\uD56D\uC5D0 \uC758\uD574 \uC120\uD0DD \uC815\uBCF4 \uC0AC\uD56D\uC5D0 \uB300\uD574\uC11C\uB294 \uB3D9\uC758 \uAC70\uBD80\uD558\uC2DC\uB354\uB77C\uB3C4 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC81C\uD55C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uACF5\uACE0\uC77C\uC790 : 2020.11.15\\n\uC2DC\uD589\uC77C\uC790 : 2020.11.16"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return be});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),Z=e("./node_modules/core-js/modules/es.object.keys.js"),B=e("./node_modules/core-js/modules/es.array.index-of.js"),M=e("./node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/core-js/modules/es.object.values.js"),D=e("./node_modules/core-js/modules/es.array.reduce.js"),s=e("./node_modules/core-js/modules/es.array.includes.js"),d=e("./node_modules/core-js/modules/es.string.includes.js"),u=e("./node_modules/core-js/modules/es.array.map.js"),r=e("./node_modules/react/index.js"),p=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),n=e("./node_modules/react/jsx-runtime.js"),c=function(oe){return Object(n.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(n.jsx)("circle",{fill:"#30373F",cx:"12",cy:"12",r:"12"}),Object(n.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m7.405 10.84 3.296 4.185 6.304-6.4"})]})}))};c.displayName="IcChecked",c.displayName="@travelmakers-design/core/IcChecked";var P=function(oe){return Object(n.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},oe,{children:Object(n.jsx)("g",{fill:"none","fill-rule":"evenodd",children:Object(n.jsx)("g",{children:Object(n.jsx)("g",{children:Object(n.jsxs)("g",{transform:"translate(-73 -67) translate(7 67) translate(66)",children:[Object(n.jsx)("circle",{cx:"15",cy:"15",r:"15",fill:"#C1A485"}),Object(n.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"M9.256 13.55L13.376 18.781 21.256 10.781"})]})})})})}))};P.displayName="IcCheckSelectedBeige",P.displayName="@travelmakers-design/core/IcCheckSelectedBeige";var x=function(oe){return Object(n.jsx)("svg",Object.assign({width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsx)("path",{d:"M2.423 5.587 9 12.573l6.577-6.986",stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})}))};x.displayName="IcDropDown",x.displayName="@travelmakers-design/core/IcDropDown";var t=function(oe){return Object(n.jsx)("svg",Object.assign({width:"9",height:"15",viewBox:"0 0 9 15",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsx)("path",{d:"m.5 14.31 7-7-7-7",stroke:"#FFF","stroke-width":"2",fill:"none","fill-rule":"evenodd"})}))};t.displayName="IcDropDownWhite",t.displayName="@travelmakers-design/core/IcDropDownWhite";var v=function(oe){return Object(n.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(n.jsx)("circle",{fill:"#D7D7D7",cx:"10",cy:"10",r:"10"}),Object(n.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m6.17 9.033 2.748 3.488 5.253-5.333"})]})}))};v.displayName="IcUnCheck",v.displayName="@travelmakers-design/core/IcUnCheck";var k=e("./node_modules/core-js/modules/es.string.small.js"),O=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),j=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),a=function(oe,ie){if(ie>1){var ue,ye;return ye={},ye["&:first-of-type"]=(ue={padding:"10px 16px",backgroundColor:oe.colors.gray6},ue["& > img"]={width:"16px",height:"16px",marginRight:"8px"},ue["& > span"]={fontWeight:"700"},ue),ye}else return{}},y=Object(O.a)(function(z,oe){var ie,ue,ye,pe,ge,le=oe.length,te=oe.popup;return{container:Object.assign({},Object(j.b)(z),{display:"block",width:"100%",border:"solid 1px #d7d7d7",borderRadius:z.radius.small}),option:Object.assign((ie={display:"flex",alignItems:"center",width:"100%",padding:"12px 16px",borderBottom:"solid 1px #d7d7d7",backgroundColor:"white",cursor:"pointer"},ie["&:last-child"]={borderBottom:0},ie[".transparent-agreement"]={backgroundColor:"transparent"},ie),a(z,le)),optionIcon:{width:"16px",height:"16px",marginRight:"12px",cursor:"pointer"},moreIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",cursor:"pointer"},labelContainer:{display:"flex",width:"100%",justifyContent:"space-between",cursor:"pointer"},label:(ue={fontSize:"12px",color:z.colors.navy1,lineHeight:"20px",wordBreak:"keep-all"},ue[".transparent-agreement &"]={color:z.colors.white},ue),moteIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",marginLeft:"auto",cursor:"pointer"},modalContentText:(ge={display:"block",width:"100%",maxHeight:"100%",lineHeight:"1.5",whiteSpace:"pre-wrap",color:"${colors.navy}",overflowY:"auto",paddingBottom:"16px"},ge[""+z.media.desktop]={fontSize:"12px",padding:"12px 20px"},ge["&.Agreement"]=(pe={height:"calc(100% - 44px)"},pe["@media screen and (min-width: 768px)"]=(ye={height:"calc(100% - 104px)"},ye["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},ye),pe),ge)}}),m=["component","transparent","options","value","defaultSelect","setValue","containerStyle","popup","children","className","overrideStyles","__staticSelector"];function g(z,oe){return i(z)||_(z,oe)||T(z,oe)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(z,oe){if(!!z){if(typeof z=="string")return l(z,oe);var ie=Object.prototype.toString.call(z).slice(8,-1);if(ie==="Object"&&z.constructor&&(ie=z.constructor.name),ie==="Map"||ie==="Set")return Array.from(z);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return l(z,oe)}}function l(z,oe){(oe==null||oe>z.length)&&(oe=z.length);for(var ie=0,ue=new Array(oe);ie<oe;ie++)ue[ie]=z[ie];return ue}function _(z,oe){var ie=z==null?null:typeof Symbol!="undefined"&&z[Symbol.iterator]||z["@@iterator"];if(ie!=null){var ue=[],ye=!0,pe=!1,ge,le;try{for(ie=ie.call(z);!(ye=(ge=ie.next()).done)&&(ue.push(ge.value),!(oe&&ue.length===oe));ye=!0);}catch(te){pe=!0,le=te}finally{try{!ye&&ie.return!=null&&ie.return()}finally{if(pe)throw le}}return ue}}function i(z){if(Array.isArray(z))return z}function o(z,oe){if(z==null)return{};var ie=f(z,oe),ue,ye;if(Object.getOwnPropertySymbols){var pe=Object.getOwnPropertySymbols(z);for(ye=0;ye<pe.length;ye++)ue=pe[ye],!(oe.indexOf(ue)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,ue)||(ie[ue]=z[ue]))}return ie}function f(z,oe){if(z==null)return{};var ie={},ue=Object.keys(z),ye,pe;for(pe=0;pe<ue.length;pe++)ye=ue[pe],!(oe.indexOf(ye)>=0)&&(ie[ye]=z[ye]);return ie}var S=Object(r.forwardRef)(function(z,oe){var ie=z.component,ue=z.transparent,ye=ue===void 0?!1:ue,pe=z.options,ge=pe===void 0?[]:pe,le=z.value,te=z.defaultSelect,ce=te===void 0?null:te,de=z.setValue,xe=z.containerStyle,Oe=xe===void 0?{}:xe,Te=z.popup,Re=Te===void 0?!1:Te,Me=z.children,Pe=z.className,Le=z.overrideStyles,Ne=z.__staticSelector,me=Ne===void 0?"div":Ne,ae=o(z,m),_e=ie||"div",he=y({},{overrideStyles:Le,name:"div"}),fe=he.classes,je=he.cx,De=Object(r.useState)(null),Ae=g(De,2),ke=Ae[0],Ce=Ae[1],Se=Object(r.useState)(!1),Be=g(Se,2),Ue=Be[0],ze=Be[1],We=Object(r.useMemo)(function(){if(le)return Object.values(le).filter(function(Ie){return!!Ie}).length===ge.length},[le,ge.length]);Object(r.useEffect)(function(){de==null||de(ge.reduce(function(Ie,Ve){return ce!==null&&ce.includes(Ve.key)?Ie[Ve.key]=!0:Ie[Ve.key]=!1,Ie},{}))},[]);var we=function(){var Ve={};ge.map(function(Ye){return Ve[Ye.key]=!We}),de==null||de(Ve)},Fe=function(Ve){Ce(Ve),ze(!0)},Ke=function(){ze(!1)},$e=function(Ve){de==null||de(function(Ye){var Ee;return Object.assign({},Ye,(Ee={},Ee[Ve.key]=!0,Ee))}),ze(!1)};return Object(n.jsxs)(_e,Object.assign({ref:oe,className:je(fe.container,ye&&"transparent-agreement",Pe),style:Oe},ae,{children:[ge.length>1&&Object(n.jsxs)("div",{className:je(fe.option),onClick:function(){return we()},children:[We?ye?Object(n.jsx)(P,{className:je(fe.optionIcon)}):Object(n.jsx)(c,{className:je(fe.optionIcon)}):Object(n.jsx)(v,{className:je(fe.optionIcon)}),Object(n.jsx)("span",{className:je(fe.label),children:"\uC804\uCCB4 \uB3D9\uC758"})]}),ge.map(function(Ie,Ve){return Object(n.jsxs)("div",{className:je(fe.option),children:[le!=null&&le[Ie.key]?ye?Object(n.jsx)(P,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Ee){var He;return Object.assign({},Ee,(He={},He[Ie.key]=!Ee[Ie.key]===void 0?!0:!Ee[Ie.key],He))})}}):Object(n.jsx)(c,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Ee){var He;return Object.assign({},Ee,(He={},He[Ie.key]=!Ee[Ie.key]===void 0?!0:!Ee[Ie.key],He))})}}):Object(n.jsx)(v,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Ee){var He;return Object.assign({},Ee,(He={},He[Ie.key]=!Ee[Ie.key]===void 0?!0:!Ee[Ie.key],He))})}}),Object(n.jsxs)("div",{className:je(fe.labelContainer),onClick:function(){return Fe(Ie)},children:[Object(n.jsx)("span",{className:je(fe.label),children:Ie.label}),ye?Object(n.jsx)(t,{className:je(fe.moreIcon),style:{transform:"rotate(0)"}}):Object(n.jsx)(x,{className:je(fe.moreIcon),style:{transform:"rotate(-90deg)"}})]})]},"option-"+Ie.key)}),ke&&Ue&&Object(n.jsx)(p.a,{open:Ue,onClose:Ke,modalPopup:Re,ModalContainerClassName:"max-h",handleAgree:function(){return $e(ke)},title:ke==null?void 0:ke.label,backIcon:!0,children:ke==null?void 0:ke.content})]}))});S.displayName="@travelmakers-design/core/BottomSheet";function C(z,oe){return N(z)||se(z,oe)||E(z,oe)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(z,oe){if(!!z){if(typeof z=="string")return ee(z,oe);var ie=Object.prototype.toString.call(z).slice(8,-1);if(ie==="Object"&&z.constructor&&(ie=z.constructor.name),ie==="Map"||ie==="Set")return Array.from(z);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return ee(z,oe)}}function ee(z,oe){(oe==null||oe>z.length)&&(oe=z.length);for(var ie=0,ue=new Array(oe);ie<oe;ie++)ue[ie]=z[ie];return ue}function se(z,oe){var ie=z==null?null:typeof Symbol!="undefined"&&z[Symbol.iterator]||z["@@iterator"];if(ie!=null){var ue=[],ye=!0,pe=!1,ge,le;try{for(ie=ie.call(z);!(ye=(ge=ie.next()).done)&&(ue.push(ge.value),!(oe&&ue.length===oe));ye=!0);}catch(te){pe=!0,le=te}finally{try{!ye&&ie.return!=null&&ie.return()}finally{if(pe)throw le}}return ue}}function N(z){if(Array.isArray(z))return z}var K=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,$={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}},K=`import {
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
`,$={Default:{startLoc:{col:23,line:59},endLoc:{col:1,line:72},startBody:{col:23,line:59},endBody:{col:1,line:72}}},F=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json"),ne=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json"),ve=b.default={title:"@travelmakers-design/core/Component/BottomSheet",component:S,argTypes:{popup:{defaultValue:!1,description:"\uD31D\uC5C5 \uC5EC\uBD80",table:{type:{summary:"boolean"}},control:{type:"boolean"}},options:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}}},docs:{page:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(V.g,{}),Object(n.jsx)(V.f,{}),Object(n.jsx)(V.b,{}),Object(n.jsx)(V.d,{}),Object(n.jsx)(V.a,{story:V.c}),Object(n.jsx)(V.e,{})]})}}}},be=function(oe){var ie=Object(r.useState)({}),ue=C(ie,2),ye=ue[0],pe=ue[1];return Object(n.jsx)("div",{style:{padding:24,display:"flex"},children:Object(n.jsx)(S,Object.assign({},oe,{options:ne,value:ye,setValue:pe,popup:!0}))})};be.displayName="Default",be.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},be.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return p});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./node_modules/core-js/modules/es.string.small.js"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),G=e("./packages/travelmakers-design-core/src/constants/index.ts"),V=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),Z={xsmall:{height:G.a.xsmall,padding:"0 24px"},small:{height:G.a.small,padding:"0 24px"},medium:{height:G.a.medium,padding:"0 24px"},large:{height:G.a.large,padding:"0 24px"}},B=function(c){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:c.lineHeights.caption+"px",fontSize:c.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:c.lineHeights.b3+"px",fontSize:c.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:c.lineHeights.b2+"px",fontSize:c.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:c.lineHeights.h5+"px",fontSize:c.fontSizes.h5}}},M=Object.keys(Z).reduce(function(n,c){return n[c]=Z[c].height,n},{}),R=function(c){return{display:c?"block":"inline-block",width:c?"100%":"auto"}},D=Object(L.a)(function(n,c,P){var x,t,v,k=c.variant,O=c.size,j=c.fullWidth,a=c.roundness,y=c.line,m=P("loading"),g=P("inner"),h=P("spinner"),T=k||n.colors.navy1;return{loading:(x={ref:m,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},x["."+g]={opacity:0},x["."+h]={display:"flex"},x),solid:(t={backgroundColor:n.palettes[T][n.colorScheme==="light",0],color:T==="white"?n.colors.navy1:n.colors.white,"&:not(:disabled):hover":{backgroundColor:n.palettes[T][n.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:n.palettes[T][n.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:a?n.radius.round:2,outline:"1px solid "+n.palettes[T][n.colorScheme==="light",0]}}},t["&:disabled:not(."+m+")"]={backgroundColor:n.colors.gray5,color:y?n.colors.black:n.colors.white},t),ghost:(v={backgroundColor:n.colors.transparent,border:"1px solid "+n.palettes[T][n.colorScheme==="light",0],color:T==="white"?n.colors.white:n.palettes[T][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:a?n.radius.round:2,outline:"1px solid "+n.palettes[T][n.colorScheme==="light",0]}}},v["&:disabled:not(."+m+")"]={color:Object(V.a)(n.palettes[T][1],n.opacity.opacity3),border:"1px solid "+Object(V.a)(n.palettes[T][1],n.opacity.opacity3)},v),root:Object.assign({},Z[O],R(j),Object(U.b)(n),B(n)[O],{borderRadius:a?n.radius.round:n.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:g,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:h,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),s=e("./node_modules/react/jsx-runtime.js"),d=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function u(n,c){if(n==null)return{};var P=r(n,c),x,t;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(n);for(t=0;t<v.length;t++)x=v[t],!(c.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,x)||(P[x]=n[x]))}return P}function r(n,c){if(n==null)return{};var P={},x=Object.keys(n),t,v;for(v=0;v<x.length;v++)t=x[v],!(c.indexOf(t)>=0)&&(P[t]=n[t]);return P}var p=Object(J.forwardRef)(function(n,c){var P=n.children,x=n.component,t=n.size,v=t===void 0?"medium":t,k=n.variant,O=k===void 0?"primary":k,j=n.line,a=j===void 0?!1:j,y=n.roundness,m=y===void 0?!1:y,g=n.fullWidth,h=g===void 0?!1:g,T=n.type,l=T===void 0?"button":T,_=n.disabled,i=_===void 0?!1:_,o=n.leftIcon,f=o===void 0?"":o,S=n.rightIcon,C=S===void 0?"":S,I=n.className,E=n.co,ee=n.overrideStyles,se=u(n,d),N=Object(X.c)(),K=D({variant:O,size:v,fullWidth:h,roundness:m,line:a},{overrideStyles:ee,name:"Button"}),$=K.classes,F=K.cx;return Object(s.jsx)(A.a,Object.assign({component:x||"button",ref:c,type:l,disabled:i,className:F($.root,$[a?"ghost":"solid"],I),co:E,onTouchStart:function(){}},se,{children:Object(s.jsxs)("div",{className:$.inner,children:[f&&Object(s.jsx)("span",{className:F($.icon,$.leftIcon),children:f}),Object(s.jsx)("span",{className:$.label,children:P}),C&&Object(s.jsx)("span",{className:F($.icon,$.rightIcon),children:C})]})}))});p.displayName="@travelmakers-design/core/Button"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),X=e("./node_modules/react/index.js"),J=e.n(X),A=e("./node_modules/react/jsx-runtime.js"),H=e.n(A),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},w=`import {
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
`,L={Default:{startLoc:{col:23,line:121},endLoc:{col:1,line:127},startBody:{col:23,line:121},endBody:{col:1,line:127}}};b.default={title:"@travelmakers-design/core/Component/Button",component:re.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(W.g,{}),Object(A.jsx)(W.f,{}),Object(A.jsx)(W.b,{}),Object(A.jsx)(W.d,{}),Object(A.jsx)(W.a,{story:W.c}),Object(A.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var U=function(V){return Object(A.jsx)("div",{style:{margin:"0 auto"},children:Object(A.jsx)(re.a,Object.assign({},V,{children:"Button"}))})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return s});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=Object(H.a)(function(d,u){var r=u.type,p=r===void 0?"default":r;return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"20px 24px",gap:"8px",backgroundColor:""+d.colors.gray6},titleWrapper:{display:"flex",flexDirection:"row",alignItems:"center",padding:0,gap:"8px"},title:{color:p==="default"?d.colors.green2:d.colors.red2,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:d.fontSizes.b2,lineHeight:d.lineHeights.b2+"px"},content:{color:d.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:d.fontSizes.b2,lineHeight:d.lineHeights.b2+"px"}}}),L=e("./node_modules/react/jsx-runtime.js"),U=function(u){var r=u.color;return Object(L.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(L.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.51543 8.05002L7.70005 3.15002H6.30005L6.48466 8.03055L7.51543 8.05002ZM7.00005 10.5C7.38665 10.5 7.70005 10.1866 7.70005 9.80002C7.70005 9.41342 7.38665 9.10002 7.00005 9.10002C6.61345 9.10002 6.30005 9.41342 6.30005 9.80002C6.30005 10.1866 6.61345 10.5 7.00005 10.5Z",fill:r!=null?r:"#0D5E49"}),Object(L.jsx)("rect",{x:"0.5",y:"0.5",width:"13",height:"13",rx:"6.5",stroke:r!=null?r:"#0D5E49"})]})};U.displayName="CalloutAlertIcon",U.displayName="@travelmakers-design/core/CalloutAlertIcon";var G=["type","title","content","color","className","co","overrideStyles"];function V(d,u){if(d==null)return{};var r=Z(d,u),p,n;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(d);for(n=0;n<c.length;n++)p=c[n],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,p)||(r[p]=d[p]))}return r}function Z(d,u){if(d==null)return{};var r={},p=Object.keys(d),n,c;for(c=0;c<p.length;c++)n=p[c],!(u.indexOf(n)>=0)&&(r[n]=d[n]);return r}var B=Object(Y.forwardRef)(function(d,u){var r=d.type,p=r===void 0?"default":r,n=d.title,c=d.content,P=d.color,x=d.className,t=d.co,v=d.overrideStyles,k=V(d,G),O=Object(J.c)(),j=w({type:p},{overrideStyles:v,name:"Callout"}),a=j.classes,y=j.cx;return Object(L.jsxs)(A.a,Object.assign({ref:u,className:y(a.root,x),co:t},k,{children:[Object(L.jsxs)("div",{className:y(a.titleWrapper),children:[Object(L.jsx)(U,{color:p==="default"?O.colors.green2:O.colors.red2}),Object(L.jsx)("span",{className:y(a.title),children:n})]}),Object(L.jsx)("span",{className:y(a.content),children:c})]}))});B.displayName="@travelmakers-design/core/Callout";var M=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}},M=`import React from "react";
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
`,R={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:39},startBody:{col:23,line:37},endBody:{col:1,line:39}}},D=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}}}},title:"@travelmakers-design/core/Component/Callout",component:B,argTypes:{type:{defaultValue:"default",description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","warning"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},content:{defaultValue:"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},s=function(u){return Object(L.jsx)(B,Object.assign({},u))};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout {...props} />;
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/CarouselTitleCard/stories/CarouselTitleCard.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return n});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),w=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./node_modules/core-js/modules/es.string.small.js"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),G=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts");function V(c){if(c==null)throw new TypeError("Cannot destructure undefined")}var Z=Object(U.a)(function(c,P){var x,t,v;return V(P),{root:{display:"flex",position:"relative"},newBadge:(x={background:c.colors.green2,borderRadius:c.radius.small,width:"40px",height:"85px",padding:"2px 20px"},x[""+c.media.mobile]={width:"24px",height:"74px",padding:"20px 0px"},x["& > span"]={transform:"rotate(90deg)","-ms-transform":"rotate(90deg)","-webkit-transform":"rotate(90deg)"},x),headlineWrapper:(t={backgroundColor:c.colors.white,boxShadow:"4px 4px 10px 10px rgba(163, 162, 161, 0.2)",width:"100%",maxWidth:G.a.desktop,padding:"31px 40px"},t[""+c.media.mobile]={padding:"33px 24px"},t),subHeadline:{marginBottom:"2px"},headline:{marginBottom:"19px"},description:{},goImageflexBox:(v={display:"flex",flexDirection:"row",alignItems:"baseline",width:"fit-content",borderBottom:"1px solid "+c.colors.navy1,marginLeft:"41px"},v[""+c.media.tablet]={display:"none"},v),arrowImage:{width:"21px",marginLeft:"9.5px"}}}),B=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),M=e("./node_modules/react/jsx-runtime.js"),R=["newBadge","subHeadline","headline","description","title","className","co","overrideStyles"];function D(c,P){if(c==null)return{};var x=s(c,P),t,v;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(c);for(v=0;v<k.length;v++)t=k[v],!(P.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,t)||(x[t]=c[t]))}return x}function s(c,P){if(c==null)return{};var x={},t=Object.keys(c),v,k;for(k=0;k<t.length;k++)v=t[k],!(P.indexOf(v)>=0)&&(x[v]=c[v]);return x}var d=Object(Y.forwardRef)(function(c,P){var x=c.newBadge,t=x===void 0?!1:x,v=c.subHeadline,k=c.headline,O=c.description,j=c.title,a=c.className,y=c.co,m=c.overrideStyles,g=D(c,R),h=Object(A.c)(),T=Z({},{overrideStyles:m,name:"CarouselTitleCard"}),l=T.classes,_=T.cx;return Object(M.jsxs)(w.a,Object.assign({ref:P,className:_(l.root,a),co:y},g,{children:[t&&Object(M.jsx)("div",{className:_(l.newBadge),children:Object(M.jsx)(H.a,{family:"PT Serif",level:"h4",mobileLevel:"h6",color:h.colors.white,textAlign:"center",style:{width:"100%"},children:"New"})}),Object(M.jsxs)("div",{className:_(l.headlineWrapper),children:[Object(M.jsx)(H.a,{family:"Noto Serif KR",level:"h6",mobileLevel:"b3",color:h.colors.navy1,className:_(l.subHeadline),children:v}),Object(M.jsx)(H.a,{family:"Noto Serif KR",level:"h2",mobileLevel:"h6",color:h.colors.navy1,className:_(l.headline),strong:!0,children:k}),Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(M.jsx)(H.a,{family:"Pretendard",level:"h6",mobileLevel:"b3",color:h.colors.green3,className:_(l.description),strong:!0,children:O}),Object(M.jsxs)("div",{className:_(l.goImageflexBox),children:[Object(M.jsx)(H.a,{family:"PT Serif",level:"h4",mobileLevel:"b2",style:{width:"auto",lineHeight:"24px"},color:h.colors.navy1,children:"Go"}),Object(M.jsx)(B.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg"),className:_(l.arrowImage)})]})]})]})]}))});d.displayName="@travelmakers-design/core/CarouselTitleCard";var u=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { CarouselTitleCard } from \\"../CarouselTitleCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/CarouselTitleCard\\",\\n  component: CarouselTitleCard,\\n  argTypes: {\\n    newBadge: {\\n      defaultValue: false,\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 newBadge \uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    subHeadline: {\\n      defaultValue: \\"\uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\\",\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    headline: {\\n      defaultValue: \\"\uD5E4\uB4DC\uB77C\uC778\\",\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uB514\uC2A4\uD06C\uB9BD\uC158\\",\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB514\uC2A4\uD06C\uB9BD\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CarouselTitleCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":51},"endLoc":{"col":1,"line":57},"startBody":{"col":23,"line":51},"endBody":{"col":1,"line":57}}};
    
import React from "react";
import { CarouselTitleCard } from "../CarouselTitleCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CarouselTitleCard",
  component: CarouselTitleCard,
  argTypes: {
    newBadge: {
      defaultValue: false,
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 newBadge \uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    subHeadline: {
      defaultValue: "\uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    headline: {
      defaultValue: "\uD5E4\uB4DC\uB77C\uC778",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uB514\uC2A4\uD06C\uB9BD\uC158",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB514\uC2A4\uD06C\uB9BD\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <CarouselTitleCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CarouselTitleCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:59},endLoc:{col:1,line:65},startBody:{col:23,line:59},endBody:{col:1,line:65}}},u=`import React from "react";
import { CarouselTitleCard } from "../CarouselTitleCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CarouselTitleCard",
  component: CarouselTitleCard,
  argTypes: {
    newBadge: {
      defaultValue: false,
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 newBadge \uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    subHeadline: {
      defaultValue: "\uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    headline: {
      defaultValue: "\uD5E4\uB4DC\uB77C\uC778",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uB514\uC2A4\uD06C\uB9BD\uC158",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB514\uC2A4\uD06C\uB9BD\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <CarouselTitleCard {...props} />
    </div>
  );
};
`,r={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},p=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { CarouselTitleCard } from \\"../CarouselTitleCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/CarouselTitleCard\\",\\n  component: CarouselTitleCard,\\n  argTypes: {\\n    newBadge: {\\n      defaultValue: false,\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 newBadge \uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    subHeadline: {\\n      defaultValue: \\"\uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\\",\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    headline: {\\n      defaultValue: \\"\uD5E4\uB4DC\uB77C\uC778\\",\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"\uB514\uC2A4\uD06C\uB9BD\uC158\\",\\n      description: \\"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB514\uC2A4\uD06C\uB9BD\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CarouselTitleCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":51},"endLoc":{"col":1,"line":57},"startBody":{"col":23,"line":51},"endBody":{"col":1,"line":57}}};
    
import React from "react";
import { CarouselTitleCard } from "../CarouselTitleCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CarouselTitleCard",
  component: CarouselTitleCard,
  argTypes: {
    newBadge: {
      defaultValue: false,
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 newBadge \uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    subHeadline: {
      defaultValue: "\uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    headline: {
      defaultValue: "\uD5E4\uB4DC\uB77C\uC778",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "\uB514\uC2A4\uD06C\uB9BD\uC158",
      description: "CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB514\uC2A4\uD06C\uB9BD\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <CarouselTitleCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CarouselTitleCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:59},endLoc:{col:1,line:65},startBody:{col:23,line:59},endBody:{col:1,line:65}}}}},title:"@travelmakers-design/core/Component/Card/CarouselTitleCard",component:d,argTypes:{newBadge:{defaultValue:!1,description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 newBadge \uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},subHeadline:{defaultValue:"\uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778",description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},headline:{defaultValue:"\uD5E4\uB4DC\uB77C\uC778",description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uB514\uC2A4\uD06C\uB9BD\uC158",description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB514\uC2A4\uD06C\uB9BD\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},n=function(P){return Object(M.jsx)("div",{style:{padding:24},children:Object(M.jsx)(d,Object.assign({},P))})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <CarouselTitleCard {...props} />
    </div>
  );
}`}},n.parameters)},"./packages/travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),R=e("./packages/travelmakers-design-core/src/components/Progress/Progress.tsx"),D=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),s=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),u=Object(d.a)(function(l,_){var i=_.size,o=i===void 0?"small":i;return{root:{display:"flex",alignItems:"center",justifyContent:"space-between"},buttonContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",width:o==="small"?"56px":"84px"},button:{width:o==="small"?"24px":"32px",height:o==="small"?"24px":"32px",cursor:"pointer"}}}),r=e("./node_modules/react/jsx-runtime.js"),p=["color","size","totalPage","currentPage","activeBarTransition","infinity","title","className","co","previousClick","nextClick","overrideStyles"];function n(l,_){return v(l)||t(l,_)||P(l,_)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(l,_){if(!!l){if(typeof l=="string")return x(l,_);var i=Object.prototype.toString.call(l).slice(8,-1);if(i==="Object"&&l.constructor&&(i=l.constructor.name),i==="Map"||i==="Set")return Array.from(l);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return x(l,_)}}function x(l,_){(_==null||_>l.length)&&(_=l.length);for(var i=0,o=new Array(_);i<_;i++)o[i]=l[i];return o}function t(l,_){var i=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(i!=null){var o=[],f=!0,S=!1,C,I;try{for(i=i.call(l);!(f=(C=i.next()).done)&&(o.push(C.value),!(_&&o.length===_));f=!0);}catch(E){S=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(S)throw I}}return o}}function v(l){if(Array.isArray(l))return l}function k(l,_){if(l==null)return{};var i=O(l,_),o,f;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(l);for(f=0;f<S.length;f++)o=S[f],!(_.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,o)||(i[o]=l[o]))}return i}function O(l,_){if(l==null)return{};var i={},o=Object.keys(l),f,S;for(S=0;S<o.length;S++)f=o[S],!(_.indexOf(f)>=0)&&(i[f]=l[f]);return i}var j=1;function a(){return j}var y=Object(Y.forwardRef)(function(l,_){var i=l.color,o=i===void 0?"navy":i,f=l.size,S=f===void 0?"small":f,C=l.totalPage,I=C===void 0?1:C,E=l.currentPage,ee=E===void 0?1:E,se=l.activeBarTransition,N=se===void 0?!1:se,K=l.infinity,$=K===void 0?!1:K,F=l.title,ne=l.className,ve=l.co,be=l.previousClick,z=l.nextClick,oe=l.overrideStyles,ie=k(l,p),ue=Object(M.c)(),ye=u({size:S},{overrideStyles:oe,name:"ControlIndicator"}),pe=ye.classes,ge=ye.cx,le=Object(Y.useState)(j),te=n(le,2),ce=te[0],de=te[1],xe=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg"),Oe=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg");$||((ce>I||ce<=1)&&(xe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")),ce>=I&&(Oe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")));var Te=function(){var Pe=1;$?ce-1===0?Pe=I:Pe=ce-1:ce-1===0?(Pe=1,xe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")):Pe=ce-1,de(Pe),j=Pe,be()},Re=function(){var Pe=1;$?ce===I?Pe=1:Pe=ce+1:ce===I?(Pe=I,Oe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")):Pe=ce+1,de(Pe),j=Pe,z()};return Object(r.jsxs)(s.a,Object.assign({ref:_,className:ge(pe.root,ne),co:ve},ie,{children:[Object(r.jsx)(R.a,{color:o,size:S,totalPage:I,currentPage:ce,activeBarTransition:N,indicator:!0}),Object(r.jsxs)("div",{className:ge(pe.buttonContainer),children:[Object(r.jsx)(D.a,{src:xe,className:ge(pe.button),onClick:Te}),Object(r.jsx)(D.a,{src:Oe,className:ge(pe.button),onClick:Re})]})]}))});y.displayName="@travelmakers-design/core/Header/ControlIndicator";var m=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlIndicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},m=`import React from "react";
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
`,g={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},h=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlIndicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}}}},title:"@travelmakers-design/core/Component/ControlIndicator",component:y,argTypes:{color:{defaultValue:"navy",description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},size:{defaultValue:"small",description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},totalPage:{defaultValue:1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},activeBarTransition:{defaultValue:!1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},infinity:{defaultValue:!1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},T=function(_){return Object(r.jsx)("div",{style:{padding:24},children:Object(r.jsx)(y,Object.assign({},_))})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlIndicator {...props} />
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),R=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),D=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=function(_){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:_.lineHeights.b2+"px",fontSize:_.fontSizes.b2,marginRight:"12px",marginLeft:"12px",width:"50px"},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:_.lineHeights.h5+"px",fontSize:_.fontSizes.h5,marginRight:"20px",marginLeft:"20px",width:"70px"}}},u=Object(s.a)(function(l,_){var i=_.color,o=i===void 0?"navy":i,f=_.size,S=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center"},indicator:Object.assign({},d(l)[S],{color:o,textAlign:"center"}),button:{width:"32px",height:"32px",cursor:"pointer"}}}),r=e("./node_modules/react/jsx-runtime.js"),p=["color","size","totalPage","currentPage","infinity","className","co","previousClick","nextClick","overrideStyles"];function n(l,_){return v(l)||t(l,_)||P(l,_)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(l,_){if(!!l){if(typeof l=="string")return x(l,_);var i=Object.prototype.toString.call(l).slice(8,-1);if(i==="Object"&&l.constructor&&(i=l.constructor.name),i==="Map"||i==="Set")return Array.from(l);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return x(l,_)}}function x(l,_){(_==null||_>l.length)&&(_=l.length);for(var i=0,o=new Array(_);i<_;i++)o[i]=l[i];return o}function t(l,_){var i=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(i!=null){var o=[],f=!0,S=!1,C,I;try{for(i=i.call(l);!(f=(C=i.next()).done)&&(o.push(C.value),!(_&&o.length===_));f=!0);}catch(E){S=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(S)throw I}}return o}}function v(l){if(Array.isArray(l))return l}function k(l,_){if(l==null)return{};var i=O(l,_),o,f;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(l);for(f=0;f<S.length;f++)o=S[f],!(_.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,o)||(i[o]=l[o]))}return i}function O(l,_){if(l==null)return{};var i={},o=Object.keys(l),f,S;for(S=0;S<o.length;S++)f=o[S],!(_.indexOf(f)>=0)&&(i[f]=l[f]);return i}var j=1;function a(){return j}var y=Object(Y.forwardRef)(function(l,_){var i=l.color,o=i===void 0?"navy":i,f=l.size,S=f===void 0?"small":f,C=l.totalPage,I=C===void 0?1:C,E=l.currentPage,ee=E===void 0?1:E,se=l.infinity,N=se===void 0?!1:se,K=l.className,$=l.co,F=l.previousClick,ne=l.nextClick,ve=l.overrideStyles,be=k(l,p),z=Object(M.c)(),oe=u({color:o,size:S},{overrideStyles:ve,name:"ControlPagination"}),ie=oe.classes,ue=oe.cx,ye=Object(Y.useState)(j),pe=n(ye,2),ge=pe[0],le=pe[1],te=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg"),ce=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg");N||((ge>I||ge<=1)&&(te=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")),ge>=I&&(ce=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")));var de=function(){var Te=1;N?ge-1===0?Te=I:Te=ge-1:ge-1===0?(Te=1,te=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")):Te=ge-1,le(Te),j=Te,F()},xe=function(){var Te=1;N?ge===I?Te=1:Te=ge+1:ge===I?(Te=I,ce=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")):Te=ge+1,le(Te),j=Te,ne()};return Object(r.jsxs)(D.a,Object.assign({ref:_,className:ue(ie.root,K),co:$},be,{children:[Object(r.jsx)(R.a,{src:te,className:ue(ie.button),onClick:de}),Object(r.jsxs)("span",{className:ue(ie.indicator),children:[ge," / ",I]}),Object(r.jsx)(R.a,{src:ce,className:ue(ie.button),onClick:xe})]}))});y.displayName="@travelmakers-design/core/Header/ControlPagination";var m=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlPagination {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,g={Default:{startLoc:{col:23,line:63},endLoc:{col:1,line:69},startBody:{col:23,line:63},endBody:{col:1,line:69}}},m=`import React from "react";

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
`,g={Default:{startLoc:{col:23,line:55},endLoc:{col:1,line:61},startBody:{col:23,line:55},endBody:{col:1,line:61}}},h=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlPagination {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:63},endLoc:{col:1,line:69},startBody:{col:23,line:63},endBody:{col:1,line:69}}}}},title:"@travelmakers-design/core/Component/ControlPagination",component:y,argTypes:{color:{defaultValue:"navy",description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},size:{defaultValue:"small",description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},infinity:{defaultValue:!1,description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},totalPage:{defaultValue:1,description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}}}},T=function(_){return Object(r.jsx)("div",{style:{padding:24},children:Object(r.jsx)(y,Object.assign({},_))})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlPagination {...props} />
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),L=function(r){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:r.fontSizes.h4,lineHeight:r.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:r.fontSizes.h1,lineHeight:r.lineHeights.h1+"px"}}},U=Object(H.a)(function(u,r){var p=r.size,n=p===void 0?"small":p,c=r.color,P=c===void 0?"navy":c;return{root:{},titleWrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:w.a.maxSize},title:Object.assign({},L(u)[n],{color:P==="navy"?u.colors.navy1:u.colors.white,margin:"0 35px"}),divider:{backgroundColor:P==="navy"?u.colors.navy1:u.colors.white,flex:1,height:"1px"}}}),G=e("./node_modules/react/jsx-runtime.js"),V=["size","color","title","className","co","overrideStyles"];function Z(u,r){if(u==null)return{};var p=B(u,r),n,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(u);for(c=0;c<P.length;c++)n=P[c],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,n)||(p[n]=u[n]))}return p}function B(u,r){if(u==null)return{};var p={},n=Object.keys(u),c,P;for(P=0;P<n.length;P++)c=n[P],!(r.indexOf(c)>=0)&&(p[c]=u[c]);return p}var M=Object(Y.forwardRef)(function(u,r){var p=u.size,n=p===void 0?"small":p,c=u.color,P=c===void 0?"navy":c,x=u.title,t=u.className,v=u.co,k=u.overrideStyles,O=Z(u,V),j=Object(J.c)(),a=U({size:n,color:P},{overrideStyles:k,name:"HeaderPage"}),y=a.classes,m=a.cx;return Object(G.jsx)(A.a,Object.assign({ref:r,className:m(y.root,t),co:v},O,{children:Object(G.jsxs)("div",{className:m(y.titleWrapper),children:[Object(G.jsx)("span",{className:m(y.divider)}),Object(G.jsx)("span",{className:m(y.title),children:x}),Object(G.jsx)("span",{className:m(y.divider)})]})}))});M.displayName="@travelmakers-design/core/Header/Section";var R=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}},R=`import React from "react";
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
`,D={Default:{startLoc:{col:23,line:33},endLoc:{col:1,line:35},startBody:{col:23,line:33},endBody:{col:1,line:35}}},s=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}}}},title:"@travelmakers-design/core/Component/HeaderPage",component:M,argTypes:{size:{defaultValue:"small",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},d=function(r){return Object(G.jsx)(M,Object.assign({},r))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderPage {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return d});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./node_modules/react/jsx-runtime.js"),w=function(r){var p,n;return Object(H.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r,{children:Object(H.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(H.jsx)("path",{stroke:(p=r.color)!==null&&p!==void 0?p:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(H.jsx)("path",{fill:(n=r.color)!==null&&n!==void 0?n:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};w.displayName="BackIcon",w.displayName="@travelmakers-design/core/BackIcon";var L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=function(r){return{small:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:r.fontSizes.b3,lineHeight:r.lineHeights.b3+"px"},large:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:r.fontSizes.h6,lineHeight:r.lineHeights.h6+"px"}}},G=Object(L.a)(function(u,r){var p=r.size,n=p===void 0?"small":p;return{root:{display:"flex",alignItems:"center",width:"100%",height:n==="small"?"44px":"64px",maxWidth:"calc(1200px - 16px * 2)",padding:"0 16px",backgroundColor:u.colors.navy1},wrapper:{display:"flex",alignItems:"center",cursor:"pointer",width:"100%"},title:Object.assign({},U(u)[n],{color:u.colors.white,marginLeft:24})}}),V=["size","title","className","co","overrideStyles"];function Z(u,r){if(u==null)return{};var p=B(u,r),n,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(u);for(c=0;c<P.length;c++)n=P[c],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,n)||(p[n]=u[n]))}return p}function B(u,r){if(u==null)return{};var p={},n=Object.keys(u),c,P;for(P=0;P<n.length;P++)c=n[P],!(r.indexOf(c)>=0)&&(p[c]=u[c]);return p}var M=Object(Y.forwardRef)(function(u,r){var p=u.size,n=p===void 0?"small":p,c=u.title,P=u.className,x=u.co,t=u.overrideStyles,v=Z(u,V),k=Object(J.c)(),O=G({size:n},{overrideStyles:t,name:"HeaderSection"}),j=O.classes,a=O.cx;return Object(H.jsx)(A.a,Object.assign({ref:r,className:a(j.root,P),co:x},v,{children:Object(H.jsxs)("div",{className:a(j.wrapper),children:[Object(H.jsx)(w,{width:n==="small"?"16px":"24px",height:n==="small"?"16px":"24px"}),Object(H.jsx)("span",{className:a(j.title),children:c})]})}))});M.displayName="@travelmakers-design/core/Header/Section";var R=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,D={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}},R=`import React from "react";
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
`,D={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:29},startBody:{col:23,line:27},endBody:{col:1,line:29}}},s=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}}}},title:"@travelmakers-design/core/Component/HeaderSection",component:M,argTypes:{size:{defaultValue:"small",description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},title:{defaultValue:"\uD398\uC774\uC9C0 \uC774\uB984",table:{type:{summary:"React.ReactNode"}},description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},d=function(r){return Object(H.jsx)(M,Object.assign({},r))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderSection {...props} />;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),w=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),L=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),U=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),G=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function R(t){if(t==null)throw new TypeError("Cannot destructure undefined")}var D=Object(M.a)(function(t,v){var k,O,j,a,y,m,g,h,T;R(v);var l="580px",_="264px",i="328px",o="200px";return{root:{display:"flex",alignItems:"center",cursor:"default"},cardContainer:(k={display:"block",position:"relative",width:l},k[""+t.media.mobile]={width:i},k),flexBox:{display:"flex",flexDirection:"row",alignItems:"center"},spaceBetweenBox:{justifyContent:"space-between"},groupLabel:(O={position:"absolute",width:"100%",paddingLeft:"32px",paddingRight:"12px",alignItems:"flex-start"},O[""+t.media.mobile]={paddingLeft:"16px"},O),soldOutBox:(j={display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0,height:_},j[""+t.media.mobile]={height:o},j["& > b"]={color:t.colors.white,fontFamily:"PT Serif",fontStyle:"italic",fontWeight:700,fontSize:t.fontSizes.h1,lineHeight:t.lineHeights.h1+"px"},j["& > small"]={color:t.colors.white,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:t.fontSizes.h5,lineHeight:t.lineHeights.h5+"px"},j),individualLabel:{marginRight:0},divider:{backgroundColor:t.colors.navy2,flex:1,height:"1px",margin:"12px 0 15px 0"},textRed:{color:t.colors.red2},textNavy1:{color:t.colors.navy1},textGray2:{color:t.colors.gray2},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},mr2:{marginRight:"2px"},labelImageBox:{height:"20px"},cardImageBox:(a={width:l,height:_,overflow:"hidden"},a[""+t.media.mobile]={width:i,height:o},a),labelBox:{height:"20px"},priceBox:{height:"36px"},addressBox:(y={marginTop:"11px"},y[""+t.media.mobile]={marginTop:"8px"},y),imageWrapper:(m={width:l,height:_},m[""+t.media.mobile]={width:i,height:o},m),image:(g={width:l,height:_,position:"inherit",display:"flex",justifyContent:"center",alignItems:"end"},g["&: hover"]={width:"110%",height:"110%",transition:"width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)"},g[""+t.media.mobile]={width:i,height:o},g),textWrapper:(h={padding:"16px 32px"},h[""+t.media.mobile]={padding:"16px 16px"},h.backgroundColor=t.colors.white,h),tagBox:{marginTop:"12px"},sellout:(T={marginTop:"49px"},T[""+t.media.mobile]={marginTop:"41.5px"},T)}}),s=e("./node_modules/react/jsx-runtime.js"),d=["type","hotelImage","hotelItems","addressText","hotelName","percentText","beforePrice","startPrice","priceText","couponBoolean","coupons","timelineTags","soldOut","className","co","overrideStyles"];function u(t,v){if(t==null)return{};var k=r(t,v),O,j;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(j=0;j<a.length;j++)O=a[j],!(v.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,O)||(k[O]=t[O]))}return k}function r(t,v){if(t==null)return{};var k={},O=Object.keys(t),j,a;for(a=0;a<O.length;a++)j=O[a],!(v.indexOf(j)>=0)&&(k[j]=t[j]);return k}var p=Object(Y.forwardRef)(function(t,v){var k=t.type,O=k===void 0?"default":k,j=t.hotelImage,a=t.hotelItems,y=a===void 0?[]:a,m=t.addressText,g=t.hotelName,h=t.percentText,T=t.beforePrice,l=t.startPrice,_=t.priceText,i=t.couponBoolean,o=i===void 0?!1:i,f=t.coupons,S=t.timelineTags,C=t.soldOut,I=C===void 0?!1:C,E=t.className,ee=t.co,se=t.overrideStyles,N=u(t,d),K=Object(A.c)(),$=D({},{overrideStyles:se,name:"HotelCard"}),F=$.classes,ne=$.cx,ve=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:ne(F.flexBox,F.labelBox),children:[Object(s.jsx)(Z.a,{family:"Pretendard",level:"b3",color:K.colors.navy1,className:ne(F.label,F.textNavy1),children:h&&"\uC815\uAC00"}),Object(s.jsx)(Z.a,{family:"Pretendard",level:"b3",color:K.colors.navy1,className:ne(F.label,F.textNavy1),children:T}),o&&Object(s.jsx)(L.a,{fill:!0,children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]}),Object(s.jsx)("div",{className:ne(F.flexBox,F.priceBox),children:Object(s.jsx)(G.a,{couponBool:!0,percentBool:!!h,priceBool:!!_,nightBool:!1,percentText:h,priceStartBool:!!l,priceStartText:l,priceText:_,type:"primary"})})]})},be=function(){return Object(s.jsx)("div",{className:ne(F.sellout),children:Object(s.jsx)(Z.a,{family:"Pretendard",level:"b2",color:K.colors.gray4,className:ne(F.label),children:"\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})})};return Object(s.jsx)(B.a,Object.assign({ref:v,className:ne(F.root,E),co:ee},N,{children:Object(s.jsxs)("div",{className:ne(F.cardContainer),children:[Object(s.jsxs)("div",{className:ne(F.imageWrapper),children:[Object(s.jsxs)("div",{className:ne(F.flexBox,F.spaceBetweenBox,F.groupLabel),children:[Object(s.jsx)("div",{className:ne(F.flexBox),children:y.map(function(z,oe){return Object(s.jsx)(V.a,{color:(oe+1)%2===0?"blue":(oe+1)%3===0?"purple":"green",fill:!0,size:"medium",className:ne(F.individualLabel),children:z})})}),Object(s.jsx)("div",{className:ne(F.addressBox),children:Object(s.jsx)(Z.a,{family:"Pretendard",level:"b1",color:"rgba(255, 255, 255, 0.8)",children:m})})]}),Object(s.jsx)("div",{className:ne(F.cardImageBox),children:Object(s.jsx)(U.a,{className:ne(F.image),src:j,height:"100%",children:I&&Object(s.jsxs)("div",{className:ne(F.soldOutBox),children:[Object(s.jsx)("b",{children:"Sold Out"}),Object(s.jsx)("small",{children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})})})]}),Object(s.jsxs)("div",{className:ne(F.textWrapper),children:[Object(s.jsx)(Z.a,{family:"Pretendard",level:"h4",mobileLevel:"b2",color:I?K.colors.gray4:K.colors.navy1,strong:!0,children:g}),Object(s.jsx)("div",{className:ne(F.flexBox,F.labelImageBox),children:Object(s.jsx)(w.a,{type:O,soldOut:I})}),Object(s.jsx)("div",{className:ne(F.divider)}),I?Object(s.jsx)(be,{}):Object(s.jsx)(ve,{}),Object(s.jsx)("div",{className:ne(F.flexBox,F.tagBox),children:Object(s.jsx)(H.a,{items:S,soldOut:I,fill:!0})})]})]})}))});p.displayName="@travelmakers-design/core/Header/Section";var n=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelCard } from \\"../HotelCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/HotelCard\\",\\n  component: HotelCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":124},"endLoc":{"col":1,"line":130},"startBody":{"col":23,"line":124},"endBody":{"col":1,"line":130}}};
    
import React from "react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelCard",
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
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}},n=`import React from "react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelCard",
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
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
`,c={Default:{startLoc:{col:23,line:124},endLoc:{col:1,line:130},startBody:{col:23,line:124},endBody:{col:1,line:130}}},P=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelCard } from \\"../HotelCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/HotelCard\\",\\n  component: HotelCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":124},"endLoc":{"col":1,"line":130},"startBody":{"col":23,"line":124},"endBody":{"col":1,"line":130}}};
    
import React from "react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelCard",
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
      description: "HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}}}},title:"@travelmakers-design/core/Component/Card/HotelCard",component:p,argTypes:{type:{defaultValue:"default",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},hotelItems:{defaultValue:["\uD68C\uC6D0\uD560\uC778\uAC00"],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},addressText:{defaultValue:"address",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelName:{defaultValue:"\uD638\uD154\uBA85",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"80",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},beforePrice:{defaultValue:"100,000\uC6D0",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},startPrice:{defaultValue:"1\uBC15 50,000\uC6D0 \uBD80\uD130",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:2e5,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},couponBoolean:{defaultValue:!0,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},coupons:{defaultValue:[],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",control:{type:"object"}},timelineTags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},soldOut:{defaultValue:!1,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},x=function(v){return Object(s.jsx)("div",{style:{padding:24},children:Object(s.jsx)(p,Object.assign({},v))})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelCard {...props} />
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),w=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),L=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),U=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),G=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),V=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),Z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function R(t){if(t==null)throw new TypeError("Cannot destructure undefined")}var D=Object(M.a)(function(t,v){var k,O,j,a,y,m,g,h,T,l,_,i,o;R(v);var f="533px",S="344px",C="296px",I="180px",E="328px";return{root:(k={display:"inline-flex",alignItems:"center",cursor:"default",backgroundColor:t.colors.white,height:E},k[""+t.media.tablet]={height:"auto"},k),cardContainer:(O={display:"inline-flex",height:E,paddingLeft:"24px",position:"relative"},O[""+t.media.tablet]={display:"block",height:"auto",padding:"0"},O),flexBox:{display:"flex",flexDirection:"row",alignItems:"center"},goImageflexBox:(j={display:"flex",flexDirection:"row",alignItems:"baseline",width:"fit-content",borderBottom:"1px solid "+t.colors.navy1,marginLeft:"41px"},j[""+t.media.tablet]={display:"none"},j),spaceBetweenBox:{justifyContent:"space-between"},groupLabel:(a={position:"absolute",zIndex:1,top:"-32px",width:"100%",paddingLeft:"32px",paddingRight:"12px",alignItems:"flex-start"},a[""+t.media.tablet]={paddingLeft:"16px"},a),soldOutBox:(y={display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0,height:S},y[""+t.media.tablet]={height:I},y["& > b"]={color:t.colors.white,fontFamily:"PT Serif",fontStyle:"italic",fontWeight:700,fontSize:t.fontSizes.h1,lineHeight:t.lineHeights.h1+"px"},y["& > small"]={color:t.colors.white,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:t.fontSizes.h5,lineHeight:t.lineHeights.h5+"px"},y),individualLabel:{marginRight:0},divider:{backgroundColor:t.colors.navy2,flex:1,height:"1px",margin:"45px 0 14px 0"},textRed:{color:t.colors.red2},textNavy1:{color:t.colors.navy1},textGray2:{color:t.colors.gray2},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},mr2:{marginRight:"2px"},labelImageBox:{height:"20px"},cardImageBox:(m={width:f,height:S,overflow:"hidden",position:"absolute",bottom:16},m[""+t.media.tablet]={width:C,height:I,top:"-32px",left:"50%",transform:"translate(-50%, 0)"},m),labelBox:{height:"20px"},priceBox:{height:"36px"},addressBox:(g={marginTop:"11px"},g[""+t.media.tablet]={marginTop:"8px"},g),imageWrapper:(h={width:f,height:S},h[""+t.media.tablet]={width:C,height:I},h.position="relative",h),image:(T={width:f,height:S,position:"inherit",display:"flex",justifyContent:"center",alignItems:"end"},T["&: hover"]={width:"110%",height:"110%",transition:"width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)"},T[""+t.media.tablet]={width:C,height:I},T),textWrapper:(l={padding:"0 72px 16px 72px"},l[""+t.media.tablet]={padding:"0 16px 16px 16px"},l.backgroundColor=t.colors.white,l),timer:(_={padding:"0 16px",backgroundColor:t.colors.green3},_[""+t.media.tablet]={width:C,margin:"auto"},_),tagBox:{marginTop:"24px"},sellout:(i={marginTop:"49px"},i[""+t.media.tablet]={marginTop:"41.5px"},i),arrowImage:{width:"21px",marginLeft:"9.5px"},bottomSection:(o={},o[""+t.media.tablet]={marginTop:"-32px"},o)}}),s=e("./node_modules/react/jsx-runtime.js"),d=["type","hotelImage","hotelItems","addressText","hotelName","percentText","beforePrice","startPrice","priceText","couponBoolean","coupons","timelineTags","soldOut","className","co","overrideStyles"];function u(t,v){if(t==null)return{};var k=r(t,v),O,j;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(j=0;j<a.length;j++)O=a[j],!(v.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,O)||(k[O]=t[O]))}return k}function r(t,v){if(t==null)return{};var k={},O=Object.keys(t),j,a;for(a=0;a<O.length;a++)j=O[a],!(v.indexOf(j)>=0)&&(k[j]=t[j]);return k}var p=Object(Y.forwardRef)(function(t,v){var k=t.type,O=k===void 0?"default":k,j=t.hotelImage,a=t.hotelItems,y=a===void 0?[]:a,m=t.addressText,g=t.hotelName,h=t.percentText,T=t.beforePrice,l=t.startPrice,_=t.priceText,i=t.couponBoolean,o=i===void 0?!1:i,f=t.coupons,S=t.timelineTags,C=t.soldOut,I=C===void 0?!1:C,E=t.className,ee=t.co,se=t.overrideStyles,N=u(t,d),K=Object(A.c)(),$=D({},{overrideStyles:se,name:"HotelFeatureCard"}),F=$.classes,ne=$.cx,ve=function(oe){var ie=oe.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:ne(F.flexBox,F.labelBox),children:[Object(s.jsx)(Z.a,{family:"Pretendard",level:"b3",color:K.colors.navy1,className:ne(F.label,F.textNavy1),children:h&&"\uC815\uAC00"}),Object(s.jsx)(Z.a,{family:"Pretendard",level:"b3",color:K.colors.navy1,className:ne(F.label,F.textNavy1),children:T}),o&&Object(s.jsx)(L.a,{fill:!0,children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]}),Object(s.jsxs)("div",{className:ne(F.flexBox,F.priceBox),children:[Object(s.jsx)(G.a,{couponBool:!0,percentBool:!!h,priceBool:!!_,nightBool:!1,percentText:h,priceStartBool:!!l,priceStartText:l,priceText:_,type:"primary"}),ie]})]})},be=function(){return Object(s.jsx)("div",{className:ne(F.sellout),children:Object(s.jsx)(Z.a,{family:"Pretendard",level:"b2",color:K.colors.gray4,className:ne(F.label),children:"\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})})};return Object(s.jsx)(B.a,Object.assign({ref:v,className:ne(F.root,E),co:ee},N,{children:Object(s.jsxs)("div",{className:ne(F.cardContainer),children:[Object(s.jsx)("div",{className:ne(F.imageWrapper),children:Object(s.jsxs)("div",{className:ne(F.flexBox,F.spaceBetweenBox,F.groupLabel),children:[Object(s.jsx)("div",{className:ne(F.flexBox),children:y.map(function(z,oe){return Object(s.jsx)(V.a,{color:(oe+1)%2===0?"blue":(oe+1)%3===0?"purple":"green",fill:!0,size:"medium",className:ne(F.individualLabel),children:z})})}),Object(s.jsx)("div",{className:ne(F.addressBox),children:Object(s.jsx)(Z.a,{family:"Pretendard",level:"b1",color:"rgba(255, 255, 255, 0.8)",children:m})})]})}),Object(s.jsx)("div",{className:ne(F.cardImageBox),children:Object(s.jsx)(U.a,{className:ne(F.image),src:j,height:"100%",children:I&&Object(s.jsxs)("div",{className:ne(F.soldOutBox),children:[Object(s.jsx)("b",{children:"Sold Out"}),Object(s.jsx)("small",{children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})})}),Object(s.jsxs)("div",{className:ne(F.bottomSection),children:[Object(s.jsx)("div",{className:ne(F.timer),children:"timer"}),Object(s.jsxs)("div",{className:ne(F.textWrapper),children:[Object(s.jsx)("div",{className:ne(F.flexBox,F.tagBox),children:Object(s.jsx)(H.a,{items:S,soldOut:I,fill:!1})}),Object(s.jsx)(Z.a,{family:"Pretendard",level:"h4",mobileLevel:"b2",style:{marginTop:"12px"},color:I?K.colors.gray4:K.colors.navy1,strong:!0,children:g}),Object(s.jsx)("div",{className:ne(F.flexBox,F.labelImageBox),children:Object(s.jsx)(w.a,{type:O,soldOut:I})}),Object(s.jsx)("div",{className:ne(F.divider)}),I?Object(s.jsx)(be,{}):Object(s.jsx)(ve,{children:Object(s.jsxs)("div",{className:ne(F.goImageflexBox),children:[Object(s.jsx)(Z.a,{family:"PT Serif",level:"h4",mobileLevel:"b2",style:{width:"auto",lineHeight:"24px"},color:K.colors.navy1,children:"Go"}),Object(s.jsx)(U.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg"),className:ne(F.arrowImage)})]})})]})]})]})}))});p.displayName="@travelmakers-design/core/Header/Section";var n=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelFeatureCard } from \\"../HotelFeatureCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/HotelFeatureCard\\",\\n  component: HotelFeatureCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":125},"endLoc":{"col":1,"line":131},"startBody":{"col":23,"line":125},"endBody":{"col":1,"line":131}}};
    
import React from "react";
import { HotelFeatureCard } from "../HotelFeatureCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelFeatureCard",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}},n=`import React from "react";
import { HotelFeatureCard } from "../HotelFeatureCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelFeatureCard",
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
`,c={Default:{startLoc:{col:23,line:125},endLoc:{col:1,line:131},startBody:{col:23,line:125},endBody:{col:1,line:131}}},P=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelFeatureCard } from \\"../HotelFeatureCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/HotelFeatureCard\\",\\n  component: HotelFeatureCard,\\n  argTypes: {\\n    type: {\\n      defaultValue: \\"default\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"hotel-mini\\", \\"residence\\"],\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    hotelItems: {\\n      defaultValue: [\\"\uD68C\uC6D0\uD560\uC778\uAC00\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    addressText: {\\n      defaultValue: \\"address\\",\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelName: {\\n      defaultValue: \\"\uD638\uD154\uBA85\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    percentText: {\\n      defaultValue: \\"80\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    beforePrice: {\\n      defaultValue: \\"100,000\uC6D0\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    startPrice: {\\n      defaultValue: \\"1\uBC15 50,000\uC6D0 \uBD80\uD130\\",\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    priceText: {\\n      defaultValue: 200000,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    couponBoolean: {\\n      defaultValue: true,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n    coupons: {\\n      defaultValue: [],\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    timelineTags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description:\\n        \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    soldOut: {\\n      defaultValue: false,\\n      description: \\"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"boolean\\",\\n        },\\n      },\\n      control: { type: \\"boolean\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":125},"endLoc":{"col":1,"line":131},"startBody":{"col":23,"line":125},"endBody":{"col":1,"line":131}}};
    
import React from "react";
import { HotelFeatureCard } from "../HotelFeatureCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelFeatureCard",
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}}}},title:"@travelmakers-design/core/Component/Card/HotelFeatureCard",component:p,argTypes:{type:{defaultValue:"default",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},hotelItems:{defaultValue:["\uD68C\uC6D0\uD560\uC778\uAC00"],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},addressText:{defaultValue:"address",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelName:{defaultValue:"\uD638\uD154\uBA85",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"80",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},beforePrice:{defaultValue:"100,000\uC6D0",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},startPrice:{defaultValue:"1\uBC15 50,000\uC6D0 \uBD80\uD130",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:2e5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},couponBoolean:{defaultValue:!0,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},coupons:{defaultValue:[],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",control:{type:"object"}},timelineTags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},soldOut:{defaultValue:!1,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},x=function(v){return Object(s.jsx)("div",{style:{padding:40},children:Object(s.jsx)(p,Object.assign({},v))})};x.displayName="Default",x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 40 }}>
      <HotelFeatureCard {...props} />
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return D});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),J=e("./node_modules/core-js/modules/es.object.assign.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function G(s){if(s==null)throw new TypeError("Cannot destructure undefined")}var V=Object(U.a)(function(s,d){G(d);var u=["#03936e","#1a749e","#73327a","#ab253e","#b2622e"];return{root:{display:"flex"},item:{}}}),Z=e("./node_modules/react/jsx-runtime.js"),B=["items","soldOut","fill","title","className","co","overrideStyles"];function M(s,d){if(s==null)return{};var u=R(s,d),r,p;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(p=0;p<n.length;p++)r=n[p],!(d.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,r)||(u[r]=s[r]))}return u}function R(s,d){if(s==null)return{};var u={},r=Object.keys(s),p,n;for(n=0;n<r.length;n++)p=r[n],!(d.indexOf(p)>=0)&&(u[p]=s[p]);return u}var D=Object(H.forwardRef)(function(s,d){var u=s.items,r=u===void 0?[]:u,p=s.soldOut,n=p===void 0?!1:p,c=s.fill,P=c===void 0?!1:c,x=s.title,t=s.className,v=s.co,k=s.overrideStyles,O=M(s,B),j=Object(A.c)(),a=V({},{overrideStyles:k,name:"HotelItems"}),y=a.classes,m=a.cx,g=function(){return Object(Z.jsx)(Z.Fragment,{children:r.map(function(T){return Object(Z.jsx)(w.a,{color:"gray",disabled:n,fill:P,roundness:!0,size:"medium",children:T})})})};return Object(Z.jsx)(L.a,Object.assign({ref:d,className:m(y.root,t),co:v},O,{children:Object(Z.jsx)(g,{})}))});D.displayName="@travelmakers-design/core/HotelItems"},"./packages/travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelItems {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:24},endLoc:{col:1,line:30},startBody:{col:23,line:24},endBody:{col:1,line:30}}},H=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:22},startBody:{col:23,line:16},endBody:{col:1,line:22}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelItems {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:24},endLoc:{col:1,line:30},startBody:{col:23,line:24},endBody:{col:1,line:30}}}}},title:"@travelmakers-design/core/Component/HotelItems",component:X.a,argTypes:{items:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelItems \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uB9CC\uB4E4\uC5B4\uC90D\uB2C8\uB2E4.",control:{type:"object"}}}};var L=function(G){return Object(J.jsx)("div",{style:{padding:24},children:Object(J.jsx)(X.a,Object.assign({},G))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelItems {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return R});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),H=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),w=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function U(D){if(D==null)throw new TypeError("Cannot destructure undefined")}var G=Object(L.a)(function(D,s){return U(s),{root:{display:"flex",alignItems:"center"},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},textGray2:{color:D.colors.gray2}}}),V=e("./node_modules/react/jsx-runtime.js"),Z=["type","soldOut","title","className","co","overrideStyles"];function B(D,s){if(D==null)return{};var d=M(D,s),u,r;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(D);for(r=0;r<p.length;r++)u=p[r],!(s.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,u)||(d[u]=D[u]))}return d}function M(D,s){if(D==null)return{};var d={},u=Object.keys(D),r,p;for(p=0;p<u.length;p++)r=u[p],!(s.indexOf(r)>=0)&&(d[r]=D[r]);return d}var R=Object(J.forwardRef)(function(D,s){var d=D.type,u=d===void 0?"navy":d,r=D.soldOut,p=r===void 0?!1:r,n=D.title,c=D.className,P=D.co,x=D.overrideStyles,t=B(D,Z),v=Object(X.c)(),k=G({},{overrideStyles:x,name:"HotelLabelType"}),O=k.classes,j=k.cx,a=function(T){var l=T.type;switch(l){case"hotel-mini":return Object(V.jsx)(m,{});case"residence":return Object(V.jsx)(g,{});default:return Object(V.jsx)(y,{})}},y=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(A.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-star.svg"),className:j(O.textImage),height:"16px"}),Object(V.jsx)(H.a,{family:"Pretendard",level:"b3",color:p?v.colors.gray4:v.colors.navy2,children:"5\uC131\uAE09 | \uD638\uD154"})]})},m=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(A.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-mini.svg"),className:j(O.textImage),height:"16px"}),Object(V.jsx)(H.a,{family:"Pretendard",level:"b3",color:p?v.colors.gray4:v.colors.navy2,children:"| \uBBF8\uB2C8 \uD638\uD154"})]})},g=function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(A.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-residence.svg"),className:j(O.textImage),height:"16px"}),Object(V.jsx)(H.a,{family:"Pretendard",level:"b3",color:p?v.colors.gray4:v.colors.navy2,children:"| \uB808\uC9C0\uB358\uC2A4 \uD638\uD154"})]})};return Object(V.jsx)(w.a,Object.assign({ref:s,className:j(O.root,c),co:P},t,{children:Object(V.jsx)(a,{type:u})}))});R.displayName="@travelmakers-design/core/HotelLabelType"},"./packages/travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelLabelType {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:41},startBody:{col:23,line:35},endBody:{col:1,line:41}}},H=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:33},startBody:{col:23,line:27},endBody:{col:1,line:33}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelLabelType {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:41},startBody:{col:23,line:35},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/core/Component/HotelLabelType",component:X.a,argTypes:{type:{defaultValue:"default",description:"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},soldOut:{defaultValue:!1,description:"HotelLabelType \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var L=function(G){return Object(J.jsx)("div",{style:{padding:24},children:Object(J.jsx)(X.a,Object.assign({},G))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelLabelType {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/HotelReviewCard/stories/HotelReviewCard.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return p});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),H=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),w=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function G(n){if(n==null)throw new TypeError("Cannot destructure undefined")}var V=function(c){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:c.fontSizes.h4,lineHeight:c.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:c.fontSizes.h1,lineHeight:c.lineHeights.h1+"px"}}},Z=Object(U.a)(function(n,c){var P,x,t,v,k,O,j,a,y,m;return G(c),{root:(P={padding:"24px",backgroundColor:n.colors.white,display:"flex",gap:"16px"},P[""+n.media.mobile]={padding:"16px",display:"block"},P),contentWrapper:{width:"100%"},contentBox:(x={},x[""+n.media.mobile]={display:"flex",height:"48px",gap:"16px"},x),headerBox:(t={marginBottom:"8px"},t[""+n.media.mobile]={display:"flex",justifyContent:"center",alignItems:"center"},t),content:(O={height:"fit-content"},O["& > div > span"]=(k={display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-all"},k["-webkit-box-orient"]="vertical",k["-webkit-line-clamp"]="2",k[""+n.media.mobile]=(v={},v["-webkit-line-clamp"]="1",v),k),O),text:{},tagList:{marginBottom:"16px"},image:(j={},j["& > div "]={height:"100%"},j["& > div > img"]={height:"100% !important"},j),imageWrapper:(a={},a[""+n.media.mobile]={display:"none"},a),mobileImageWrapper:(y={display:"none",margin:"auto"},y[""+n.media.mobile]={display:"block",height:"40px"},y),arrowImage:(m={width:"16px",height:"16px",display:"none"},m[""+n.media.mobile]={display:"block"},m),divider:{width:"100%",height:"1px",backgroundColor:n.colors.gray5,margin:"12px 0 4px 0"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["hotelImage","tags","content","reviewName","hotelOption","title","className","co","overrideStyles"];function R(n,c){if(n==null)return{};var P=D(n,c),x,t;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(n);for(t=0;t<v.length;t++)x=v[t],!(c.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,x)||(P[x]=n[x]))}return P}function D(n,c){if(n==null)return{};var P={},x=Object.keys(n),t,v;for(v=0;v<x.length;v++)t=x[v],!(c.indexOf(t)>=0)&&(P[t]=n[t]);return P}var s=Object(Y.forwardRef)(function(n,c){var P=n.hotelImage,x=n.tags,t=n.content,v=n.reviewName,k=n.hotelOption,O=n.title,j=n.className,a=n.co,y=n.overrideStyles,m=R(n,M),g=Object(J.c)(),h=Z({},{overrideStyles:y,name:"HotelReviewCard"}),T=h.classes,l=h.cx;return Object(B.jsxs)(L.a,Object.assign({ref:c,className:l(T.root,j),co:a},m,{children:[Object(B.jsxs)("div",{className:l(T.contentWrapper),children:[Object(B.jsxs)("div",{className:l(T.headerBox),children:[Object(B.jsx)(w.a,{family:"Pretendard",level:"b3",color:g.colors.navy3,className:l(T.text),children:"\uC774\uB7F0 \uC810\uC774 \uC88B\uC558\uC5B4\uC694."}),Object(B.jsx)(H.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-angle.svg"),className:l(T.arrowImage)})]}),Object(B.jsx)(A.a,{items:x,fill:!0,className:l(T.tagList)}),Object(B.jsxs)("div",{className:l(T.contentBox),children:[Object(B.jsx)(w.a,{family:"Pretendard",level:"b1",color:g.colors.navy3,className:l(T.content),children:t}),Object(B.jsx)("div",{className:l(T.mobileImageWrapper),children:Object(B.jsx)(H.a,{src:P,width:40,height:40})})]}),Object(B.jsx)("div",{className:l(T.divider)}),Object(B.jsx)("div",{children:Object(B.jsxs)(w.a,{family:"Pretendard",level:"b3",color:g.colors.navy1,children:[v,"\uB2D8\uC758 \uB9AC\uBDF0",k&&Object(B.jsxs)("span",{style:{color:g.colors.navy3,marginLeft:"9px"},children:["\uC0C1\uD488 \uC635\uC158 : ",k]})]})})]}),Object(B.jsx)("div",{className:l(T.image,T.imageWrapper),children:Object(B.jsx)(H.a,{src:P,width:145,height:145})})]}))});s.displayName="@travelmakers-design/core/HotelReviewCard";var d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelReviewCard } from \\"../HotelReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/HotelReviewCard\\",\\n  component: HotelReviewCard,\\n  argTypes: {\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    tags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    content: {\\n      defaultValue:\\n        \\" \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4 \uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    reviewName: {\\n      defaultValue: \\"\uD64D\uAE38\uB3D9\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB9AC\uBDF0\uC5B4 \uC774\uB984\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelOption: {\\n      defaultValue: \\"\uD55C\uB2EC \uC0B4\uAE30\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uC635\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelReviewCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":57},"endLoc":{"col":1,"line":63},"startBody":{"col":23,"line":57},"endBody":{"col":1,"line":63}}};
    
import React from "react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    content: {
      defaultValue:
        " \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4 \uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    reviewName: {
      defaultValue: "\uD64D\uAE38\uB3D9",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB9AC\uBDF0\uC5B4 \uC774\uB984\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelOption: {
      defaultValue: "\uD55C\uB2EC \uC0B4\uAE30",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uC635\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelReviewCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},d=`import React from "react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    content: {
      defaultValue:
        " \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4 \uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    reviewName: {
      defaultValue: "\uD64D\uAE38\uB3D9",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB9AC\uBDF0\uC5B4 \uC774\uB984\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelOption: {
      defaultValue: "\uD55C\uB2EC \uC0B4\uAE30",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uC635\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelReviewCard {...props} />
    </div>
  );
};
`,u={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}}},r=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { HotelReviewCard } from \\"../HotelReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/HotelReviewCard\\",\\n  component: HotelReviewCard,\\n  argTypes: {\\n    hotelImage: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    tags: {\\n      defaultValue: [\\"1\uC8FC \uC0B4\uAE30\\", \\"2\uC8FC \uC0B4\uAE30\\", \\"3\uC8FC \uC0B4\uAE30\\", \\"\uD55C \uB2EC \uC774\uC0C1\\"],\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      control: { type: \\"object\\" },\\n    },\\n    content: {\\n      defaultValue:\\n        \\" \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4 \uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    reviewName: {\\n      defaultValue: \\"\uD64D\uAE38\uB3D9\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB9AC\uBDF0\uC5B4 \uC774\uB984\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    hotelOption: {\\n      defaultValue: \\"\uD55C\uB2EC \uC0B4\uAE30\\",\\n      description: \\"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uC635\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelReviewCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":57},"endLoc":{"col":1,"line":63},"startBody":{"col":23,"line":57},"endBody":{"col":1,"line":63}}};
    
import React from "react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tags: {
      defaultValue: ["1\uC8FC \uC0B4\uAE30", "2\uC8FC \uC0B4\uAE30", "3\uC8FC \uC0B4\uAE30", "\uD55C \uB2EC \uC774\uC0C1"],
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      control: { type: "object" },
    },
    content: {
      defaultValue:
        " \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4 \uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    reviewName: {
      defaultValue: "\uD64D\uAE38\uB3D9",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB9AC\uBDF0\uC5B4 \uC774\uB984\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelOption: {
      defaultValue: "\uD55C\uB2EC \uC0B4\uAE30",
      description: "HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uC635\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelReviewCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}}}},title:"@travelmakers-design/core/Component/Card/HotelReviewCard",component:s,argTypes:{hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},tags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},content:{defaultValue:" \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4 \uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},reviewName:{defaultValue:"\uD64D\uAE38\uB3D9",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB9AC\uBDF0\uC5B4 \uC774\uB984\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelOption:{defaultValue:"\uD55C\uB2EC \uC0B4\uAE30",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uC635\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},p=function(c){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(s,Object.assign({},c))})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelReviewCard {...props} />
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return A});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./node_modules/react/jsx-runtime.js"),J=e.n(X),A=function(w){return Object(X.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w,{children:Object(X.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};A.displayName="CloseIcon",A.displayName="@travelmakers-design/core/CloseIcon"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return s});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),A=e("./node_modules/core-js/modules/es.string.small.js"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),U=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),G={xsmall:{width:L.a.xsmall,height:L.a.xsmall},small:{width:L.a.small,height:L.a.small},medium:{width:L.a.medium,height:L.a.medium},large:{width:L.a.large,height:L.a.large}},V={xsmall:8,small:8,medium:16,large:16},Z=Object(H.a)(function(d,u,r){var p,n,c,P=u.variant,x=u.size,t=u.line,v=u.roundness,k=r("loading"),O=r("inner"),j=r("spinner"),a=P||d.colors.navy1;return{loading:(p={ref:k,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},p["."+O]={opacity:0},p["."+j]={display:"flex"},p),solid:(n={backgroundColor:d.palettes[a][d.colorScheme==="light",0],color:d.colorScheme==="light"?d.colors.white:d.colors.black,"&:not(:disabled):hover":{backgroundColor:d.palettes[a][d.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:d.palettes[a][d.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:v?d.radius.round:2,outline:"1px solid "+d.palettes[a][d.colorScheme==="light",0]}}},n["&:disabled:not(."+k+")"]={backgroundColor:d.colors.gray5,color:t?d.colors.black:d.colors.white},n),ghost:(c={backgroundColor:d.colors.transparent,border:"1px solid "+d.palettes[a][d.colorScheme==="light",0],color:d.palettes[a][d.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(U.a)(d.palettes[a][d.colorScheme==="light",0],d.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(U.a)(d.palettes[a][d.colorScheme==="light",1],d.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:v?d.radius.round:2,outline:"1px solid "+d.palettes[a][d.colorScheme==="light",0]}}},c["&:disabled:not(."+k+")"]={backgroundColor:d.colors.gray5,color:t?d.colors.black:d.colors.white},c),root:Object.assign({},G[x],Object(w.b)(d),{borderRadius:v?d.radius.round:d.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:O,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:G[x].width-V[x],height:G[x].height-V[x]}},spinnerWrapper:{ref:j,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function R(d,u){if(d==null)return{};var r=D(d,u),p,n;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(d);for(n=0;n<c.length;n++)p=c[n],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,p)||(r[p]=d[p]))}return r}function D(d,u){if(d==null)return{};var r={},p=Object.keys(d),n,c;for(c=0;c<p.length;c++)n=p[c],!(u.indexOf(n)>=0)&&(r[n]=d[n]);return r}var s=Object(X.forwardRef)(function(d,u){var r=d.children,p=d.component,n=d.size,c=n===void 0?"medium":n,P=d.variant,x=d.line,t=d.type,v=t===void 0?"button":t,k=d.disabled,O=k===void 0?!1:k,j=d.roundness,a=j===void 0?!1:j,y=d.className,m=d.co,g=d.overrideStyles,h=R(d,M),T=Z({variant:P,size:c,line:x,roundness:a},{overrideStyles:g,name:"Button"}),l=T.classes,_=T.cx;return Object(B.jsx)(J.a,Object.assign({component:p||"button",className:_(l.root,l[x?"ghost":"solid"],y),type:v,disabled:O,ref:u,onTouchStart:function(){},co:m},h,{children:Object(B.jsx)("div",{className:l.inner,children:r})}))});s.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return R});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),A=e("./node_modules/react/index.js"),H=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),w=e("./node_modules/react/jsx-runtime.js"),L=["size","variant"];function U(D,s){if(D==null)return{};var d=G(D,s),u,r;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(D);for(r=0;r<p.length;r++)u=p[r],!(s.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(D,u)||(d[u]=D[u]))}return d}function G(D,s){if(D==null)return{};var d={},u=Object.keys(D),r,p;for(p=0;p<u.length;p++)r=u[p],!(s.indexOf(r)>=0)&&(d[r]=D[r]);return d}var V=Object(A.forwardRef)(function(D,s){var d=D.size,u=d===void 0?"medium":d,r=D.variant,p=r===void 0?"primary":r,n=U(D,L);return Object(w.jsx)(J.a,Object.assign({size:u,variant:p,ref:s},n,{children:Object(w.jsx)(H.a,{})}))});V.displayName="@travelmakers-design/core/CloseButton";var Z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}},Z=`import {
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
`,B={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:93},startBody:{col:23,line:91},endBody:{col:1,line:93}}},M=b.default={title:"@travelmakers-design/core/Component/CloseButton",component:V,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}}},docs:{page:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Y.g,{}),Object(w.jsx)(Y.f,{}),Object(w.jsx)(Y.b,{}),Object(w.jsx)(Y.d,{}),Object(w.jsx)(Y.a,{story:Y.c}),Object(w.jsx)(Y.e,{})]})}},actions:{handles:["click button"]}}},R=function(s){return Object(w.jsx)(V,Object.assign({},s))};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),X=e("./node_modules/react/index.js"),J=e.n(X),A=e("./node_modules/react/jsx-runtime.js"),H=e.n(A),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}},w=`import {
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
`,L={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:102},startBody:{col:23,line:91},endBody:{col:1,line:102}}};b.default={title:"@travelmakers-design/core/Component/IconButton",component:re.a,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(W.g,{}),Object(A.jsx)(W.f,{}),Object(A.jsx)(W.b,{}),Object(A.jsx)(W.d,{}),Object(A.jsx)(W.a,{story:W.c}),Object(A.jsx)(W.e,{})]})}},actions:{handles:["click button"]}}};var U=function(V){var Z=Object(A.jsx)("svg",{viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(A.jsx)(re.a,Object.assign({},V,{children:Z}))};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return D});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),A=e("./node_modules/react/jsx-runtime.js"),H=function(d){return Object(A.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d,{children:[Object(A.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(A.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(A.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(A.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};H.displayName="CouponPercentIcon",H.displayName="@travelmakers-design/core/CouponPercentIcon";var w=e("./node_modules/core-js/modules/es.string.small.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),G=function(d){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:d.lineHeights.caption+"px",fontSize:d.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:d.lineHeights.b3+"px",fontSize:d.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:d.lineHeights.b2+"px",fontSize:d.fontSizes.b2}}},V=function(d){return{small:{padding:"2px 4px"},medium:{padding:"0px 12px"},large:{padding:"0px 16px"}}},Z=Object(L.a)(function(s,d){var u,r=d.fill;return{container:Object.assign({},Object(U.b)(s),G(s).small,V(s).small,(u={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:s.colors.green3,marginRight:"6px",gap:"5px",borderRadius:s.radius.medium,backgroundColor:s.colors.green5},u["&:last-child"]={marginRight:0},u)),line:{color:s.colors.green3,background:"inherit",border:"1px solid"}}}),B=["component","fill","children","className","overrideStyles","__staticSelector"];function M(s,d){if(s==null)return{};var u=R(s,d),r,p;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(p=0;p<n.length;p++)r=n[p],!(d.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,r)||(u[r]=s[r]))}return u}function R(s,d){if(s==null)return{};var u={},r=Object.keys(s),p,n;for(n=0;n<r.length;n++)p=r[n],!(d.indexOf(p)>=0)&&(u[p]=s[p]);return u}var D=Object(J.forwardRef)(function(s,d){var u=s.component,r=s.fill,p=r===void 0?!1:r,n=s.children,c=s.className,P=s.overrideStyles,x=s.__staticSelector,t=x===void 0?"span":x,v=M(s,B),k=u||"span",O=Z({fill:p},{overrideStyles:P,name:"span"}),j=O.classes,a=O.cx;return Object(A.jsxs)(k,Object.assign({ref:d,className:a(j.container,!p&&j.line,c)},v,{children:[Object(A.jsx)(H,{}),n]}))});D.displayName="@travelmakers-design/core/IconTag"},"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.array.map.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(X),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.object.assign.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.string.iterator.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(u),p=e("./node_modules/core-js/modules/es.array.slice.js"),n=e.n(p),c=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(c),x=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),t=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),v=e("./node_modules/react/index.js"),k=e.n(v),O=e("./node_modules/react/jsx-runtime.js"),j=e.n(O);function a(o){return h(o)||g(o)||m(o)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(o,f){if(!!o){if(typeof o=="string")return T(o,f);var S=Object.prototype.toString.call(o).slice(8,-1);if(S==="Object"&&o.constructor&&(S=o.constructor.name),S==="Map"||S==="Set")return Array.from(o);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return T(o,f)}}function g(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function h(o){if(Array.isArray(o))return T(o)}function T(o,f){(f==null||f>o.length)&&(f=o.length);for(var S=0,C=new Array(f);S<f;S++)C[S]=o[S];return C}var l=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}},l=`import {
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
`,_={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:66},startBody:{col:23,line:49},endBody:{col:1,line:66}}};b.default={title:"@travelmakers-design/core/Component/IconTag",component:t.a,argTypes:{fill:{defaultValue:!0,description:"IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x.g,{}),Object(O.jsx)(x.f,{}),Object(O.jsx)(x.b,{}),Object(O.jsx)(x.d,{}),Object(O.jsx)(x.a,{story:x.c}),Object(O.jsx)(x.e,{})]})}},actions:{handles:["click button"]}}};var i=function(f){var S=Object(O.jsx)("svg",{viewBox:"0 0 24 24",children:Object(O.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(O.jsx)("div",{style:{padding:24,display:"flex"},children:a(Array(1).keys()).map(function(C,I){return Object(O.jsxs)(t.a,Object.assign({},f,{children:["\uCFE0\uD3F0 \uC801\uC6A9\uAC00",I+1]}))})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Image/Image.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return y});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),M=e("./node_modules/core-js/modules/es.object.assign.js"),R=e("./node_modules/react/index.js"),D=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=Object(s.a)(function(m,g){var h=g.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:h?h in m.radius?m.radius[h]:h:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(m.colorScheme==="dark",m.palettes.primary[0]),backgroundColor:(m.colorScheme==="dark",m.palettes.primary[0]),borderRadius:h?h in m.radius?m.radius[h]:h:0}}}),u=e("./node_modules/react/jsx-runtime.js"),r=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function p(m,g){return t(m)||x(m,g)||c(m,g)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(m,g){if(!!m){if(typeof m=="string")return P(m,g);var h=Object.prototype.toString.call(m).slice(8,-1);if(h==="Object"&&m.constructor&&(h=m.constructor.name),h==="Map"||h==="Set")return Array.from(m);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return P(m,g)}}function P(m,g){(g==null||g>m.length)&&(g=m.length);for(var h=0,T=new Array(g);h<g;h++)T[h]=m[h];return T}function x(m,g){var h=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(h!=null){var T=[],l=!0,_=!1,i,o;try{for(h=h.call(m);!(l=(i=h.next()).done)&&(T.push(i.value),!(g&&T.length===g));l=!0);}catch(f){_=!0,o=f}finally{try{!l&&h.return!=null&&h.return()}finally{if(_)throw o}}return T}}function t(m){if(Array.isArray(m))return m}function v(m,g){if(m==null)return{};var h=k(m,g),T,l;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(m);for(l=0;l<_.length;l++)T=_[l],!(g.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,T)||(h[T]=m[T]))}return h}function k(m,g){if(m==null)return{};var h={},T=Object.keys(m),l,_;for(_=0;_<T.length;_++)l=T[_],!(g.indexOf(l)>=0)&&(h[l]=m[l]);return h}var O=null,j="loadImage",a=function(g,h){g.forEach(function(T){T.isIntersecting&&(h.unobserve(T.target),T.target.dispatchEvent(new CustomEvent(j)))})},y=Object(R.forwardRef)(function(m,g){var h=m.lazy,T=m.threshold,l=T===void 0?.5:T,_=m.placeholder,i=m.src,o=m.radius,f=m.width,S=f===void 0?"100%":f,C=m.height,I=C===void 0?"auto":C,E=m.alt,ee=m.fit,se=m.style,N=m.className,K=m.co,$=m.overrideStyles,F=v(m,r),ne=d({radius:o},{overrideStyles:$,name:"Image"}),ve=ne.classes,be=ne.cx,z=Object(R.useState)(!1),oe=p(z,2),ie=oe[0],ue=oe[1],ye=Object(R.useState)(!1),pe=p(ye,2),ge=pe[0],le=pe[1],te=Object(R.useRef)(null),ce={width:S,height:I,objectFit:ee};return Object(R.useImperativeHandle)(g,function(){return te.current}),Object(R.useEffect)(function(){if(!h){le(!0);return}var de=function(){return le(!0)},xe=te.current;return xe&&xe.addEventListener(j,de),function(){xe&&xe.removeEventListener(j,de)}},[h]),Object(R.useEffect)(function(){!h||(O=new IntersectionObserver(a,{threshold:l}),te.current&&O.observe(te.current))},[h,l]),Object(u.jsxs)(D.a,Object.assign({className:be(ve.root,N),co:K},F,{children:[Object(u.jsx)("img",{ref:te,src:i,alt:E,className:be(ve.image),style:ce,onLoad:function(){return ue(!0)}}),(!ie||h&&!ge)&&_&&Object(u.jsx)("div",{className:ve.placeholder,title:E,children:_}),F.children]}))});y.displayName="@travelmakers-design/core/Image"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.array.map.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.array.iterator.js"),D=e.n(R),s=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(u),p=e("./node_modules/core-js/modules/es.array.slice.js"),n=e.n(p),c=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(c),x=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),t=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),v=e("./node_modules/react/index.js"),k=e.n(v),O=e("./node_modules/react/jsx-runtime.js"),j=e.n(O);function a(o){return h(o)||g(o)||m(o)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(o,f){if(!!o){if(typeof o=="string")return T(o,f);var S=Object.prototype.toString.call(o).slice(8,-1);if(S==="Object"&&o.constructor&&(S=o.constructor.name),S==="Map"||S==="Set")return Array.from(o);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return T(o,f)}}function g(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function h(o){if(Array.isArray(o))return T(o)}function T(o,f){(f==null||f>o.length)&&(f=o.length);for(var S=0,C=new Array(f);S<f;S++)C[S]=o[S];return C}var l=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,_={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},l=`import {
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
`,_={Default:{startLoc:{col:23,line:80},endLoc:{col:1,line:90},startBody:{col:23,line:80},endBody:{col:1,line:90}}};b.default={title:"@travelmakers-design/core/Component/Image",component:t.a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},radius:{defaultValue:"small",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},threshold:{defaultValue:.5,description:"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",control:{type:"number"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},fit:{defaultValue:"cover",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",options:["cover","fill","contain"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x.g,{}),Object(O.jsx)(x.f,{}),Object(O.jsx)(x.b,{}),Object(O.jsx)(x.d,{}),Object(O.jsx)(x.a,{story:x.c}),Object(O.jsx)(x.e,{})]})}}}};var i=function(f){return Object(O.jsx)(O.Fragment,{children:a(new Array(10)).map(function(S,C){return Object(O.jsx)("div",{children:Object(O.jsx)(t.a,Object.assign({placeholder:Object(O.jsx)("div",{children:"Placeholder"})},f))},C)})})};i.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),w=function(R){return{small:{fontFamily:"PT Serif",fontSize:R.fontSizes.b3,lineHeight:R.lineHeights.b3+"px"},large:{fontFamily:"PT Serif",fontSize:R.fontSizes.h5,lineHeight:R.lineHeights.h5+"px"}}},L=Object(H.a)(function(M,R){var D=R.type,s=D===void 0?"text":D,d=R.color,u=d===void 0?"navy":d,r=R.size,p=r===void 0?"large":r;return{root:{display:"flex",alignItems:"center"},indicator:Object.assign({},w(M)[p],{fontFamily:"PT Serif",fontWeight:"700",color:u==="white"?"white":M.colors.navy1,letterSpacing:"2.66667px"})}}),U=e("./node_modules/react/jsx-runtime.js"),G=["type","color","size","totalPage","currentPage","className","co","overrideStyles"];function V(M,R){if(M==null)return{};var D=Z(M,R),s,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(d=0;d<u.length;d++)s=u[d],!(R.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,s)||(D[s]=M[s]))}return D}function Z(M,R){if(M==null)return{};var D={},s=Object.keys(M),d,u;for(u=0;u<s.length;u++)d=s[u],!(R.indexOf(d)>=0)&&(D[d]=M[d]);return D}var B=Object(J.forwardRef)(function(M,R){var D=M.type,s=D===void 0?"text":D,d=M.color,u=d===void 0?"navy":d,r=M.size,p=r===void 0?"large":r,n=M.totalPage,c=n===void 0?1:n,P=M.currentPage,x=P===void 0?1:P,t=M.className,v=M.co,k=M.overrideStyles,O=V(M,G),j=Object(X.c)(),a=L({type:s,color:u,size:p},{overrideStyles:k,name:"Indicator"}),y=a.classes,m=a.cx;return Object(U.jsx)(A.a,Object.assign({ref:R,className:m(y.root,t),co:v},O,{children:Object(U.jsxs)("span",{className:m(y.indicator),children:[x,"/",c]})}))});B.displayName="@travelmakers-design/core/Indicator"},"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},H=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design/core/Component/Indicator",component:X.a,argTypes:{color:{defaultValue:"navy",description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},type:{defaultValue:"text",description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["text","bullet"],control:{type:"inline-radio"}},totalPage:{defaultValue:1,description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},currentPage:{defaultValue:1,description:"Indicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}}}};var L=function(G){return Object(J.jsx)("div",{style:{padding:24},children:Object(J.jsx)(X.a,Object.assign({},G))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Indicator {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return n}),e.d(b,"WithIcon",function(){return c}),e.d(b,"WithRightSection",function(){return P}),e.d(b,"Textarea",function(){return x});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.object.keys.js"),W=e("./node_modules/core-js/modules/es.array.index-of.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.string.small.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./node_modules/react/index.js"),w=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),G=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),V={xsmall:12,small:14,medium:14,large:14,xlarge:16},Z=Object(U.a)(function(t,v){var k=v.multiline,O=v.roundness,j=v.invalid,a=v.width,y=v.descriptionType,m=t.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(G.b)(t),{height:k?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:k?t.lineHeight:t.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:t.fontSizes.b2,width:a?a+"px":"100%",color:t.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:O?t.radius.round:2,border:"1px solid "+t.colors.gray5,backgroundColor:t.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:t.colors.gray1,color:t.colors.gray1},"&:disabled":{backgroundColor:t.colors.gray7,borderColor:t.colors.gray5,color:t.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:t.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:t.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+m,"&::placeholder":{opacity:1}},disabled:{backgroundColor:t.colors.gray7,borderColor:t.colors.gray5,color:t.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:t.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:t.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function R(t,v){if(t==null)return{};var k=D(t,v),O,j;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(j=0;j<a.length;j++)O=a[j],!(v.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,O)||(k[O]=t[O]))}return k}function D(t,v){if(t==null)return{};var k={},O=Object.keys(t),j,a;for(a=0;a<O.length;a++)j=O[a],!(v.indexOf(j)>=0)&&(k[j]=t[j]);return k}var s=Object(H.forwardRef)(function(t,v){var k,O,j=t.component,a=t.width,y=t.label,m=t.description,g=t.descriptionType,h=g===void 0?"description":g,T=t.icon,l=t.rightSectionWidth,_=l===void 0?48:l,i=t.rightSection,o=t.rightSectionProps,f=o===void 0?{}:o,S=t.wrapperProps,C=t.invalid,I=C===void 0?!1:C,E=t.required,ee=E===void 0?!1:E,se=t.disabled,N=se===void 0?!1:se,K=t.multiline,$=K===void 0?!1:K,F=t.roundness,ne=F===void 0?!1:F,ve=t.className,be=t.style,z=t.co,oe=t.overrideStyles,ie=t.__staticSelector,ue=ie===void 0?"Input":ie,ye=R(t,M),pe=Object(A.c)(),ge=Z({roundness:ne,multiline:$,invalid:I,width:a,descriptionType:h},{overrideStyles:oe,name:ue}),le=ge.classes,te=ge.cx,ce=j||"input";return Object(B.jsxs)(L.a,{style:{width:a?a+"px":"100%"},children:[y&&Object(B.jsx)(w.a,{level:"b2",family:"Pretendard",color:pe.colors.gray1,style:{marginBottom:4},children:y}),Object(B.jsxs)(L.a,Object.assign({className:te(le.wrapper,ve),co:z,style:be},S,{children:[T&&Object(B.jsx)("div",{className:te(le.icon,(k={},k[le.disabled]=N,k)),children:T}),Object(B.jsx)(ce,Object.assign({},ye,{ref:v,className:te(le.input,(O={},O[le.withIcon]=T,O[le.invalid]=I,O[le.disabled]=N,O)),required:ee,disabled:N,style:{paddingRight:i?_:pe.spacing.small}})),i&&Object(B.jsx)("div",Object.assign({},f,{style:Object.assign({},f.style,{paddingRight:32}),className:te(le.rightSection,f.className),children:Object(B.jsx)(w.a,{level:"b2",family:"Pretendard",color:pe.colors.green2,children:i})}))]})),m&&h==="description"?Object(B.jsx)(w.a,{level:"b3",family:"Pretendard",color:I?pe.colors.red2:pe.colors.navy3,style:{marginTop:4},children:m}):I&&Object(B.jsx)(w.a,{level:"b3",family:"Pretendard",color:h==="error"?pe.colors.red2:h==="success"?pe.colors.green3:pe.colors.navy3,style:{marginTop:4},children:m})]})});s.displayName="@travelmakers-design/core/Input";var d=`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,u={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},WithIcon:{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},WithRightSection:{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},Textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}},d=`import { Input } from "../Input";
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
`,u={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:120},startBody:{col:23,line:114},endBody:{col:1,line:120}},WithIcon:{startLoc:{col:24,line:122},endLoc:{col:1,line:128},startBody:{col:24,line:122},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:138},startBody:{col:32,line:130},endBody:{col:1,line:138}},Textarea:{startLoc:{col:24,line:140},endLoc:{col:1,line:146},startBody:{col:24,line:140},endBody:{col:1,line:146}}},r=b.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},"with-icon":{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},"with-right-section":{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}}}},title:"@travelmakers-design/core/Component/Input",component:s,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},p=function(){return Object(B.jsx)("svg",{viewBox:"0 0 24 24",children:Object(B.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};p.displayName="Icon";var n=function(v){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(s,Object.assign({},v))})};n.displayName="Default";var c=function(v){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(s,Object.assign({icon:Object(B.jsx)(p,{})},v))})};c.displayName="WithIcon";var P=function(v){var k="\uC778\uC99D\uC644\uB8CC";return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(s,Object.assign({icon:Object(B.jsx)(p,{})},v,{rightSection:k}))})};P.displayName="WithRightSection";var x=function(v){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(s,Object.assign({component:"textarea",multiline:!0},v))})};x.displayName="Textarea",n.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},n.parameters),c.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},c.parameters),P.parameters=Object.assign({storySource:{source:`(props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
}`}},P.parameters),x.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},x.parameters)},"./packages/travelmakers-design-core/src/components/MainReviewCard/stories/MainReviewCard.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return p});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),w=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function G(n){if(n==null)throw new TypeError("Cannot destructure undefined")}var V=function(c){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:c.fontSizes.h4,lineHeight:c.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:c.fontSizes.h1,lineHeight:c.lineHeights.h1+"px"}}},Z=Object(U.a)(function(n,c){var P,x,t;return G(c),{root:(P={width:"fit-content",maxWidth:"456px"},P[""+n.media.mobile]={maxWidth:"286px"},P),reviewContainer:(x={padding:"29px 24px",backgroundColor:n.colors.white,minHeight:"200px",width:"auto",display:"flex"},x[""+n.media.mobile]={padding:"16px"},x),reviewImage:(t={width:"144px",height:"192px",marginLeft:"-40px",marginTop:"-41px",flexShrink:0},t["& > img"]={height:"100% !important"},t[""+n.media.mobile]={width:"92px",height:"122px",marginTop:"0px",marginLeft:"-32px"},t),descriptionWrapper:{marginLeft:"24px"},descriptionJob:{marginBottom:"16px"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["image","title","job","description","className","co","overrideStyles"];function R(n,c){if(n==null)return{};var P=D(n,c),x,t;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(n);for(t=0;t<v.length;t++)x=v[t],!(c.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,x)||(P[x]=n[x]))}return P}function D(n,c){if(n==null)return{};var P={},x=Object.keys(n),t,v;for(v=0;v<x.length;v++)t=x[v],!(c.indexOf(t)>=0)&&(P[t]=n[t]);return P}var s=Object(Y.forwardRef)(function(n,c){var P=n.image,x=n.title,t=n.job,v=n.description,k=n.className,O=n.co,j=n.overrideStyles,a=R(n,M),y=Object(A.c)(),m=Z({},{overrideStyles:j,name:"MainReviewCard"}),g=m.classes,h=m.cx;return Object(B.jsx)(L.a,Object.assign({ref:c,className:h(g.root,k),co:O},a,{children:Object(B.jsxs)("div",{className:h(g.reviewContainer),children:[Object(B.jsx)(H.a,{className:h(g.reviewImage),src:P}),Object(B.jsxs)("div",{className:h(g.descriptionWrapper),children:[Object(B.jsx)(w.a,{family:"Pretendard",level:"b3",color:y.colors.green2,children:x}),Object(B.jsx)(w.a,{family:"Pretendard",level:"b2",color:y.colors.navy2,className:h(g.descriptionJob),children:t}),Object(B.jsx)(w.a,{family:"Pretendard",level:"b2",color:y.colors.navy1,children:v})]})]})}))});s.displayName="@travelmakers-design/core/MainReviewCard";var d=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { MainReviewCard } from \\"../MainReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/MainReviewCard\\",\\n  component: MainReviewCard,\\n  argTypes: {\\n    image: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    job: {\\n      defaultValue: \\"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue:\\n        \\"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 description \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":52},"endLoc":{"col":1,"line":58},"startBody":{"col":23,"line":52},"endBody":{"col":1,"line":58}}};
    
import React from "react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    image: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue:
        "\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 description \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <MainReviewCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}},d=`import React from "react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    image: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue:
        "\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 description \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <MainReviewCard {...props} />
    </div>
  );
};
`,u={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:58},startBody:{col:23,line:52},endBody:{col:1,line:58}}},r=b.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { MainReviewCard } from \\"../MainReviewCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/MainReviewCard\\",\\n  component: MainReviewCard,\\n  argTypes: {\\n    image: {\\n      defaultValue: \\"https://picsum.photos/600/400\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    title: {\\n      defaultValue: \\"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    job: {\\n      defaultValue: \\"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue:\\n        \\"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\\",\\n      description: \\"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 description \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":52},"endLoc":{"col":1,"line":58},"startBody":{"col":23,"line":52},"endBody":{"col":1,"line":58}}};
    
import React from "react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    image: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue:
        "\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,",
      description: "MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 description \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <MainReviewCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}}}},title:"@travelmakers-design/core/Component/Card/MainReviewCard",component:s,argTypes:{image:{defaultValue:"https://picsum.photos/600/400",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},job:{defaultValue:"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 description \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},p=function(c){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(s,Object.assign({},c))})};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <MainReviewCard {...props} />
    </div>
  );
}`}},p.parameters)},"./packages/travelmakers-design-core/src/components/Modal/Modal.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return u});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),J=e("./node_modules/react/index.js"),A=e("./node_modules/react-dom/index.js"),H=e.n(A),w=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),L=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),U=function(p,n){return{small:{fontFamily:"Pretendard",fontWeight:n==="text"?"bold":"normal",lineHeight:p.lineHeights.caption+"px",fontSize:p.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:n==="text"?"bold":"normal",lineHeight:p.lineHeights.b3+"px",fontSize:p.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:n==="text"?"bold":"normal",lineHeight:p.lineHeights.b2+"px",fontSize:p.fontSizes.b2}}},G=function(p,n){return{small:{padding:n==="text"?"0px 4px":"0px 8px"},medium:{padding:n==="text"?"0px 5px":"0px 8px"},large:{padding:n==="text"?"1px 7px":"0px 8px"}}},V=Object(w.a)(function(r,p){var n,c,P,x,t,v,k,O,j,a,y,m,g,h,T,l,_,i=p.size,o=p.type;return{container:Object.assign({},Object(L.b)(r),{display:"flex",position:"fixed",flexDirection:"column",justifyContent:"flex-end",backgroundColor:"rgba(0, 0, 0, 0.7)",width:"100%",height:"100%",zIndex:"10000",top:"0",left:"0"}),absoluteContainer:(c={width:"100%",height:"100%",position:"absolute",display:"flex",justifyContent:"center",alignItems:"flex-end",top:"0",backgroundColor:r.colors.white},c["&.popup"]={alignItems:"center",backgroundColor:"transparent"},c["&.modalPopup"]=(n={position:"relative",maxWidth:"1200px",margin:"0 auto",maxHeight:"90vh",height:"100%",borderRadius:"30px 30px 0 0"},n[""+r.media.tablet]={maxHeight:"100%",height:"100%",borderRadius:"0"},n),c),closeContainer:{position:"absolute",width:"100%",height:"100%",zIndex:"100"},modalContainer:(P={display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",width:"100%",maxHeight:"100%",borderRadius:"6px",boxSizing:"border-box",zIndex:"200"},P["&.popup"]={justifyContent:"center"},P["&.max-h"]={height:"100%"},P),modalContentsContainer:(t={display:"flex",position:"relative",justifyContent:"center",width:"100%",height:"100%",padding:"40px",overflowY:"hidden"},t[""+r.media.tablet]={padding:"0"},t[""+r.media.desktop]=(x={},x["-ms-overflow-style"]="none",x["&::-webkit-scrollbar"]={display:"none"},x),t["&.optionsBox, &.modalPopup, &.toastPopup"]={padding:0},t["&.Agreement"]={height:"calc(100% - 77px)"},t),modalContents:{display:"block",position:"relative",width:"100%",maxWidth:"768px"},modalHeader:(O={display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"0"},O[""+r.media.desktop]={padding:"24px 16px 12px 24px"},O["&.optionsBox"]=(v={height:"40px",padding:"0 16px",background:r.colors.navy1},v[""+r.media.tablet]={height:"64px"},v),O["&.modalPopup"]=(k={color:r.colors.navy1,height:"auto",padding:"40px 12px"},k["@media screen and (min-width: 800px)"]={padding:"40px 0"},k["@media screen and (max-height: 640px)"]={paddingTop:"24px",paddingBottom:"24px"},k.justifyContent="space-between",k[""+r.media.tablet]={justifyContent:"start",padding:"0 16px",height:"44px",backgroundColor:r.colors.navy1,color:r.colors.white},k),O["&.toastPopup"]={justifyContent:"space-between"},O),modalTitle:(y={fontSize:"18px",fontWeight:"700",lineHeight:"1.39",color:r.colors.navy1,textAlign:"left",whiteSpace:"nowrap"},y["&.optionsBox"]=(j={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:"400",fontSize:"18px",lineHeight:"24px",color:"#FFFFFF"},j[""+r.media.tablet]={fontSize:"14px",lineHeight:"20px"},j),y["&.modalPopup"]=(a={color:r.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px"},a[""+r.media.tablet]={fontWeight:400,fontSize:"12px",lineHeight:"20px",color:r.colors.white},a),y[".toastPopup"]={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:"12px",lineHeight:"20px",color:r.colors.white},y),modalBackIcon:(m={width:"16px",height:"16px",cursor:"pointer",marginRight:"8px",display:"none"},m[""+r.media.tablet]={display:"inline-block"},m),modalCloseIcon:(g={width:"24px",height:"24px",cursor:"pointer",marginRight:"8px",display:"inline-block"},g[""+r.media.tablet]={display:"none"},g),modalContentText:(l={display:"block",width:"100%",maxHeight:"100%",lineHeight:1.5,whiteSpace:"pre-wrap",color:r.colors.navy1,overflowY:"auto",paddingBottom:"16px"},l[""+r.media.desktop]={fontSize:"12px",padding:"12px 20px"},l["&.Agreement"]=(T={height:"calc(100% - 44px)"},T[""+r.media.tablet]=(h={height:"calc(100% - 104px)"},h["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},h),T),l),modalAbsolute:(_={display:"block",position:"fixed",bottom:"0",width:"100%",maxWidth:"768px",zIndex:"100",backgroundColor:"white",padding:"16px 0"},_[""+r.media.desktop]={padding:"16px"},_)}}),Z=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),B=e("./node_modules/react/jsx-runtime.js"),M=function(p){return Object(B.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p,{children:Object(B.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(B.jsx)("path",{stroke:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(B.jsx)("path",{fill:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};M.displayName="IcBackArrow",M.displayName="@travelmakers-design/core/IcBackArrow";var R=function(p){return Object(B.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},p,{children:Object(B.jsx)("g",{stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",children:Object(B.jsx)("path",{d:"M4.875 18.712 19.087 4.5M4.875 4.5l14.212 14.212"})})}))};R.displayName="IcClose",R.displayName="@travelmakers-design/core/IcClose";var D=["component","open","ModalContainerClassName","onClose","containerStyle","wrapperStyle","modalPopup","centerPopup","children","className","overrideStyles","title","handleAgree","agreeText","backIcon","__staticSelector"];function s(r,p){if(r==null)return{};var n=d(r,p),c,P;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(r);for(P=0;P<x.length;P++)c=x[P],!(p.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,c)||(n[c]=r[c]))}return n}function d(r,p){if(r==null)return{};var n={},c=Object.keys(r),P,x;for(x=0;x<c.length;x++)P=c[x],!(p.indexOf(P)>=0)&&(n[P]=r[P]);return n}var u=Object(J.forwardRef)(function(r,p){var n=r.component,c=r.open,P=r.ModalContainerClassName,x=r.onClose,t=r.containerStyle,v=t===void 0?{}:t,k=r.wrapperStyle,O=k===void 0?{}:k,j=r.modalPopup,a=j===void 0?!1:j,y=r.centerPopup,m=y===void 0?!1:y,g=r.children,h=r.className,T=r.overrideStyles,l=r.title,_=l===void 0?"":l,i=r.handleAgree,o=r.agreeText,f=o===void 0?"\uB3D9\uC758\uD558\uAE30":o,S=r.backIcon,C=S===void 0?!0:S,I=r.__staticSelector,E=I===void 0?"span":I,ee=s(r,D),se=n||"span",N=V({},{overrideStyles:T,name:"span"}),K=N.classes,$=N.cx,F=document.createElement("div");return document.body.appendChild(F),Object(X.b)(c),Object(B.jsx)(B.Fragment,{children:c?H.a.createPortal(Object(B.jsx)(se,Object.assign({ref:p,className:$(K.container,h)},ee,{children:Object(B.jsx)("div",{className:$(K.absoluteContainer,(a?"modalPopup":"")+(m?" popup":"")),style:v,children:Object(B.jsx)("div",{onClick:x,className:$(K.closeContainer,(a?"modalPopup":"")+(m?" popup":"")),children:Object(B.jsx)("div",{className:$(K.modalContainer,P||(a?" modalPopup":"")+(m?" popup":"")),style:O,children:Object(B.jsxs)("div",{className:$(K.modalContentsContainer),children:[Object(B.jsxs)("div",{className:$(K.modalContents,"modalPopup Agreement"),children:[Object(B.jsxs)("div",{className:$(K.modalHeader,"modalPopup Agreement"),children:[Object(B.jsx)(M,{onClick:x,className:$(K.modalBackIcon,"modalPopup Agreement")}),Object(B.jsx)("span",{className:$(K.modalTitle,"modalPopup Agreement"),children:_}),Object(B.jsx)(R,{onClick:x,className:$(K.modalCloseIcon,"modalPopup Agreement")})]}),Object(B.jsx)("div",{className:$(K.modalContentText),children:Object(B.jsx)("div",{dangerouslySetInnerHTML:{__html:g}})})]}),Object(B.jsx)("div",{className:$(K.modalAbsolute),children:Object(B.jsx)(Z.a,{fullWidth:!0,onClick:i,children:f})})]})})})})})),document.body):null})});u.displayName="@travelmakers-design/core/Modal"},"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return _});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.array.slice.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(u),p=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(p),c=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),P=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),x=e("./node_modules/react/index.js"),t=e.n(x),v=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),k=e("./node_modules/react/jsx-runtime.js"),O=e.n(k);function j(i,o){return h(i)||g(i,o)||y(i,o)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(i,o){if(!!i){if(typeof i=="string")return m(i,o);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return m(i,o)}}function m(i,o){(o==null||o>i.length)&&(o=i.length);for(var f=0,S=new Array(o);f<o;f++)S[f]=i[f];return S}function g(i,o){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var S=[],C=!0,I=!1,E,ee;try{for(f=f.call(i);!(C=(E=f.next()).done)&&(S.push(E.value),!(o&&S.length===o));C=!0);}catch(se){I=!0,ee=se}finally{try{!C&&f.return!=null&&f.return()}finally{if(I)throw ee}}return S}}function h(i){if(Array.isArray(i))return i}var T=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}},T=`import {
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
`,l={Default:{startLoc:{col:23,line:97},endLoc:{col:1,line:114},startBody:{col:23,line:97},endBody:{col:1,line:114}}};b.default={title:"@travelmakers-design/core/Component/Modal",component:P.a,argTypes:{open:{defaultValue:!1,description:"Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},modalPopup:{defaultValue:!1,description:"\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",table:{type:{summary:"boolean"}},control:{type:"boolean"}},centerPopup:{defaultValue:!1,description:"\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",table:{type:{summary:"boolean"}},control:{type:"boolean"}},ModalContainerClassName:{defaultValue:"",description:"Container\uC758 ClassName \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},agreeText:{defaultValue:"\uB3D9\uC758\uD558\uAE30",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}}},docs:{page:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(c.g,{}),Object(k.jsx)(c.f,{}),Object(k.jsx)(c.b,{}),Object(k.jsx)(c.d,{}),Object(k.jsx)(c.a,{story:c.c}),Object(k.jsx)(c.e,{})]})}}}};var _=function(o){var f=Object(x.useState)(!1),S=j(f,2),C=S[0],I=S[1];return Object(k.jsxs)("div",{style:{padding:24,display:"flex",height:500},children:[Object(k.jsx)(v.a,{onClick:function(){I(function(ee){return!ee})},style:{zIndex:10001},children:"\uBAA8\uB2EC"}),Object(k.jsx)(P.a,Object.assign({},o,{open:C,title:"title",children:"content"}))]})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},_.parameters)},"./packages/travelmakers-design-core/src/components/Price/Price.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./node_modules/react/jsx-runtime.js"),w=function(R){return Object(H.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R,{children:[Object(H.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(H.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(H.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(H.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};w.displayName="CouponPercent",w.displayName="@travelmakers-design/core/CouponPercent";var L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=Object(L.a)(function(M,R){var D=R.type,s=D===void 0?"primary":D;return{root:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},percentText:{fontFamily:"Pretendard",fontSize:M.fontSizes.h6,lineHeight:M.lineHeights.h6+"px",fontWeight:"700",color:M.colors.red2,width:"39px"},nightText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"700",color:M.colors.navy1,textAlign:"right",width:"28px"},priceText:{fontFamily:"Pretendard",fontSize:M.fontSizes.h4,lineHeight:M.lineHeights.h4+"px",fontWeight:"700",color:M.colors.navy1,marginLeft:"2px"},priceBeforeText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b2,lineHeight:M.lineHeights.b2+"px",fontWeight:"700",color:M.colors.navy1},priceStartText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",color:M.colors.gray2,marginLeft:"4px"},labelSecondary:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",color:M.colors.navy1,marginRight:"4px"},nightSecondaryText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"700",color:M.colors.navy1,textAlign:"right",marginRight:"4px"},priceSecondaryText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",textDecorationLine:"line-through",color:M.colors.gray2},priceBeforeSecondaryText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",textDecorationLine:"line-through",color:M.colors.gray2},couponWrap:{display:"flex",alignItems:"center",width:"74px",background:M.colors.green5,borderRadius:"4px",marginLeft:"4px"},couponWord:{display:"block",width:"fit-content",fontFamily:"Pretendard",fontStyle:"normal",fontWeight:"700",fontSize:"10px",lineHeight:"16px",color:M.colors.green3}}}),G=["type","label","percentText","nightText","priceText","priceStartText","percentBool","nightBool","priceBool","priceStartBool","couponBool","className","co","overrideStyles"];function V(M,R){if(M==null)return{};var D=Z(M,R),s,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(M);for(d=0;d<u.length;d++)s=u[d],!(R.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,s)||(D[s]=M[s]))}return D}function Z(M,R){if(M==null)return{};var D={},s=Object.keys(M),d,u;for(u=0;u<s.length;u++)d=s[u],!(R.indexOf(d)>=0)&&(D[d]=M[d]);return D}var B=Object(J.forwardRef)(function(M,R){var D=M.type,s=D===void 0?"primary":D,d=M.label,u=d===void 0?"":d,r=M.percentText,p=r===void 0?"":r,n=M.nightText,c=n===void 0?"":n,P=M.priceText,x=M.priceStartText,t=x===void 0?"":x,v=M.percentBool,k=v===void 0?!0:v,O=M.nightBool,j=O===void 0?!0:O,a=M.priceBool,y=a===void 0?!0:a,m=M.priceStartBool,g=m===void 0?!0:m,h=M.couponBool,T=h===void 0?!0:h,l=M.className,_=M.co,i=M.overrideStyles,o=V(M,G),f=Object(X.c)(),S=U({type:s},{overrideStyles:i,name:"Price"}),C=S.classes,I=S.cx,E=function(){return Object(H.jsxs)(A.a,Object.assign({ref:R,className:I(C.root,l),co:_},o,{children:[k&&Object(H.jsxs)("span",{className:I(C.percentText),children:[p,"%"]}),j&&Object(H.jsx)("span",{className:I(C.nightText),children:c}),y&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("span",{className:I(C.priceText),children:P.toLocaleString("ko")}),Object(H.jsx)("span",{className:I(C.priceBeforeText),children:"\uC6D0~"})]}),g&&Object(H.jsxs)("span",{className:I(C.priceStartText),children:["| ",t]})]}))},ee=function(){return Object(H.jsxs)(A.a,Object.assign({ref:R,className:I(C.root,l),co:_},o,{children:[u&&Object(H.jsxs)("span",{className:I(C.labelSecondary),children:[u,"%"]}),j&&Object(H.jsx)("span",{className:I(C.nightSecondaryText),children:c}),y&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("span",{className:I(C.priceSecondaryText),children:P.toLocaleString("ko")}),Object(H.jsx)("span",{className:I(C.priceBeforeSecondaryText),children:"\uC6D0"})]}),T&&Object(H.jsxs)("div",{className:I(C.couponWrap),children:[Object(H.jsx)(w,{style:{margin:"0 4px"}}),Object(H.jsx)("span",{className:I(C.couponWord),children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]})]}))};return s==="primary"?Object(H.jsx)(E,{}):Object(H.jsx)(ee,{})});B.displayName="@travelmakers-design/core/Price"},"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Price {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:126},endLoc:{col:1,line:132},startBody:{col:23,line:126},endBody:{col:1,line:132}}},H=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Price {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:126},endLoc:{col:1,line:132},startBody:{col:23,line:126},endBody:{col:1,line:132}}}}},title:"@travelmakers-design/core/Component/Price",component:X.a,argTypes:{type:{defaultValue:"primary",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],control:{type:"inline-radio"}},label:{defaultValue:"",description:"(secondary type \uD55C\uC815)Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"70",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},nightText:{defaultValue:"1\uBC15",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:"10000",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},priceStartText:{defaultValue:"1\uBC15 100,000\uC6D0\uBD80\uD130",description:"Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uC728 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},nightBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 1\uBC15 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},priceBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},priceStartBool:{defaultValue:!0,description:" Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uACA9 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},couponBool:{defaultValue:!0,description:" (secondary type \uD55C\uC815) Price \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uD45C\uC2DC\uC5EC\uBD80\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var L=function(G){return Object(J.jsx)("div",{style:{padding:24},children:Object(J.jsx)(X.a,Object.assign({},G))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Price {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/Progress/Progress.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return M});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx"),H=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),L=function(D){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:D.fontSizes.h4,lineHeight:D.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:D.fontSizes.h1,lineHeight:D.lineHeights.h1+"px"}}},U=Object(w.a)(function(R,D){var s=D.color,d=s===void 0?"navy":s,u=D.indicator,r=u===void 0?!1:u,p=D.size,n=p===void 0?"large":p;return{root:{display:"flex",alignItems:"center"},indicator:{marginRight:"16px"},barContainer:{display:"block",position:"relative",width:"30vw",maxWidth:n==="small"?"171px":"456px",height:"2px",borderRadius:"3px",backgroundColor:d==="white"?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.1)"},barActive:{display:"block",position:"absolute",width:"0%",height:"2px",borderRadius:"3px",backgroundColor:d==="white"?R.colors.white:R.colors.navy1}}}),G=e("./node_modules/react/jsx-runtime.js"),V=["color","indicator","size","totalPage","currentPage","activeBarTransition","title","className","co","overrideStyles"];function Z(R,D){if(R==null)return{};var s=B(R,D),d,u;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(R);for(u=0;u<r.length;u++)d=r[u],!(D.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,d)||(s[d]=R[d]))}return s}function B(R,D){if(R==null)return{};var s={},d=Object.keys(R),u,r;for(r=0;r<d.length;r++)u=d[r],!(D.indexOf(u)>=0)&&(s[u]=R[u]);return s}var M=Object(J.forwardRef)(function(R,D){var s=R.color,d=s===void 0?"navy":s,u=R.indicator,r=u===void 0?!1:u,p=R.size,n=p===void 0?"large":p,c=R.totalPage,P=c===void 0?1:c,x=R.currentPage,t=x===void 0?1:x,v=R.activeBarTransition,k=v===void 0?!1:v,O=R.title,j=R.className,a=R.co,y=R.overrideStyles,m=Z(R,V),g=Object(X.c)(),h=U({color:d,indicator:r,size:n},{overrideStyles:y,name:"Progress"}),T=h.classes,l=h.cx;return Object(G.jsxs)(H.a,Object.assign({ref:D,className:l(T.root,j),co:a},m,{children:[r&&Object(G.jsx)(A.a,{currentPage:t,totalPage:P,color:d,size:n,className:l(T.indicator)}),Object(G.jsx)("div",{className:l(T.barContainer),children:Object(G.jsx)("div",{className:l(T.barActive),style:{width:t/P*100+"%",transition:k?"width 3s linear":"none"}})})]}))});M.displayName="@travelmakers-design/core/Progress"},"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-core/src/components/Progress/Progress.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},H=`import React from "react";
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
`,w={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}}}},title:"@travelmakers-design/core/Component/Progress",component:X.a,argTypes:{color:{defaultValue:"navy",description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},indicator:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 indicator \uD45C\uC2DC \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},totalPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},currentPage:{defaultValue:1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},activeBarTransition:{defaultValue:!1,description:"Progress \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var L=function(G){return Object(J.jsx)("div",{style:{padding:24},children:Object(J.jsx)(X.a,Object.assign({},G))})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Progress {...props} />
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/core-js/modules/es.array.from.js"),Z=e("./node_modules/core-js/modules/es.symbol.js"),B=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e("./node_modules/core-js/modules/es.array.fill.js"),R=e("./node_modules/core-js/modules/es.string.small.js"),D=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),s=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),d=e("./node_modules/react/jsx-runtime.js"),u=function(f){return Object(d.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsxs)("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd",children:[Object(d.jsx)("circle",{stroke:"#30373F","stroke-linecap":"round","stroke-linejoin":"round",cx:"4.875",cy:"4.875",r:"4.875"}),Object(d.jsx)("path",{fill:"#30373F",d:"m7.672 8.379.707-.707 4.95 4.95-.708.706z"})]})})};u.displayName="SearchIcon",u.displayName="@travelmakers-design/core/SearchIcon";var r=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),p=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),n=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),c=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),P={xsmall:12,small:14,medium:14,large:14,xlarge:16},x=Object(n.a)(function(o,f){var S=f.multiline,C=f.roundness,I=f.invalid,E=f.width,ee=f.descriptionType,se=o.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(c.b)(o),{height:S?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:S?o.lineHeight:o.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:o.fontSizes.b2,width:E?E+"px":"100%",color:o.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:C?o.radius.round:2,border:"1px solid "+o.colors.gray5,backgroundColor:o.colors.white,"&:focus, &:focus-within":{outline:"none",color:o.colors.gray1,border:"1px solid "+o.colors.gray1},"&:disabled":{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:o.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+se,"&::placeholder":{opacity:1}},disabled:{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},fill:{backgroundColor:o.colors.gray6,color:o.colors.navy3,border:"0px solid "+o.colors.gray5,"&:disabled":{backgroundColor:o.colors.gray6,border:"1px solid "+o.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:o.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),t=["component","width","label","line","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","value","onChange"];function v(o,f){return y(o)||a(o,f)||O(o,f)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(o,f){if(!!o){if(typeof o=="string")return j(o,f);var S=Object.prototype.toString.call(o).slice(8,-1);if(S==="Object"&&o.constructor&&(S=o.constructor.name),S==="Map"||S==="Set")return Array.from(o);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return j(o,f)}}function j(o,f){(f==null||f>o.length)&&(f=o.length);for(var S=0,C=new Array(f);S<f;S++)C[S]=o[S];return C}function a(o,f){var S=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(S!=null){var C=[],I=!0,E=!1,ee,se;try{for(S=S.call(o);!(I=(ee=S.next()).done)&&(C.push(ee.value),!(f&&C.length===f));I=!0);}catch(N){E=!0,se=N}finally{try{!I&&S.return!=null&&S.return()}finally{if(E)throw se}}return C}}function y(o){if(Array.isArray(o))return o}function m(o,f){if(o==null)return{};var S=g(o,f),C,I;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(o);for(I=0;I<E.length;I++)C=E[I],!(f.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,C)||(S[C]=o[C]))}return S}function g(o,f){if(o==null)return{};var S={},C=Object.keys(o),I,E;for(E=0;E<C.length;E++)I=C[E],!(f.indexOf(I)>=0)&&(S[I]=o[I]);return S}var h=Object(Y.forwardRef)(function(o,f){var S,C,I=o.component,E=o.width,ee=o.label,se=o.line,N=se===void 0?!0:se,K=o.description,$=o.descriptionType,F=$===void 0?"description":$,ne=o.icon,ve=ne===void 0?Object(d.jsx)(u,{}):ne,be=o.rightSectionWidth,z=be===void 0?48:be,oe=o.rightSection,ie=oe===void 0?Object(d.jsx)(s.a,{}):oe,ue=o.rightSectionProps,ye=ue===void 0?{}:ue,pe=o.wrapperProps,ge=o.invalid,le=ge===void 0?!1:ge,te=o.required,ce=te===void 0?!1:te,de=o.disabled,xe=de===void 0?!1:de,Oe=o.multiline,Te=Oe===void 0?!1:Oe,Re=o.roundness,Me=Re===void 0?!0:Re,Pe=o.className,Le=o.style,Ne=o.co,me=o.overrideStyles,ae=o.value,_e=o.onChange,he=m(o,t),fe=Object(D.c)(),je=Object(Y.useState)(ae),De=v(je,2),Ae=De[0],ke=De[1],Ce=x({roundness:Me,multiline:Te,invalid:le,width:E,descriptionType:F},{overrideStyles:me,name:"Input"}),Se=Ce.classes,Be=Ce.cx,Ue=I||"input",ze=function(Fe){!xe&&We({target:{value:""}})},We=function(Fe){var Ke;ke(Fe==null||(Ke=Fe.target)===null||Ke===void 0?void 0:Ke.value),_e&&_e(Fe)};return Object(d.jsxs)(p.a,{style:{width:E?E+"px":"100%"},children:[ee&&Object(d.jsx)(r.a,{level:"b2",family:"Pretendard",color:fe.colors.gray1,style:{marginBottom:4},children:ee}),Object(d.jsxs)(p.a,Object.assign({className:Be(Se.wrapper,Pe),co:Ne,style:Le},pe,{children:[ve&&Object(d.jsx)("div",{className:Be(Se.icon,(S={},S[Se.disabled]=xe,S)),children:ve}),Object(d.jsx)(Ue,Object.assign({},he,{ref:f,value:Ae,onChange:We,className:Be(Se.input,(C={},C[Se.fill]=!N,C[Se.withIcon]=ve,C[Se.invalid]=le,C[Se.disabled]=xe,C)),required:ce,disabled:xe,style:{paddingRight:ie?z:fe.spacing.small}})),ie&&Object(d.jsx)("div",Object.assign({},ye,{style:Object.assign({},ye.style,{paddingRight:32}),className:Be(Se.rightSection,ye.className),onClick:ze,children:ie}))]})),K&&F==="description"?Object(d.jsx)(r.a,{level:"b3",family:"Pretendard",color:le?fe.colors.red2:fe.colors.navy3,style:{marginTop:4},children:K}):le&&Object(d.jsx)(r.a,{level:"b3",family:"Pretendard",color:F==="error"?fe.colors.red2:F==="success"?fe.colors.green3:fe.colors.navy3,style:{marginTop:4},children:K})]})});h.displayName="@travelmakers-design/core/SearchInput";var T=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}},T=`import React from "react";
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
`,l={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:59},startBody:{col:23,line:53},endBody:{col:1,line:59}}},_=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}}}},title:"@travelmakers-design/core/Component/SearchInput",component:h,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},line:{defaultValue:!0,description:"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},i=function(f){return Object(d.jsx)("div",{style:{padding:24},children:Object(d.jsx)(h,Object.assign({},f))})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return D});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),A=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=e("./packages/travelmakers-design-core/src/constants/index.ts"),w=Object(A.a)(function(s,d){var u=d.size,r=d.color,p=r===void 0?s.colorScheme==="light"?s.colors.black:s.colors.white:r in s.palettes?(s.colorScheme==="light",s.palettes[r][0]):r in s.colors?s.colors[r]:r;return{root:{position:"relative",display:"inline-block",width:u in H.a?H.a[u]:u,height:u in H.a?H.a[u]:u,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:p},circle:{fill:p}}}}),L=e("./node_modules/react/jsx-runtime.js"),U=["size","color","className","co","overrideStyles"];function G(s,d){if(s==null)return{};var u=V(s,d),r,p;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);for(p=0;p<n.length;p++)r=n[p],!(d.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,r)||(u[r]=s[r]))}return u}function V(s,d){if(s==null)return{};var u={},r=Object.keys(s),p,n;for(n=0;n<r.length;n++)p=r[n],!(d.indexOf(p)>=0)&&(u[p]=s[p]);return u}var Z=Object(Y.forwardRef)(function(s,d){var u=s.size,r=u===void 0?"medium":u,p=s.color,n=s.className,c=s.co,P=s.overrideStyles,x=G(s,U),t=w({size:r,color:p},{overrideStyles:P,name:"Spinner"}),v=t.classes,k=t.cx,O=Object(L.jsx)("i",{className:v.inner,children:Object(L.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(L.jsxs)("g",{transform:"translate(1 1)",children:[Object(L.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(L.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(L.jsx)(J.a,Object.assign({ref:d,className:k(v.root,n),co:c},x,{children:O}))});Z.displayName="@travelmakers-design/core/Spinner";var B=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,M={Default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}},B=`import React from "react";
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
`,M={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},R=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:Z,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},D=function(d){return Object(L.jsx)(Z,Object.assign({},d))};D.displayName="Default",D.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},D.parameters)},"./packages/travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return s});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),H=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function w(d){if(d==null)throw new TypeError("Cannot destructure undefined")}var L=Object(H.a)(function(d,u){return w(u),{root:{position:"sticky"}}}),U=e("./node_modules/react/jsx-runtime.js"),G=["className","co","overrideStyles"];function V(d,u){if(d==null)return{};var r=Z(d,u),p,n;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(d);for(n=0;n<c.length;n++)p=c[n],!(u.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,p)||(r[p]=d[p]))}return r}function Z(d,u){if(d==null)return{};var r={},p=Object.keys(d),n,c;for(c=0;c<p.length;c++)n=p[c],!(u.indexOf(n)>=0)&&(r[n]=d[n]);return r}var B=Object(Y.forwardRef)(function(d,u){var r=d.className,p=d.co,n=d.overrideStyles,c=V(d,G),P=Object(J.c)(),x=L({},{overrideStyles:n,name:"Sticky"}),t=x.classes,v=x.cx;return Object(U.jsx)(A.a,Object.assign({ref:u,className:v(t.root,r),co:p},c,{children:c.children}))});B.displayName="@travelmakers-design/core/Sticky";var M=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Sticky {...props} style={{ background: \\"black\\" }}>\\n        sticky\\n      </Sticky>\\n      <div>sticky</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,R={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:27},startBody:{col:23,line:18},endBody:{col:1,line:27}}},M=`import React from "react";
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
`,R={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:19},startBody:{col:23,line:10},endBody:{col:1,line:19}}},D=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Sticky {...props} style={{ background: \\"black\\" }}>\\n        sticky\\n      </Sticky>\\n      <div>sticky</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:27},startBody:{col:23,line:18},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/Component/Sticky",component:B,argTypes:{}},s=function(u){return Object(U.jsxs)("div",{style:{padding:24},children:[Object(U.jsx)(B,Object.assign({},u,{style:{background:"black"},children:"sticky"})),Object(U.jsx)("div",{children:"sticky"})]})};s.displayName="Default",s.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Sticky {...props} style={{ background: "black" }}>
        sticky
      </Sticky>
      <div>sticky</div>
    </div>
  );
}`}},s.parameters)},"./packages/travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return _});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/core-js/modules/es.array.map.js"),R=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),D=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),s=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),d=function(o){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:o.lineHeights.b1+"px",fontSize:o.fontSizes.b1,paddingRight:24,paddingLeft:24},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:o.lineHeights.h4+"px",fontSize:o.fontSizes.h4,paddingRight:49,paddingLeft:49}}},u=Object(s.a)(function(i,o){var f=o.size,S=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center",position:"relative"},tab:Object.assign({fontWeight:"400",color:i.colors.navy3,cursor:"pointer",whiteSpace:"nowrap",position:"relative"},d(i)[S]),selectedTab:Object.assign({fontWeight:"700",color:i.colors.white,cursor:"pointer",whiteSpace:"nowrap"},d(i)[S],{position:"relative"}),divider:{backgroundColor:i.colors.navy3,width:"1px",height:"20px"},selectedTabBottom:{backgroundColor:i.colors.green3,height:4,width:"100%",position:"absolute",bottom:-6,left:0}}}),r=function(o){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b2+"px",fontSize:o.fontSizes.b2,marginRight:12},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b2+"px",fontSize:o.fontSizes.b2,marginRight:12}}},p=Object(s.a)(function(i,o){var f=o.size,S=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center",position:"relative"},tab:Object.assign({fontWeight:"400",color:i.colors.navy3,cursor:"pointer",whiteSpace:"nowrap",position:"relative"},r(i)[S]),selectedTab:Object.assign({fontWeight:"700",color:i.colors.green3,cursor:"pointer",whiteSpace:"nowrap"},r(i)[S],{position:"relative"}),divider:{backgroundColor:i.colors.navy3,width:"1px",height:"20px"},selectedTabBottom:{backgroundColor:i.colors.green3,height:4,width:"100%",position:"absolute",bottom:-6,left:0}}}),n=e("./node_modules/react/jsx-runtime.js"),c=["type","size","array","className","co","overrideStyles"];function P(i,o){return O(i)||k(i,o)||t(i,o)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(i,o){if(!!i){if(typeof i=="string")return v(i,o);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return v(i,o)}}function v(i,o){(o==null||o>i.length)&&(o=i.length);for(var f=0,S=new Array(o);f<o;f++)S[f]=i[f];return S}function k(i,o){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var S=[],C=!0,I=!1,E,ee;try{for(f=f.call(i);!(C=(E=f.next()).done)&&(S.push(E.value),!(o&&S.length===o));C=!0);}catch(se){I=!0,ee=se}finally{try{!C&&f.return!=null&&f.return()}finally{if(I)throw ee}}return S}}function O(i){if(Array.isArray(i))return i}function j(i,o){if(i==null)return{};var f=a(i,o),S,C;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(i);for(C=0;C<I.length;C++)S=I[C],!(o.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,S)||(f[S]=i[S]))}return f}function a(i,o){if(i==null)return{};var f={},S=Object.keys(i),C,I;for(I=0;I<S.length;I++)C=S[I],!(o.indexOf(C)>=0)&&(f[C]=i[C]);return f}var y="";function m(){return y}var g=Object(Y.forwardRef)(function(i,o){var f=i.type,S=f===void 0?"primary":f,C=i.size,I=C===void 0?"small":C,E=i.array,ee=E===void 0?[]:E,se=i.className,N=i.co,K=i.overrideStyles,$=j(i,c),F=Object(R.c)(),ne=S==="primary"?u({size:I},{overrideStyles:K,name:"Tab"}):p({size:I},{overrideStyles:K,name:"Tab"}),ve=ne.classes,be=ne.cx,z=Object(Y.useState)(""),oe=P(z,2),ie=oe[0],ue=oe[1],ye=function(ge){y=ge,ue(ge)};return Object(n.jsx)(D.a,Object.assign({ref:o,className:be(ve.root,se),co:N},$,{children:ee.map(function(pe,ge){var le=!1;return y!==""?le=y===pe:ge===0&&(le=!0,ye(pe)),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("span",{className:be(le?ve.selectedTab:ve.tab),onClick:function(){return ye(pe)},children:[pe,S==="secondary"&&le&&Object(n.jsx)("span",{className:be(ve.selectedTabBottom)})]}),S==="primary"&&ge!==ee.length-1&&Object(n.jsx)("span",{className:be(ve.divider)})]})})}))});g.displayName="@travelmakers-design/core/Tab";var h=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},h=`import React from "react";
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
`,T={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}}},l=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design/core/Component/Tab",component:g,argTypes:{size:{defaultValue:"small",description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"primary",description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},array:{defaultValue:["\uC11C\uC6B8","\uC81C\uC8FC","\uC218\uB3C4\uAD8C","\uC804\uB77C"],table:{type:{summary:"React.ReactNode"}},description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"array"}}}},_=function(o){return Object(n.jsx)("div",{style:{padding:24},children:Object(n.jsx)(g,Object.assign({},o))})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Tab {...props} />
    </div>
  );
}`}},_.parameters)},"./packages/travelmakers-design-core/src/components/Tag/Tag.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return M});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),H=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),w=function(D){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:D.lineHeights.caption+"px",fontSize:D.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:D.lineHeights.b3+"px",fontSize:D.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:D.lineHeights.b2+"px",fontSize:D.fontSizes.b2}}},L=function(D,s){return{small:{padding:s?"2px 8px":"0px 8px"},medium:{padding:s?"2px 12px":"0px 12px"},large:{padding:s?"3px 12px":"0px 16px"}}},U=Object(A.a)(function(R,D){var s,d=D.color,u=D.roundness,r=D.size,p=D.fill,n=D.disabled,c=n===void 0?!1:n;return{container:Object.assign({},Object(H.b)(R),w(R)[r],L(R,p)[r],(s={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:c?R.colors.gray4:d==="gray"?R.colors.navy1:R.colors.white,marginRight:"6px",gap:"8px",borderRadius:u&&R.radius.round,backgroundColor:d==="green"?R.colors.green3:d==="blue"?R.colors.point_sky1:d==="purple"?R.colors.point_purple1:R.colors.gray6},s["&:last-child"]={marginRight:0},s)),line:{color:d==="green"?R.colors.green3:d==="blue"?R.colors.point_sky1:d==="purple"?R.colors.point_purple1:R.colors.gray3,background:"inherit",border:"1px solid"},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"}}}),G=e("./node_modules/react/jsx-runtime.js"),V=["component","size","color","roundness","fill","disabled","children","className","overrideStyles","__staticSelector"];function Z(R,D){if(R==null)return{};var s=B(R,D),d,u;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(R);for(u=0;u<r.length;u++)d=r[u],!(D.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,d)||(s[d]=R[d]))}return s}function B(R,D){if(R==null)return{};var s={},d=Object.keys(R),u,r;for(r=0;r<d.length;r++)u=d[r],!(D.indexOf(u)>=0)&&(s[u]=R[u]);return s}var M=Object(J.forwardRef)(function(R,D){var s=R.component,d=R.size,u=d===void 0?"small":d,r=R.color,p=r===void 0?"green":r,n=R.roundness,c=n===void 0?!1:n,P=R.fill,x=P===void 0?!0:P,t=R.disabled,v=t===void 0?!1:t,k=R.children,O=R.className,j=R.overrideStyles,a=R.__staticSelector,y=a===void 0?"span":a,m=Z(R,V),g=s||"span",h=U({color:p,roundness:c,fill:x,size:u,disabled:v},{overrideStyles:j,name:"span"}),T=h.classes,l=h.cx;return Object(G.jsx)(g,Object.assign({ref:D,className:l(T.container,T[p],!x&&T.line,O)},m,{children:k}))});M.displayName="@travelmakers-design/core/Tag"},"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return _});var Q=e("./node_modules/core-js/modules/es.array.map.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(X),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.object.assign.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.symbol.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.string.iterator.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(u),p=e("./node_modules/core-js/modules/es.array.slice.js"),n=e.n(p),c=e("./node_modules/core-js/modules/es.function.name.js"),P=e.n(c),x=e("./node_modules/react/index.js"),t=e.n(x),v=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),k=e("./node_modules/react/jsx-runtime.js"),O=e.n(k);function j(i){return g(i)||m(i)||y(i)||a()}function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(i,o){if(!!i){if(typeof i=="string")return h(i,o);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return h(i,o)}}function m(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function g(i){if(Array.isArray(i))return h(i)}function h(i,o){(o==null||o>i.length)&&(o=i.length);for(var f=0,S=new Array(o);f<o;f++)S[f]=i[f];return S}var T=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,l={Default:{startLoc:{col:23,line:71},endLoc:{col:1,line:79},startBody:{col:23,line:71},endBody:{col:1,line:79}}},T=`import React from "react";
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
`,l={Default:{startLoc:{col:23,line:63},endLoc:{col:1,line:71},startBody:{col:23,line:63},endBody:{col:1,line:71}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:71},endLoc:{col:1,line:79},startBody:{col:23,line:71},endBody:{col:1,line:79}}}}},title:"@travelmakers-design/core/Component/Tag",component:v.a,argTypes:{size:{defaultValue:"small",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"green",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["green","blue","purple","gray"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fill:{defaultValue:!0,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var _=function(o){return Object(k.jsx)("div",{style:{padding:24,display:"flex"},children:j(Array(10).keys()).map(function(f,S){return Object(k.jsxs)(v.a,Object.assign({},o,{children:["Tag",S+1]}))})})};_.displayName="Default",_.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
}`}},_.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return p});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.string.small.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),G=function(c){return{xsmall:{fontWeight:"normal",lineHeight:c.lineHeights.h6+"px",fontSize:c.fontSizes.h6},small:{fontWeight:"normal",lineHeight:c.lineHeights.h4+"px",fontSize:c.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:c.lineHeights.h2+"px",fontSize:c.fontSizes.h2},large:{fontWeight:"normal",lineHeight:c.lineHeights.h1+"px",fontSize:c.fontSizes.h1}}},V=function(c){return{display:c?"block":"inline-block",width:c?"100%":"auto"}},Z=Object(L.a)(function(n,c,P){var x,t,v=c.color,k=c.size,O=c.fullWidth,j=c.family,a=c.underline,y=c.leftIcon,m=c.rightIcon,g=P("loading"),h=P("inner"),T=P("spinner"),l=v||n.colors.navy1;return{loading:(x={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},x["."+h]={opacity:0},x["."+T]={display:"flex"},x),solid:(t={color:l==="white"?n.colors.white:n.colors.navy1,"&:not(:disabled):hover":{color:l==="white"?n.colors.white:n.colors.navy1},"&:not(:disabled):active":{color:l==="white"?n.colors.gray6:n.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},t["&:disabled:not(."+g+")"]={color:n.colors.gray5},t),root:Object.assign({},V(O),Object(U.b)(n),G(n)[k],{fontFamily:""+j,borderRadius:n.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:a?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:h,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function R(n,c){if(n==null)return{};var P=D(n,c),x,t;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(n);for(t=0;t<v.length;t++)x=v[t],!(c.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,x)||(P[x]=n[x]))}return P}function D(n,c){if(n==null)return{};var P={},x=Object.keys(n),t,v;for(v=0;v<x.length;v++)t=x[v],!(c.indexOf(t)>=0)&&(P[t]=n[t]);return P}var s=Object(W.forwardRef)(function(n,c){var P=n.children,x=n.component,t=n.family,v=t===void 0?"Pretendard":t,k=n.size,O=k===void 0?"medium":k,j=n.color,a=j===void 0?"navy":j,y=n.fullWidth,m=y===void 0?!1:y,g=n.type,h=g===void 0?"button":g,T=n.disabled,l=T===void 0?!1:T,_=n.underline,i=_===void 0?!1:_,o=n.leftIcon,f=n.rightIcon,S=n.className,C=n.co,I=n.overrideStyles,E=R(n,M),ee=Object(A.c)(),se=Z({color:a,size:O,fullWidth:m,family:v,underline:i,leftIcon:o,rightIcon:f},{overrideStyles:I,name:"Button"}),N=se.classes,K=se.cx;return Object(B.jsx)(H.a,Object.assign({component:x||"button",ref:c,type:h,disabled:l,className:K(N.root,N.solid,S),co:C,onTouchStart:function(){}},E,{children:Object(B.jsxs)("div",{className:N.inner,children:[o&&Object(B.jsxs)("span",{className:K(N.icon,N.leftIcon),children:[o,"\xA0"]}),Object(B.jsx)("span",{className:N.label,children:P}),f&&Object(B.jsxs)("span",{className:K(N.icon,N.rightIcon),children:["\xA0",f]})]})}))});s.displayName="@travelmakers-design/core/TextButton";var d=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}},d=`import {
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
`,u={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},r=b.default={title:"@travelmakers-design/core/Component/TextButton",component:s,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}}},docs:{page:function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Y.g,{}),Object(B.jsx)(Y.f,{}),Object(B.jsx)(Y.b,{}),Object(B.jsx)(Y.d,{}),Object(B.jsx)(Y.a,{story:Y.c}),Object(B.jsx)(Y.e,{})]})}},actions:{handles:["click button"]}}},p=function(c){return Object(B.jsx)(s,Object.assign({},c,{children:"Button"}))};p.displayName="Default",p.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextButton {...props}>Button</TextButton>;
}`}},p.parameters)},"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return C});var Q=e("./node_modules/core-js/modules/es.date.to-string.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/core-js/modules/es.array.slice.js"),Z=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/core-js/modules/es.string.replace.js"),R=e("./node_modules/core-js/modules/es.regexp.exec.js"),D=e("./node_modules/core-js/modules/es.object.to-string.js"),s=e("./node_modules/core-js/modules/es.regexp.to-string.js"),d=e("./node_modules/core-js/modules/es.string.pad-start.js"),u=e("./node_modules/core-js/modules/web.timers.js"),r=e("./node_modules/react/index.js"),p=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),n=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),c=function(E,ee){return{small:{fontFamily:"Pretendard",color:ee==="navy"?E.colors.navy1:E.colors.white,fontSize:E.fontSizes.b3,lineHeight:E.fontSizes.b3},large:{fontFamily:"Pretendard",color:ee==="navy"?E.colors.navy1:E.colors.white,fontSize:E.fontSizes.b2,lineHeight:E.lineHeights.b2}}},P=Object(p.a)(function(I,E){var ee=E.size,se=ee===void 0?"large":ee,N=E.color,K=N===void 0?"navy":N;return{container:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:n.a.maxSize,height:0},labelContainer:{display:"flex",alignItems:"center",position:"relative"},icon:{width:se==="large"?"16px":"12px",height:se==="large"?"16px":"12px"},label:Object.assign({fontWeight:400,marginLeft:"4px"},c(I,K)[se]),timer:Object.assign({fontWeight:700},c(I,K)[se])}}),x=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),t=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),v=e("./node_modules/react/jsx-runtime.js"),k=["size","color","label","endAt","className","co","overrideStyles"];function O(I,E){return g(I)||m(I,E)||a(I,E)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(I,E){if(!!I){if(typeof I=="string")return y(I,E);var ee=Object.prototype.toString.call(I).slice(8,-1);if(ee==="Object"&&I.constructor&&(ee=I.constructor.name),ee==="Map"||ee==="Set")return Array.from(I);if(ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee))return y(I,E)}}function y(I,E){(E==null||E>I.length)&&(E=I.length);for(var ee=0,se=new Array(E);ee<E;ee++)se[ee]=I[ee];return se}function m(I,E){var ee=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(ee!=null){var se=[],N=!0,K=!1,$,F;try{for(ee=ee.call(I);!(N=($=ee.next()).done)&&(se.push($.value),!(E&&se.length===E));N=!0);}catch(ne){K=!0,F=ne}finally{try{!N&&ee.return!=null&&ee.return()}finally{if(K)throw F}}return se}}function g(I){if(Array.isArray(I))return I}function h(I,E){if(I==null)return{};var ee=T(I,E),se,N;if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(I);for(N=0;N<K.length;N++)se=K[N],!(E.indexOf(se)>=0)&&(!Object.prototype.propertyIsEnumerable.call(I,se)||(ee[se]=I[se]))}return ee}function T(I,E){if(I==null)return{};var ee={},se=Object.keys(I),N,K;for(K=0;K<se.length;K++)N=se[K],!(E.indexOf(N)>=0)&&(ee[N]=I[N]);return ee}var l=1e3,_="D\uC77C HH : mm : ss",i=Object(r.forwardRef)(function(I,E){var ee=I.size,se=ee===void 0?"small":ee,N=I.color,K=N===void 0?"navy":N,$=I.label,F=$===void 0?"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529":$,ne=I.endAt,ve=ne===void 0?new Date:ne,be=I.className,z=I.co,oe=I.overrideStyles,ie=h(I,k),ue=P({size:se,color:K},{overrideStyles:oe,name:"span"}),ye=ue.classes,pe=ue.cx,ge=Object(r.useState)(null),le=O(ge,2),te=le[0],ce=le[1],de=function(){return!ve||!te?"":_.replace("D",te.days).replace("HH",te.hours).replace("mm",te.minutes).replace("ss",te.seconds)},xe=function(){var Te=new Date(ve).getTime()-new Date().getTime(),Re={};Te>0&&(Re={days:Math.floor(Te/(1e3*60*60*24)).toString(),hours:Math.floor(Te/(1e3*60*60)%24).toString().padStart(2,"0"),minutes:Math.floor(Te/1e3/60%60).toString().padStart(2,"0"),seconds:Math.floor(Te/1e3%60).toString().padStart(2,"0")}),ce(Re)};return Object(r.useEffect)(function(){var Oe=setInterval(function(){xe()},l);return function(){return clearInterval(Oe)}},[te]),Object(v.jsxs)(x.a,Object.assign({ref:E,className:pe(ye.container,be),co:z},ie,{children:[Object(v.jsxs)("div",{className:pe(ye.labelContainer),children:[Object(v.jsx)(t.a,{src:e(K==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-white.svg"),className:pe(ye.icon),alt:"timer"}),Object(v.jsx)("div",{className:pe(ye.label),children:F})]}),Object(v.jsx)("div",{className:pe(ye.timer),children:de()})]}))});i.displayName="@travelmakers-design/core/Timer";var o=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Timer {...props}></Timer>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,f={Default:{startLoc:{col:23,line:86},endLoc:{col:1,line:92},startBody:{col:23,line:86},endBody:{col:1,line:92}}},o=`import {
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
`,f={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:84},startBody:{col:23,line:78},endBody:{col:1,line:84}}},S=b.default={title:"@travelmakers-design/core/Component/Timer",component:i,argTypes:{size:{defaultValue:"small",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},label:{defaultValue:"\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}},endAt:{defaultValue:new Date,description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"date"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Timer {...props}></Timer>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:92},startBody:{col:23,line:86},endBody:{col:1,line:92}}}},docs:{page:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(W.g,{}),Object(v.jsx)(W.f,{}),Object(v.jsx)(W.b,{}),Object(v.jsx)(W.d,{}),Object(v.jsx)(W.a,{story:W.c}),Object(v.jsx)(W.e,{})]})}}}},C=function(E){return Object(v.jsx)("div",{style:{padding:24,display:"flex"},children:Object(v.jsx)(i,Object.assign({},E))})};C.displayName="Default",C.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Timer {...props}></Timer>
    </div>
  );
}`}},C.parameters)},"./packages/travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return r});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),H=e("./packages/travelmakers-design-core/src/components/Badge/Badge.tsx"),w=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),G=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),V=Object(U.a)(function(p,n){var c,P,x,t,v,k,O,j,a,y,m=n.mobileType,g=m===void 0?"Expanded":m;return{root:(c={fontFamily:"Pretendard",display:"flex",flexDirection:"column",width:"100%",minHeight:"100vh"},c["@supports (-webkit-touch-callout: none)"]={minHeight:"-webkit-fill-available"},c),container:(P={display:"flex",justifyContent:"center",width:"100%",padding:"16px 0"},P[""+p.media.mobile]={padding:"14px 0"},P.backgroundColor=p.colors.white,P),logo:(x={width:"120px",height:"47px",cursor:"pointer"},x[""+p.media.mobile]={width:"73px",height:"28px"},x),section:{display:"flex",alignItems:"center"},wrapper:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:G.a.maxSize},searchBox:(t={display:"flex",justifyContent:"center",alignItems:"center",height:"40px",padding:"8px 40px",borderRadius:"22px",backgroundColor:p.colors.gray6,cursor:"pointer"},t[""+p.media.mobile]={height:"32px",flex:"1 0"},t[""+p.media.mobile]={backgroundColor:g==="Collapsed"?"inherit":p.colors.gray6,padding:g==="Collapsed"?"0px":"8px 40px"},t),mobileSearchBox:(v={display:"none"},v[""+p.media.mobile]={display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},v),searchIcon:(k={width:"24px",height:"24px",marginRight:"4px",cursor:"pointer"},k[""+p.media.mobile]={width:g==="Collapsed"?"24px":"16px",height:g==="Collapsed"?"24px":"16px"},k),mypageIcon:{width:"24px",height:"24px",marginLeft:"16px",cursor:"pointer"},searchText:(O={fontSize:p.fontSizes.h6,lineHeight:p.lineHeights.h6+"px",fontWeight:400,textAlign:"center",color:p.colors.navy2},O[""+p.media.mobile]={fontSize:p.fontSizes.b1,lineHeight:p.lineHeights.b1+"px",display:g==="Expanded"?"block":"none"},O),divider:(j={display:"block",margin:"auto 12px",width:"1px",height:"16px",backgroundColor:p.colors.navy3},j[""+p.media.mobile]={display:"none"},j),menuText:(a={position:"relative",fontSize:p.fontSizes.h6,lineHeight:p.lineHeights.h6+"px",fontWeight:700,color:p.colors.navy1,cursor:"pointer"},a["&:hover"]={color:p.colors.beige4},a[""+p.media.mobile]={display:"none"},a),newBadge:(y={display:"flex",position:"absolute",width:"16px",height:"16px",top:"-8px",right:"-8px",justifyContent:"center",alignItems:"center",padding:"4px",borderRadius:"6px",backgroundColor:p.colors.red2},y["& > span"]={color:"white",fontSize:p.fontSizes.caption,fontWeight:"bold",marginLeft:"1px"},y[""+p.media.mobile]={width:"5px",height:"5px"},y)}}),Z=e("./node_modules/react/jsx-runtime.js"),B=["mobileType","isLogin","isBadge","logoClick","searchClick","onClick","className","co","overrideStyles"];function M(p,n){if(p==null)return{};var c=R(p,n),P,x;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(p);for(x=0;x<t.length;x++)P=t[x],!(n.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,P)||(c[P]=p[P]))}return c}function R(p,n){if(p==null)return{};var c={},P=Object.keys(p),x,t;for(t=0;t<P.length;t++)x=P[t],!(n.indexOf(x)>=0)&&(c[x]=p[x]);return c}var D=Object(W.forwardRef)(function(p,n){var c=p.mobileType,P=c===void 0?"Expanded":c,x=p.isLogin,t=x===void 0?!1:x,v=p.isBadge,k=v===void 0?!1:v,O=p.logoClick,j=p.searchClick,a=p.onClick,y=p.className,m=p.co,g=p.overrideStyles,h=M(p,B),T=Object(A.c)(),l=V({mobileType:P},{overrideStyles:g,name:"Price"}),_=l.classes,i=l.cx;return Object(Z.jsx)(w.a,Object.assign({ref:n,className:i(_.root,y),co:m},h,{children:Object(Z.jsx)("div",{className:i(_.container),children:Object(Z.jsxs)("div",{className:i(_.wrapper),children:[Object(Z.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/logo.svg"),className:i(_.logo),onClick:O}),Object(Z.jsxs)("div",{className:i(_.section),children:[Object(Z.jsxs)("div",{className:i(_.searchBox),onClick:j,children:[Object(Z.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/search.svg"),className:i(_.searchIcon)}),Object(Z.jsx)("span",{className:i(_.searchText),children:"\uD638\uD154 \uAC80\uC0C9"})]}),Object(Z.jsx)("div",{className:i(_.divider)}),Object(Z.jsxs)("span",{className:i(_.menuText),onClick:a,children:[t?"\uB9C8\uC774\uD398\uC774\uC9C0":"\uB85C\uADF8\uC778",t&&k&&Object(Z.jsx)(H.a,{className:i(_.newBadge),children:"N"})]}),Object(Z.jsxs)("div",{className:i(_.mobileSearchBox),onClick:a,children:[Object(Z.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/ic-mobile-mypage.svg"),className:i(_.mypageIcon)}),t&&k&&Object(Z.jsx)(H.a,{className:i(_.newBadge)})]})]})]})})}))});D.displayName="@travelmakers-design/core/Topbar";var s=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,d={Default:{startLoc:{col:23,line:72},endLoc:{col:1,line:78},startBody:{col:23,line:72},endBody:{col:1,line:78}}},s=`import {
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
`,d={Default:{startLoc:{col:23,line:64},endLoc:{col:1,line:70},startBody:{col:23,line:64},endBody:{col:1,line:70}}},u=b.default={title:"@travelmakers-design/core/Component/Topbar",component:D,argTypes:{mobileType:{defaultValue:"Expanded",description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["Expanded","Collapsed"],control:{type:"inline-radio"}},isLogin:{defaultValue:!1,description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},isBadge:{defaultValue:!1,description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:72},endLoc:{col:1,line:78},startBody:{col:23,line:72},endBody:{col:1,line:78}}}},docs:{page:function(){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Y.g,{}),Object(Z.jsx)(Y.f,{}),Object(Z.jsx)(Y.b,{}),Object(Z.jsx)(Y.d,{}),Object(Z.jsx)(Y.a,{story:Y.c}),Object(Z.jsx)(Y.e,{})]})}},actions:{handles:["click button"]}}},r=function(n){return Object(Z.jsx)("div",{style:{padding:24},children:Object(Z.jsx)(D,Object.assign({},n))})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Topbar {...props} />
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/Topbar/svg/ic-mobile-mypage.svg":function(q,b,e){q.exports=e.p+"static/media/ic-mobile-mypage.e301c76a.svg"},"./packages/travelmakers-design-core/src/components/Topbar/svg/logo.svg":function(q,b,e){q.exports=e.p+"static/media/logo.346e8bbf.svg"},"./packages/travelmakers-design-core/src/components/Topbar/svg/search.svg":function(q,b,e){q.exports=e.p+"static/media/search.3e709349.svg"},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return d});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.string.italics.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./node_modules/react/index.js"),H=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),w=e("./node_modules/core-js/modules/es.array.reduce.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U={h1:{},small:{},medium:{},large:{}},G=function(r){return{caption:{lineHeight:r.lineHeights.caption+"px",fontSize:r.fontSizes.caption},b3:{lineHeight:r.lineHeights.b3+"px",fontSize:r.fontSizes.b3},b2:{lineHeight:r.lineHeights.b2+"px",fontSize:r.fontSizes.b2},b1:{lineHeight:r.lineHeights.b1+"px",fontSize:r.fontSizes.b1},h6:{lineHeight:r.lineHeights.h6+"px",fontSize:r.fontSizes.h6},h5:{lineHeight:r.lineHeights.h5+"px",fontSize:r.fontSizes.h5},h4:{lineHeight:r.lineHeights.h4+"px",fontSize:r.fontSizes.h4},h3:{lineHeight:r.lineHeights.h3+"px",fontSize:r.fontSizes.h3},h2:{lineHeight:r.lineHeights.h2+"px",fontSize:r.fontSizes.h2},h1:{lineHeight:r.lineHeights.h1+"px",fontSize:r.fontSizes.h1}}},V=Object.keys(U).reduce(function(u,r){return u[r]=U[r].height,u},{}),Z=function(r){return{display:"block",width:"100%"}},B=Object(L.a)(function(u,r,p){var n,c,P=r.family,x=r.level,t=r.textAlign,v=r.disabled,k=r.strong,O=r.italic,j=r.underline,a=r.color,y=r.mobile,m=r.tablet,g=p("loading"),h=p("inner"),T=p("spinner");return{loading:(n={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},n["."+h]={opacity:0},n["."+T]={display:"flex"},n),solid:{fontWeight:k?P==="Noto Serif KR"?600:700:400,fontStyle:O?"italic":"normal",textDecoration:j?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},U[x],Z(),G(u)[x],(c={fontFamily:""+P,color:v?u.colors.gray5:a||u.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+t,WebkitAppearance:"none",outline:"none",border:"none"},c[""+u.media.mobile]=Object.assign({},G(u)[y]),c[""+u.media.tablet]=Object.assign({},G(u)[m]),c)),inner:{ref:h,height:"100%",overflow:"visible"},label:{height:"100%"}}}),M=e("./node_modules/react/jsx-runtime.js"),R=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function D(u,r){if(u==null)return{};var p=s(u,r),n,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(u);for(c=0;c<P.length;c++)n=P[c],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,n)||(p[n]=u[n]))}return p}function s(u,r){if(u==null)return{};var p={},n=Object.keys(u),c,P;for(P=0;P<n.length;P++)c=n[P],!(r.indexOf(c)>=0)&&(p[c]=u[c]);return p}var d=Object(A.forwardRef)(function(u,r){var p=u.children,n=u.component,c=u.family,P=c===void 0?"Noto Serif KR":c,x=u.level,t=x===void 0?"h1":x,v=u.mobileLevel,k=u.tabletLevel,O=u.textAlign,j=O===void 0?"left":O,a=u.disabled,y=a===void 0?!1:a,m=u.strong,g=m===void 0?!1:m,h=u.italic,T=h===void 0?!1:h,l=u.underline,_=l===void 0?!1:l,i=u.color,o=u.className,f=u.co,S=u.overrideStyles,C=D(u,R),I=Object(J.c)(),E=B({family:P,level:t,disabled:y,strong:g,italic:T,underline:_,textAlign:j,color:i,mobile:v,tablet:k},{overrideStyles:S,name:"span"}),ee=E.classes,se=E.cx;return Object(M.jsx)(H.a,Object.assign({component:n||"span",ref:r,type:"span",disabled:y,className:se(ee.root,ee.solid,o),co:f,onTouchStart:function(){}},C,{children:Object(M.jsx)("div",{className:ee.inner,children:Object(M.jsx)("span",{className:ee.label,children:p})})}))});d.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return U});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./node_modules/react/index.js"),X=e.n(re),J=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),A=e("./node_modules/react/jsx-runtime.js"),H=e.n(A),w=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},w=`import {
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
`,L={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};b.default={title:"@travelmakers-design/core/General/Typography",component:J.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(W.g,{}),Object(A.jsx)(W.f,{}),Object(A.jsx)(W.b,{}),Object(A.jsx)(W.d,{}),Object(A.jsx)(W.a,{story:W.c}),Object(A.jsx)(W.e,{})]})}}}};var U=function(V){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(J.a,Object.assign({},V,{level:"h1",children:"h1. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"h2",children:"h2. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"h3",children:"h3. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"h4",children:"h4. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"h5",children:"h5. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"h6",children:"h6. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"b1",children:"b1. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"b2",children:"b2. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"b3",children:"b3. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},V,{level:"caption",children:"caption. Travelmakers Design"}))]})};U.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(q,b,e){"use strict";e.d(b,"a",function(){return n});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.array.index-of.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.array.map.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.object.assign.js"),G=e.n(U),V=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),Z=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./node_modules/react/index.js"),M=e.n(B),R=e("./node_modules/react/jsx-runtime.js"),D=e.n(R),s=["component","className","style","co"];function d(c,P){if(c==null)return{};var x=u(c,P),t,v;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(c);for(v=0;v<k.length;v++)t=k[v],!(P.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,t)||(x[t]=c[t]))}return x}function u(c,P){if(c==null)return{};var x={},t=Object.keys(c),v,k;for(k=0;k<t.length;k++)v=t[k],!(P.indexOf(v)>=0)&&(x[v]=c[v]);return x}function r(c,P){return typeof c=="function"?c(P):c}function p(c,P){var x=Object(V.a)(),t=x.css,v=x.cx,k=Object(Z.c)();return Array.isArray(c)?v(P,c.map(function(O){return t(r(O,k))})):v(P,t(r(c,k)))}var n=Object(B.forwardRef)(function(c,P){var x=c.component,t=c.className,v=c.style,k=c.co,O=d(c,s),j=x||"div";return Object(R.jsx)(j,Object.assign({ref:P,className:p(k,t),style:v},O))});n.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},H=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:X.a};var L=function(){return Object(J.jsx)(X.a,{co:function(V){return{width:100,height:100,backgroundColor:V.colors.gray3}}})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return Q});var Q={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return k});var Q=e("./node_modules/core-js/modules/es.string.replace.js"),Y=e("./node_modules/core-js/modules/es.regexp.exec.js"),W=e("./node_modules/core-js/modules/es.number.is-nan.js"),re=e("./node_modules/core-js/modules/es.number.constructor.js"),X=e("./node_modules/core-js/modules/es.parse-int.js"),J=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./node_modules/core-js/modules/es.string.split.js"),H=e("./node_modules/core-js/modules/es.string.starts-with.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),D=e("./node_modules/core-js/modules/es.function.name.js"),s=e("./node_modules/core-js/modules/es.array.from.js");function d(O,j){return c(O)||n(O,j)||r(O,j)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(O,j){if(!!O){if(typeof O=="string")return p(O,j);var a=Object.prototype.toString.call(O).slice(8,-1);if(a==="Object"&&O.constructor&&(a=O.constructor.name),a==="Map"||a==="Set")return Array.from(O);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(O,j)}}function p(O,j){(j==null||j>O.length)&&(j=O.length);for(var a=0,y=new Array(j);a<j;a++)y[a]=O[a];return y}function n(O,j){var a=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(a!=null){var y=[],m=!0,g=!1,h,T;try{for(a=a.call(O);!(m=(h=a.next()).done)&&(y.push(h.value),!(j&&y.length===j));m=!0);}catch(l){g=!0,T=l}finally{try{!m&&a.return!=null&&a.return()}finally{if(g)throw T}}return y}}function c(O){if(Array.isArray(O))return O}function P(O){var j=O.replace("#","");return typeof j=="string"&&j.length===6&&!Number.isNaN(Number("0x"+j))}function x(O){var j=O.replace("#",""),a=parseInt(j,16),y=a>>16&255,m=a>>8&255,g=a&255;return{r:y,g:m,b:g,a:1}}function t(O){var j=O.replace(/[^0-9,.]/g,"").split(",").map(Number),a=d(j,4),y=a[0],m=a[1],g=a[2],h=a[3];return{r:y,g:m,b:g,a:h||1}}function v(O){return P(O)?x(O):O.startsWith("rgb")?t(O):{r:0,g:0,b:0,a:1}}var k=function(j,a){var y=v(j),m=y.r,g=y.g,h=y.b;return"rgba("+m+", "+g+", "+h+", "+a+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return X});var Q=e("./node_modules/core-js/modules/es.array.concat.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=function(A){var H=Object(W.useRef)(A);return Object(W.useEffect)(function(){H.current=A},[A]),Object(W.useMemo)(function(){return function(){for(var w,L=arguments.length,U=new Array(L),G=0;G<L;G++)U[G]=arguments[G];return(w=H.current)===null||w===void 0?void 0:w.call.apply(w,[H].concat(U))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return j});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/react/index.js"),Z=e("./node_modules/core-js/modules/web.timers.js");function B(a,y){return d(a)||s(a,y)||R(a,y)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(a,y){if(!!a){if(typeof a=="string")return D(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return D(a,y)}}function D(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function s(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],h=!0,T=!1,l,_;try{for(m=m.call(a);!(h=(l=m.next()).done)&&(g.push(l.value),!(y&&g.length===y));h=!0);}catch(i){T=!0,_=i}finally{try{!h&&m.return!=null&&m.return()}finally{if(T)throw _}}return g}}function d(a){if(Array.isArray(a))return a}var u=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=y.timeout,g=m===void 0?2e3:m,h=Object(V.useState)(null),T=B(h,2),l=T[0],_=T[1],i=Object(V.useState)(!1),o=B(i,2),f=o[0],S=o[1],C=Object(V.useState)(null),I=B(C,2),E=I[0],ee=I[1],se=function(F){clearTimeout(E),ee(setTimeout(function(){return S(!1)},g)),S(F)},N=function(F){"clipboard"in navigator?navigator.clipboard.writeText(F).then(function(){return se(!0)}).catch(function(ne){return _(ne)}):_(new Error("useClipboard: navigator.clipboard is not supported"))},K=function(){S(!1),_(null),clearTimeout(E)};return{copy:N,reset:K,error:l,copied:f}},r=e("./node_modules/react/jsx-runtime.js");function p(a,y){return t(a)||x(a,y)||c(a,y)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(a,y){if(!!a){if(typeof a=="string")return P(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return P(a,y)}}function P(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function x(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],h=!0,T=!1,l,_;try{for(m=m.call(a);!(h=(l=m.next()).done)&&(g.push(l.value),!(y&&g.length===y));h=!0);}catch(i){T=!0,_=i}finally{try{!h&&m.return!=null&&m.return()}finally{if(T)throw _}}return g}}function t(a){if(Array.isArray(a))return a}var v=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,k={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},v=`import React, { useState } from "react";

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
`,k={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},O=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},j=function(){var y=Object(V.useState)(""),m=p(y,2),g=m[0],h=m[1],T=u({timeout:3e3}),l=T.copy,_=T.copied;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",onChange:function(o){return h(o.target.value)}}),Object(r.jsx)("button",{onClick:function(){return l(g)},children:"copy"}),Object(r.jsx)("span",{children:_&&"Copied!!"})]})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return a});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),B=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function M(y,m){return u(y)||d(y,m)||D(y,m)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(y,m){if(!!y){if(typeof y=="string")return s(y,m);var g=Object.prototype.toString.call(y).slice(8,-1);if(g==="Object"&&y.constructor&&(g=y.constructor.name),g==="Map"||g==="Set")return Array.from(y);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return s(y,m)}}function s(y,m){(m==null||m>y.length)&&(m=y.length);for(var g=0,h=new Array(m);g<m;g++)h[g]=y[g];return h}function d(y,m){var g=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(g!=null){var h=[],T=!0,l=!1,_,i;try{for(g=g.call(y);!(T=(_=g.next()).done)&&(h.push(_.value),!(m&&h.length===m));T=!0);}catch(o){l=!0,i=o}finally{try{!T&&g.return!=null&&g.return()}finally{if(l)throw i}}return h}}function u(y){if(Array.isArray(y))return y}var r=function(m,g,h){var T=Object(B.a)(m,g),l=M(T,2),_=l[0],i=l[1];return Object(Z.a)(_,h),i},p=e("./node_modules/react/jsx-runtime.js");function n(y,m){return v(y)||t(y,m)||P(y,m)||c()}function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(y,m){if(!!y){if(typeof y=="string")return x(y,m);var g=Object.prototype.toString.call(y).slice(8,-1);if(g==="Object"&&y.constructor&&(g=y.constructor.name),g==="Map"||g==="Set")return Array.from(y);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return x(y,m)}}function x(y,m){(m==null||m>y.length)&&(m=y.length);for(var g=0,h=new Array(m);g<m;g++)h[g]=y[g];return h}function t(y,m){var g=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(g!=null){var h=[],T=!0,l=!1,_,i;try{for(g=g.call(y);!(T=(_=g.next()).done)&&(h.push(_.value),!(m&&h.length===m));T=!0);}catch(o){l=!0,i=o}finally{try{!T&&g.return!=null&&g.return()}finally{if(l)throw i}}return h}}function v(y){if(Array.isArray(y))return y}var k=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,O={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},k=`import React, { useState } from "react";

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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},j=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},a=function(){var m=Object(V.useState)(""),g=n(m,2),h=g[0],T=g[1],l=r(function(){alert("Updated!")},1e3,[h]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",onChange:function(i){return T(i.target.value)}}),Object(p.jsx)("button",{onClick:l,children:"Cancel"})]})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`() => {
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
}`}},a.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},H=`import React from "react";
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useForceUpdate"};var L=function(){var G=Object(X.a)();return Object(J.jsxs)("div",{children:[Math.random(),Object(J.jsx)("button",{onClick:G,children:"Update"})]})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return j});var Q=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.array.slice.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.function.name.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(u),p=e("./node_modules/react/index.js"),n=e.n(p);function c(a,y){return k(a)||v(a,y)||x(a,y)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(a,y){if(!!a){if(typeof a=="string")return t(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return t(a,y)}}function t(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function v(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],h=!0,T=!1,l,_;try{for(m=m.call(a);!(h=(l=m.next()).done)&&(g.push(l.value),!(y&&g.length===y));h=!0);}catch(i){T=!0,_=i}finally{try{!h&&m.return!=null&&m.return()}finally{if(T)throw _}}return g}}function k(a){if(Array.isArray(a))return a}var O=function(y){return(y+1)%1e6},j=function(){var y=Object(p.useReducer)(O,0),m=c(y,2),g=m[1];return g}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),H=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,w={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},H=`import React, { useState } from "react";

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
`,w={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}}}},title:"@travelmakers-design/hooks/useHiddenBodyOverflow"};var L=function(){return Object(X.a)(!0),Object(J.jsx)("div",{children:Object(J.jsx)("span",{children:"useHiddenBodyOverflow"})})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts":function(q,b,e){"use strict";e.d(b,"b",function(){return W});var Q=e("./node_modules/react/index.js"),Y=e.n(Q),W=function(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function J(w){w.preventDefault()}function A(){document.body.addEventListener("touchmove",J,{passive:!1})}function H(){document.body.removeEventListener("touchmove",J)}return Object(Q.useEffect)(function(){return X&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var w=document.body.style.top;document.body.style.cssText=""}},[]),Object(Q.useEffect)(function(){return X&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[X]),null};b.a=W},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return se});var Q=e("./node_modules/core-js/modules/es.promise.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/core-js/modules/web.timers.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),V=e("./node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/react/index.js"),M=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),R=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),D=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),s=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),d=e("./node_modules/core-js/modules/es.object.define-property.js"),u=e("./node_modules/core-js/modules/es.object.create.js"),r=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),p=e("./node_modules/core-js/modules/es.array.for-each.js"),n=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),c=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),P=e("./node_modules/core-js/modules/es.array.reverse.js"),x=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return N};var N={},K=Object.prototype,$=K.hasOwnProperty,F=typeof Symbol=="function"?Symbol:{},ne=F.iterator||"@@iterator",ve=F.asyncIterator||"@@asyncIterator",be=F.toStringTag||"@@toStringTag";function z(me,ae,_e){return Object.defineProperty(me,ae,{value:_e,enumerable:!0,configurable:!0,writable:!0}),me[ae]}try{z({},"")}catch(me){z=function(_e,he,fe){return _e[he]=fe}}function oe(me,ae,_e,he){var fe=ae&&ae.prototype instanceof ye?ae:ye,je=Object.create(fe.prototype),De=new Pe(he||[]);return je._invoke=function(Ae,ke,Ce){var Se="suspendedStart";return function(Be,Ue){if(Se==="executing")throw new Error("Generator is already running");if(Se==="completed"){if(Be==="throw")throw Ue;return Ne()}for(Ce.method=Be,Ce.arg=Ue;;){var ze=Ce.delegate;if(ze){var We=Te(ze,Ce);if(We){if(We===ue)continue;return We}}if(Ce.method==="next")Ce.sent=Ce._sent=Ce.arg;else if(Ce.method==="throw"){if(Se==="suspendedStart")throw Se="completed",Ce.arg;Ce.dispatchException(Ce.arg)}else Ce.method==="return"&&Ce.abrupt("return",Ce.arg);Se="executing";var we=ie(Ae,ke,Ce);if(we.type==="normal"){if(Se=Ce.done?"completed":"suspendedYield",we.arg===ue)continue;return{value:we.arg,done:Ce.done}}we.type==="throw"&&(Se="completed",Ce.method="throw",Ce.arg=we.arg)}}}(me,_e,De),je}function ie(me,ae,_e){try{return{type:"normal",arg:me.call(ae,_e)}}catch(he){return{type:"throw",arg:he}}}N.wrap=oe;var ue={};function ye(){}function pe(){}function ge(){}var le={};z(le,ne,function(){return this});var te=Object.getPrototypeOf,ce=te&&te(te(Le([])));ce&&ce!==K&&$.call(ce,ne)&&(le=ce);var de=ge.prototype=ye.prototype=Object.create(le);function xe(me){["next","throw","return"].forEach(function(ae){z(me,ae,function(_e){return this._invoke(ae,_e)})})}function Oe(me,ae){function _e(fe,je,De,Ae){var ke=ie(me[fe],me,je);if(ke.type!=="throw"){var Ce=ke.arg,Se=Ce.value;return Se&&typeof Se=="object"&&$.call(Se,"__await")?ae.resolve(Se.__await).then(function(Be){_e("next",Be,De,Ae)},function(Be){_e("throw",Be,De,Ae)}):ae.resolve(Se).then(function(Be){Ce.value=Be,De(Ce)},function(Be){return _e("throw",Be,De,Ae)})}Ae(ke.arg)}var he;this._invoke=function(fe,je){function De(){return new ae(function(Ae,ke){_e(fe,je,Ae,ke)})}return he=he?he.then(De,De):De()}}function Te(me,ae){var _e=me.iterator[ae.method];if(_e===void 0){if(ae.delegate=null,ae.method==="throw"){if(me.iterator.return&&(ae.method="return",ae.arg=void 0,Te(me,ae),ae.method==="throw"))return ue;ae.method="throw",ae.arg=new TypeError("The iterator does not provide a 'throw' method")}return ue}var he=ie(_e,me.iterator,ae.arg);if(he.type==="throw")return ae.method="throw",ae.arg=he.arg,ae.delegate=null,ue;var fe=he.arg;return fe?fe.done?(ae[me.resultName]=fe.value,ae.next=me.nextLoc,ae.method!=="return"&&(ae.method="next",ae.arg=void 0),ae.delegate=null,ue):fe:(ae.method="throw",ae.arg=new TypeError("iterator result is not an object"),ae.delegate=null,ue)}function Re(me){var ae={tryLoc:me[0]};1 in me&&(ae.catchLoc=me[1]),2 in me&&(ae.finallyLoc=me[2],ae.afterLoc=me[3]),this.tryEntries.push(ae)}function Me(me){var ae=me.completion||{};ae.type="normal",delete ae.arg,me.completion=ae}function Pe(me){this.tryEntries=[{tryLoc:"root"}],me.forEach(Re,this),this.reset(!0)}function Le(me){if(me){var ae=me[ne];if(ae)return ae.call(me);if(typeof me.next=="function")return me;if(!isNaN(me.length)){var _e=-1,he=function fe(){for(;++_e<me.length;)if($.call(me,_e))return fe.value=me[_e],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return he.next=he}}return{next:Ne}}function Ne(){return{value:void 0,done:!0}}return pe.prototype=ge,z(de,"constructor",ge),z(ge,"constructor",pe),pe.displayName=z(ge,be,"GeneratorFunction"),N.isGeneratorFunction=function(me){var ae=typeof me=="function"&&me.constructor;return!!ae&&(ae===pe||(ae.displayName||ae.name)==="GeneratorFunction")},N.mark=function(me){return Object.setPrototypeOf?Object.setPrototypeOf(me,ge):(me.__proto__=ge,z(me,be,"GeneratorFunction")),me.prototype=Object.create(de),me},N.awrap=function(me){return{__await:me}},xe(Oe.prototype),z(Oe.prototype,ve,function(){return this}),N.AsyncIterator=Oe,N.async=function(me,ae,_e,he,fe){fe===void 0&&(fe=Promise);var je=new Oe(oe(me,ae,_e,he),fe);return N.isGeneratorFunction(ae)?je:je.next().then(function(De){return De.done?De.value:je.next()})},xe(de),z(de,be,"Generator"),z(de,ne,function(){return this}),z(de,"toString",function(){return"[object Generator]"}),N.keys=function(me){var ae=[];for(var _e in me)ae.push(_e);return ae.reverse(),function he(){for(;ae.length;){var fe=ae.pop();if(fe in me)return he.value=fe,he.done=!1,he}return he.done=!0,he}},N.values=Le,Pe.prototype={constructor:Pe,reset:function(ae){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Me),!ae)for(var _e in this)_e.charAt(0)==="t"&&$.call(this,_e)&&!isNaN(+_e.slice(1))&&(this[_e]=void 0)},stop:function(){this.done=!0;var ae=this.tryEntries[0].completion;if(ae.type==="throw")throw ae.arg;return this.rval},dispatchException:function(ae){if(this.done)throw ae;var _e=this;function he(Ce,Se){return De.type="throw",De.arg=ae,_e.next=Ce,Se&&(_e.method="next",_e.arg=void 0),!!Se}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var je=this.tryEntries[fe],De=je.completion;if(je.tryLoc==="root")return he("end");if(je.tryLoc<=this.prev){var Ae=$.call(je,"catchLoc"),ke=$.call(je,"finallyLoc");if(Ae&&ke){if(this.prev<je.catchLoc)return he(je.catchLoc,!0);if(this.prev<je.finallyLoc)return he(je.finallyLoc)}else if(Ae){if(this.prev<je.catchLoc)return he(je.catchLoc,!0)}else{if(!ke)throw new Error("try statement without catch or finally");if(this.prev<je.finallyLoc)return he(je.finallyLoc)}}}},abrupt:function(ae,_e){for(var he=this.tryEntries.length-1;he>=0;--he){var fe=this.tryEntries[he];if(fe.tryLoc<=this.prev&&$.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var je=fe;break}}je&&(ae==="break"||ae==="continue")&&je.tryLoc<=_e&&_e<=je.finallyLoc&&(je=null);var De=je?je.completion:{};return De.type=ae,De.arg=_e,je?(this.method="next",this.next=je.finallyLoc,ue):this.complete(De)},complete:function(ae,_e){if(ae.type==="throw")throw ae.arg;return ae.type==="break"||ae.type==="continue"?this.next=ae.arg:ae.type==="return"?(this.rval=this.arg=ae.arg,this.method="return",this.next="end"):ae.type==="normal"&&_e&&(this.next=_e),ue},finish:function(ae){for(var _e=this.tryEntries.length-1;_e>=0;--_e){var he=this.tryEntries[_e];if(he.finallyLoc===ae)return this.complete(he.completion,he.afterLoc),Me(he),ue}},catch:function(ae){for(var _e=this.tryEntries.length-1;_e>=0;--_e){var he=this.tryEntries[_e];if(he.tryLoc===ae){var fe=he.completion;if(fe.type==="throw"){var je=fe.arg;Me(he)}return je}}throw new Error("illegal catch attempt")},delegateYield:function(ae,_e,he){return this.delegate={iterator:Le(ae),resultName:_e,nextLoc:he},this.method==="next"&&(this.arg=void 0),ue}},N}function v(N,K,$,F,ne,ve,be){try{var z=N[ve](be),oe=z.value}catch(ie){$(ie);return}z.done?K(oe):Promise.resolve(oe).then(F,ne)}function k(N){return function(){var K=this,$=arguments;return new Promise(function(F,ne){var ve=N.apply(K,$);function be(oe){v(ve,F,ne,be,z,"next",oe)}function z(oe){v(ve,F,ne,be,z,"throw",oe)}be(void 0)})}}function O(N,K){return g(N)||m(N,K)||a(N,K)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(N,K){if(!!N){if(typeof N=="string")return y(N,K);var $=Object.prototype.toString.call(N).slice(8,-1);if($==="Object"&&N.constructor&&($=N.constructor.name),$==="Map"||$==="Set")return Array.from(N);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return y(N,K)}}function y(N,K){(K==null||K>N.length)&&(K=N.length);for(var $=0,F=new Array(K);$<K;$++)F[$]=N[$];return F}function m(N,K){var $=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if($!=null){var F=[],ne=!0,ve=!1,be,z;try{for($=$.call(N);!(ne=(be=$.next()).done)&&(F.push(be.value),!(K&&F.length===K));ne=!0);}catch(oe){ve=!0,z=oe}finally{try{!ne&&$.return!=null&&$.return()}finally{if(ve)throw z}}return F}}function g(N){if(Array.isArray(N))return N}var h=function(K){var $=Object(B.useState)(!1),F=O($,2),ne=F[0],ve=F[1],be=Object(x.a)(K),z=Object(B.useCallback)(k(t().mark(function oe(){var ie,ue=arguments;return t().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return ve(!0),pe.next=3,be.apply(void 0,ue);case 3:return ie=pe.sent,ve(!1),pe.abrupt("return",ie);case 6:case"end":return pe.stop()}},oe)})),[K]);return[ne,z]},T=e("./node_modules/react/jsx-runtime.js");function l(N,K){return S(N)||f(N,K)||i(N,K)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(N,K){if(!!N){if(typeof N=="string")return o(N,K);var $=Object.prototype.toString.call(N).slice(8,-1);if($==="Object"&&N.constructor&&($=N.constructor.name),$==="Map"||$==="Set")return Array.from(N);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return o(N,K)}}function o(N,K){(K==null||K>N.length)&&(K=N.length);for(var $=0,F=new Array(K);$<K;$++)F[$]=N[$];return F}function f(N,K){var $=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if($!=null){var F=[],ne=!0,ve=!1,be,z;try{for($=$.call(N);!(ne=(be=$.next()).done)&&(F.push(be.value),!(K&&F.length===K));ne=!0);}catch(oe){ve=!0,z=oe}finally{try{!ne&&$.return!=null&&$.return()}finally{if(ve)throw z}}return F}}function S(N){if(Array.isArray(N))return N}var C=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},C=`import React from "react";
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
`,I={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},E=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},ee=function(K){return new Promise(function($){return setTimeout($,K)})},se=function(){var K=h(ee),$=l(K,2),F=$[0],ne=$[1];return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:function(){return ne(2e3)},children:"Start"})}),Object(T.jsxs)("div",{children:["Loading: ",""+F]})]})};se.displayName="Default",se.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},se.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.array.slice.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(u),p=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(p),c=e("./node_modules/react/index.js"),P=e.n(c),x=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),t=e("./node_modules/react/jsx-runtime.js"),v=e.n(t);function k(l,_){return m(l)||y(l,_)||j(l,_)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(l,_){if(!!l){if(typeof l=="string")return a(l,_);var i=Object.prototype.toString.call(l).slice(8,-1);if(i==="Object"&&l.constructor&&(i=l.constructor.name),i==="Map"||i==="Set")return Array.from(l);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(l,_)}}function a(l,_){(_==null||_>l.length)&&(_=l.length);for(var i=0,o=new Array(_);i<_;i++)o[i]=l[i];return o}function y(l,_){var i=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(i!=null){var o=[],f=!0,S=!1,C,I;try{for(i=i.call(l);!(f=(C=i.next()).done)&&(o.push(C.value),!(_&&o.length===_));f=!0);}catch(E){S=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(S)throw I}}return o}}function m(l){if(Array.isArray(l))return l}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},g=`import React, { useEffect } from "react";

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
`,h={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var T=function(){var _=Object(x.a)({width:0,height:0}),i=k(_,2),o=i[0],f=i[1];return Object(c.useEffect)(function(){var S=function(){f({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",S),function(){window.removeEventListener("resize",S)}},[]),Object(t.jsx)("pre",{children:JSON.stringify(o,null,2)})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
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
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return O});var Q=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.array.slice.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.function.name.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(u),p=e("./node_modules/react/index.js"),n=e.n(p);function c(j,a){return k(j)||v(j,a)||x(j,a)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(j,a){if(!!j){if(typeof j=="string")return t(j,a);var y=Object.prototype.toString.call(j).slice(8,-1);if(y==="Object"&&j.constructor&&(y=j.constructor.name),y==="Map"||y==="Set")return Array.from(j);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return t(j,a)}}function t(j,a){(a==null||a>j.length)&&(a=j.length);for(var y=0,m=new Array(a);y<a;y++)m[y]=j[y];return m}function v(j,a){var y=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(y!=null){var m=[],g=!0,h=!1,T,l;try{for(y=y.call(j);!(g=(T=y.next()).done)&&(m.push(T.value),!(a&&m.length===a));g=!0);}catch(_){h=!0,l=_}finally{try{!g&&y.return!=null&&y.return()}finally{if(h)throw l}}return m}}function k(j){if(Array.isArray(j))return j}var O=function(a){var y=Object(p.useRef)(0),m=Object(p.useState)(a),g=c(m,2),h=g[0],T=g[1],l=Object(p.useCallback)(function(_){cancelAnimationFrame(y.current),y.current=requestAnimationFrame(function(){T(_)})},[]);return[h,l]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return m});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/react/index.js"),Z=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),B=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function M(g,h){return u(g)||d(g,h)||D(g,h)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(g,h){if(!!g){if(typeof g=="string")return s(g,h);var T=Object.prototype.toString.call(g).slice(8,-1);if(T==="Object"&&g.constructor&&(T=g.constructor.name),T==="Map"||T==="Set")return Array.from(g);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return s(g,h)}}function s(g,h){(h==null||h>g.length)&&(h=g.length);for(var T=0,l=new Array(h);T<h;T++)l[T]=g[T];return l}function d(g,h){var T=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(T!=null){var l=[],_=!0,i=!1,o,f;try{for(T=T.call(g);!(_=(o=T.next()).done)&&(l.push(o.value),!(h&&l.length===h));_=!0);}catch(S){i=!0,f=S}finally{try{!_&&T.return!=null&&T.return()}finally{if(i)throw f}}return l}}function u(g){if(Array.isArray(g))return g}var r={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},p=typeof window!="undefined",n=function(){var h=Object(V.useRef)(null),T=Object(B.a)(r),l=M(T,2),_=l[0],i=l[1],o=Object(V.useMemo)(function(){return p?new ResizeObserver(function(f){var S=f[0];S&&i(S.contentRect)}):null},[]);return Object(V.useEffect)(function(){return h.current&&o.observe(h.current),function(){o.disconnect()}},[h.current]),[h,_]},c=e("./node_modules/react/jsx-runtime.js");function P(g,h){return O(g)||k(g,h)||t(g,h)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(g,h){if(!!g){if(typeof g=="string")return v(g,h);var T=Object.prototype.toString.call(g).slice(8,-1);if(T==="Object"&&g.constructor&&(T=g.constructor.name),T==="Map"||T==="Set")return Array.from(g);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return v(g,h)}}function v(g,h){(h==null||h>g.length)&&(h=g.length);for(var T=0,l=new Array(h);T<h;T++)l[T]=g[T];return l}function k(g,h){var T=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(T!=null){var l=[],_=!0,i=!1,o,f;try{for(T=T.call(g);!(_=(o=T.next()).done)&&(l.push(o.value),!(h&&l.length===h));_=!0);}catch(S){i=!0,f=S}finally{try{!_&&T.return!=null&&T.return()}finally{if(i)throw f}}return l}}function O(g){if(Array.isArray(g))return g}var j=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},j=`import React, { useEffect } from "react";

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
`,a={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},y=b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},m=function(){var h=n(),T=P(h,2),l=T[0],_=T[1],i=Object(Z.a)();return Object(V.useEffect)(function(){i()},[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("textarea",{ref:l,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(c.jsx)("div",{children:JSON.stringify(_)})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.array.slice.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(u),p=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(p),c=e("./node_modules/react/index.js"),P=e.n(c),x=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),t=e("./node_modules/react/jsx-runtime.js"),v=e.n(t);function k(l,_){return m(l)||y(l,_)||j(l,_)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(l,_){if(!!l){if(typeof l=="string")return a(l,_);var i=Object.prototype.toString.call(l).slice(8,-1);if(i==="Object"&&l.constructor&&(i=l.constructor.name),i==="Map"||i==="Set")return Array.from(l);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(l,_)}}function a(l,_){(_==null||_>l.length)&&(_=l.length);for(var i=0,o=new Array(_);i<_;i++)o[i]=l[i];return o}function y(l,_){var i=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(i!=null){var o=[],f=!0,S=!1,C,I;try{for(i=i.call(l);!(f=(C=i.next()).done)&&(o.push(C.value),!(_&&o.length===_));f=!0);}catch(E){S=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(S)throw I}}return o}}function m(l){if(Array.isArray(l))return l}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},g=`import React from "react";
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
`,h={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var T=function(){var _=Object(x.a)(function(){alert("fire!")},2e3),i=k(_,2),o=i[0],f=i[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)("button",{onClick:o,children:"Run"}),Object(t.jsx)("button",{onClick:f,children:"Clear"})]})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return J});var Q=e("./node_modules/core-js/modules/web.timers.js"),Y=e.n(Q),W=e("./node_modules/react/index.js"),re=e.n(W),X=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),J=function(H,w){var L=Object(W.useRef)(),U=Object(X.a)(H),G=Object(W.useCallback)(function(){L.current&&clearTimeout(L.current),L.current=setTimeout(function(){U()},w)},[w]),V=Object(W.useCallback)(function(){L.current&&clearTimeout(L.current)},[]);return Object(W.useEffect)(function(){return V},[V]),[G,V]}},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(q,b,e){"use strict";e.r(b),e.d(b,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),W=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(W),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),H=e.n(A),w=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(w),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),V=e("./node_modules/core-js/modules/es.string.iterator.js"),Z=e.n(V),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e.n(R),s=e("./node_modules/core-js/modules/es.array.slice.js"),d=e.n(s),u=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(u),p=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(p),c=e("./node_modules/react/index.js"),P=e.n(c),x=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),t=e("./node_modules/react/jsx-runtime.js"),v=e.n(t);function k(l,_){return m(l)||y(l,_)||j(l,_)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(l,_){if(!!l){if(typeof l=="string")return a(l,_);var i=Object.prototype.toString.call(l).slice(8,-1);if(i==="Object"&&l.constructor&&(i=l.constructor.name),i==="Map"||i==="Set")return Array.from(l);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(l,_)}}function a(l,_){(_==null||_>l.length)&&(_=l.length);for(var i=0,o=new Array(_);i<_;i++)o[i]=l[i];return o}function y(l,_){var i=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(i!=null){var o=[],f=!0,S=!1,C,I;try{for(i=i.call(l);!(f=(C=i.next()).done)&&(o.push(C.value),!(_&&o.length===_));f=!0);}catch(E){S=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(S)throw I}}return o}}function m(l){if(Array.isArray(l))return l}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,h={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},g=`import React, { useEffect, useState } from "react";

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
`,h={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};b.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var T=function(){var _=Object(c.useState)(""),i=k(_,2),o=i[0],f=i[1];return Object(c.useEffect)(function(){console.log("useEffect:",o)},[o]),Object(x.a)(function(){console.log("useUpdateEffect:",o)},[o]),Object(t.jsx)("div",{children:Object(t.jsx)("input",{type:"text",onChange:function(C){return f(C.target.value)}})})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
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
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return W});var Q=e("./node_modules/react/index.js"),Y=e.n(Q),W=function(X,J){var A=Object(Q.useRef)(!0);Object(Q.useEffect)(function(){if(!A.current)return X();A.current=!1},J)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(q,b,e){"use strict";e.d(b,"c",function(){return V}),e.d(b,"d",function(){return Z}),e.d(b,"b",function(){return B}),e.d(b,"a",function(){return R});var Q=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),W=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),re=e("./node_modules/react/jsx-runtime.js"),X=function(s){var d=s.styles,u=V();return Object(re.jsx)(W.a,{styles:Object(W.b)(d(u))})};X.displayName="Global";var J={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},A=function(){return Object(re.jsx)(W.a,{styles:J})};A.displayName="NormalizeCSS";var H=e("./node_modules/core-js/modules/es.array.reduce.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),L=e("./node_modules/core-js/modules/es.object.assign.js");function U(D,s){return s?Object.keys(D).reduce(function(d,u){if(u==="headings"&&s.headings){var r=s.headings?Object.keys(D.headings).reduce(function(p,n){return p[n]=Object.assign({},D.headings[n],s.headings[n]),p},{}):D.headings;return Object.assign({},d,{headings:Object.assign({},D.headings,s.headings,r)})}return d[u]=typeof s[u]=="object"?Object.assign({},D[u],s[u]):s[u]||D[u],d},{}):D}var G=Object(Q.createContext)({theme:Y.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function V(){var D;return((D=Object(Q.useContext)(G))===null||D===void 0?void 0:D.theme)||Y.a}function Z(){var D;return((D=Object(Q.useContext)(G))===null||D===void 0?void 0:D.styles)||{}}function B(){var D;return((D=Object(Q.useContext)(G))===null||D===void 0?void 0:D.emotionOptions)||{key:"co",prepend:!0}}var M=function(){return Object(re.jsx)(X,{styles:function(d){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:d.fontFamily,backgroundColor:d.colorScheme==="dark"?d.colors.black:d.colors.white,color:d.colorScheme==="dark"?d.colors.white:d.colors.black,lineHeight:d.lineHeight,fontSizes:d.fontSizes.b3}}}})};M.displayName="GlobalStyles";var R=function(s){var d=s.theme,u=s.styles,r=u===void 0?{}:u,p=s.emotionOptions,n=s.withNormalizeCSS,c=n===void 0?!1:n,P=s.withGlobalStyles,x=P===void 0?!1:P,t=s.children;return Object(re.jsxs)(G.Provider,{value:{theme:U(Y.a,d),styles:r,emotionOptions:p},children:[c&&Object(re.jsx)(A,{}),x&&Object(re.jsx)(M,{}),t]})};R.displayName="TmProvider",R.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(q,b,e){"use strict";e.d(b,"b",function(){return ye}),e.d(b,"a",function(){return ge});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},W={primary:[Y.navy1,Y.navy1,Y.navy2],secondary:[Y.green2,Y.green2,Y.green1],tertiary:[Y.white,Y.white,Y.gray6],red:[Y.red2,Y.red2,Y.red1]},re={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},X={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},J={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},A={small:2,medium:4,large:8,round:100,circular:"50%"},H={xsmall:4,small:8,medium:16,large:24},w={xsmall:576,small:768,medium:1024,large:1408},L={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},U={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},G={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},V=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),Z={mobile:"@media (max-width: "+V.a.mobile+"px)",tablet:"@media (max-width: "+V.a.tablet+"px)",desktop:"@media (max-width: "+V.a.desktop+"px)",largeDesktop:"@media (max-width: "+V.a.maxSize+"px)"},B=e("./node_modules/core-js/modules/es.object.assign.js"),M=function(te){for(var ce="",de=1;de<te.length-1;de+=1)ce+=te[de]+" "+de/(te.length-1)*100+"%, ";return te[0]+" 0%, "+ce+te[te.length-1]+" 100%"},R=function(te){for(var ce=arguments.length,de=new Array(ce>1?ce-1:0),xe=1;xe<ce;xe++)de[xe-1]=arguments[xe];return"linear-gradient("+te+"deg, "+M(de)+")"},D=function(){for(var te=arguments.length,ce=new Array(te),de=0;de<te;de++)ce[de]=arguments[de];return"radial-gradient(circle, "+M(ce)+")"},s=function(te){return typeof te.size=="number"?te.size:te.sizes[te.size]||te.size||te.sizes.medium},d=function(te){return function(ce){return"@media (min-width: "+(s({size:ce,sizes:te.breakpoints})+1)+"px)"}},u=function(te){return function(ce){return"@media (max-width: "+s({size:ce,sizes:te.breakpoints})+"px)"}},r=e("./node_modules/core-js/modules/es.string.replace.js"),p=e("./node_modules/core-js/modules/es.regexp.exec.js"),n=e("./node_modules/core-js/modules/es.number.is-nan.js"),c=e("./node_modules/core-js/modules/es.number.constructor.js"),P=e("./node_modules/core-js/modules/es.parse-int.js"),x=e("./node_modules/core-js/modules/es.array.map.js"),t=e("./node_modules/core-js/modules/es.string.split.js"),v=e("./node_modules/core-js/modules/es.string.starts-with.js"),k=e("./node_modules/core-js/modules/es.array.is-array.js"),O=e("./node_modules/core-js/modules/es.symbol.js"),j=e("./node_modules/core-js/modules/es.symbol.description.js"),a=e("./node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),m=e("./node_modules/core-js/modules/es.string.iterator.js"),g=e("./node_modules/core-js/modules/es.array.iterator.js"),h=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/core-js/modules/es.function.name.js"),_=e("./node_modules/core-js/modules/es.array.from.js");function i(le,te){return I(le)||C(le,te)||f(le,te)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(le,te){if(!!le){if(typeof le=="string")return S(le,te);var ce=Object.prototype.toString.call(le).slice(8,-1);if(ce==="Object"&&le.constructor&&(ce=le.constructor.name),ce==="Map"||ce==="Set")return Array.from(le);if(ce==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ce))return S(le,te)}}function S(le,te){(te==null||te>le.length)&&(te=le.length);for(var ce=0,de=new Array(te);ce<te;ce++)de[ce]=le[ce];return de}function C(le,te){var ce=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ce!=null){var de=[],xe=!0,Oe=!1,Te,Re;try{for(ce=ce.call(le);!(xe=(Te=ce.next()).done)&&(de.push(Te.value),!(te&&de.length===te));xe=!0);}catch(Me){Oe=!0,Re=Me}finally{try{!xe&&ce.return!=null&&ce.return()}finally{if(Oe)throw Re}}return de}}function I(le){if(Array.isArray(le))return le}var E=function(te){var ce=te.replace("#","");return typeof ce=="string"&&ce.length===6&&!Number.isNaN(Number("0x"+ce))},ee=function(te){var ce=te.replace("#",""),de=parseInt(ce,16),xe=de>>16&255,Oe=de>>8&255,Te=de&255;return{r:xe,g:Oe,b:Te,a:1}},se=function(te){var ce=te.replace(/[^0-9,.]/g,"").split(",").map(Number),de=i(ce,4),xe=de[0],Oe=de[1],Te=de[2],Re=de[3];return{r:xe,g:Oe,b:Te,a:Re||1}},N=function(te){return E(te)?ee(te):te.startsWith("rgb")?se(te):{r:0,g:0,b:0,a:1}},K=function(te,ce){if(typeof te!="string"||ce>1||ce<0)return"rgba(0, 0, 0, 1)";var de=N(te),xe=de.r,Oe=de.g,Te=de.b;return"rgba("+xe+", "+Oe+", "+Te+", "+ce+")"},$=function(te,ce){var de=N(te),xe=de.r,Oe=de.g,Te=de.b,Re=de.a,Me=1-ce,Pe=function(Ne){return Math.round(Ne*Me)};return"rgba("+Pe(xe)+", "+Pe(Oe)+", "+Pe(Te)+", "+Re+")"},F=function(te,ce){var de=N(te),xe=de.r,Oe=de.g,Te=de.b,Re=de.a,Me=function(Le){return Math.round(Le+(255-Le)*ce)};return"rgba("+Me(xe)+", "+Me(Oe)+", "+Me(Te)+", "+Re+")"},ne=function(te){return te*8},ve={linearGradient:R,radialGradient:D,smallerThan:u,largerThan:d,rgba:K,size:s,darken:$,lighten:F,spacing:ne},be=function(te){return Object.assign({},te,{fn:{largerThan:ve.largerThan(te),smallerThan:ve.smallerThan(te),radialGradient:ve.radialGradient,linearGradient:ve.linearGradient,rgba:ve.rgba,size:ve.size,lighten:ve.lighten,darken:ve.darken,spacing:ve.spacing}})},z=Object.keys(W),oe=Object.keys(Y),ie=["xsmall","small","medium","large"],ue=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],ye=function(te){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:te.fontFamily||"sans-serif"}},pe={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:Y.black,colors:Y,palettes:W,shadows:re,fontSizes:X,lineHeights:J,radius:A,spacing:H,breakpoints:w,headings:L,opacity:U,zIndex:G,extra:{},media:Z},ge=be(pe)},"./packages/travelmakers-design-styles/src/theme/types/TmSize.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return Q});var Q={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200}},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return x});var Q=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.map.js"),W=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),J=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),Z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function R(t,v){return r(t)||u(t,v)||s(t,v)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(t,v){if(!!t){if(typeof t=="string")return d(t,v);var k=Object.prototype.toString.call(t).slice(8,-1);if(k==="Object"&&t.constructor&&(k=t.constructor.name),k==="Map"||k==="Set")return Array.from(t);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return d(t,v)}}function d(t,v){(v==null||v>t.length)&&(v=t.length);for(var k=0,O=new Array(v);k<v;k++)O[k]=t[k];return O}function u(t,v){var k=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(k!=null){var O=[],j=!0,a=!1,y,m;try{for(k=k.call(t);!(j=(y=k.next()).done)&&(O.push(y.value),!(v&&O.length===v));j=!0);}catch(g){a=!0,m=g}finally{try{!j&&k.return!=null&&k.return()}finally{if(a)throw m}}return O}}function r(t){if(Array.isArray(t))return t}function p(t){var v={};return Object.keys(t).forEach(function(k){var O=R(t[k],2),j=O[0],a=O[1];v[j]=a}),v}var n=e("./node_modules/core-js/modules/es.array.reduce.js");function c(t,v,k){return Object.keys(v).reduce(function(O,j){return O[j]=t(v[j],k?"tm-"+k+"-"+j:null),O},{})}var P=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function x(t){var v=typeof t=="function"?t:function(){return t};function k(O,j){var a=Object(re.c)(),y=Object(re.d)()[j==null?void 0:j.name],m=Object(P.a)(),g=m.css,h=m.cx,T=0;function l(C){return T+=1,"tm-ref_"+(C||"")+"_"+T}var _=v(a,O,l),i=typeof(j==null?void 0:j.overrideStyles)=="function"?j==null?void 0:j.overrideStyles(a):(j==null?void 0:j.overrideStyles)||{},o=typeof y=="function"?y(a):y||{},f=typeof(j==null?void 0:j.co)=="function"?j.co(a):j==null?void 0:j.co,S=p(Object.keys(_).map(function(C){var I=h(g(_[C]),g(o[C]),g(i[C]),g(f));return[C,I]}));return{classes:c(h,S,j==null?void 0:j.name),cx:h,theme:a}}return k}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(q,b,e){"use strict";e.d(b,"a",function(){return S});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),H=e("./node_modules/core-js/modules/es.string.iterator.js"),w=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),V=e("./node_modules/clsx/dist/clsx.m.js"),Z=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),B=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),M=e("./node_modules/core-js/modules/es.array.index-of.js"),R=e("./node_modules/core-js/modules/es.array.map.js"),D=e("./node_modules/react/index.js");function s(C){return p(C)||r(C)||u(C)||d()}function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(C,I){if(!!C){if(typeof C=="string")return n(C,I);var E=Object.prototype.toString.call(C).slice(8,-1);if(E==="Object"&&C.constructor&&(E=C.constructor.name),E==="Map"||E==="Set")return Array.from(C);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return n(C,I)}}function r(C){if(typeof Symbol!="undefined"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}function p(C){if(Array.isArray(C))return n(C)}function n(C,I){(I==null||I>C.length)&&(I=C.length);for(var E=0,ee=new Array(I);E<I;E++)ee[E]=C[E];return ee}function c(C,I){var E=Object(D.useRef)();return(!E.current||I.length!==E.current.prevDeps.length||E.current.prevDeps.map(function(ee,se){return ee===I[se]}).indexOf(!1)>=0)&&(E.current={v:C(),prevDeps:s(I)}),E.current.v}var P=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),x=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/react/jsx-runtime.js"),v=function(){var C;function I(E){return C===void 0&&(C=Object(P.a)(E||{key:"co",prepend:!0})),C}return{getCache:I}}(),k=v.getCache,O=Object(D.createContext)(void 0);function j(){var C=Object(x.b)();return Object(D.useContext)(O)||k(C)}function a(C){var I=C.children,E=C.value;return Object(t.jsx)(O.Provider,{value:E,children:I})}a.displayName="CacheProvider";function y(C,I){return l(C)||T(C,I)||g(C,I)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(C,I){if(!!C){if(typeof C=="string")return h(C,I);var E=Object.prototype.toString.call(C).slice(8,-1);if(E==="Object"&&C.constructor&&(E=C.constructor.name),E==="Map"||E==="Set")return Array.from(C);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return h(C,I)}}function h(C,I){(I==null||I>C.length)&&(I=C.length);for(var E=0,ee=new Array(I);E<I;E++)ee[E]=C[E];return ee}function T(C,I){var E=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(E!=null){var ee=[],se=!0,N=!1,K,$;try{for(E=E.call(C);!(se=(K=E.next()).done)&&(ee.push(K.value),!(I&&ee.length===I));se=!0);}catch(F){N=!0,$=F}finally{try{!se&&E.return!=null&&E.return()}finally{if(N)throw $}}return ee}}function l(C){if(Array.isArray(C))return C}var _="ref";function i(C){var I;if(C.length!==1)return{args:C,ref:I};var E=y(C,1),ee=E[0];if(!(ee instanceof Object))return{args:C,ref:I};if(!(_ in ee))return{args:C,ref:I};I=ee[_];var se=Object.assign({},ee);return delete se[_],{args:[se],ref:I}}var o=function(){function C(E,ee,se){var N=[],K=Object(B.a)(E,N,se);return N.length<2?se:K+ee(N)}function I(E){var ee=E.cache,se=function(){for(var $=arguments.length,F=new Array($),ne=0;ne<$;ne++)F[ne]=arguments[ne];var ve=i(F),be=ve.ref,z=ve.args,oe=Object(Z.a)(z,ee.registered);return Object(B.b)(ee,oe,!1),ee.key+"-"+oe.name+(be===void 0?"":" "+be)},N=function(){for(var $=arguments.length,F=new Array($),ne=0;ne<$;ne++)F[ne]=arguments[ne];return C(ee.registered,se,Object(V.a)(F))};return{css:se,cx:N}}return{cssFactory:I}}(),f=o.cssFactory;function S(){var C=j();return c(function(){return f({cache:C})},[C])}},"./storybook-init-framework-entry.js":function(q,b,e){"use strict";e.r(b);var Q=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(q,b,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),q.exports=e("./generated-stories-entry.js")},1:function(q,b){}},[[0,4,5]]]);
