(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./config/storybook/preview.tsx-generated-config-entry.js":function(q,_,e){"use strict";e.r(_);var Q={};e.r(Q),e.d(Q,"parameters",function(){return g}),e.d(Q,"decorators",function(){return T});var Y=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.filter.js"),X=e("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),J=e("./node_modules/core-js/modules/es.array.for-each.js"),A=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),V=e("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),z=e("./node_modules/core-js/modules/es.object.define-properties.js"),L=e("./node_modules/core-js/modules/es.object.define-property.js"),U=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),G=e("./node_modules/core-js/modules/es.array.is-array.js"),H=e("./node_modules/core-js/modules/es.symbol.description.js"),N=e("./node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/core-js/modules/es.string.iterator.js"),R=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e("./node_modules/core-js/modules/es.array.slice.js"),u=e("./node_modules/core-js/modules/es.function.name.js"),p=e("./node_modules/core-js/modules/es.array.from.js"),r=e("./node_modules/react/index.js"),d=e("./node_modules/react/jsx-runtime.js");function n(o,f){return b(o)||t(o,f)||C(o,f)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(o,f){if(!!o){if(typeof o=="string")return j(o,f);var D=Object.prototype.toString.call(o).slice(8,-1);if(D==="Object"&&o.constructor&&(D=o.constructor.name),D==="Map"||D==="Set")return Array.from(o);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return j(o,f)}}function j(o,f){(f==null||f>o.length)&&(f=o.length);for(var D=0,S=new Array(f);D<f;D++)S[D]=o[D];return S}function t(o,f){var D=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(D!=null){var S=[],I=!0,E=!1,ee,se;try{for(D=D.call(o);!(I=(ee=D.next()).done)&&(S.push(ee.value),!(f&&S.length===f));I=!0);}catch(W){E=!0,se=W}finally{try{!I&&D.return!=null&&D.return()}finally{if(E)throw se}}return S}}function b(o){if(Array.isArray(o))return o}var k=Object(r.createContext)(null),O=function(){var f=Object(r.useContext)(k);if(!f)throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return f},h=function(f){var D=f.colorScheme,S=f.toggleColorScheme,I=f.children,E=Object(r.useState)("init"),ee=n(E,2),se=ee[0],W=ee[1];return Object(r.useEffect)(function(){W("update")},[]),Object(d.jsx)(k.Provider,{value:{colorScheme:D,toggleColorScheme:S},children:I},se)};h.displayName="ColorSchemeProvider",h.displayName="@travelmakers-design/styles/ColorSchemeProvider";var a=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),y=e("./node_modules/@storybook/builder-webpack4/node_modules/@storybook/theming/dist/esm/index.js"),m=e("./node_modules/storybook-dark-mode/dist/index.js"),g={layout:"fullscreen",docs:{theme:y.themes.light},darkMode:{current:"light"}};function x(o){var f=Object(m.useDarkMode)()?"dark":"light";return Object(d.jsx)(h,{colorScheme:f,toggleColorScheme:function(){},children:Object(d.jsx)(a.a,{theme:{colorScheme:f},withGlobalStyles:!0,withNormalizeCSS:!0,children:o.children})})}x.displayName="ThemeWrapper";var T=[function(o){return Object(d.jsx)(x,{children:o()})}];function c(o,f){var D=Object.keys(o);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(o);f&&(S=S.filter(function(I){return Object.getOwnPropertyDescriptor(o,I).enumerable})),D.push.apply(D,S)}return D}function v(o){for(var f=1;f<arguments.length;f++){var D=arguments[f]!=null?arguments[f]:{};f%2?c(Object(D),!0).forEach(function(S){i(o,S,D[S])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(D)):c(Object(D)).forEach(function(S){Object.defineProperty(o,S,Object.getOwnPropertyDescriptor(D,S))})}return o}function i(o,f,D){return f in o?Object.defineProperty(o,f,{value:D,enumerable:!0,configurable:!0,writable:!0}):o[f]=D,o}Object.keys(Q).forEach(function(o){var f=Q[o];switch(o){case"args":return Object(U.d)(f);case"argTypes":return Object(U.b)(f);case"decorators":return f.forEach(function(S){return Object(U.f)(S,!1)});case"loaders":return f.forEach(function(S){return Object(U.g)(S,!1)});case"parameters":return Object(U.h)(v({},f),!1);case"argTypesEnhancers":return f.forEach(function(S){return Object(U.c)(S)});case"argsEnhancers":return f.forEach(function(S){return Object(U.e)(S)});case"render":return Object(U.i)(f);case"globals":case"globalTypes":{var D={};return D[o]=f,Object(U.h)(D,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})},"./generated-stories-entry.js":function(q,_,e){"use strict";(function(Q){var Y=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,Y.configure)([e("./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$")],Q,!1)}).call(this,e("./node_modules/webpack/buildin/module.js")(q))},"./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$":function(q,_,e){var Q={"./travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx","./travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx","./travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx","./travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx","./travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx","./travelmakers-design-core/src/components/CarouselTitleCard/stories/CarouselTitleCard.stories.tsx":"./packages/travelmakers-design-core/src/components/CarouselTitleCard/stories/CarouselTitleCard.stories.tsx","./travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx":"./packages/travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx","./travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx":"./packages/travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx","./travelmakers-design-core/src/components/CouponCard/stories/CouponCard.stories.tsx":"./packages/travelmakers-design-core/src/components/CouponCard/stories/CouponCard.stories.tsx","./travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx","./travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx","./travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx","./travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx","./travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx","./travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx","./travelmakers-design-core/src/components/HotelReviewCard/stories/HotelReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/HotelReviewCard/stories/HotelReviewCard.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx","./travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx","./travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx","./travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx","./travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx","./travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx","./travelmakers-design-core/src/components/MainReviewCard/stories/MainReviewCard.stories.tsx":"./packages/travelmakers-design-core/src/components/MainReviewCard/stories/MainReviewCard.stories.tsx","./travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx","./travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx","./travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx","./travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx","./travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx","./travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx":"./packages/travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx","./travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx":"./packages/travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx","./travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx","./travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx","./travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx","./travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx":"./packages/travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx","./travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx","./travelmakers-design-core/src/components/View/stories/View.stories.tsx":"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx","./travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx","./travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx","./travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx","./travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx","./travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx","./travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx","./travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx","./travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx","./travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx"};function Y(re){var X=w(re);return e(X)}function w(re){if(!e.o(Q,re)){var X=new Error("Cannot find module '"+re+"'");throw X.code="MODULE_NOT_FOUND",X}return Q[re]}Y.keys=function(){return Object.keys(Q)},Y.resolve=w,q.exports=Y,Y.id="./packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(ts|tsx))$"},"./packages/travelmakers-design-core/src/assets/svg/ic-angle.svg":function(q,_,e){q.exports=e.p+"static/media/ic-angle.120d8dd5.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg":function(q,_,e){q.exports=e.p+"static/media/ic-arrow-next-disable.3c4032c4.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":function(q,_,e){q.exports=e.p+"static/media/ic-arrow-next-navy.12beec86.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg":function(q,_,e){q.exports=e.p+"static/media/ic-arrow-next-white.6fbf74f2.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg":function(q,_,e){q.exports=e.p+"static/media/ic-arrow-previous-disable.b7f070b7.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":function(q,_,e){q.exports=e.p+"static/media/ic-arrow-previous-navy.6975204f.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg":function(q,_,e){q.exports=e.p+"static/media/ic-arrow-previous-white.5df27b44.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg":function(q,_,e){q.exports=e.p+"static/media/ic-arrow-single.e8e002c5.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-check.svg":function(q,_,e){q.exports=e.p+"static/media/ic-check.20117281.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-mini.svg":function(q,_,e){q.exports=e.p+"static/media/ic-mini.6062cd2f.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-residence.svg":function(q,_,e){q.exports=e.p+"static/media/ic-residence.bafff8f9.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-star.svg":function(q,_,e){q.exports=e.p+"static/media/ic-star.324cfafe.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-navy.svg":function(q,_,e){q.exports=e.p+"static/media/ic-timesale-navy.db963f79.svg"},"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-white.svg":function(q,_,e){q.exports=e.p+"static/media/ic-timesale-white.29d12dd5.svg"},"./packages/travelmakers-design-core/src/components/Accordion/stories/Accordion.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return h});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.from.js"),w=e("./node_modules/core-js/modules/es.string.iterator.js"),re=e("./node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/react/index.js"),B=e("./node_modules/react/jsx-runtime.js"),M=function(y){return Object(B.jsxs)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y,{children:[Object(B.jsx)("rect",{width:"24",height:"24",rx:"12",fill:"#D7D7D7"}),Object(B.jsx)("path",{d:"M6 10.7681L10.1205 16L18 8",stroke:"white","stroke-width":"2"})]}))};M.displayName="AccordionCheck",M.displayName="@travelmakers-design/core/AccordionCheck";var R=function(y){return Object(B.jsx)("svg",Object.assign({width:"33",height:"32",viewBox:"0 0 33 32",xmlns:"http://www.w3.org/2000/svg"},y,{children:Object(B.jsx)("path",{stroke:"#30373F","stroke-width":"2",d:"m3 9 13 14L29 9",fill:"none","fill-rule":"evenodd"})}))};R.displayName="AccordionIcon",R.displayName="@travelmakers-design/core/AccordionIcon";var P=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),l=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),u=Object(P.a)(function(a,y){var m,g,x,T,c,v,i,o=y.open;return{container:Object.assign({},Object(l.b)(a),(m={display:"flex",flexDirection:"column",width:"100%",backgroundColor:a.colors.white,marginBottom:"4px"},m["&:last-child"]={marginBottom:0},m)),row:(g={display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"14px 24px 14px 24px"},g[""+a.media.desktop]={padding:"12px 16px 12px 16px"},g),titleWrap:{display:"flex",width:"100%"},titleIndex:{fontWeight:"bold",fontFamily:"pt serif",color:a.colors.cover1,fontStyle:"italic",marginRight:"4px"},title:(x={display:"block",width:"100%",fontSize:a.fontSizes.b1,lineHeight:a.lineHeights.b1+"px",fontWeight:"bold",color:a.colors.navy1},x[""+a.media.mobile]={fontSize:a.fontSizes.b2,lineHeight:a.lineHeights.b2+"px",fontWeight:"400"},x),icon:(T={width:"32px",height:"32px",cursor:"pointer",marginLeft:"4px"},T[""+a.media.mobile]={width:"24px",height:"24px"},T),content:(c={padding:"0 24px 14px 24px"},c[""+a.media.desktop]={padding:"0 16px 12px 16px"},c),divider:(v={width:"100%",height:"1px",backgroundColor:a.colors.navy1,marginBottom:"14px"},v[""+a.media.desktop]={marginBottom:"11px"},v),answerText:{display:"flex",lineHeight:"1.5"},answer:(i={fontSize:a.fontSizes.b1,lineHeight:a.lineHeights.b1+"px",color:a.colors.navy1,width:"100%"},i[""+a.media.desktop]={marginTop:"3px"},i[""+a.media.mobile]={fontSize:a.fontSizes.b2,lineHeight:a.lineHeights.b2+"px"},i)}});function p(a,y){return C(a)||s(a,y)||d(a,y)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(a,y){if(!!a){if(typeof a=="string")return n(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return n(a,y)}}function n(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function s(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],x=!0,T=!1,c,v;try{for(m=m.call(a);!(x=(c=m.next()).done)&&(g.push(c.value),!(y&&g.length===y));x=!0);}catch(i){T=!0,v=i}finally{try{!x&&m.return!=null&&m.return()}finally{if(T)throw v}}return g}}function C(a){if(Array.isArray(a))return a}var j=Object(N.forwardRef)(function(a,y){var m=a.component,g=a.type,x=g===void 0?"Default":g,T=a.data,c=a.className,v=a.containerStyle,i=a.iconStyle,o=a.overrideStyles,f=a.__staticSelector,D=f===void 0?"div":f,S=Object(N.useState)(Array.from({length:T.length},function(K,ne){return!1})),I=p(S,2),E=I[0],ee=I[1],se=m||"div",W=u({open:E},{overrideStyles:o,name:"div"}),$=W.classes,Z=W.cx;return Object(B.jsx)("div",{className:Z(v),children:T==null?void 0:T.map(function(K,ne){return Object(B.jsxs)(se,{ref:y,className:Z($.container,c),children:[Object(B.jsxs)("div",{className:Z($.row),onClick:function(){return ee(function(_e){return _e==null?void 0:_e.map(function(F,oe){return ne===oe?!F:F})})},children:[Object(B.jsxs)("div",{className:Z($.titleWrap),children:[x==="Number"&&Object(B.jsxs)("span",{className:Z($.titleIndex),children:[ne+1,"."]}),x==="Checkbox"&&Object(B.jsx)("div",{style:{marginRight:8},children:Object(B.jsx)(M,{})}),Object(B.jsx)("span",{className:Z($.title),children:K.question})]}),Object(B.jsx)(R,{className:Z($.icon),style:Object.assign({transform:"rotate("+(E[ne]?180:0)+"deg)"},i)})]}),E[ne]&&Object(B.jsxs)("div",{className:Z($.content),children:[Object(B.jsx)("div",{className:Z($.divider)}),Object(B.jsx)("div",{className:Z($.answerText),children:Object(B.jsx)("span",{className:Z($.answer),dangerouslySetInnerHTML:{__html:K==null?void 0:K.answer}})})]})]},"accordion-"+ne)})})});j.displayName="@travelmakers-design/core/Accordion";var t=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,b={Default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}},t=`import { Accordion } from "../Accordion";
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
`,b={Default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}},k=[{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."},{question:"\uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC774 \uBB34\uC5C7\uC778\uAC00\uC694?",answer:"\uD638\uD154\uC5D0\uC0B6\uC740 \uAD6D\uB0B4 \uCD5C\uCD08 \uD638\uD154 \uB871\uC2A4\uD14C\uC774 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."}],O=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Accordion {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:81},endLoc:{col:1,line:87},startBody:{col:23,line:81},endBody:{col:1,line:87}}}}},title:"@travelmakers-design/core/Component/Accordion",component:j,argTypes:{type:{defaultValue:"Default",description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uACB0\uC815\uD569\uB2C8\uB2E4.",options:["Default","Number","Checkbox"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},data:{defaultValue:k,description:"Accordion \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:typeof k}},control:{type:"array"}},containerStyle:{description:"Accordion container\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}},iconStyle:{description:"Icon\uC5D0 \uB300\uD55C style\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",defaultValue:{},type:{name:"style",required:!1},table:{type:{summary:"StyleProp",detail:null},defaultValue:{summary:""}},control:{type:"object"}}}},h=function(y){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(j,Object.assign({},y))})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-core/src/components/Badge/Badge.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),A=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),V=function(R,P){return{small:{fontFamily:"Pretendard",fontWeight:P==="text"?"bold":"normal",lineHeight:R.lineHeights.caption+"px",fontSize:R.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:P==="text"?"bold":"normal",lineHeight:R.lineHeights.b3+"px",fontSize:R.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:P==="text"?"bold":"normal",lineHeight:R.lineHeights.b2+"px",fontSize:R.fontSizes.b2}}},z=function(R,P){return{small:{padding:P==="text"?"0px 4px":"0px 8px"},medium:{padding:P==="text"?"0px 5px":"0px 8px"},large:{padding:P==="text"?"1px 7px":"0px 8px"}}},L=Object(J.a)(function(M,R){var P=R.size,l=R.type;return{container:Object.assign({},Object(A.b)(M),V(M,l)[P],z(M,l)[P],{display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",height:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:M.colors.white,borderRadius:l==="text"?"6px":M.radius.round,backgroundColor:M.colors.red2})}}),U=e("./node_modules/react/jsx-runtime.js"),G=["component","size","type","children","className","overrideStyles","__staticSelector"];function H(M,R){if(M==null)return{};var P=N(M,R),l,u;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(M);for(u=0;u<p.length;u++)l=p[u],!(R.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,l)||(P[l]=M[l]))}return P}function N(M,R){if(M==null)return{};var P={},l=Object.keys(M),u,p;for(p=0;p<l.length;p++)u=l[p],!(R.indexOf(u)>=0)&&(P[u]=M[u]);return P}var B=Object(X.forwardRef)(function(M,R){var P=M.component,l=M.size,u=l===void 0?"small":l,p=M.type,r=p===void 0?"text":p,d=M.children,n=M.className,s=M.overrideStyles,C=M.__staticSelector,j=C===void 0?"span":C,t=H(M,G),b=P||"span",k=L({size:u,type:r},{overrideStyles:s,name:"span"}),O=k.classes,h=k.cx;return Object(U.jsx)(b,Object.assign({ref:R,className:h(O.container,n)},t,{children:d}))});B.displayName="@travelmakers-design/core/Badge"},"./packages/travelmakers-design-core/src/components/Badge/stories/Badge.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return U}),e.d(_,"TextType",function(){return G}),e.d(_,"NumberType",function(){return H});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/Badge/Badge.tsx"),X=e("./node_modules/react/index.js"),J=e.n(X),A=e("./node_modules/react/jsx-runtime.js"),V=e.n(A),z=`
    
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,L={Default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},TextType:{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},NumberType:{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}},z=`import {
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
NumberType.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"small\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"medium\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n      <Badge\\n        {...props}\\n        type=\\"number\\"\\n        size=\\"large\\"\\n        style={{ marginRight: \\"4px\\" }}\\n      >\\n        1\\n      </Badge>\\n    </div>\\n  );\\n}" }, ...NumberType.parameters };`,locationsMap:{default:{startLoc:{col:23,line:69},endLoc:{col:1,line:75},startBody:{col:23,line:69},endBody:{col:1,line:75}},"text-type":{startLoc:{col:24,line:77},endLoc:{col:1,line:96},startBody:{col:24,line:77},endBody:{col:1,line:96}},"number-type":{startLoc:{col:26,line:98},endLoc:{col:1,line:127},startBody:{col:26,line:98},endBody:{col:1,line:127}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(w.g,{}),Object(A.jsx)(w.f,{}),Object(A.jsx)(w.b,{}),Object(A.jsx)(w.d,{}),Object(A.jsx)(w.a,{story:w.c}),Object(A.jsx)(w.e,{})]})}},actions:{handles:["click button"]}}};var U=function(B){return Object(A.jsx)("div",{style:{padding:24,display:"flex"},children:Object(A.jsx)(re.a,Object.assign({},B,{children:"N"}))})};U.displayName="Default";var G=function(B){return Object(A.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(A.jsx)(re.a,Object.assign({},B,{type:"text",size:"small",style:{marginRight:"4px"},children:"N"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"text",size:"medium",style:{marginRight:"4px"},children:"N"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"text",size:"large",style:{marginRight:"4px"},children:"N"}))]})};G.displayName="TextType";var H=function(B){return Object(A.jsxs)("div",{style:{padding:24,display:"flex"},children:[Object(A.jsx)(re.a,Object.assign({},B,{type:"number",size:"small",style:{marginRight:"4px"},children:"1"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"number",size:"medium",style:{marginRight:"4px"},children:"1"})),Object(A.jsx)(re.a,Object.assign({},B,{type:"number",size:"large",style:{marginRight:"4px"},children:"1"}))]})};H.displayName="NumberType",U.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},G.parameters),H.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},H.parameters)},"./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json":function(q){q.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json":function(q){q.exports=JSON.parse('[{"key":"SERVICE","label":"\uD68C\uC6D0\uAC00\uC785 \uBC0F \uC774\uC6A9\uC57D\uAD00 \uADDC\uC815 \uB3D9\uC758 (\uD544\uC218)","content":"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\\n\\n\uC81C1\uC870(\uBAA9\uC801)\\n\uC774 \uC57D\uAD00\uC740 \uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \u201C\uD68C\uC0AC\u201D)\uAC00 \uC6B4\uC601\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8 \uB610\uB294 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158(\uC774\uD558 \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D)\uC744 \uD1B5\uD558\uC5EC \uAD6C\uB3C5\uC790 \uBC0F \uC77C\uBC18 \uC774\uC6A9\uACE0\uAC1D(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uB85C \uC815\uC758\uB428)\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4(\uC774\uD558 \uC81C2\uC870\uC5D0\uC11C \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB85C \uC815\uC758\uB428) \uAD00\uB828 \uAD8C\uB9AC \uBC0F \uC758\uBB34 \uC77C\uBC18\uC5D0 \uB300\uD55C \uBC95\uB960\uAD00\uACC4\uB97C \uBA85\uD655\uD788 \uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n\uC81C2\uC870(\uC6A9\uC5B4\uC758 \uC815\uC758)\\n\uC774 \uC57D\uAD00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC6A9\uC5B4\uC758 \uC815\uC758\uB294 \uB2E4\uC74C \uAC01 \uD638\uC640 \uAC19\uC2B5\uB2C8\uB2E4.\\n1. \u201C\uD638\uD154\u201D\uC740 \uD68C\uC0AC\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD68C\uC0AC\uC640 \uACC4\uC57D\uB41C \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uC2DC\uC124\uBB3C \uB610\uB294 \uADF8 \uC2DC\uC124\uBB3C\uC744 \uC18C\uC720\uD558\uB294 \uC8FC\uCCB4\uB85C\uC11C \uC785\uC810\uC0AC\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uB294 \uD68C\uC0AC\uC758 \uD638\uD154\uAD00\uB828 \uAD6C\uB3C5 \uC11C\uBE44\uC2A4 \uBC0F \uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\uB97C \uACB0\uC81C\uD558\uC5EC \uC774\uC6A9\uD558\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n3. \u201C\uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\u201D\uC740 \uD68C\uC0AC\uC640 \uD638\uD154 \uAC04 \uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\uC758 \uC774\uC6A9 \uB4F1\uACFC \uAD00\uB828\uD55C \uC0AC\uD56D\uC744 \uC815\uD55C \uC57D\uAD00\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC6D0\u201D\uC740 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAC00\uC785\uC808\uCC28\uC5D0 \uB530\uB77C \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uAC1C\uC778 \uB610\uB294 \uC0AC\uC5C5\uC790\uB85C\uC11C, \uD68C\uC0AC\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70 \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n5. \u201C\uBE44\uD68C\uC6D0\u201D\uC740 \uBCF8\uC870 \uC81C4\uD56D\uC5D0 \uB530\uB978 \u201C\uD68C\uC6D0\u201D\uC774 \uC544\uB2CC \uC790(SNS \uACC4\uC815\uC744 \uD1B5\uD574 \uB85C\uADF8\uC778\uD558\uB294 \uB4F1\uC758 \uBC29\uC2DD\uC73C\uB85C \uBCF8\uC778\uC778\uC99D\uC744 \uAC70\uCE58\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uD3EC\uD568)\uB85C\uC11C \uD68C\uC0AC\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4.\\n6. \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4\u201D\uB294, \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uD68C\uC0AC\uC758 \uC774\uC6A9\uAD8C\uC744 \uAD6C\uB9E4\uD558\uC5EC \uC815\uD574\uC9C4 \uAE30\uAC04\uB3D9\uC548 \uD638\uD154 \uB4F1 \uC219\uBC15\uC2DC\uC124\uC5D0\uC11C \uAC70\uC8FC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n7. \u201C\uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uAC00 \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uC774\uC6A9\uAD8C\uC774 \uC815\uD55C \uBC14\uC5D0 \uB530\uB77C \uD68C\uC0AC\uAC00 \uACC4\uC57D\uD55C \uD638\uD154 \uB4F1 \uC219\uBC15 \uC2DC\uC124\uC744 \uC790\uC720\uB86D\uAC8C \uC774\uC6A9\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n\\n\uC81C3\uC870(\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638 \uBC0F \uB300\uD45C\uC790 \uC131\uBA85, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uC8FC\uC18C(\uC18C\uBE44\uC790\uC758 \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uACF3\uC758 \uC8FC\uC18C\uB97C \uD3EC\uD568), \uC804\uD654\uBC88\uD638, \uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uD1B5\uC2E0\uD310\uB9E4\uC5C5\uC2E0\uACE0\uBC88\uD638, \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC\uCC45\uC784\uC790 \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC27D\uAC8C \uC54C \uC218 \uC788\uB3C4\uB85D \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC57D\uAD00\uC758 \uB0B4\uC6A9\uC740 \uC774\uC6A9\uC790\uAC00 \uC5F0\uACB0\uD654\uBA74\uC744 \uD1B5\uD558\uC5EC \uBCFC \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC18C\uBE44\uC790\uAE30\uBCF8\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uB0B4\uC6A9, \uAC1C\uC815\uC0AC\uC720 \uB4F1\uC744 \uBA85\uC2DC\uD558\uC5EC \uD604\uD589 \uC57D\uAD00\uACFC \uD568\uAED8 \u201C\uD68C\uC0AC\u201D \uC6F9\uC0AC\uC774\uD2B8\uC758 \uCD08\uAE30\uD654\uBA74\uC774\uB098 \uCD08\uAE30\uD654\uBA74\uACFC\uC758 \uC5F0\uACB0\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C \uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0 \uD639\uC740 7\uC77C \uC774\uC804\uAE4C\uC9C0 \uD68C\uC6D0 \uB300\uC0C1 \uC774\uBA54\uC77C \uBC1C\uC1A1\uD558\uC5EC \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD68C\uC6D0\uC5D0\uAC8C \uBD88\uB9AC\uD558\uAC8C \uC57D\uAD00\uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCD5C\uC18C\uD55C 30\uC77C \uC774\uC804\uC758 \uC720\uC608\uAE30\uAC04\uC744 \uB450\uACE0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC911\uC694\uB0B4\uC6A9\uC5D0 \uAD00\uD558\uC5EC \uAC1C\uC815 \uC804 \uB0B4\uC6A9\uACFC \uAC1C\uC815 \uD6C4 \uB0B4\uC6A9\uC744 \uBA85\uD655\uD558\uAC8C \uBE44\uAD50\uD558\uC5EC \uD68C\uC6D0\uC774 \uC54C\uAE30 \uC27D\uB3C4\uB85D \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815 \uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \uB3D9\uC758\uB97C \uBC1B\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC77C\uC790\uBD80\uD130 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n5. \u201C\uD68C\uC0AC\u201D\uAC00 \uC57D\uAD00\uC744 \uAC1C\uC815\uD558\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uB294 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC911\uB2E8\uD558\uACE0 \uD68C\uC6D0\uC778 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uC5D0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uC6A9\uC790\uAC00 \uC81C3\uD56D\uC758 \uBC29\uBC95 \uB4F1\uC73C\uB85C \uACE0\uC9C0\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uAC1C\uC815 \uC720\uC608\uAE30\uAC04 \uB0B4\uC5D0 \u201C\uD68C\uC0AC\u201D\uC758 \uAC1C\uC815\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uACA0\uB2E4\uB294 \uBA85\uC2DC\uC801\uC778 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 \uAC1C\uC815 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uD569\uB2C8\uB2E4.\\n6. \uC774 \uC57D\uAD00\uC740 \u201C\uD68C\uC0AC\u201D\uC640 \uC774\uC6A9\uC790\uAC04\uC5D0 \uC131\uB9BD\uB418\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAD00\uB828 \uAE30\uBCF8 \uC57D\uC815\uC785\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD55C \uACBD\uC6B0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uC5D0 \uAD00\uD558\uC5EC \uC801\uC6A9\uB420 \uC0AC\uD56D(\uC774\uD558 \u201C\uAC1C\uBCC4\uC57D\uAD00\u201D\uC774\uB77C \uD568)\uC744 \uC815\uD558\uC5EC \uBBF8\uB9AC \uACF5\uC9C0\uD560 \uC218 \uC788\uC73C\uBA70, \uC774\uB7EC\uD55C \uAC1C\uBCC4\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uACE0 \uD2B9\uC815 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uBCC4\uC57D\uAD00\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uC801\uC6A9\uB418\uACE0, \uC774 \uC57D\uAD00\uC740 \uBCF4\uCDA9\uC801\uC778 \uD6A8\uB825\uC744 \uAC16\uC2B5\uB2C8\uB2E4. \uAC1C\uBCC4\uC57D\uAD00\uC758 \uBCC0\uACBD\uC5D0 \uAD00\uD574\uC11C\uB294 \uC81C3\uD56D \uB0B4\uC9C0 \uC81C5\uD56D\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n7. \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uB3D9\uC758\uD55C \uC57D\uAD00\uC5D0 \uAD00\uD558\uC5EC \uC5F4\uB78C\uC744 \uC694\uAD6C\uD560 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uAC00\uC785\uC2DC \uD639\uC740 \uACB0\uC81C\uC2DC \uAE30\uC7AC\uD55C \uC804\uC790\uC6B0\uD3B8 / \uAC1C\uBCC4 \uC5F0\uB77D\uCC98\uB85C \uB9C1\uD06C \uD615\uD0DC\uB85C \uC804\uC1A1\uD569\uB2C8\uB2E4.\\n8. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uAD6C\uCCB4\uC801\uC778 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC57D\uAD00 \uBC0F \uC774\uC6A9\uC870\uAC74\uC744 \uAC01 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uBCC4\uB3C4\uB85C \uC815\uD558\uC5EC \uD68C\uC6D0\uC758 \uB3D9\uC758\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uBCC4\uC11C\uBE44\uC2A4\uC5D0 \uB300\uD55C \uC774\uC6A9\uC57D\uAD00 \uB4F1\uC774 \uBCF8 \uC57D\uAD00\uC5D0 \uC6B0\uC120\uD569\uB2C8\uB2E4.\\n9. \uC774 \uC57D\uAD00\uACFC \uAC1C\uBCC4\uC57D\uAD00\uC5D0\uB3C4 \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \u201C\uD68C\uC0AC\u201D\uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC57D\uAD00\uC758 \uADDC\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790 \uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638 \uC9C0\uCE68 \uB4F1 \uAD00\uACC4\uBC95\uB839, \uC815\uBD80\uAE30\uAD00\uC758 \uD574\uC11D \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.\\n\uAC00. \u201C\uD638\uD154\u201D\uC758 \uBAA8\uC9D1 \uBC0F \uAD00\uB9AC\\n\uB098. \u201C\uD638\uD154\u201D\uACFC \u201C\uC774\uC6A9\uC790\u201D\uAC04\uC758 \uC774\uC6A9\uAD8C \uBC1C\uD589 \uBC0F \uC774\uC5D0 \uBD80\uC218\uD558\uB294 \uACB0\uC81C\xB7\uC815\uC0B0 \uAD00\uB9AC\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD558\uB294 \uC5C5\uBB34 \uB4F1\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uAE30\uC220\uC801 \uD658\uACBD \uBCC0\uD654 \uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC548\uB0B4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC77C\uBD80\uB97C \uC81C\uD734\uC5C5\uCCB4 \uB4F1 \uC81C3\uC790\uC5D0 \uC704\uD0C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218 \uC810\uAC80, \uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC758 \uD3ED\uC8FC \uBC0F \uAD6D\uAC00\uBE44\uC0C1\uC0AC\uD0DC, \uC815\uC804, \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uD638\uD154\uC758 \uC601\uC5C5\uC911\uB2E8 \uB4F1\uC758 \uBD88\uAC00\uD56D\uB825\uC801\uC778 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC0AC\uC5C5 \uC885\uBAA9\uC758 \uC804\uD658 \uBC0F \uD3EC\uAE30 \uB610\uB294 \uC5C5\uCCB4\uAC04 \uD1B5\uD569, \uC11C\uBE44\uC2A4 \uACE0\uB3C4\uD654 \uB4F1\uC758 \uC774\uC720\uB85C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uACBD\uC6B0\uC5D0\uB294 \uACF5\uC9C0\uC758 \uBC29\uC2DD\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD574\uB2F9 \uB0B4\uC6A9\uC744 \uC0AC\uC804\uC5D0 \uD1B5\uC9C0\uD569\uB2C8\uB2E4.\\n\\n\uC81C6\uC870(\uD68C\uC6D0 \uAC00\uC785 \uBC0F \uC815\uBCF4\uBCC0\uACBD)\\n1. \u201C\uD68C\uC6D0\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uBC29\uBB38\uACBD\uB85C\\n2. \u201C\uD638\uD154\u201D\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uB2E4\uC74C \uAC01 \uD638\uC758 \uD638\uD154\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC368 \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4.\\n\uAC00. \uD544\uC218\uAE30\uC7AC \uC815\uBCF4: ID(\uC804\uC790\uC6B0\uD3B8\uC8FC\uC18C) \uBC0F \uBE44\uBC00\uBC88\uD638, \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uD638\uD154\uBA85\\n\uB098. \uC120\uD0DD\uAE30\uC7AC \uC815\uBCF4: \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4\\n\uB2E4. \uCD94\uAC00 \uAE30\uC7AC \uC815\uBCF4: \\n\uD638\uD154 \uC815\uBCF4\\n- \uD638\uD154 \uC774\uBBF8\uC9C0\\n- \uD638\uD154\uBA85\\n- \uD638\uD154 \uC8FC\uC18C\\n- \uD638\uD154 \uADFC\uCC98 \uC5ED\uBA85\\n- \uCE35\uC218, \uCE35\uBCC4 \uAC1D\uC2E4 \uC218\\n- \uC785\uC8FC \uAC00\uB2A5 \uAC1D\uC2E4 \uC218 \uB4F1\\n- \uC131\uAE09\\n\\n\uCCB4\uD06C\uD3EC\uC778\uD2B8\\n\uB8F8\uD0C0\uC785\\n\uACF5\uD1B5\uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCA0\uB124\uD54F\\n\uD638\uD154\uC5D0\uC0B6 only \uBCA0\uB124\uD54F\\n\uAE30\uAC04 \uBCC4 \uAC00\uACA9 \uC124\uC815\\n\uC5B4\uBA54\uB2C8\uD2F0\\n\uBD88\uD3EC\uD568 \uC0AC\uD56D\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4(\uC138\uD0C1\uAE30, \uADFC\uCC98 \uD3B8\uC758\uC810 \uB4F1)\\n\uB9E4\uB2C8\uC800 \uC815\uBCF4\\n- \uB9E4\uB2C8\uC800 \uC131\uBA85\\n- \uC5F0\uB77D\uCC98\\n- \uBD80\uC11C\uBA85\\n- \uC9C1\uAE09\\n\uD22C\uC5B4 \uAC00\uB2A5 \uC2DC\uAC04\\n\uCCB4\uD06C\uC778/\uC544\uC6C3 \uC2DC\uAC04\\n\uAC1D\uC2E4 \uB0B4 \uC815\uBCF4(\uCC3D\uBB38 \uAC1C\uD3D0 \uC5EC\uBD80 \uB4F1)\\n\uC785\uC810 \uBC29\uC2DD(\uC218\uC218\uB8CC/\uC785\uAE08\uAC00)\\n\uC801\uC6A9 \uAE30\uC900(\uACB0\uC81C\uC77C/\uC785\uC8FC\uC77C)\\n\uBD80\uB300\uC2DC\uC124 \uC815\uBCF4\\n\\n3. \uC81C1\uD56D\uACFC \uC81C2\uD56D\uC758 \uD544\uC218\uAE30\uC7AC \uC815\uBCF4 \uC911 \uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uC640 \uD639\uC740 \uAE30\uD638\uAC00 \uBAA8\uB450 \uD3EC\uD568\uB41C 8\uC790\uB9AC-16\uC790\uB9AC \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2E0\uCCAD\uC744 \uC2B9\uB099\uD569\uB2C8\uB2E4.\\n\uAC00. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0 (\uB2E4\uB9CC, \u201C\uD68C\uC0AC\u201D\uC758 \uD68C\uC6D0 \uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.)\\n\uB098. \uC2E0\uCCAD \uB0B4\uC6A9\uC774 \uC0AC\uC2E4\uACFC \uB2E4\uB974\uAC70\uB098, \uD544\uC218 \uAE30\uC7AC\uC815\uBCF4\uC758 \uB204\uB77D \uB610\uB294 \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC218 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n\uB77C. \u201C\uD638\uD154\u201D\uC758 \uACBD\uC6B0 \uC785\uC810\uC0AC \uC774\uC6A9 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB41C \uC785\uC810 \uC870\uAC74 \uAE30\uC900\uC5D0 \uBD80\uD569\uD558\uC9C0 \uC54A\uC744 \uC2DC\\n5. \uD68C\uC6D0\uAC00\uC785\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \uC804\uD56D\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C, \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD55C \uB54C\uB85C \uD569\uB2C8\uB2E4.\\n6. \uD68C\uC6D0\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD68C\uC6D0\uC815\uBCF4\uC5D0 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uC5D0 \uC804\uC790\uC6B0\uD3B8 \uBC0F \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\uAC00. \uC774\uC6A9\uC790 : \uC131\uBA85 \uBC0F \uD734\uB300\uC804\uD654\uBC88\uD638\\n\uB098. \uD638\uD154 : \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00 \uC900\uC6A9\\n7. \uD68C\uC6D0\uC740 \uC81C6\uD56D\uC758 \uD68C\uC6D0\uC815\uBCF4\uB97C \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uD68C\uC6D0\uC815\uBCF4\uB4E4\uC744 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uB97C \uD1B5\uD558\uC5EC \uC790\uC720\uB86D\uAC8C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C7\uC870 (\uC2B9\uB099\uC758 \uC720\uBCF4)\\n\uD68C\uC0AC\uB294 \uC11C\uBE44\uC2A4 \uC778\uB825 \uBD80\uC871 \uBC0F \uAE30\uC220\uC801 \uC7A5\uC560 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uD574\uC18C\uB420 \uB54C\uAE4C\uC9C0 \uC81C6\uC870 \uC81C4\uD56D\uC758 \uC2B9\uB099\uC744 \uC720\uBCF4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C8\uC870 (\uD68C\uC6D0\uD0C8\uD1F4 \uBC0F \uC11C\uBE44\uC2A4 \uC815\uC9C0)\\n1. \uC774\uC6A9\uC790\uB294 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \u201C\uD68C\uC0AC\u201D\uC758 \uD638\uD154\uC5D0\uC0B6 \uB9C8\uC774\uD398\uC774\uC9C0 \uB0B4 \uD0C8\uD1F4 \uBC84\uD2BC\uC744 \uD1B5\uD574 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70, \u201C\uD68C\uC0AC\u201D\uB294 \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \uD68C\uC6D0 \uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D\uB294 \uD68C\uC6D0\uC790\uACA9\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD558\uAC70\uB098 \uB610\uB294 \uC81C\uACF5\uC911\uC778 \uC11C\uBE44\uC2A4 \uC911\uB2E8\uACFC \uB354\uBD88\uC5B4 \uC774\uC6A9\uC911\uC778 \u201C\uD638\uD154\u201D\uC5D0\uC11C \uC989\uC2DC \uD1F4\uC2E4 \uCC98\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC0AC\uC720\uB294 \u201C\uD638\uD154\u201D\uC5D0 \uD55C\uC815\uD558\uC5EC \uC801\uC6A9\uB418\uB294 \uD68C\uC6D0 \uD0C8\uD1F4 \uC0AC\uC720\uC774\uBA70 \uB2E4\uBAA9 \uB0B4\uC9C0 \uB9C8\uBAA9 \uC774\uC678 \uBCF8 \uC57D\uAD00\uC5D0 \uBA85\uC2DC\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC740 \uC0AC\uD56D\uC740 \uC785\uC810\uC0AC \uC774\uC6A9\uC57D\uAD00\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\uAC00. \uC81C6\uC870 \uC81C4\uD56D \uAC01\uD638 \uC0AC\uC720\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC774\uD6C4\uC5D0 \uD655\uC778\uB41C \uACBD\uC6B0\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \u201C\uD638\uD154\uC5D0\uC0B6\u201D \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC6B0\uD68C\uC801\uC73C\uB85C \uC11C\uBE44\uC2A4\uB97C \uCCB4\uACB0\uD558\uB294 \uACBD\uC6B0\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uAD6C\uB9E4\uD55C \u201C\uC774\uC6A9\uC790\u201D\uB85C\uBD80\uD130 \u201C\uD638\uD154\u201D \uAD00\uB828 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uB77C. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uC774 \uC11C\uBE44\uC2A4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC704\uD0C1\uCC98\uB9AC\uD558\uB294 \uACBD\uC6B0\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uBC0F \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uC81C\uC2DC\uD558\uC5EC \uD655\uC815\uB41C \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uB2E4\uB978 \uC0C1\uC774\uD55C \uC11C\uBE44\uC2A4\uAC00 \uC81C\uACF5\uB418\uC5C8\uB2E4\uB294 \uCEF4\uD50C\uB808\uC778\uC774 2\uD68C \uC774\uC0C1 \uC811\uC218\uB41C \uACBD\uC6B0\\n\uBC14. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uACBD\uC6B0\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \u201C\uD68C\uC0AC\u201D \uD639\uC740 \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uAC70\uB098 \uD76C\uB871\uD558\uB294 \uACBD\uC6B0\\n\uC544. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD558\uC5EC \uC9C1\uC6D0\uC5D0\uAC8C \uD3ED\uC5B8 \uB610\uB294 \uC74C\uB780\uD55C \uC5B8\uD589\uC744 \uD55C \uACBD\uC6B0\\n\uC790. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9 \uAD8C\uD55C\uC744 \uC81C3\uC790\uC5D0\uAC8C \uC591\uB3C4\uD558\uAC70\uB098 \uC774\uC5D0 \uC900\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCC28. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758\uC5C6\uC774, \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n\uCE74. \uAE30\uD0C0 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uC9C0\uC7A5\uC744 \uC904 \uC6B0\uB824\uAC00 \uC788\uC5B4 \uD68C\uC6D0 \uC720\uC9C0\uAC00 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0\\n- \uC608\uC57D\uC790\uC640 \uC2E4\uC81C \uD22C\uC219\uAC1D\uC774 \uC0C1\uC774\uD55C \uACBD\uC6B0\\n- \u201C\uD638\uD154\u201D\uACFC \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0\\n- \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uD558\uB294 \uACBD\uC6B0\\n3. \uB2E4\uC74C \uAC01 \uD638\uC758 \uC0AC\uC720\uAC00 \uC788\uB294 \uACBD\uC6B0 \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC758 \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC720\uBCF4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD604\uC7AC \uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\uB098. \uC0AC\uC804\uC5D0 \uC608\uC57D\uB41C \uC11C\uBE44\uC2A4 \uC774\uC6A9\uAD8C\uC774 \uC788\uB294 \uACBD\uC6B0\\n\uB2E4. \uD574\uB2F9 \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uC815\uC0B0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC5D0 \uB300\uD55C \uD0C8\uD1F4\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB41C \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uD574\uB2F9 \uD68C\uC6D0\uC758 \uAC1C\uC778 \uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \u201C\uD68C\uC0AC\u201D\uAC00 \uD574\uB2F9 \uC0AC\uC720\uAC00 \uC874\uC18D\uD558\uB294 \uB54C\uAE4C\uC9C0 \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAD00\uB828\uBC95\uB839\uC5D0\uC11C \uD0C8\uD1F4\uD55C \uD68C\uC6D0\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uC720\uC9C0\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\\n\uB098. \uBC94\uC8C4 \uC218\uC0AC \uBC0F \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4 \uAD00\uB828 \uBD84\uC7C1\uD574\uACB0\uC744 \uC704\uD558\uC5EC \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0\\n\\n\uC81C9\uC870 (\uD68C\uC6D0 \uC7AC\uAC00\uC785)\\n1. \uC81C8\uC870 \uC81C1\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uC81C8\uC870 \uC81C2\uD56D\uC5D0 \uC758\uD558\uC5EC \uD0C8\uD1F4\uB97C \uD558\uC600\uB358 \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uC758 \uC2B9\uC778\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0 \uD55C\uD558\uC5EC \uC7AC\uAC00\uC785\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uACBD\uC6B0 \uC7AC\uAC00\uC785\uD68C\uC6D0\uC740 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uC600\uB358 ID\uB97C \uB2E4\uC2DC \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C10\uC870 (\uD734\uBA74\uACC4\uC815 \uC804\uD658)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uCD5C\uADFC 1\uB144\uAC04 \uBBF8\uC811\uC18D\uD55C \uD68C\uC6D0\uC758 \uACC4\uC815\uC744 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC0AC\uB294 \uC81C1\uD56D\uC758 \uD734\uBA74\uACC4\uC815 \uC804\uD658 1\uAC1C\uC6D4 \uC804\uC5D0 \uD734\uBA74\uACC4\uC815 \uC804\uD658\uC608\uC815\uC0AC\uC2E4\uC744 \uD574\uB2F9 \uD68C\uC6D0\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC5D0 \uC758\uD574 \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC774 \uB2E4\uC2DC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0 \uD734\uB300\uC804\uD654\uBC88\uD638 \uB610\uB294 \uC774\uBA54\uC77C \uC7AC\uC778\uC99D\uC808\uCC28\uB97C \uAC70\uCCD0 \uC815\uC0C1\uC804\uD658\uC2E0\uCCAD\uC744 \uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uD734\uBA74\uACC4\uC815\uC73C\uB85C \uC804\uD658\uB41C \uD68C\uC6D0\uC758 \uACBD\uC6B0 \uC0C1\uD488 \uC11C\uBE44\uC2A4 \uC548\uB0B4 \uBC0F \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uB4F1\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C11\uC870 (\uD734\uBA74\uACC4\uC815 \uBC0F \uBE44\uD68C\uC6D0)\\n1. \uBE44\uD68C\uC6D0\uC740 \uC77C\uBD80 \uD68C\uC6D0 \uC804\uC6A9 \uD398\uC774\uC9C0(\uB9C8\uC774\uD398\uC774\uC9C0, \uD638\uD154 \uB9E4\uB2C8\uC800 \uD398\uC774\uC9C0, \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0)\uB97C \uC81C\uC678\uD55C \uC548\uB0B4 \uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uAC00\uC785\uC744 \uD558\uC9C0 \uC54A\uC740 \uC0C1\uD0DC\uC758 \uBE44\uD68C\uC6D0\uC740 \uC131\uD568, \uC77C\uC815 \uC815\uBCF4, \uD638\uD154 \uBC0F \uC774\uC6A9\uAD8C\uC744 \uAE30\uC785 \uBC0F \uC120\uD0DD \uC2DC, \uC608\uC57D \uBC0F \uACB0\uC81C\uB97C \uD560 \uC218 \uC788\uC73C\uBA70 \uD734\uB300\uD3F0 \uC778\uC99D \uBC0F \uAC1C\uC778\uC815\uBCF4\uC774\uC6A9\uC57D\uAD00/\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD6C4 \uACB0\uC81C \uC644\uB8CC \uC2DC, \uD68C\uC6D0\uAC00\uC785\uC73C\uB85C \uC790\uB3D9 \uC804\uD658\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D \uBC0F \uC81C2\uD56D\uC740 \uD734\uBA74\uACC4\uC815\uC5D0 \uC900\uC6A9\uB429\uB2C8\uB2E4.\\n\\n\uC81C12\uC870 (\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uC6A9\uC790\uC5D0\uAC8C \uAC1C\uBCC4\uC801\uC778 \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uAC00 \uD68C\uC6D0\uAC00\uC785 \uC2DC \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C, \uD639\uC740 \uACB0\uC81C \uC2DC \uC81C\uACF5\uD55C \uC5F0\uB77D\uCC98(\uBA54\uC2E0\uC800 \uB4F1)\uB85C \uD574\uB2F9 \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uAC00 \uBD88\uD2B9\uC815 \uB2E4\uC218\uC758 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uB294 \uACBD\uC6B0, \u201C\uD68C\uC0AC\u201D \uD648\uD398\uC774\uC9C0\uC5D0 \uACF5\uC9C0 \uBC29\uC2DD\uC73C\uB85C \uD1B5\uC9C0\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC \uBC0F \uC758\uBB34\uC5D0 \uC911\uB300\uD55C \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uD1B5\uC9C0\uB294 \uBC18\uB4DC\uC2DC \uC81C1\uD56D\uC758 \uAC1C\uBCC4 \uD1B5\uC9C0\uC758 \uBC29\uC2DD\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C13\uC870 (\uC774\uC6A9\uC790\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34)\\n1. ID \uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n2. \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID\uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uD574\uD0B9\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uD655\uC778\uD55C \uACBD\uC6B0, \uC989\uC2DC \uC774\uB97C \uD68C\uC0AC\uC5D0 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4.\\n\\n\uC81C14\uC870 (\uC774\uC6A9\uC790\uC758 \uC758\uBB34)\\n1. \uBCF8 \uC57D\uAD00\uC5D0 \uB530\uB77C \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uB2E4\uC74C \uAC01 \uD638 \uD589\uC704\uB85C \uC778\uD574 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uB294 \uACBD\uC6B0, \uC190\uD574\uBC30\uC0C1 \uCCAD\uAD6C \uBC0F \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC911\uC9C0, \uD68C\uC6D0 \uD0C8\uD1F4 \uB4F1 \uC81C\uC7AC\uC870\uCE58\uAC00 \uC9C4\uD589 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uAC70\uB098 \uD5C8\uC704\uC758 \uC815\uBCF4\uB97C \uD65C\uC6A9\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uD589\uC704\\n\uB098. \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uB0B4\uC6A9\uACFC \uBB34\uAD00\uD558\uAC8C \uBD80\uB2F9\uD55C \uBC29\uBC95\uC73C\uB85C \uD0C0 \u201C\uD68C\uC6D0\u201D\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uD589\uC704\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uC11C\uBE44\uC2A4\uC81C\uACF5\uACFC \uAD00\uB828\uD55C \uC601\uB9AC\uD589\uC704\\n\uB77C. \uBCF8\uC778\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB9C8. \u201C\uD68C\uC0AC\u201D \uB610\uB294 \uD0C0\uC778\uC758 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC744 \uBB34\uB2E8\uC73C\uB85C \uCE68\uD574\uD558\uB294 \uD589\uC704\\n\uBC14. \uD68C\uC0AC \uBC0F \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uD589\uC704\\n\uC0AC. \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC9C0\uAE09\uD558\uC5EC\uC57C \uD560 \uAE08\uC561 \uBC0F \uAE30\uD0C0 \uBE44\uC6A9 \uC9C0\uAE09\uC744 \uC9C0\uCCB4\uD558\uB294 \uD589\uC704\\n\uC544. \u201C\uD638\uD154\u201D \uBC0F \uC774\uC678 \uC219\uBC15\uC2DC\uC124\uC758 \uAC00\uC6A9 \uAC00\uB2A5 \uAC1D\uC2E4 \uBD80\uC871 \uB4F1 \u201C\uD638\uD154\u201D\uCE21\uC758 \uAC1D\uAD00\uC801 \uC0AC\uC720\uB85C \uC778\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBD88\uAC00 \uC2DC, \u201C\uD68C\uC0AC\u201D\uC5D0 \uBB34\uB9AC\uD55C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC694\uAD6C\uB97C \uD558\uB294 \uD589\uC704\\n\uC790. \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uC5EC \uD68C\uC0AC\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uBC29\uD574\uD558\uB294 \uC77C\uCCB4\uC758 \uD589\uC704\\n\\n\uC81C15\uC870 (\uD68C\uC0AC\uC758 \uC758\uBB34)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uBCF8 \uC57D\uAD00 \uC81C5\uC870\uC758 \uC548\uC815\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uC5EC\uC57C \uD560 \uC758\uBB34\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uC694\uCCAD\uC0AC\uD56D \uB610\uB294 \uAC74\uC758\uC0AC\uD56D\uC774 \uC788\uC744 \uACBD\uC6B0, \uC2E0\uC18D\uD788 \uC774\uB97C \uCC98\uB9AC\uD558\uC5EC \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \u201C\uD68C\uC0AC\u201D\uB294 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uACFC\uC815\uC5D0\uC11C \uC218\uC9D1\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uAD00\uB828\uBC95\uB839\uC5D0 \uADFC\uAC70\uD558\uC5EC \uAD00\uB9AC\u2022\uBCF4\uD638\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \u201C\uD68C\uC0AC\u201D\uB294 \uD648\uD398\uC774\uC9C0 \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uB418\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uAD00\uB9AC\uD558\uACE0 \uAC10\uB3C5\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C16\uC870 (\uAC8C\uC2DC\uBB3C\uC758 \uC0AD\uC81C \uBC0F \uB4F1\uB85D\uAC70\uBD80)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uB2E4\uC74C \uAC01 \uD638\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\uB97C \uC0AC\uC804\uD1B5\uC9C0 \uC5C6\uC774 \uC0AD\uC81C\uD558\uAC70\uB098 \uB4F1\uB85D \uAC70\uBD80\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD0C0\uC778\uC758 \uBA85\uC608\uB97C \uD6FC\uC190\uD558\uB294 \uB0B4\uC6A9\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB098. \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC640 \uBB34\uAD00\uD55C \uC74C\uB780\uD55C \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB2E4. \u201C\uD68C\uC0AC\u201D\uC758 \uB3D9\uC758 \uC5C6\uB294 \uC601\uB9AC \uBAA9\uC801\uC758 \uAD11\uACE0 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\uB77C. \uAE30\uD0C0 \uAD00\uB828 \uBC95\uB839 \uBC0F \uC0AC\uD68C\uC0C1\uADDC\uC5D0 \uC704\uBC30\uB418\uC5B4 \u201C\uD68C\uC0AC\u201D\uC758 \uC815\uC0C1\uC801\uC778 \uC11C\uBE44\uC2A4\uC5D0 \uC9C0\uC7A5\uC744 \uCD08\uB798\uD560 \uC5FC\uB824\uAC00 \uD604\uC800\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uAC8C\uC2DC\uBB3C \uBC0F \uC790\uB8CC\\n\\n\uC81C17\uC870 (\uD68C\uC6D0\uC758 \uAC8C\uC2DC\uBB3C \uBC0F \uC800\uC791\uAD8C)\\n1. \u201C\uAC8C\uC2DC\uBB3C\u201D\uC774\uB77C \uD568\uC740 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uBA74\uC11C \uAC8C\uC2DC\uD55C \uAE00, \uC0AC\uC9C4, \uAC01\uC885 \uD30C\uC77C\uACFC \uB9C1\uD06C \uB4F1\uC744 \uB9D0\uD569\uB2C8\uB2E4.\\n2. \u201C\uD638\uD154\uC5D0\uC0B6 \uD50C\uB7AB\uD3FC\u201D\uC5D0 \uAC8C\uC2DC\uD55C \uC774\uC6A9\uC790\uC758 \uD6C4\uAE30 \uB4F1 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C\uC740 \uAC01 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC73C\uB098, \uAC01 \uAC8C\uC2DC\uC790\uB294 \uAC8C\uC2DC\uBB3C\uC5D0 \uB300\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uAC00 \uC774\uB97C \uC790\uC720\uB85C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uD5C8\uB77D\uD569\uB2C8\uB2E4. \u201C\uD68C\uC0AC\u201D\uB294 \uB9C8\uCF00\uD305 \uBAA9\uC801 \uB4F1\uC73C\uB85C \uC774\uB97C \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E8, \uAC8C\uC2DC\uC790\uAC00 \u201C\uD68C\uC0AC\u201D\uC5D0 \uC774\uC6A9\uC81C\uD55C\uC744 \uC694\uCCAD\uD560 \uACBD\uC6B0 \u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC640 \uAD00\uB828\uD558\uC5EC \uAC8C\uC2DC\uC790\uC640 \uBCC4\uB3C4\uB85C \uD611\uC758\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n3. \uC774\uC6A9\uC790\uC758 \uAC8C\uC2DC\uBB3C\uC5D0 \uC758\uD558\uC5EC \uC81C3\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD558\uAC70\uB098 \uAE30\uD0C0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0, \uC774\uC6A9\uC790\uB294 \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9C0\uBA70, \u201C\uD68C\uC0AC\u201D\uB97C \uBA74\uCC45\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.\\n4. \uC774\uC6A9\uC790\uAC00 \uC774\uC6A9\uACC4\uC57D \uD574\uC9C0\uB97C \uD55C \uACBD\uC6B0 \uD0C0\uC778\uC5D0 \uC758\uD574 \uBCF4\uAD00, \uB2F4\uAE30 \uB4F1\uC73C\uB85C \uC7AC\uAC8C\uC2DC \uB418\uAC70\uB098 \uBCF5\uC81C\uB41C \uAC8C\uC2DC\uBB3C\uACFC \uD0C0\uC778\uC758 \uAC8C\uC2DC\uBB3C\uACFC \uACB0\uD569\uB418\uC5B4 \uC81C\uACF5\uB418\uB294 \uAC8C\uC2DC\uBB3C, \uACF5\uC6A9 \uAC8C\uC2DC\uD310\uC5D0 \uB4F1\uB85D\uB41C \uAC8C\uC2DC\uBB3C \uB4F1\uC740 \uC0AD\uC81C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C18\uC870 (\uC815\uBCF4\uC81C\uACF5 \uBC0F \uAD11\uACE0)\\n\u201C\uD68C\uC0AC\u201D\uB294 \uC774\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD558\uC5EC \uCC38\uACE0\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uC815\uBCF4\uB97C \uD68C\uC6D0\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uD68C\uC6D0\uC740 \u201C\uD68C\uC0AC\u201D\uAC00 \uC81C\uACF5\uD558\uB294 \uC815\uBCF4\uC758 \uC218\uC2E0\uC744 \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 19\uC870 (\uC774\uC6A9\uC790\uC758 \uC608\uC57D \uBCC0\uACBD \uADDC\uC815)\\n1. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uC758 \uBCC0\uACBD\uC740 \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \uC9C4\uD589\uB429\uB2C8\uB2E4.\\n\uAC00. \uB8F8\uD0C0\uC785(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0), \uC0C1\uD488 \uBCC0\uACBD(\uC694\uAE08\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uBCC0\uACBD \uBD88\uAC00\uD558\uBA70 \uCDE8\uC18C \uD6C4 \uC7AC \uACB0\uC81C\\n\uB098. \uC785\uC8FC\uC790\uBA85 \uBCC0\uACBD(\uC2E4\uC81C \uD22C\uC219\uC790\uBA85\uACFC \uACB0\uC81C\uC790 \uBA85\uC774 \uB2E4\uB978 \uACBD\uC6B0)\uC740 \uACE0\uAC1D\uC13C\uD130 \uC9C1\uC811 \uC5F0\uB77D \uD6C4 \uBCC0\uACBD \uAC00\uB2A5\\n\uB2E4. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC\uC77C \uC804 : 4\uC77C(96\uC2DC\uAC04) \uC804\uAE4C\uC9C0 \uC608\uC57D \uBCC0\uACBD 2\uD68C \uAC00\uB2A5 (\uCCB4\uD06C\uC778 \uC2DC\uAC04 15\uC2DC \uAE30\uC900)\\n\uB77C. \uC608\uC57D \uD655\uC815 \uD6C4, \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815\uC77C\uC774 \uC785\uC8FC 4\uC77C(96\uC2DC\uAC04) \uC774\uB0B4\uC778 \uACBD\uC6B0 : \uBCC0\uACBD \uBD88\uAC00\\n\uB9C8. \u201C\uB2E4\u201D\uBAA9\uC5D0 \uB530\uB77C \uC608\uC57D \uBCC0\uACBD\uC744 \uC9C4\uD589 \uD6C4, \uCDE8\uC18C\uD558\uB294 \uACBD\uC6B0 : \uBCC0\uACBD \uC804 \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uAE30\uC900\uC73C\uB85C \uD328\uB110\uD2F0 \uC801\uC6A9\\n\\n\uC81C 20\uC870 (\uC774\uC6A9\uAD8C\uC758 \uC5F0\uC7A5 \uADDC\uC815)\\n1. \uC5F0\uC7A5\uC774\uB780 \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uD648\uD398\uC774\uC9C0\uC5D0 \uB178\uCD9C \uB41C \uC774\uC6A9\uAD8C\uC744 \uCD5C\uCD08 \uAD6C\uC785 \uC774\uD6C4, \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uC6F9\uC0AC\uC774\uD2B8\uB0B4 \uB178\uCD9C\uB41C \uC774\uC6A9\uAD8C \uD639\uC740 \uC774\uC6A9\uAD8C \uC774\uC678 \uAE30\uAC04\uC758 \uC219\uBC15 \uC77C\uC218\uB97C \uCD94\uAC00 \uC815\uC0B0\uD558\uC5EC \uCCB4\uD06C\uC544\uC6C3 \uB0A0\uC9DC\uB97C \uC5F0\uC7A5\uD558\uB294 \uC81C\uB3C4\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\\n2. \uC5F0\uC7A5 \uC774\uC6A9 \uAE08\uC561 \uCC45\uC815 \uBC29\uC2DD\uC740 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uD558\uB2E8\uC758 FAQ \uC601\uC5ED\uC5D0 \uBA85\uC2DC\uD569\uB2C8\uB2E4.\\n3. \uC2E4\uC2DC\uAC04 \uAC00\uACA9 \uBCC0\uB3D9\uC774 \uB418\uB294 \uC219\uBC15\uC2DC\uC124 \uD2B9\uC131 \uC0C1, \uCD5C\uCD08 \uAD6C\uB9E4\uD55C \uC774\uC6A9\uAD8C\uACFC \uB3D9\uC77C \uAE30\uAC04 \uC5F0\uC7A5\uD558\uB354\uB77C\uB3C4 \uAE08\uC561\uC774 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC73C\uBA70, \uAE08\uC561 \uBCC0\uB3D9\uC5D0 \uB300\uD574 \uC0AC\uC804 \uACE0\uC9C0\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n4. \uC5F0\uC7A5 \uC2E0\uCCAD\uC740 \uCCB4\uD06C \uC544\uC6C3 \uC77C\uC790 \uAE30\uC900 7\uC77C \uC774\uC804\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uD638\uD154\uC758 \uB8F8 \uD604\uD669\uC5D0 \uB530\uB77C \uAC1D\uC2E4 \uD655\uBCF4\uAC00 \uC5B4\uB824\uC6CC \uC5F0\uC7A5\uC774 \uBD88\uAC00 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\uC81C 21\uC870 (\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815)\\n1. \u201C\uD68C\uC0AC\u201D\uAC00 \u201C\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18 \uC6B4\uC601\uC57D\uAD00\u201D\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \u201C\uC774\uC6A9\uAD8C\u201D \uC774\uC6A9 \uC774\uC804 \uBC0F \uC774\uC6A9 \uC774\uD6C4\uC5D0 \uC774\uC6A9\uAD8C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0, \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC5D0 \uAD00\uD55C \uB2E4\uC74C \uAC01 \uD638\uC758 \uAE30\uC900\uC5D0 \uB530\uB77C \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uCD94\uAC00 \uC694\uAE08\uC744 \uBD80\uB2F4\uD569\uB2C8\uB2E4.\\n2. \uB2E4\uB9CC \uD638\uD154\uC5D0\uC0B6 \uC6F9\uC0AC\uC774\uD2B8 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4, \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uBA85\uC2DC\uD55C \uACBD\uC6B0 \uD638\uD154\uBCC4 \uC0C1\uC138 \uD398\uC774\uC9C0 \uB0B4 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD558\uBA70 \uCF54\uB85C\uB098 \uB4F1 \uD638\uD154 \uADC0\uCC45 \uC0AC\uC720 \uBC0F \uC774\uC6A9\uC790\uC758 \uB2E8\uC21C \uBCC0\uC2EC \uC774\uC678\uC758 \uC0AC\uC720\uB85C \uACB0\uC81C\uB97C \uCDE8\uC18C(\uCCA0\uD68C)\uD574\uC57C \uD558\uB294 \uACBD\uC6B0 \u201C\uD638\uD154\u201D\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\uC744 \uC6B0\uC120\uD558\uC5EC \uC801\uC6A9\uD569\uB2C8\uB2E4. \\n\uAC00. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 21\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08 \uC804\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB098. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 14-20\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08(\uC774\uC6A9\uAD8C \uC608\uC815\uC77C \uD0C0\uC778 \uC608\uC57D\uC744 \uBC1B\uC9C0 \uC54A\uC544 \uBC1C\uC0DD\uD558\uB294 \uBE44\uC6A9\uC744 \uC758\uBBF8\uD568, \uC774\uD558 \uAC19\uC74C) 10%\uB97C \uC81C\uC678\uD55C 90%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB2E4. \uCCB4\uD06C\uC778 \uC608\uC815 \uC77C\uC790 7-13\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 15%\uB97C \uC81C\uC678\uD55C 85%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB77C. 1\uC77C(\uCCB4\uD06C\uC778 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC804)-6\uC77C \uC804\uAE4C\uC9C0 \uD1B5\uBCF4 \uC2DC: \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 20%\uB97C \uC81C\uC678\uD55C 80%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uB9C8. \uCCB4\uD06C\uC778 \uC608\uC815 \uC2DC\uAC04 \uAE30\uC900 24\uC2DC\uAC04 \uC774\uB0B4 \uD1B5\uBCF4 \uC2DC : \uC774\uC6A9\uAD8C \uC694\uAE08\uC5D0\uC11C \u201C\uD638\uD154\u201D \uBE14\uB77D \uC694\uAE08 30%\uB97C \uC81C\uC678\uD55C 70%\uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uBC14. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \u201C\uD638\uD154\u201D \uADC0\uCC45\uC0AC\uC720(\uC2DC\uC124 \uBB38\uC81C, \uAE30\uC874 \uD611\uC758\uB41C \uD61C\uD0DD \uB0B4\uC6A9 \uBCC0\uB3D9)\uB85C \uC778\uD55C \uD658\uBD88 \uC694\uCCAD \uC2DC, \uACE0\uAC1D\uC774 \uC9C0\uBD88\uD55C \uC774\uC6A9\uAD8C \uC804\uCCB4 \uAE08\uC561 \uC911 (\uC2E4\uC81C \uC774\uC6A9 \uC77C \uC218 X \uC774\uC6A9\uAD8C \uB370\uC77C\uB9AC \uD658\uC0B0 \uAC00\uACA9)\uC744 \uC81C\uC678\uD55C \uB098\uBA38\uC9C0 \uAE08\uC561\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88\\n\uC0AC. \uC774\uC6A9\uAD8C \uC774\uC6A9 \uB3C4\uC911 \uD1B5\uBCF4 \uC2DC : \uACE0\uAC1D \uB2E8\uC21C \uBCC0\uC2EC\uC73C\uB85C \uC778\uD574 \uC774\uC6A9\uAD8C \uC774\uC6A9 \uC911 \uD658\uBD88\uC744 \uC694\uCCAD\uD558\uB294 \uACBD\uC6B0  [\uC774\uC6A9\uAD8C \uBE44\uC6A9 \u2013(\uACE0\uAC1D\uC774 \uC774\uC6A9\uD55C \uBC15 \uC218 X \uD574\uB2F9 \uAE30\uAC04 \uD574\uB2F9, \uD638\uD154\uBCC4 \uC815\uCC30\uAC00)]\uC744 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88. \uB2E4\uB9CC \uD574\uB2F9 \uD658\uBD88\uAE08\uC561\uC774 24\uC2DC\uAC04 \uC774\uB0B4 \uCDE8\uC18C \uD658\uBD88 \uC694\uAE08\uC778 \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uBCF4\uB2E4 \uB0AE\uC740 \uACBD\uC6B0, \\"\uC774\uC6A9\uAD8C \uBE44\uC6A9\uC758 30% \uAE08\uC561\\"\uC744 \uD328\uB110\uD2F0\uB85C \uC801\uC6A9\uD55C\uB2E4. \uD638\uD154\uBCC4 \uC815\uCC30\uAC00\uB294 \uACE0\uAC1D \uC774\uC6A9\uC124\uBA85\uC11C \uD658\uBD88\uADDC\uC815\uC744 \uC900\uC6A9. \uC77C\uBD80 \uD638\uD154 \uD658\uBD88\uBD88\uAC00. \uC774\uC678 \uC774\uC6A9\uAD8C\uC5D0 \uD3EC\uD568\uB418\uC5B4 \uC788\uB294 \u201C\uBB34\uB8CC \uD61C\uD0DD \uBE44\uC6A9\u201D \uB610\uD55C \uD568\uAED8 \uC81C\uC678\uB418\uC5B4 \u201C\uC774\uC6A9\uC790\u201D\uC5D0\uAC8C \uD658\uBD88.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uACB0\uC81C(\uC9C0\uAE09)\uD55C \uB54C\uB85C\uBD80\uD130 24\uC2DC\uAC04 \uC774\uB0B4\uC5D0 \uC774\uC6A9\uAD8C\uC744 \uCDE8\uC18C(\uCCA0\uD68C)\uD558\uB294 \uACBD\uC6B0\uB294 \uC785\uC8FC \uC608\uC815\uC77C\uB85C\uBD80\uD130 3\uC77C \uC774\uC0C1\uC774 \uB0A8\uC740 \uACBD\uC6B0\uC5D0 \uD55C\uD574, \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04 \uC801\uC6A9 \uC5C6\uC774 \uC774\uC6A9\uAD8C \uC694\uAE08\uC744 \uC804\uC561 \uD658\uBD88\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC785\uC8FC \uC608\uC815\uC77C\uC774 3\uC77C \uBBF8\uB9CC \uB0A8\uC740 \uACBD\uC6B0\uB294 \uACB0\uC81C \uCDE8\uC18C(\uCCA0\uD68C) \uAE30\uAC04\uC774 \uB3D9\uC77C\uD558\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4.\\n3. \uC81C1\uD56D\uC758 \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4 \uC2DC\uC810\uC740, \u2018\uCDE8\uC18C \uC694\uCCAD\uC11C\uAC00 \u201C\uD68C\uC0AC\u201D \uD50C\uB7AB\uD3FC\uC5D0 \uC811\uC218\uB41C \uC2DC\uAC04\u2019 \uB610\uB294 \u201C\uD68C\uC0AC\u201D \uACE0\uAC1D\uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uCDE8\uC18C(\uCCA0\uD68C) \uD1B5\uBCF4\uD55C \uB0B4\uC6A9\uC774 \uAE30\uB85D\uB41C \uC2DC\uAC04\u2019\uC744 \uAE30\uC900\uC73C\uB85C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uCD5C\uCD08 \uC785\uC8FC \uC77C\uC790\uB97C \uC5F0\uAE30 \uD55C \uD6C4 \uCDE8\uC18C \uBC0F \uD658\uBD88 \uC694\uCCAD \uC2DC\uB294 \uCD5C\uCD08 \uC785\uC8FC \uC608\uC815 \uB0A0\uC9DC\uB97C \uAE30\uC900 \uD328\uB110\uD2F0\uB97C \uC801\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C 22\uC870 (\uC774\uC6A9\uC790\uC758 \uC989\uC2DC \uD1F4\uC2E4 \uADDC\uC815)\\n1. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC740 \uD0C0\uC778\uC5D0\uAC8C \uC591\uB3C4 \uBD88\uAC00\uD558\uBA70 \uC801\uBC1C \uC2DC, \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4. \uC774\uB54C \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\" \uC81C 21\uC870 \\"\uC774\uC6A9\uC790\uC758 \uCDE8\uC18C \uD658\uBD88 \uADDC\uC815\\"\uC758 \uC81C 1\uD56D \\"\uC0AC\\"\uBAA9\uC5D0 \uB530\uB77C \uD658\uBD88 \uADDC\uC815\uC774 \uC801\uC6A9\uB418\uBA70 \uC774\uC640 \uBCC4\uB3C4\uB85C \uD328\uB110\uD2F0\uAC00 \uBD80\uC5EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4\uB9CC, \uD2B9\uC218\uD55C \uC0C1\uD669\uC73C\uB85C \\"\uC774\uC6A9\uAD8C\\" \uACB0\uC81C\uC790\uC640 \\"\uC774\uC6A9\uC790\\"\uAC00 \uB2E4\uB978 \uACBD\uC6B0, \uCCB4\uD06C\uC778 \uC774\uC804 \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC13C\uD130\uC5D0 \uBCC4\uB3C4 \uC5F0\uB77D\uC744 \uC8FC\uC154\uC57C \uD558\uBA70 \uD638\uD154\uBCC4 \uB0B4\uBD80 \uADDC\uC815\uC5D0 \uB530\uB77C \uC2E0\uC6D0\uD655\uC778 \uD6C4 \uC591\uB3C4\uAC00 \uD5C8\uAC00 \uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \\"\uD638\uD154\uC5D0\uC0B6 \uD68C\uC6D0\uAC00\uC785 \uBC0F \uC77C\uBC18\uC6B4\uC601\uC57D\uAD00\\"\uC5D0 \uB530\uB77C \uC774\uC6A9 \uC694\uAE08 \uACB0\uC81C\uAC00 \uC774\uB8E8\uC5B4\uC9C4 \uD6C4 \\"\uC774\uC6A9\uAD8C\\"\uC744 \uC774\uC6A9 \uC911\uC778 \\"\uC774\uC6A9\uC790\\" \uC911 \uD558\uB2E8\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uB418\uB294 \uC790\uB294 \uC0AC\uC804 \uC548\uB0B4 \uC5C6\uC774 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58\uB429\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC\uCE21\uC5D0 \uBB34\uB9AC\uD55C \uC694\uAD6C\uB97C \uD558\uB294 \uACBD\uC6B0 \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uD504\uB860\uD2B8 \uC9C1\uC6D0\uC5D0\uAC8C \uBB3C\uD488\uC744 \uC0AC\uC624\uB77C\uB294 \uD589\uC704, \uC815\uD574\uC9C4 \uB8F8\uC11C\uBE44\uC2A4 \uC885\uB8CC \uD6C4\uC5D0\uB3C4 \uBB34\uB9AC\uD558\uAC8C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0, \uACE0\uAC1D\uC758 \uAC1C\uC778\uC801\uC778 \uC0C1\uD669\uC73C\uB85C \uC778\uD55C \uC9C0\uC18D\uC801\uC778 \uC608\uC678 \uC218\uC6A9 \uC694\uCCAD \uB4F1)\\n\uB098. \uBBF8\uD48D\uC591\uC18D\uC744 \uC800\uD574\uD558\uB294 \uD589\uC704 \uC2DC \uC989\uC2DC \uD1F4\uC2E4 \uC870\uCE58 (EX. \uAC1D\uC2E4 \uBC16\uC5D0\uC11C \uAC00\uC6B4\uB9CC \uC785\uACE0 \uB2E4\uB2C8\uB294 \uD589\uC704, \uD06C\uAC8C \uC18C\uB9AC\uB97C \uC9C0\uB974\uAC70\uB098 \uB2E4\uB978 \uC774\uC6A9\uAC1D\uB4E4\uC5D0\uAC8C \uD53C\uD574\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC8FC\uB294 \uD589\uC704 \uB4F1)\\n\uB2E4. \uBBF8\uC131\uB144\uC790 \uB2E8\uB3C5 \uD22C\uC219 \uC2DC\\n\uB77C. \uC81C 8\uC870 2\uD56D \uB2E4\uBAA9, \uB9C8\uBAA9\uC744 \uC81C\uC678\uD55C \uAC00~\uCE74\uBAA9\uC5D0 \uBA85\uC2DC\uB41C \uC0AC\uC720 \uBC1C\uC0DD \uC2DC\\n\uB9C8. \uAE30\uD0C0 \uD638\uD154\uACFC \uD50C\uB7AB\uD3FC \uC6B4\uC601\uC5D0 \uD53C\uD574\uB97C \uC900\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uD589\uC704\\n\\n\uC81C23\uC870 (\uC190\uD574\uBC30\uC0C1)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uB098 \uC81C3\uC790\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uC190\uD574\uC5D0 \uB300\uD558\uC5EC, \uD1B5\uC0C1 \uC190\uD574\uB97C \uADF8 \uD55C\uB3C4\uB85C \uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70, \uD2B9\uBCC4\uD55C \uC0AC\uC815\uC73C\uB85C \uC778\uD55C \uC190\uD574\uB294 \u201C\uD68C\uC0AC\u201D\uAC00 \uADF8 \uC0AC\uC815\uC744 \uC54C\uC558\uAC70\uB098 \uC54C \uC218 \uC788\uC5C8\uC744 \uB54C\uC5D0 \uD55C\uD558\uC5EC \uBC30\uC0C1\uD560 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4.\\n2. \u201C\uC774\uC6A9\uC790\u201D\uAC00 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uBCF8 \uC57D\uAD00\uC744 \uC704\uBC30\uD558\uC5EC \u201C\uD68C\uC0AC\u201D\uC5D0\uAC8C \uC190\uD574\uB97C \uBC1C\uC0DD\uC2DC\uD0A8 \uACBD\uC6B0, \uC81C1\uD56D\uC758 \uADDC\uC815\uC744 \uC900\uC6A9\uD569\uB2C8\uB2E4.\\n\\n\uC81C24\uC870 (\uC190\uD574\uBC30\uC0C1\uC758 \uBC94\uC704)\\n1. \u201C\uD68C\uC0AC\u201D\uB294 \u201C\uB871\uC2A4\uD14C\uC774 \uC11C\uBE44\uC2A4 \uBC0F \uAD6C\uB3C5 \uC11C\uBE44\uC2A4\u201D \uC81C\uACF5 \uACFC\uC815\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD558\uC5EC \uD574\uB2F9 \uC774\uC6A9 \uBAA9\uC801\uC5D0 \uBD80\uD569\uD558\uB294 \uCD5C\uC120\uC758 \u201C\uD638\uD154\u201D\uC744 \uD655\uBCF4\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4.\\n2. \uADF8\uB7EC\uB098 \uBCF8 \uC57D\uAD00 \uC81C 23\uC870\uC758 \uBC94\uC704\uB97C \uB118\uC5B4\uC11C \uBC1C\uC0DD\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC\uB294 \u201C\uD68C\uC0AC\u201D\uB294 \uCC45\uC784\uC744 \uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uD638\uD154\uC5D0\uC11C \u201C\uC774\uC6A9\uC790\u201D\uC640 \u201C\uD638\uD154\u201D\uAC04\uC758 \uBD84\uC7C1\uC73C\uB85C \uC778\uD55C \uBD88\uBC95\uD589\uC704, \uBD80\uB2F9\uC774\uB4DD, \uC0AC\uBB34\uAD00\uB9AC \uBC0F \uC77C\uCCB4\uC758 \uACC4\uC57D\uC0C1 \uC190\uD574\uAC00 \u201C\uC774\uC6A9\uC790\u201D \uB610\uB294 \u201C\uD638\uD154\u201D\uC5D0\uAC8C \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\uB098. \uBCF8 \uC57D\uAD00 \uC81C8\uC870 \uC81C2\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uC5D0\uAC8C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C25\uC870 (\uBA74\uCC45\uADDC\uC815) \uD68C\uC0AC\uB294 \uB2E4\uC74C \uAC01 \uD638\uC758 \uACBD\uC6B0\uC5D0 \uBA74\uCC45\uB429\uB2C8\uB2E4.\\n1. \uCC9C\uC7AC\uC9C0\uBCC0, \uCF54\uB85C\uB098, \uC804\uC7C1 \uBC0F \uAE30\uD0C0 \uC774\uC5D0 \uC900\uD558\uB294 \uBD88\uAC00\uD56D\uB825\uC73C\uB85C \uC778\uD558\uC5EC \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC5C6\uB294 \uACBD\uC6B0\\n2. \uAE30\uAC04\uD1B5\uC2E0 \uC0AC\uC5C5\uC790\uAC00 \uC804\uAE30\uD1B5\uC2E0 \uC11C\uBE44\uC2A4\uB97C \uC911\uC9C0\uD558\uAC70\uB098 \uC815\uC0C1\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uC9C0 \uC544\uB2C8\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n3. \uC11C\uBE44\uC2A4\uC6A9 \uC124\uBE44\uC758 \uBCF4\uC218, \uAD50\uCCB4, \uC815\uAE30\uC810\uAC80, \uACF5\uC0AC \uB4F1 \uBD80\uB4DD\uC774\uD55C \uC0AC\uC720\uB85C \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n4. \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uC624\uB958, \uAC1C\uC778 \uC815\uBCF4 \uBD80\uC2E4\uAE30\uC7AC \uB4F1 \uC804\uC801\uC73C\uB85C \uC774\uC6A9\uC790\uC758 \uADC0\uCC45\uC0AC\uC720\uB85C \uC778\uD574 \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n5. \uC81C5\uC870 \uAC01\uD56D\uC758 \uC0AC\uC720\uB85C \uC778\uD558\uC5EC \uC190\uD574\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\\n\\n\uC81C26\uC870 (\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68)\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC740 \uD68C\uC0AC\uC758 \uD648\uD398\uC774\uC9C0\uC5D0 \uBCC4\uB3C4\uB85C \uAC8C\uC7AC\uB41C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC5D0 \uADDC\uC815\uB41C \uB0B4\uC6A9\uC5D0 \uB530\uB985\uB2C8\uB2E4.\\n\\n\uC81C27\uC870 (\uC900\uAC70\uBC95 \uBC0F \uC7AC\uD310\uAD00\uD560)\\n1. \uBCF8 \uC57D\uAD00 \uC11C\uBE44\uC2A4\uC640 \uAD00\uB828\uD55C \uBD84\uC7C1\uC73C\uB85C \uC778\uD574 \uC18C\uC1A1\uC774 \uC81C\uAE30\uB420 \uACBD\uC6B0, \uC11C\uC6B8\uC911\uC559\uC9C0\uBC29\uBC95\uC6D0\uC744 \uC81C1\uC2EC \uAD00\uD560 \uBC95\uC6D0\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n2. \uC81C1\uD56D\uC758 \uC18C\uC1A1\uC740 \uB300\uD55C\uBBFC\uAD6D \uBC95\uC744 \uC900\uAC70\uBC95\uC73C\uB85C \uD569\uB2C8\uB2E4.\\n\\n* 2022\uB144 8\uC6D4 15\uC77C\uBD80\uD130 \uC885\uC804\uC758 \uC57D\uAD00\uC740 \uBCF8 \uC57D\uAD00\uC73C\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4.\\n"},{"key":"PRIVACY","label":"\uAC1C\uC778 \uC815\uBCF4 \uC218\uC9D1 \uBC0F \uD65C\uC6A9 \uB3D9\uC758 (\uD544\uC218)","content":"<style>table,th,td {border: 1px solid rgba(55, 53, 47, 0.09);border-collapse: collapse;}table {border-left: none;border-right: none;}th,td {width:25%; font-weight: normal;padding: 0.25em 0.5em;line-height: 1.5;min-height: 1.5em;text-align: left;}</style>\uD638\uD154\uC5D0\uC0B6 \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\\n\\n\\n\uC8FC\uC2DD\uD68C\uC0AC \uD2B8\uB798\uBE14\uBA54\uC774\uCEE4\uC2A4(\uC774\uD558 \\"\uD68C\uC0AC\\"\uB77C \uD569\uB2C8\uB2E4)\uB294, \uC790\uC0AC\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD638\uD154\uC5D0\uC11C \uD55C\uB2EC\uC0B4\uAE30 \uBC0F \uAD6C\uB3C5\uC11C\uBE44\uC2A4(\uC774\uD558 \u201C\uC11C\uBE44\uC2A4\u201D\uB77C \uD569\uB2C8\uB2E4)\uC640 \uAD00\uB828\uD558\uC5EC \uC774\uC6A9\uC790 \uAC00\uC785 \uBC0F \uAD00\uB9AC, \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uAD11\uACE0 \uD65C\uC6A9 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uC218\uC9D1\uB418\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0, \uC774\uC5D0 \uB300\uD55C \uACE0\uCDA9\uC744 \uC6D0\uD65C\uD558\uAC8C \uCC98\uB9AC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC9C0\uCE68\uC744 \uC218\uB9BD\u2022\uACF5\uAC1C\uD569\uB2C8\uB2E4.  \\n\\n\uCD1D \uCE59\\n\\n1) \uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960, \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95, \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95, \uC804\uAE30\uD1B5\uC2E0\uC0AC\uC5C5\uBC95\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC11C\uBE44\uC2A4\uC81C\uACF5\uC790\uAC00 \uC900\uC218\uD558\uC5EC\uC57C \uD560 \uAD00\uB828 \uBC95\uB839\uC0C1\uC758 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uADDC\uC815\uC744 \uC900\uC218\uD558\uBA70, \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uAC70\uD55C \uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC815\uD558\uC5EC \uC774\uC6A9\uC790 \uAD8C\uC775 \uBCF4\uD638\uC5D0 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n2) \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC29\uCE68\uC744 \uC6F9\uC0AC\uC774\uD2B8 \uB0B4 \uC57D\uAD00\uC5D0 \uACF5\uAC1C\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uAED8\uC11C \uC5B8\uC81C\uB098 \uC6A9\uC774\uD558\uAC8C \uBCF4\uC2E4 \uC218 \uC788\uB3C4\uB85D \uC870\uCE58\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n1. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBAA9\uC801\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC744 \uC704\uD574 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uCC98\uB9AC\uD55C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2E4\uC74C\uC758 \uBAA9\uC801 \uC774\uC678\uC758 \uC6A9\uB3C4\uB85C\uB294 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA70 \uC774\uC6A9 \uBAA9\uC801\uC774 \uBCC0\uACBD\uB420 \uC2DC\uC5D0\uB294 \uC0AC\uC804\uB3D9\uC758\uB97C \uAD6C\uD560 \uC608\uC815\uC785\uB2C8\uB2E4.\\n\uAC00. \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC790\uAC00\uC785 \uBC0F \uD68C\uC6D0/\uBE44\uD68C\uC6D0 \uAD00\uB9AC\\n\uC774\uC6A9\uC790 \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uC774\uC6A9\uC790 \uC2E0\uC6D0 \uC2DD\uBCC4\xB7\uC778\uC99D, \uC774\uC6A9\uC790 \uC790\uACA9 \uC720\uC9C0\xB7\uAD00\uB9AC, \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C \uC2DC\uD589\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uC11C\uBE44\uC2A4 \uBD80\uC815\uC774\uC6A9 \uBC29\uC9C0, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815\uB300\uB9AC\uC778 \uB3D9\uC758 \uC5EC\uBD80 \uD655\uC778, \uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB098. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACB0\uC81C \uC774\uD589 \\n\uC785\uC810 \uD638\uD154\uC5D0 \uACE0\uAC1D \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uC608\uC57D \uC11C\uBE44\uC2A4, \uBE44\uD68C\uC6D0 \uACB0\uC81C \uC11C\uBE44\uC2A4, \uD638\uD154 \uB300\uAE08\uACB0\uC81C, \uB300\uAE08\uCD94\uC2EC \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB2E4. \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\\n\uC785\uC810 \uD638\uD154\uC758 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uC720\uC9C0\uB97C \uC704\uD558\uC5EC, \uC790\uC0AC \uACFC\uAC70 \uC774\uC6A9 \uB0B4\uC5ED\uC5D0 \uB530\uB978 \uBE44\uB9E4\uB108 \uD68C\uC6D0 \uB4F1 \uD638\uD154\uC758 \uC6B4\uC601\uC5D0 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC744 \uCD08\uB798\uD55C \uACE0\uAC1D\uC5D0 \uB300\uD55C \uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB77C. \uB9C8\uCF00\uD305 \uBC0F \uAD11\uACE0\uC5D0\uC758 \uD65C\uC6A9\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4 \uD64D\uBCF4, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC548\uB0B4, \uC811\uC18D\uBE48\uB3C4 \uD30C\uC545 \uB610\uB294 \uC774\uC6A9\uC790\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778 \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uB9C8. \uC815\uBD80 \uBC29\uC5ED \uC815\uCC45\uC5D0 \uB530\uB978 \uCF54\uB85C\uB098 \uC774\uC288\\n\uCF54\uB85C\uB098 \uC815\uCC45\uC73C\uB85C \uC778\uD574, \uB2E4\uC218 \uBC00\uC9D1 \uC774\uC6A9 \uC2DC\uC124\uC778 \uD638\uD154\uC758 \uBC14\uC774\uB7EC\uC2A4 \uD655\uC0B0 \uBC29\uC9C0\uB97C \uC704\uD55C \uBC00\uC811 \uC811\uCD09\uC790 \uB4F1\uC5D0 \uB300\uD55C \uCF54\uB85C\uB098 \uAD00\uB828 \uACE0\uAC1D\uC815\uBCF4 \uD638\uD154 \uC81C\uACF5 \uB4F1 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.    \\n\\n2. \uCC98\uB9AC\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC758 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9\uC744 \uCC98\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u2460 <\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\u2461 <\uBE44\uD68C\uC6D0 \uC785\uB825\uC815\uBCF4>\\n- \uD544\uC218\uD56D\uBAA9: \uC774\uB984, \uD734\uB300\uC804\uD654\uBC88\uD638, \uC774\uBA54\uC77C \uB4F1\uC758 \uC815\uBCF4\uB294 \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uADF8 \uC218\uC9D1\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \\n- \uC120\uD0DD\uD56D\uBAA9: \uC2E0\uBD84\uC99D, \uD638\uD154 \uD22C\uC5B4 \uD76C\uB9DD \uC77C\uC790, \uC608\uC57D \uAD00\uB828 \uC77C\uC790(\uC5F0\uC7A5, \uCDE8\uC18C \uD3EC\uD568), \uCE74\uB4DC \uC815\uBCF4(\uCE74\uB4DC \uBC88\uD638, CVC, \uC77C\uC790), \uACC4\uC88C\uBC88\uD638, \uC5F0\uB839\uB300, \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0, SNS ID, \uB2C9\uB124\uC784, \uC774\uBA54\uC77C, \uC5F0\uB77D\uCC98, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4, \uC9C1\uC5C5, \uAC70\uC8FC\uB3C4\uC2DC, \uC9C1\uC7A5 \uC8FC\uC18C, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC \uAD00\uB828\uD55C \uC774\uC6A9\uC790\uC758 \uAE30\uD638 \uB4F1 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uCD94\uCC9C\uC744 \uC704\uD574 \uC81C\uCD9C\uD558\uB294 \uD56D\uBAA9(\uCD94\uCC9C \uD638\uD154, \uACE0\uAC1D \uC120\uD638\uB3C4 \uB9AC\uC2A4\uD2B8 \uB0B4 \uD638\uD154 \uC120\uD0DD), \uB9AC\uBDF0, \uB9AC\uBDF0 \uC774\uBBF8\uC9C0\\n- \uC218\uC9D1\uBC29\uBC95: \uC0AC\uC774\uD2B8 \uB0B4, \uC774\uC6A9\uC790 \uAE30\uC785 \uBC0F \uC120\uD0DD\\n\\n\u2462 <\uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815>\\n\uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uB2E8\uB9D0\uAE30\uC815\uBCF4(OS, \uD654\uBA74\uC0AC\uC774\uC988, \uB514\uBC14\uC774\uC2A4 \uC544\uC774\uB514), IP\uC8FC\uC18C, \uCFE0\uD0A4, \uBC29\uBB38\uC77C\uC2DC, \uBD80\uC815\uC774\uC6A9\uAE30\uB85D, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D \uB4F1\uC758 \uC815\uBCF4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB098. \uB610\uD55C \uC544\uB798\uC758 \uD56D\uBAA9\uB4E4\uC5D0 \uB300\uD574\uC11C\uB3C4 \uC548\uC815\uB41C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uD569\uBC95\uC801\uC778 \uC808\uCC28\uC640 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uAC70\uCCD0 \uCD94\uAC00\uB85C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1) IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D, \uAC00\uC0C1 \uD654\uD3D0(\uC5D0\uC774\uB4DC) \uC0AC\uC6A9\uAE30\uB85D, \uB9E4\uCE6D \uC774\uB825, \uACB0\uC81C\uC774\uB825\\n2) \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n3) \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC: \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1\\n4) \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC: \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1\\n5) \uACC4\uC88C\uC774\uCCB4\uB85C \uACB0\uC81C\uC2DC: \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1\\n6) \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC: \uC0C1\uD488\uAD8C \uBC88\uD638 \uB4F1\\n7) \uC11C\uBE44\uC2A4 \uC0AC\uC6A9 \uB2F9\uC2DC \uADC0\uD558\uC758 \uBAA8\uBC14\uC77C \uAE30\uAE30\uC758 \uC9C0\uB9AC\uC801 \uC704\uCE58\\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC29\uBC95\\n\uBAA8\uB4E0 \uC774\uC6A9\uC790\uAC00 \uD68C\uC0AC\uB85C\uBD80\uD130 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uC2DC \uC774\uC6A9\uC790\uAC00\uC785\uC591\uC2DD\uC5D0 \uAC00\uC785\uC2E0\uCCAD\uC790\uC758 \uB3D9\uC758\uB97C \uD1B5\uD574 \uC218\uC9D1\uB429\uB2C8\uB2E4.  \uC774\uC678\uC5D0 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n- \uD648\uD398\uC774\uC9C0, \uBAA8\uBC14\uC77C\uC6F9, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C\\n- \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC815\uBCF4 \uC218\uC9D1\\n\\n3. \uAC1C\uC778\uC815\uBCF4\uC758 \uCC98\uB9AC \uBC0F \uBCF4\uC720 \uAE30\uAC04\\n\\n\uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC774\uC6A9\uC790\uAC00\uC785 \uD6C4 \uC11C\uBE44\uC2A4\uC774\uC6A9\uAE30\uAC04\uC774 \uC885\uB8CC\uB418\uAC70\uB098 \uC774\uC6A9\uC790\uAC00 \uACC4\uC57D\uD574\uC9C0, \uD0C8\uD1F4 \uB4F1\uC758 \uC0AC\uC720\uB85C \uC774\uBA54\uC77C\uC774\uB098 \uC11C\uBA74\uC744 \uD1B5\uD574 \uAC1C\uC778\uC815\uBCF4 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC81C3\uC790\uC758 \uC5F4\uB78C\uACFC \uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uCC98\uB9AC\uB418\uBA70, \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uC81C6\uC870(\uAC70\uB798\uAE30\uB85D\uC758 \uBCF4\uC874 \uB4F1)\uC5D0 \uC758\uD558\uC5EC \uC544\uB798\uC758 \uBA85\uC2DC \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uAD00\uB9AC \uD569\uB2C8\uB2E4.\\n1) \uACC4\uC57D, \uCCAD\uC57D\uCCA0\uD68C, \uC774\uC6A9\uC790\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uB4F1\uC758 \uAC70\uB798\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n2) \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144\\n3) \uC18C\uBE44\uC790 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D: 5\uB144 \\n\\n4. \uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uC0AC\uD56D\\n\\n\uD68C\uC0AC\uB294 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uC81C17\uC870\uC5D0 \uB530\uB77C \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uAC00 \uC788\uAC70\uB098 \uD0C0 \uBC95\uB839\uC5D0 \uD2B9\uBCC4\uD55C \uADDC\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0, \uAC1C\uC778\uC815\uBCF4\uB97C \uACE0\uC9C0\u2022\uBA85\uC2DC\uD55C \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC5EC \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB610\uD55C \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C59\uC870(\uAE08\uC9C0\uD589\uC704)\uC5D0 \uB530\uB77C \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uAE09\uD558\uAC70\uB098 \uCDE8\uAE09\uD558\uC600\uB358 \uD68C\uC0AC\uC758 \uAD00\uACC4\uC790\uB294 \uB2E4\uC74C \uAC01\uD638\uC758 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uAC70\uC9D3\uC774\uB098 \uADF8 \uBC16\uC758 \uBD80\uC815\uD55C \uC218\uB2E8\uC774\uB098 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uCDE8\uB4DD\uD558\uAC70\uB098 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uB3D9\uC758\uB97C \uBC1B\uB294 \uD589\uC704\\n\uB098. \uC5C5\uBB34\uC0C1 \uC54C\uAC8C \uB41C \uAC1C\uC778\uC815\uBCF4\uB97C \uB204\uC124\uD558\uAC70\uB098 \uAD8C\uD55C \uC5C6\uC774 \uB2E4\uB978 \uC0AC\uB78C\uC774 \uC774\uC6A9\uD558\uB3C4\uB85D \uC81C\uACF5\uD558\uB294 \uD589\uC704\\n\uB2E4. \uC815\uB2F9\uD55C \uAD8C\uD55C \uC5C6\uC774 \uB610\uB294 \uD5C8\uC6A9\uB41C \uAD8C\uD55C\uC744 \uCD08\uACFC\uD558\uC5EC \uB2E4\uB978 \uC0AC\uB78C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD6FC\uC190, \uBA78\uC2E4, \uBCC0\uACBD, \uC704\uC870 \uB610\uB294 \uC720\uCD9C\uD558\uB294 \uD589\uC704\\n\\n\uD68C\uC0AC\uB294 \uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC, \uC544\uB798\uC640 \uAC19\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD544\uC694\uD55C \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC785\uC810 \uD638\uD154\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n<table id=\\"34933b72-a02b-402c-882b-56bd5e9153f3\\" class=\\"simple-table\\"><thead class=\\"simple-table-header\\"><tr id=\\"e3313c97-35ec-4ec9-b649-846d44542f25\\"><th id=\\"^|RZ\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5\uBC1B\uB294\uC790</th><th id=\\"||B`\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uBAA9\uC801</th><th id=\\"psni\\" class=\\"simple-table-header-color simple-table-header\\">\uC81C\uACF5 \uC815\uBCF4</th><th id=\\"`&gt;{&gt;\\" class=\\"simple-table-header-color simple-table-header\\">\uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</th></tr></thead><tbody><tr id=\\"e7a4c9c5-f326-4003-b4bb-c1fe05be8d66\\"><td id=\\"^|RZ\\" class=\\"\\"><a style=\\"    word-break: break-word;\\" href=\\"https://www.livinginhotel.com/search/result?region=%25EC%25A0%2584%25EC%25B2%25B4\\">https://www.livinginhotel.com/search/result?region=%EC%A0%84%EC%B2%B4</a>(\uD574\uB2F9 \uB9C1\uD06C\uC5D0 \uC785\uC810\uB418\uC5B4 \uC788\uB294 \uD638\uD154 \uB300\uC0C1)</td><td id=\\"||B`\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC5D0\uC758 \uC608\uC57D \uC11C\uBE44\uC2A4 \uC81C\uACF5</td><td id=\\"psni\\" class=\\"\\">1. \uC608\uC57D\uC790 \uC815\uBCF4(\uC608\uC57D\uC790\uBA85, \uC785\uC8FC\uC790\uBA85, \uACE0\uAC1D \uC694\uCCAD\uC0AC\uD56D, \uC608\uC57D\uC790 \uC5F0\uB77D\uCC98, \uBC29\uBB38 \uBC29\uBC95)2. \uC608\uC57D \uC0C1\uD488 \uC815\uBCF4(\uD638\uD154\uBA85, \uC0C1\uD488\uBA85, \uB8F8\uD0C0\uC785, \uD22C\uC219 \uAE30\uAC04, \uCFE0\uD3F0 \uC815\uBCF4, \uAE30\uAC04 \uC77C\uC815, \uBCC0\uACBD\uB418\uB294 \uC77C\uC815, \uC911\uB3C4\uD1F4\uC2E4 \uC815\uBCF4, \uC911\uB3C4 \uD1F4\uC2E4 \uC785\uAE08 \uC608\uC815\uAC00, \uC911\uB3C4\uD1F4\uC2E4 \uC0AC\uC720)3. \uACE0\uAC1D \uB3D9\uC219\uC778 \uC815\uBCF4(\uCD94\uAC00 \uC778\uC6D0, \uB3D9\uC219\uC778 \uC131\uD568)4. \uC785\uC8FC \uD639\uC740 \uD1F4\uC2E4 \uC774\uD6C4 \uBD88\uD3B8\uC0AC\uD56D \uB4F1</td><td id=\\"`&gt;{&gt;\\" class=\\"\\">\uC785\uC810 \uD638\uD154\uC758 \uC219\uBC15 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBAA9\uC801\uC774 \uB2EC\uC131\uB41C \uD6C4 \uD30C\uAE30(\uB2E8, \uAD00\uACC4 \uBC95\uB839\uC5D0 \uC815\uD574\uC9C4 \uADDC\uC815\uC774 \uC788\uAC70\uB098, \uBCF4\uC720\uAE30\uAC04\uC5D0 \uB300\uD55C \uD574\uB2F9 \uC785\uC810 \uD638\uD154\uC758 \uBCC4\uB3C4 \uAE30\uC900\uC774 \uC788\uACE0 \uC774\uC6A9\uC790\uAC00 \uADF8\uC5D0 \uB3D9\uC758\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB984)</td></tr></tbody></table>\\n\\n5. \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC \uC704\uD0C1\\n(\uC704\uD0C1\uC5C5\uCCB4 \uCD94\uAC00\uC608\uC815)\\n\\n6. \uC815\uBCF4\uC8FC\uCCB4\uC758 \uAD8C\uB9AC, \uC758\uBB34 \uBC0F \uADF8 \uD589\uC0AC\uBC29\uBC95\\n\\n\uC774\uC6A9\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC8FC\uCCB4\uB85C\uC11C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC5B8\uC81C\uB4E0\uC9C0 \uB2E4\uC74C \uAC01 \uD638\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uAD8C\uB9AC\uB97C \uD589\uC0AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n1. \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C(\uC870\uD68C) \uC694\uAD6C\\n2. \uC624\uB958 \uB4F1\uC774 \uC788\uC744 \uACBD\uC6B0 \uC815\uC815 \uC694\uAD6C\\n3. \uC0AD\uC81C(\uC774\uC6A9\uC790\uD0C8\uD1F4) \uC694\uAD6C\\n4. \uCC98\uB9AC\uC815\uC9C0 \uC694\uAD6C \uB610\uB294 \uAC1C\uC778\uC815\uBCF4\uC218\uC9D1\uC5D0 \uAD00\uD55C \uB3D9\uC758 \uCCA0\uD68C \uC694\uAD6C\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uB294 \uC11C\uBE44\uC2A4 \uAC00\uC785\uC744 \uD0C8\uD1F4\uD568\uC73C\uB85C\uC368 \uD68C\uC0AC\uAC00 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C1\uC811 \uC0AD\uC81C\xB7\uD30C\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \\n\uB2E4. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC\uD589\uC0AC\uB294 \uD68C\uC0AC\uC5D0 \uB300\uD574 \uC11C\uBA74, \uC804\uD654, \uC804\uC790\uC6B0\uD3B8, \uBAA8\uC0AC\uC804\uC1A1(FAX) \uB4F1\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC73C\uBA70 \uD68C\uC0AC\uB294 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4.\\n\uB77C. \uC815\uBCF4\uC8FC\uCCB4\uAC00 \uAC1C\uC778\uC815\uBCF4\uC758 \uC624\uB958 \uB4F1\uC5D0 \uB300\uD55C \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC0AC\uB294 \uC815\uC815 \uB610\uB294 \uC0AD\uC81C\uB97C \uC644\uB8CC\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\uB9C8. \uAC00\uD56D\uC5D0 \uB530\uB978 \uAD8C\uB9AC \uD589\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1 \uB300\uB9AC\uC778\uC744 \uD1B5\uD558\uC5EC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC2DC\uD589\uADDC\uCE59 \uBCC4\uC9C0 \uC81C11\uD638 \uC11C\uC2DD\uC5D0 \uB530\uB978 \uC704\uC784\uC7A5\uC744 \uC81C\uCD9C\uD574\uC57C \uD569\uB2C8\uB2E4.\\n\uBC14. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uC5D0 \uB300\uD558\uC5EC \uBC95\uC815\uB300\uB9AC\uC778\uC774\uB098 \uC704\uC784\uC744 \uBC1B\uC740 \uC790 \uB4F1\uC5D0\uAC8C \uACE0\uC9C0\uD558\uC5EC\uC57C \uD560 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0 \uC815\uBCF4\uD1B5\uC2E0\uBD80 \uACE0\uC2DC [\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uC9C0\uCE68]\uC758 \uACE0\uC9C0\uBC29\uBC95\uC744 \uC900\uC218\uD569\uB2C8\uB2E4.\\n\uC0AC. \uD68C\uC0AC\uAC00 \uC815\uBCF4\uC8FC\uCCB4 \uC774\uC678\uB85C\uBD80\uD130 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uCC98\uB9AC\uD558\uAC8C \uB418\uB294 \uACBD\uC6B0, \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC73C\uBA74 \uC2E0\uC18D\uD788 \uC218\uC9D1 \uCD9C\uCC98, \uCC98\uB9AC \uBAA9\uC801, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC758 \uC815\uC9C0\uB97C \uC694\uAD6C\uD560 \uAD8C\uB9AC\uAC00 \uC788\uB2E4\uB294 \uC0AC\uC2E4\uC744 \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.\\n\uC790. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC95 \uC81C20\uC870 \uC81C4\uD56D \uAC01 \uD638\uC5D0 \uADFC\uAC70\uD558\uC5EC \uC0AC\uD56D\uC5D0 \uB530\uB978 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uB97C \uAC70\uBD80\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uC694\uAD6C\uAC00 \uC788\uC740 \uB0A0\uB85C\uBD80\uD130 3\uC77C \uC774\uB0B4\uC5D0 \uADF8 \uAC70\uBD80\uC758 \uADFC\uAC70\uC640 \uC0AC\uC720\uB97C \uC815\uBCF4\uC8FC\uCCB4\uC5D0\uAC8C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.\\n\uCC28. \uC774\uC6A9\uC790\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uCD5C\uC2E0\uC758 \uC0C1\uD0DC\uB85C \uC720\uC9C0\uD574\uC57C \uD558\uBA70, \uC774\uC6A9\uC790\uC758 \uBD80\uC815\uD655\uD55C \uC815\uBCF4 \uC785\uB825\uC73C\uB85C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uC758 \uCC45\uC784\uC740 \uC774\uC6A9\uC790 \uC790\uC2E0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4.\\n\uCE74. \uD0C0\uC778\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uB3C4\uC6A9\uD55C \uC774\uC6A9\uC790\uAC00\uC785\uC758 \uACBD\uC6B0 \uC774\uC6A9\uC790 \uC790\uACA9\uC744 \uC0C1\uC2E4\uD558\uAC70\uB098 \uAD00\uB828 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uBC95\uB839\uC5D0 \uC758\uD574 \uCC98\uBC8C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uD0C0. \uC774\uC6A9\uC790\uB294 \uC804\uC790\uC6B0\uD3B8, \uBE44\uBC00\uBC88\uD638 \uB4F1\uC5D0 \uB300\uD55C \uBCF4\uC548\uC744 \uC720\uC9C0\uD560 \uCC45\uC784\uC774 \uC788\uC73C\uBA70 \uC81C3\uC790\uC5D0\uAC8C \uC774\uB97C \uC591\uB3C4\uD558\uAC70\uB098 \uB300\uC5EC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.\\n\\n8. \uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30\uC808\uCC28 \uBC0F \uBC29\uBC95\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720\uAE30\uAC04\uC758 \uACBD\uACFC, \uCC98\uB9AC\uBAA9\uC801 \uB2EC\uC131 \uB4F1 \uAC1C\uC778 \uC815\uBCF4\uAC00 \uBD88\uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uD574\uB2F9 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4.  \\n\uB098. \uAC1C\uC778\uC815\uBCF4 \uD30C\uAE30\uC758 \uC808\uCC28 \uBC0F \uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.\\n- \uC804\uC790\uC801 \uD30C\uC77C : \uD30C\uC77C \uC0AD\uC81C, DB\uC0AD\uC81C\\n- \uC885\uC774 \uBB38\uC11C : \uD30C\uC1C4 \uB610\uB294 \uC18C\uAC01\\n\\n\\n9. \uAC1C\uC778\uC815\uBCF4\uC758 \uC548\uC804\uC131 \uD655\uBCF4 \uC870\uCE58\\n\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C29\uC870\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC774 \uC548\uC804\uC131 \uD655\uBCF4\uC5D0 \uD544\uC694\uD55C \uAE30\uC220\uC801/\uAD00\uB9AC\uC801 \uBC0F \uBB3C\uB9AC\uC801 \uC870\uCE58\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC00. \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\\n\uC774\uC6A9\uC790\uC758 \uBE44\uBC00\uBC88\uD638\uB294 \uC77C\uBC29\uD5A5 \uC554\uD638\uD654\uD558\uC5EC \uC800\uC7A5 \uBC0F \uAD00\uB9AC\uB418\uACE0 \uC788\uC73C\uBA70, \uAC1C\uC778\uC815\uBCF4\uC758 \uD655\uC778, \uBCC0\uACBD\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uC54C\uACE0 \uC788\uB294 \uBCF8\uC778\uC5D0 \uC758\uD574\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.\\n\uB098. \uAC1C\uC778\uC2DD\uBCC4 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4 \uC554\uD638\uD654: \uC8FC\uBBFC\uBC88\uD638, \uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638,\uC5EC\uAD8C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638\\n\uB2E4. \uD574\uD0B9 \uB4F1\uC5D0 \uB300\uBE44\uD55C \uB300\uCC45\\n- \uD68C\uC0AC\uB294 \uD574\uD0B9, \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD \uCE68\uC785\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uAC00 \uC720\uCD9C\uB418\uAC70\uB098 \uD6FC\uC190\uB418\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uCD5C\uC120\uC744 \uB2E4\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09 \uCD5C\uC18C\uD654 \uBC0F \uAD50\uC721\\n\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828 \uCDE8\uAE09 \uB2F4\uB2F9\uC790\uB97C \uCD5C\uC18C\uD55C\uC73C\uB85C \uC81C\uD55C\uD558\uBA70, \uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uC790\uB294 \uBC95\uB839 \uBC0F \uB0B4\uBD80\uBC29\uCE68 \uB4F1\uC758 \uC900\uC218\uB97C \uAC15\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\\n\\n10. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uC791\uC131\\n\\n\uAC00. \uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC5D0 \uAD00\uD55C \uC5C5\uBB34\uB97C \uCD1D\uAD04\uD574\uC11C \uCC45\uC784\uC9C0\uACE0, \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uC640 \uAD00\uB828\uD55C \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBD88\uB9CC\uCC98\uB9AC \uBC0F \uD53C\uD574\uAD6C\uC81C \uB4F1\uC744 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\\n\u25B6 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\\n\uB2F4\uB2F9\uC790: \uC815\uC2B9\uC7AC\\n\uC804\uC790\uC6B0\uD3B8: travelmakerkorea_k@naver.com\\n\uB098. \uC815\uBCF4\uC8FC\uCCB4\uAED8\uC11C\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4(\uB610\uB294 \uC0AC\uC5C5)\uC744 \uC774\uC6A9\uD558\uC2DC\uBA74\uC11C \uBC1C\uC0DD\uD55C \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638 \uAD00\uB828 \uBB38\uC758, \uBD88\uB9CC\uCC98\uB9AC, \uD53C\uD574\uAD6C\uC81C \uB4F1\uC5D0 \uAD00\uD55C \uC0AC\uD56D\uC744 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uB2F4\uB2F9\uBD80\uC11C\uB85C \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC815\uBCF4\uC8FC\uCCB4\uC758 \uBB38\uC758\uC5D0 \uB300\uD574 \uC9C0\uCCB4 \uC5C6\uC774 \uB2F5\uBCC0 \uBC0F \uCC98\uB9AC\uD574\uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4.\\n\\n11. \uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68 \uBCC0\uACBD\\n\\n\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC740 \uC2DC\uD589\uC77C\uB85C\uBD80\uD130 \uC801\uC6A9\uB418\uBA70, \uBC95\uB839, \uC815\uBD80\uC758 \uC815\uCC45 \uB610\uB294 \uD68C\uC0AC \uB0B4\uBD80\uC815\uCC45 \uB4F1\uC5D0 \uB530\uB978 \uBCC0\uACBD\uB0B4\uC6A9\uC758 \uCD94\uAC00, \uC0AD\uC81C \uBC0F \uC815\uC815\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC758 \uC2DC\uD589 7\uC77C \uC804\uBD80\uD130 \uACF5\uC9C0\uC0AC\uD56D\uC744 \uD1B5\uD558\uC5EC \uACE0\uC9C0\uD560 \uAC83\uC785\uB2C8\uB2E4.\\n\\n- \uACF5\uACE0\uC77C\uC790: 2022\uB144 8\uC6D4 8\uC77C\\n- \uC2DC\uD589\uC77C\uC790: 2022\uB144 8\uC6D4 15\uC77C\\n"},{"key":"MARKETING","label":"\uB9C8\uCF00\uD305 \uC218\uC2E0 \uB3D9\uC758(\uC120\uD0DD)","content":"1. \uAD11\uACE0\uC131 \uC815\uBCF4\uC758 \uC774\uC6A9 \uBAA9\uC801\\n\uC2E0\uADDC \uC11C\uBE44\uC2A4(\uC81C\uD488) \uAC1C\uBC1C \uBC0F \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC \uAE30\uD68C \uC81C\uACF5, \uC2E0\uADDC \uC18C\uC2DD \uC548\uB0B4 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC \uB4F1\uC744 \uBAA9\uC801\uC73C\uB85C \uAC1C\uC778 \uC815\uBCF4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4.\\n\uC11C\uBE44\uC2A4 \uD654\uBA74, \uC804\uD654, e-mail, \uD734\uB300\uD3F0 \uBB38\uC790(SMS, LMS, MMS), \uC6B0\uD3B8\uBB3C, \uC571 \uD478\uC2DC, \uCE74\uCE74\uC624 \uCC44\uB110 \uB4F1\uC758 \uBC29\uBC95\uC73C\uB85C \uD638\uD154\uC5D0\uC0B6 \uACE0\uAC1D\uC5D0\uAC8C \uC81C\uACF5\uB420 \uC218 \uC788\uC73C\uBA70, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC9C4\uD589 \uC0AC\uD56D, \uC608\uC57D \uD655\uC778 \uB4F1 \uC758\uBB34\uC801\uC73C\uB85C \uC548\uB0B4\uB418\uC5B4\uC57C \uD558\uB294 \uC815\uBCF4\uC131 \uB0B4\uC6A9\uC740 \uC218\uC2E0 \uB3D9\uC758 \uC5EC\uBD80\uC640 \uBB34\uAD00\uD558\uAC8C \uC81C\uACF5\uB429\uB2C8\uB2E4.\\n\\n2. \uBBF8\uB3D9\uC758 \uC2DC \uBD88\uC774\uC775 \uC0AC\uD56D\\n\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758\uB97C \uAC70\uBD80\uD558\uC2E4 \uACBD\uC6B0 \uC2E0\uADDC \uD638\uD154 \uC624\uD508 \uC18C\uC2DD, \uD504\uB85C\uBAA8\uC158 \uD2B9\uAC00 \uC18C\uC2DD, \uACE0\uAC1D \uB300\uC0C1 \uC774\uBCA4\uD2B8 \uC18C\uC2DD \uB4F1 \uD61C\uD0DD \uC0AC\uD56D \uC801\uC6A9\uC774 \uBD88\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\\n\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uBC95 \uC81C22\uC870 \uC81C5\uD56D\uC5D0 \uC758\uD574 \uC120\uD0DD \uC815\uBCF4 \uC0AC\uD56D\uC5D0 \uB300\uD574\uC11C\uB294 \uB3D9\uC758 \uAC70\uBD80\uD558\uC2DC\uB354\uB77C\uB3C4 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uC81C\uD55C\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\\n\\n\uACF5\uACE0\uC77C\uC790 : 2020.11.15\\n\uC2DC\uD589\uC77C\uC790 : 2020.11.16"}]')},"./packages/travelmakers-design-core/src/components/BottomSheet/stories/BottomSheet.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return _e});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),H=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),N=e("./node_modules/core-js/modules/es.object.keys.js"),B=e("./node_modules/core-js/modules/es.array.index-of.js"),M=e("./node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/core-js/modules/es.object.values.js"),P=e("./node_modules/core-js/modules/es.array.reduce.js"),l=e("./node_modules/core-js/modules/es.array.includes.js"),u=e("./node_modules/core-js/modules/es.string.includes.js"),p=e("./node_modules/core-js/modules/es.array.map.js"),r=e("./node_modules/react/index.js"),d=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),n=e("./node_modules/react/jsx-runtime.js"),s=function(oe){return Object(n.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(n.jsx)("circle",{fill:"#30373F",cx:"12",cy:"12",r:"12"}),Object(n.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m7.405 10.84 3.296 4.185 6.304-6.4"})]})}))};s.displayName="IcChecked",s.displayName="@travelmakers-design/core/IcChecked";var C=function(oe){return Object(n.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},oe,{children:Object(n.jsx)("g",{fill:"none","fill-rule":"evenodd",children:Object(n.jsx)("g",{children:Object(n.jsx)("g",{children:Object(n.jsxs)("g",{transform:"translate(-73 -67) translate(7 67) translate(66)",children:[Object(n.jsx)("circle",{cx:"15",cy:"15",r:"15",fill:"#C1A485"}),Object(n.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"M9.256 13.55L13.376 18.781 21.256 10.781"})]})})})})}))};C.displayName="IcCheckSelectedBeige",C.displayName="@travelmakers-design/core/IcCheckSelectedBeige";var j=function(oe){return Object(n.jsx)("svg",Object.assign({width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsx)("path",{d:"M2.423 5.587 9 12.573l6.577-6.986",stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})}))};j.displayName="IcDropDown",j.displayName="@travelmakers-design/core/IcDropDown";var t=function(oe){return Object(n.jsx)("svg",Object.assign({width:"9",height:"15",viewBox:"0 0 9 15",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsx)("path",{d:"m.5 14.31 7-7-7-7",stroke:"#FFF","stroke-width":"2",fill:"none","fill-rule":"evenodd"})}))};t.displayName="IcDropDownWhite",t.displayName="@travelmakers-design/core/IcDropDownWhite";var b=function(oe){return Object(n.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},oe,{children:Object(n.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(n.jsx)("circle",{fill:"#D7D7D7",cx:"10",cy:"10",r:"10"}),Object(n.jsx)("path",{stroke:"#FFF","stroke-width":"2",d:"m6.17 9.033 2.748 3.488 5.253-5.333"})]})}))};b.displayName="IcUnCheck",b.displayName="@travelmakers-design/core/IcUnCheck";var k=e("./node_modules/core-js/modules/es.string.small.js"),O=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),h=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),a=function(oe,ie){if(ie>1){var ue,ye;return ye={},ye["&:first-of-type"]=(ue={padding:"10px 16px",backgroundColor:oe.colors.gray6},ue["& > img"]={width:"16px",height:"16px",marginRight:"8px"},ue["& > span"]={fontWeight:"700"},ue),ye}else return{}},y=Object(O.a)(function(F,oe){var ie,ue,ye,pe,ge,le=oe.length,te=oe.popup;return{container:Object.assign({},Object(h.b)(F),{display:"block",width:"100%",border:"solid 1px #d7d7d7",borderRadius:F.radius.small}),option:Object.assign((ie={display:"flex",alignItems:"center",width:"100%",padding:"12px 16px",borderBottom:"solid 1px #d7d7d7",backgroundColor:"white",cursor:"pointer"},ie["&:last-child"]={borderBottom:0},ie[".transparent-agreement"]={backgroundColor:"transparent"},ie),a(F,le)),optionIcon:{width:"16px",height:"16px",marginRight:"12px",cursor:"pointer"},moreIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",cursor:"pointer"},labelContainer:{display:"flex",width:"100%",justifyContent:"space-between",cursor:"pointer"},label:(ue={fontSize:"12px",color:F.colors.navy1,lineHeight:"20px",wordBreak:"keep-all"},ue[".transparent-agreement &"]={color:F.colors.white},ue),moteIcon:{width:"16px",height:"16px",transform:"rotate(-90deg)",marginLeft:"auto",cursor:"pointer"},modalContentText:(ge={display:"block",width:"100%",maxHeight:"100%",lineHeight:"1.5",whiteSpace:"pre-wrap",color:"${colors.navy}",overflowY:"auto",paddingBottom:"16px"},ge[""+F.media.desktop]={fontSize:"12px",padding:"12px 20px"},ge["&.Agreement"]=(pe={height:"calc(100% - 44px)"},pe["@media screen and (min-width: 768px)"]=(ye={height:"calc(100% - 104px)"},ye["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},ye),pe),ge)}}),m=["component","transparent","options","value","defaultSelect","setValue","containerStyle","popup","children","className","overrideStyles","__staticSelector"];function g(F,oe){return i(F)||v(F,oe)||T(F,oe)||x()}function x(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(F,oe){if(!!F){if(typeof F=="string")return c(F,oe);var ie=Object.prototype.toString.call(F).slice(8,-1);if(ie==="Object"&&F.constructor&&(ie=F.constructor.name),ie==="Map"||ie==="Set")return Array.from(F);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return c(F,oe)}}function c(F,oe){(oe==null||oe>F.length)&&(oe=F.length);for(var ie=0,ue=new Array(oe);ie<oe;ie++)ue[ie]=F[ie];return ue}function v(F,oe){var ie=F==null?null:typeof Symbol!="undefined"&&F[Symbol.iterator]||F["@@iterator"];if(ie!=null){var ue=[],ye=!0,pe=!1,ge,le;try{for(ie=ie.call(F);!(ye=(ge=ie.next()).done)&&(ue.push(ge.value),!(oe&&ue.length===oe));ye=!0);}catch(te){pe=!0,le=te}finally{try{!ye&&ie.return!=null&&ie.return()}finally{if(pe)throw le}}return ue}}function i(F){if(Array.isArray(F))return F}function o(F,oe){if(F==null)return{};var ie=f(F,oe),ue,ye;if(Object.getOwnPropertySymbols){var pe=Object.getOwnPropertySymbols(F);for(ye=0;ye<pe.length;ye++)ue=pe[ye],!(oe.indexOf(ue)>=0)&&(!Object.prototype.propertyIsEnumerable.call(F,ue)||(ie[ue]=F[ue]))}return ie}function f(F,oe){if(F==null)return{};var ie={},ue=Object.keys(F),ye,pe;for(pe=0;pe<ue.length;pe++)ye=ue[pe],!(oe.indexOf(ye)>=0)&&(ie[ye]=F[ye]);return ie}var D=Object(r.forwardRef)(function(F,oe){var ie=F.component,ue=F.transparent,ye=ue===void 0?!1:ue,pe=F.options,ge=pe===void 0?[]:pe,le=F.value,te=F.defaultSelect,ce=te===void 0?null:te,de=F.setValue,xe=F.containerStyle,Oe=xe===void 0?{}:xe,Te=F.popup,Re=Te===void 0?!1:Te,Me=F.children,Pe=F.className,Le=F.overrideStyles,Ne=F.__staticSelector,me=Ne===void 0?"div":Ne,ae=o(F,m),be=ie||"div",he=y({},{overrideStyles:Le,name:"div"}),fe=he.classes,je=he.cx,De=Object(r.useState)(null),Ae=g(De,2),Ie=Ae[0],Ce=Ae[1],Se=Object(r.useState)(!1),Be=g(Se,2),Ue=Be[0],ze=Be[1],We=Object(r.useMemo)(function(){if(le)return Object.values(le).filter(function(ke){return!!ke}).length===ge.length},[le,ge.length]);Object(r.useEffect)(function(){de==null||de(ge.reduce(function(ke,Ve){return ce!==null&&ce.includes(Ve.key)?ke[Ve.key]=!0:ke[Ve.key]=!1,ke},{}))},[]);var we=function(){var Ve={};ge.map(function(Ye){return Ve[Ye.key]=!We}),de==null||de(Ve)},Fe=function(Ve){Ce(Ve),ze(!0)},Ke=function(){ze(!1)},$e=function(Ve){de==null||de(function(Ye){var Ee;return Object.assign({},Ye,(Ee={},Ee[Ve.key]=!0,Ee))}),ze(!1)};return Object(n.jsxs)(be,Object.assign({ref:oe,className:je(fe.container,ye&&"transparent-agreement",Pe),style:Oe},ae,{children:[ge.length>1&&Object(n.jsxs)("div",{className:je(fe.option),onClick:function(){return we()},children:[We?ye?Object(n.jsx)(C,{className:je(fe.optionIcon)}):Object(n.jsx)(s,{className:je(fe.optionIcon)}):Object(n.jsx)(b,{className:je(fe.optionIcon)}),Object(n.jsx)("span",{className:je(fe.label),children:"\uC804\uCCB4 \uB3D9\uC758"})]}),ge.map(function(ke,Ve){return Object(n.jsxs)("div",{className:je(fe.option),children:[le!=null&&le[ke.key]?ye?Object(n.jsx)(C,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Ee){var He;return Object.assign({},Ee,(He={},He[ke.key]=!Ee[ke.key]===void 0?!0:!Ee[ke.key],He))})}}):Object(n.jsx)(s,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Ee){var He;return Object.assign({},Ee,(He={},He[ke.key]=!Ee[ke.key]===void 0?!0:!Ee[ke.key],He))})}}):Object(n.jsx)(b,{className:je(fe.optionIcon),onClick:function(){return de==null?void 0:de(function(Ee){var He;return Object.assign({},Ee,(He={},He[ke.key]=!Ee[ke.key]===void 0?!0:!Ee[ke.key],He))})}}),Object(n.jsxs)("div",{className:je(fe.labelContainer),onClick:function(){return Fe(ke)},children:[Object(n.jsx)("span",{className:je(fe.label),children:ke.label}),ye?Object(n.jsx)(t,{className:je(fe.moreIcon),style:{transform:"rotate(0)"}}):Object(n.jsx)(j,{className:je(fe.moreIcon),style:{transform:"rotate(-90deg)"}})]})]},"option-"+ke.key)}),Ie&&Ue&&Object(n.jsx)(d.a,{open:Ue,onClose:Ke,modalPopup:Re,ModalContainerClassName:"max-h",handleAgree:function(){return $e(Ie)},title:Ie==null?void 0:Ie.label,backIcon:!0,children:Ie==null?void 0:Ie.content})]}))});D.displayName="@travelmakers-design/core/BottomSheet";function S(F,oe){return W(F)||se(F,oe)||E(F,oe)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(F,oe){if(!!F){if(typeof F=="string")return ee(F,oe);var ie=Object.prototype.toString.call(F).slice(8,-1);if(ie==="Object"&&F.constructor&&(ie=F.constructor.name),ie==="Map"||ie==="Set")return Array.from(F);if(ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie))return ee(F,oe)}}function ee(F,oe){(oe==null||oe>F.length)&&(oe=F.length);for(var ie=0,ue=new Array(oe);ie<oe;ie++)ue[ie]=F[ie];return ue}function se(F,oe){var ie=F==null?null:typeof Symbol!="undefined"&&F[Symbol.iterator]||F["@@iterator"];if(ie!=null){var ue=[],ye=!0,pe=!1,ge,le;try{for(ie=ie.call(F);!(ye=(ge=ie.next()).done)&&(ue.push(ge.value),!(oe&&ue.length===oe));ye=!0);}catch(te){pe=!0,le=te}finally{try{!ye&&ie.return!=null&&ie.return()}finally{if(pe)throw le}}return ue}}function W(F){if(Array.isArray(F))return F}var $=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,Z={Default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}},$=`import {
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
`,Z={Default:{startLoc:{col:23,line:59},endLoc:{col:1,line:72},startBody:{col:23,line:59},endBody:{col:1,line:72}}},K=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/essential-agreement.json"),ne=e("./packages/travelmakers-design-core/src/components/BottomSheet/json/register-agreement.json"),ve=_.default={title:"@travelmakers-design/core/Component/BottomSheet",component:D,argTypes:{popup:{defaultValue:!1,description:"\uD31D\uC5C5 \uC5EC\uBD80",table:{type:{summary:"boolean"}},control:{type:"boolean"}},options:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"BottomSheet \uB4E4\uC5B4\uAC08 \uB0B4\uC6A9 \uC815\uC758",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [agree, setAgree] = useState<any>({});\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <BottomSheet\\n        {...props}\\n        options={RegisterAgreement}\\n        value={agree}\\n        setValue={setAgree}\\n        popup={true}\\n      />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:67},endLoc:{col:1,line:80},startBody:{col:23,line:67},endBody:{col:1,line:80}}}},docs:{page:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(H.g,{}),Object(n.jsx)(H.f,{}),Object(n.jsx)(H.b,{}),Object(n.jsx)(H.d,{}),Object(n.jsx)(H.a,{story:H.c}),Object(n.jsx)(H.e,{})]})}}}},_e=function(oe){var ie=Object(r.useState)({}),ue=S(ie,2),ye=ue[0],pe=ue[1];return Object(n.jsx)("div",{style:{padding:24,display:"flex"},children:Object(n.jsx)(D,Object.assign({},oe,{options:ne,value:ye,setValue:pe,popup:!0}))})};_e.displayName="Default",_e.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},_e.parameters)},"./packages/travelmakers-design-core/src/components/Button/Button.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return d});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./node_modules/core-js/modules/es.string.small.js"),z=e("./node_modules/core-js/modules/es.array.reduce.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),G=e("./packages/travelmakers-design-core/src/constants/index.ts"),H=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),N={xsmall:{height:G.a.xsmall,padding:"0 24px"},small:{height:G.a.small,padding:"0 24px"},medium:{height:G.a.medium,padding:"0 24px"},large:{height:G.a.large,padding:"0 24px"}},B=function(s){return{xsmall:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:s.lineHeights.caption+"px",fontSize:s.fontSizes.caption},small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:s.lineHeights.b3+"px",fontSize:s.fontSizes.b3},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:s.lineHeights.b2+"px",fontSize:s.fontSizes.b2},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:s.lineHeights.h5+"px",fontSize:s.fontSizes.h5}}},M=Object.keys(N).reduce(function(n,s){return n[s]=N[s].height,n},{}),R=function(s){return{display:s?"block":"inline-block",width:s?"100%":"auto"}},P=Object(L.a)(function(n,s,C){var j,t,b,k=s.variant,O=s.size,h=s.fullWidth,a=s.roundness,y=s.line,m=C("loading"),g=C("inner"),x=C("spinner"),T=k||n.colors.navy1;return{loading:(j={ref:m,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},j["."+g]={opacity:0},j["."+x]={display:"flex"},j),solid:(t={backgroundColor:n.palettes[T][n.colorScheme==="light",0],color:T==="white"?n.colors.navy1:n.colors.white,"&:not(:disabled):hover":{backgroundColor:n.palettes[T][n.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:n.palettes[T][n.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:a?n.radius.round:2,outline:"1px solid "+n.palettes[T][n.colorScheme==="light",0]}}},t["&:disabled:not(."+m+")"]={backgroundColor:n.colors.gray5,color:y?n.colors.black:n.colors.white},t),ghost:(b={backgroundColor:n.colors.transparent,border:"1px solid "+n.palettes[T][n.colorScheme==="light",0],color:T==="white"?n.colors.white:n.palettes[T][0],"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:a?n.radius.round:2,outline:"1px solid "+n.palettes[T][n.colorScheme==="light",0]}}},b["&:disabled:not(."+m+")"]={color:Object(H.a)(n.palettes[T][1],n.opacity.opacity3),border:"1px solid "+Object(H.a)(n.palettes[T][1],n.opacity.opacity3)},b),root:Object.assign({},N[O],R(h),Object(U.b)(n),B(n)[O],{borderRadius:a?n.radius.round:n.radius.small,position:"relative",lineHeight:1+"px",WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{ref:g,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"},spinnerWrapper:{ref:x,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),l=e("./node_modules/react/jsx-runtime.js"),u=["children","component","size","variant","line","roundness","fullWidth","type","disabled","leftIcon","rightIcon","className","co","overrideStyles"];function p(n,s){if(n==null)return{};var C=r(n,s),j,t;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(t=0;t<b.length;t++)j=b[t],!(s.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,j)||(C[j]=n[j]))}return C}function r(n,s){if(n==null)return{};var C={},j=Object.keys(n),t,b;for(b=0;b<j.length;b++)t=j[b],!(s.indexOf(t)>=0)&&(C[t]=n[t]);return C}var d=Object(J.forwardRef)(function(n,s){var C=n.children,j=n.component,t=n.size,b=t===void 0?"medium":t,k=n.variant,O=k===void 0?"primary":k,h=n.line,a=h===void 0?!1:h,y=n.roundness,m=y===void 0?!1:y,g=n.fullWidth,x=g===void 0?!1:g,T=n.type,c=T===void 0?"button":T,v=n.disabled,i=v===void 0?!1:v,o=n.leftIcon,f=o===void 0?"":o,D=n.rightIcon,S=D===void 0?"":D,I=n.className,E=n.co,ee=n.overrideStyles,se=p(n,u),W=Object(X.c)(),$=P({variant:O,size:b,fullWidth:x,roundness:m,line:a},{overrideStyles:ee,name:"Button"}),Z=$.classes,K=$.cx;return Object(l.jsx)(A.a,Object.assign({component:j||"button",ref:s,type:c,disabled:i,className:K(Z.root,Z[a?"ghost":"solid"],I),co:E,onTouchStart:function(){}},se,{children:Object(l.jsxs)("div",{className:Z.inner,children:[f&&Object(l.jsx)("span",{className:K(Z.icon,Z.leftIcon),children:f}),Object(l.jsx)("span",{className:Z.label,children:C}),S&&Object(l.jsx)("span",{className:K(Z.icon,Z.rightIcon),children:S})]})}))});d.displayName="@travelmakers-design/core/Button"},"./packages/travelmakers-design-core/src/components/Button/stories/Button.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return U});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),X=e("./node_modules/react/index.js"),J=e.n(X),A=e("./node_modules/react/jsx-runtime.js"),V=e.n(A),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}},z=`import {
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ margin: \\"0 auto\\" }}>\\n      <Button {...props}>Button</Button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:129},endLoc:{col:1,line:135},startBody:{col:23,line:129},endBody:{col:1,line:135}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(w.g,{}),Object(A.jsx)(w.f,{}),Object(A.jsx)(w.b,{}),Object(A.jsx)(w.d,{}),Object(A.jsx)(w.a,{story:w.c}),Object(A.jsx)(w.e,{})]})}},actions:{handles:["click button"]}}};var U=function(H){return Object(A.jsx)("div",{style:{margin:"0 auto"},children:Object(A.jsx)(re.a,Object.assign({},H,{children:"Button"}))})};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Button {...props}>Button</Button>
    </div>
  );
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/Callout/stories/Callout.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return l});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=Object(V.a)(function(u,p){var r=p.type,d=r===void 0?"default":r;return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"20px 24px",gap:"8px",backgroundColor:""+u.colors.gray6},titleWrapper:{display:"flex",flexDirection:"row",alignItems:"center",padding:0,gap:"8px"},title:{color:d==="default"?u.colors.green2:u.colors.red2,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:u.fontSizes.b2,lineHeight:u.lineHeights.b2+"px"},content:{color:u.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:u.fontSizes.b2,lineHeight:u.lineHeights.b2+"px"}}}),L=e("./node_modules/react/jsx-runtime.js"),U=function(p){var r=p.color;return Object(L.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(L.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.51543 8.05002L7.70005 3.15002H6.30005L6.48466 8.03055L7.51543 8.05002ZM7.00005 10.5C7.38665 10.5 7.70005 10.1866 7.70005 9.80002C7.70005 9.41342 7.38665 9.10002 7.00005 9.10002C6.61345 9.10002 6.30005 9.41342 6.30005 9.80002C6.30005 10.1866 6.61345 10.5 7.00005 10.5Z",fill:r!=null?r:"#0D5E49"}),Object(L.jsx)("rect",{x:"0.5",y:"0.5",width:"13",height:"13",rx:"6.5",stroke:r!=null?r:"#0D5E49"})]})};U.displayName="CalloutAlertIcon",U.displayName="@travelmakers-design/core/CalloutAlertIcon";var G=["type","title","content","color","className","co","overrideStyles"];function H(u,p){if(u==null)return{};var r=N(u,p),d,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);for(n=0;n<s.length;n++)d=s[n],!(p.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,d)||(r[d]=u[d]))}return r}function N(u,p){if(u==null)return{};var r={},d=Object.keys(u),n,s;for(s=0;s<d.length;s++)n=d[s],!(p.indexOf(n)>=0)&&(r[n]=u[n]);return r}var B=Object(Y.forwardRef)(function(u,p){var r=u.type,d=r===void 0?"default":r,n=u.title,s=u.content,C=u.color,j=u.className,t=u.co,b=u.overrideStyles,k=H(u,G),O=Object(J.c)(),h=z({type:d},{overrideStyles:b,name:"Callout"}),a=h.classes,y=h.cx;return Object(L.jsxs)(A.a,Object.assign({ref:p,className:y(a.root,j),co:t},k,{children:[Object(L.jsxs)("div",{className:y(a.titleWrapper),children:[Object(L.jsx)(U,{color:d==="default"?O.colors.green2:O.colors.red2}),Object(L.jsx)("span",{className:y(a.title),children:n})]}),Object(L.jsx)("span",{className:y(a.content),children:s})]}))});B.displayName="@travelmakers-design/core/Callout";var M=`
    
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
`,R={Default:{startLoc:{col:23,line:37},endLoc:{col:1,line:39},startBody:{col:23,line:37},endBody:{col:1,line:39}}},P=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Callout {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:45},endLoc:{col:1,line:47},startBody:{col:23,line:45},endBody:{col:1,line:47}}}}},title:"@travelmakers-design/core/Component/Callout",component:B,argTypes:{type:{defaultValue:"default",description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","warning"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},content:{defaultValue:"\uCD94\uAC00 \uC124\uBA85\uC744 \uC704\uD55C \uC601\uC5ED\uC785\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},description:"Callout \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},l=function(p){return Object(L.jsx)(B,Object.assign({},p))};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
  return <Callout {...props} />;
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/CarouselTitleCard/stories/CarouselTitleCard.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return n});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./node_modules/core-js/modules/es.string.small.js"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),G=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts");function H(s){if(s==null)throw new TypeError("Cannot destructure undefined")}var N=Object(U.a)(function(s,C){var j,t,b;return H(C),{root:{display:"flex",position:"relative"},newBadge:(j={background:s.colors.green2,borderRadius:s.radius.small,width:"40px",height:"85px",padding:"2px 20px"},j[""+s.media.mobile]={width:"24px",height:"74px",padding:"20px 0px"},j["& > span"]={transform:"rotate(90deg)","-ms-transform":"rotate(90deg)","-webkit-transform":"rotate(90deg)"},j),headlineWrapper:(t={backgroundColor:s.colors.white,boxShadow:"4px 4px 10px 10px rgba(163, 162, 161, 0.2)",width:"100%",maxWidth:G.a.desktop,padding:"31px 40px"},t[""+s.media.mobile]={padding:"33px 24px"},t),subHeadline:{marginBottom:"2px"},headline:{marginBottom:"19px"},description:{},goImageflexBox:(b={display:"flex",flexDirection:"row",alignItems:"baseline",width:"fit-content",borderBottom:"1px solid "+s.colors.navy1,marginLeft:"41px"},b[""+s.media.tablet]={display:"none"},b),arrowImage:{width:"21px",marginLeft:"9.5px"}}}),B=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),M=e("./node_modules/react/jsx-runtime.js"),R=["newBadge","subHeadline","headline","description","title","className","co","overrideStyles"];function P(s,C){if(s==null)return{};var j=l(s,C),t,b;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(s);for(b=0;b<k.length;b++)t=k[b],!(C.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,t)||(j[t]=s[t]))}return j}function l(s,C){if(s==null)return{};var j={},t=Object.keys(s),b,k;for(k=0;k<t.length;k++)b=t[k],!(C.indexOf(b)>=0)&&(j[b]=s[b]);return j}var u=Object(Y.forwardRef)(function(s,C){var j=s.newBadge,t=j===void 0?!1:j,b=s.subHeadline,k=s.headline,O=s.description,h=s.title,a=s.className,y=s.co,m=s.overrideStyles,g=P(s,R),x=Object(A.c)(),T=N({},{overrideStyles:m,name:"CarouselTitleCard"}),c=T.classes,v=T.cx;return Object(M.jsxs)(z.a,Object.assign({ref:C,className:v(c.root,a),co:y},g,{children:[t&&Object(M.jsx)("div",{className:v(c.newBadge),children:Object(M.jsx)(V.a,{family:"PT Serif",level:"h4",mobileLevel:"h6",color:x.colors.white,textAlign:"center",style:{width:"100%"},children:"New"})}),Object(M.jsxs)("div",{className:v(c.headlineWrapper),children:[Object(M.jsx)(V.a,{family:"Noto Serif KR",level:"h6",mobileLevel:"b3",color:x.colors.navy1,className:v(c.subHeadline),children:b}),Object(M.jsx)(V.a,{family:"Noto Serif KR",level:"h2",mobileLevel:"h6",color:x.colors.navy1,className:v(c.headline),strong:!0,children:k}),Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(M.jsx)(V.a,{family:"Pretendard",level:"h6",mobileLevel:"b3",color:x.colors.green3,className:v(c.description),strong:!0,children:O}),Object(M.jsxs)("div",{className:v(c.goImageflexBox),children:[Object(M.jsx)(V.a,{family:"PT Serif",level:"h4",mobileLevel:"b2",style:{width:"auto",lineHeight:"24px"},color:x.colors.navy1,children:"Go"}),Object(M.jsx)(B.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg"),className:v(c.arrowImage)})]})]})]})]}))});u.displayName="@travelmakers-design/core/CarouselTitleCard";var p=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CarouselTitleCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,r={Default:{startLoc:{col:23,line:59},endLoc:{col:1,line:65},startBody:{col:23,line:59},endBody:{col:1,line:65}}},p=`import React from "react";
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
`,r={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},d=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CarouselTitleCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:59},endLoc:{col:1,line:65},startBody:{col:23,line:59},endBody:{col:1,line:65}}}}},title:"@travelmakers-design/core/Component/Card/CarouselTitleCard",component:u,argTypes:{newBadge:{defaultValue:!1,description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 newBadge \uC5EC\uBD80\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},subHeadline:{defaultValue:"\uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778",description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC11C\uBE0C\uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},headline:{defaultValue:"\uD5E4\uB4DC\uB77C\uC778",description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD5E4\uB4DC\uB77C\uC778\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uB514\uC2A4\uD06C\uB9BD\uC158",description:"CarouselTitleCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB514\uC2A4\uD06C\uB9BD\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},n=function(C){return Object(M.jsx)("div",{style:{padding:24},children:Object(M.jsx)(u,Object.assign({},C))})};n.displayName="Default",n.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <CarouselTitleCard {...props} />
    </div>
  );
}`}},n.parameters)},"./packages/travelmakers-design-core/src/components/ControlIndicator/stories/ControlIndicator.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),R=e("./packages/travelmakers-design-core/src/components/Progress/Progress.tsx"),P=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),l=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),u=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),p=Object(u.a)(function(c,v){var i=v.size,o=i===void 0?"small":i;return{root:{display:"flex",alignItems:"center",justifyContent:"space-between"},buttonContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",width:o==="small"?"56px":"84px"},button:{width:o==="small"?"24px":"32px",height:o==="small"?"24px":"32px",cursor:"pointer"}}}),r=e("./node_modules/react/jsx-runtime.js"),d=["color","size","totalPage","currentPage","activeBarTransition","infinity","title","className","co","previousClick","nextClick","overrideStyles"];function n(c,v){return b(c)||t(c,v)||C(c,v)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(c,v){if(!!c){if(typeof c=="string")return j(c,v);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return j(c,v)}}function j(c,v){(v==null||v>c.length)&&(v=c.length);for(var i=0,o=new Array(v);i<v;i++)o[i]=c[i];return o}function t(c,v){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],f=!0,D=!1,S,I;try{for(i=i.call(c);!(f=(S=i.next()).done)&&(o.push(S.value),!(v&&o.length===v));f=!0);}catch(E){D=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(D)throw I}}return o}}function b(c){if(Array.isArray(c))return c}function k(c,v){if(c==null)return{};var i=O(c,v),o,f;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(c);for(f=0;f<D.length;f++)o=D[f],!(v.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,o)||(i[o]=c[o]))}return i}function O(c,v){if(c==null)return{};var i={},o=Object.keys(c),f,D;for(D=0;D<o.length;D++)f=o[D],!(v.indexOf(f)>=0)&&(i[f]=c[f]);return i}var h=1;function a(){return h}var y=Object(Y.forwardRef)(function(c,v){var i=c.color,o=i===void 0?"navy":i,f=c.size,D=f===void 0?"small":f,S=c.totalPage,I=S===void 0?1:S,E=c.currentPage,ee=E===void 0?1:E,se=c.activeBarTransition,W=se===void 0?!1:se,$=c.infinity,Z=$===void 0?!1:$,K=c.title,ne=c.className,ve=c.co,_e=c.previousClick,F=c.nextClick,oe=c.overrideStyles,ie=k(c,d),ue=Object(M.c)(),ye=p({size:D},{overrideStyles:oe,name:"ControlIndicator"}),pe=ye.classes,ge=ye.cx,le=Object(Y.useState)(h),te=n(le,2),ce=te[0],de=te[1],xe=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg"),Oe=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg");Z||((ce>I||ce<=1)&&(xe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")),ce>=I&&(Oe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")));var Te=function(){var Pe=1;Z?ce-1===0?Pe=I:Pe=ce-1:ce-1===0?(Pe=1,xe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")):Pe=ce-1,de(Pe),h=Pe,_e()},Re=function(){var Pe=1;Z?ce===I?Pe=1:Pe=ce+1:ce===I?(Pe=I,Oe=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")):Pe=ce+1,de(Pe),h=Pe,F()};return Object(r.jsxs)(l.a,Object.assign({ref:v,className:ge(pe.root,ne),co:ve},ie,{children:[Object(r.jsx)(R.a,{color:o,size:D,totalPage:I,currentPage:ce,activeBarTransition:W,indicator:!0}),Object(r.jsxs)("div",{className:ge(pe.buttonContainer),children:[Object(r.jsx)(P.a,{src:xe,className:ge(pe.button),onClick:Te}),Object(r.jsx)(P.a,{src:Oe,className:ge(pe.button),onClick:Re})]})]}))});y.displayName="@travelmakers-design/core/Header/ControlIndicator";var m=`
    
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
`,g={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},x=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlIndicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:73},endLoc:{col:1,line:79},startBody:{col:23,line:73},endBody:{col:1,line:79}}}}},title:"@travelmakers-design/core/Component/ControlIndicator",component:y,argTypes:{color:{defaultValue:"navy",description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},size:{defaultValue:"small",description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},totalPage:{defaultValue:1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},activeBarTransition:{defaultValue:!1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD604\uC7AC event transition \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},infinity:{defaultValue:!1,description:"ControlIndicator \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},T=function(v){return Object(r.jsx)("div",{style:{padding:24},children:Object(r.jsx)(y,Object.assign({},v))})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlIndicator {...props} />
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-core/src/components/ControlPagination/stories/ControlPagination.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),R=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),P=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),l=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),u=function(v){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.b2+"px",fontSize:v.fontSizes.b2,marginRight:"12px",marginLeft:"12px",width:"50px"},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:v.lineHeights.h5+"px",fontSize:v.fontSizes.h5,marginRight:"20px",marginLeft:"20px",width:"70px"}}},p=Object(l.a)(function(c,v){var i=v.color,o=i===void 0?"navy":i,f=v.size,D=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center"},indicator:Object.assign({},u(c)[D],{color:o,textAlign:"center"}),button:{width:"32px",height:"32px",cursor:"pointer"}}}),r=e("./node_modules/react/jsx-runtime.js"),d=["color","size","totalPage","currentPage","infinity","className","co","previousClick","nextClick","overrideStyles"];function n(c,v){return b(c)||t(c,v)||C(c,v)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(c,v){if(!!c){if(typeof c=="string")return j(c,v);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return j(c,v)}}function j(c,v){(v==null||v>c.length)&&(v=c.length);for(var i=0,o=new Array(v);i<v;i++)o[i]=c[i];return o}function t(c,v){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],f=!0,D=!1,S,I;try{for(i=i.call(c);!(f=(S=i.next()).done)&&(o.push(S.value),!(v&&o.length===v));f=!0);}catch(E){D=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(D)throw I}}return o}}function b(c){if(Array.isArray(c))return c}function k(c,v){if(c==null)return{};var i=O(c,v),o,f;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(c);for(f=0;f<D.length;f++)o=D[f],!(v.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,o)||(i[o]=c[o]))}return i}function O(c,v){if(c==null)return{};var i={},o=Object.keys(c),f,D;for(D=0;D<o.length;D++)f=o[D],!(v.indexOf(f)>=0)&&(i[f]=c[f]);return i}var h=1;function a(){return h}var y=Object(Y.forwardRef)(function(c,v){var i=c.color,o=i===void 0?"navy":i,f=c.size,D=f===void 0?"small":f,S=c.totalPage,I=S===void 0?1:S,E=c.currentPage,ee=E===void 0?1:E,se=c.infinity,W=se===void 0?!1:se,$=c.className,Z=c.co,K=c.previousClick,ne=c.nextClick,ve=c.overrideStyles,_e=k(c,d),F=Object(M.c)(),oe=p({color:o,size:D},{overrideStyles:ve,name:"ControlPagination"}),ie=oe.classes,ue=oe.cx,ye=Object(Y.useState)(h),pe=n(ye,2),ge=pe[0],le=pe[1],te=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-white.svg"),ce=e(o==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-white.svg");W||((ge>I||ge<=1)&&(te=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")),ge>=I&&(ce=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")));var de=function(){var Te=1;W?ge-1===0?Te=I:Te=ge-1:ge-1===0?(Te=1,te=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-previous-disable.svg")):Te=ge-1,le(Te),h=Te,K()},xe=function(){var Te=1;W?ge===I?Te=1:Te=ge+1:ge===I?(Te=I,ce=e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-next-disable.svg")):Te=ge+1,le(Te),h=Te,ne()};return Object(r.jsxs)(P.a,Object.assign({ref:v,className:ue(ie.root,$),co:Z},_e,{children:[Object(r.jsx)(R.a,{src:te,className:ue(ie.button),onClick:de}),Object(r.jsxs)("span",{className:ue(ie.indicator),children:[ge," / ",I]}),Object(r.jsx)(R.a,{src:ce,className:ue(ie.button),onClick:xe})]}))});y.displayName="@travelmakers-design/core/Header/ControlPagination";var m=`
    
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
`,g={Default:{startLoc:{col:23,line:55},endLoc:{col:1,line:61},startBody:{col:23,line:55},endBody:{col:1,line:61}}},x=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <ControlPagination {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:63},endLoc:{col:1,line:69},startBody:{col:23,line:63},endBody:{col:1,line:69}}}}},title:"@travelmakers-design/core/Component/ControlPagination",component:y,argTypes:{color:{defaultValue:"navy",description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},size:{defaultValue:"small",description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},infinity:{defaultValue:!1,description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBB34\uD55C \uB8E8\uD504 \uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},totalPage:{defaultValue:1,description:"ControlPagination \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD1A0\uD0C8 page \uC218\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}}}},T=function(v){return Object(r.jsx)("div",{style:{padding:24},children:Object(r.jsx)(y,Object.assign({},v))})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <ControlPagination {...props} />
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-core/src/components/CouponCard/stories/CouponCard.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return r});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=function(n){return{Week:{backgroundColor:n.colors.green2},Month:{backgroundColor:n.colors.green3},All:{backgroundColor:n.colors.navy1}}},G=Object(L.a)(function(d,n){var s=n.state,C=s===void 0?"default":s,j=n.type,t=j===void 0?"Week":j;return{root:{width:"296px",backgroundColor:d.colors.white},flex:{display:"flex"},spaceBetween:{justifyContent:"space-between"},labelContainer:Object.assign({},U(d)[t],{padding:"0px 8px",width:"80px"}),contentContainer:{width:"100%",backgroundColor:d.colors.gray8,padding:"12px"}}}),H=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),N=e("./node_modules/react/jsx-runtime.js"),B=["state","type","day","saleMoney","couponName","couponObject","description","className","co","overrideStyles"];function M(d,n){if(d==null)return{};var s=R(d,n),C,j;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);for(j=0;j<t.length;j++)C=t[j],!(n.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,C)||(s[C]=d[C]))}return s}function R(d,n){if(d==null)return{};var s={},C=Object.keys(d),j,t;for(t=0;t<C.length;t++)j=C[t],!(n.indexOf(j)>=0)&&(s[j]=d[j]);return s}var P=Object(Y.forwardRef)(function(d,n){var s=d.state,C=s===void 0?"default":s,j=d.type,t=j===void 0?"Week":j,b=d.day,k=b===void 0?1:b,O=d.saleMoney,h=O===void 0?"00":O,a=d.couponName,y=d.couponObject,m=d.description,g=d.className,x=d.co,T=d.overrideStyles,c=M(d,B),v=Object(A.c)(),i=G({state:C,type:t},{overrideStyles:T,name:"CouponCard"}),o=i.classes,f=i.cx;return Object(N.jsx)(z.a,Object.assign({ref:n,className:f(o.root,g),co:x},c,{children:Object(N.jsxs)("div",{className:f(o.flex),children:[Object(N.jsxs)("div",{className:f(o.labelContainer),children:[t!=="All"&&Object(N.jsx)(V.a,{family:"Noto Serif KR",level:"h2",color:v.colors.white,strong:!0,children:k}),Object(N.jsx)(V.a,{family:"Noto Serif KR",level:t!=="All"?"b1":"h2",color:v.colors.white,children:t})]}),Object(N.jsxs)("div",{className:f(o.contentContainer),children:[Object(N.jsxs)("div",{className:f(o.flex,o.spaceBetween),children:[Object(N.jsxs)(V.a,{family:"Noto Serif KR",level:"h6",color:v.colors.green3,style:{width:"fit-content",marginBottom:"4px"},strong:!0,children:[h,"%"]}),C==="default"?Object(N.jsx)(V.a,{family:"Pretendard",level:"b3",color:v.colors.navy3,style:{width:"fit-content"},children:"\uC801\uC6A9\uC911"}):C==="applied"&&Object(N.jsx)(H.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-check.svg"),alt:"check"})]}),Object(N.jsx)(V.a,{family:"Pretendard",level:"b3",color:v.colors.navy1,children:a}),Object(N.jsx)(V.a,{family:"Pretendard",level:"caption",color:v.colors.red3,style:{width:"fit-content",marginBottom:"4px"},children:y}),Object(N.jsx)(V.a,{family:"Pretendard",level:"caption",color:v.colors.navy3,children:m})]})]})}))});P.displayName="@travelmakers-design/core/CouponCard";var l=`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { CouponCard } from \\"../CouponCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/CouponCard\\",\\n  component: CouponCard,\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 state\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"applied\\", \\"checked\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"Week\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Week\\", \\"Month\\", \\"All\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    day: {\\n      defaultValue: \\"1\\",\\n      description:\\n        \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 day\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. (\uB2E8, type\uC774 All\uC77C \uACBD\uC6B0\uB294 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    saleMoney: {\\n      defaultValue: \\"00\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB960\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    couponName: {\\n      defaultValue: \\"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uBA85\uCE6D\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    couponObject: {\\n      defaultValue: \\"\uC801\uC6A9 \uC0C1\uD488 \u3163 \uC794\uC5EC \uC218\uB7C9\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uC801\uC6A9 \uC0C1\uD488\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uC138\uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CouponCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":84},"endLoc":{"col":1,"line":90},"startBody":{"col":23,"line":84},"endBody":{"col":1,"line":90}}};
    
import React from "react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    state: {
      defaultValue: "default",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 state\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      options: ["default", "applied", "checked"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "Week",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      options: ["Week", "Month", "All"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: "1",
      description:
        "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 day\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. (\uB2E8, type\uC774 All\uC77C \uACBD\uC6B0\uB294 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    saleMoney: {
      defaultValue: "00",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB960\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponName: {
      defaultValue: "\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uBA85\uCE6D\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponObject: {
      defaultValue: "\uC801\uC6A9 \uC0C1\uD488 \u3163 \uC794\uC5EC \uC218\uB7C9",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uC801\uC6A9 \uC0C1\uD488\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uC138\uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <CouponCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CouponCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:92},endLoc:{col:1,line:98},startBody:{col:23,line:92},endBody:{col:1,line:98}}},l=`import React from "react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    state: {
      defaultValue: "default",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 state\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      options: ["default", "applied", "checked"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "Week",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      options: ["Week", "Month", "All"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: "1",
      description:
        "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 day\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. (\uB2E8, type\uC774 All\uC77C \uACBD\uC6B0\uB294 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    saleMoney: {
      defaultValue: "00",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB960\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponName: {
      defaultValue: "\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uBA85\uCE6D\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponObject: {
      defaultValue: "\uC801\uC6A9 \uC0C1\uD488 \u3163 \uC794\uC5EC \uC218\uB7C9",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uC801\uC6A9 \uC0C1\uD488\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uC138\uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <CouponCard {...props} />
    </div>
  );
};
`,u={Default:{startLoc:{col:23,line:84},endLoc:{col:1,line:90},startBody:{col:23,line:84},endBody:{col:1,line:90}}},p=_.default={parameters:{storySource:{source:`
    
    // @ts-nocheck
    // @ts-ignore
    var __STORY__ = "import React from \\"react\\";\\nimport { CouponCard } from \\"../CouponCard\\";\\n\\nexport default {\\n  title: \\"@travelmakers-design/core/Component/Card/CouponCard\\",\\n  component: CouponCard,\\n  argTypes: {\\n    state: {\\n      defaultValue: \\"default\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 state\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"default\\", \\"applied\\", \\"checked\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    type: {\\n      defaultValue: \\"Week\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uD310\uB2E8\uD569\uB2C8\uB2E4.\\",\\n      options: [\\"Week\\", \\"Month\\", \\"All\\"],\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"inline-radio\\" },\\n    },\\n    day: {\\n      defaultValue: \\"1\\",\\n      description:\\n        \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 day\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. (\uB2E8, type\uC774 All\uC77C \uACBD\uC6B0\uB294 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.)\\",\\n      table: {\\n        type: {\\n          summary: \\"number\\",\\n        },\\n      },\\n      control: { type: \\"number\\" },\\n    },\\n    saleMoney: {\\n      defaultValue: \\"00\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB960\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    couponName: {\\n      defaultValue: \\"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uBA85\uCE6D\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    couponObject: {\\n      defaultValue: \\"\uC801\uC6A9 \uC0C1\uD488 \u3163 \uC794\uC5EC \uC218\uB7C9\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uC801\uC6A9 \uC0C1\uD488\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n    description: {\\n      defaultValue: \\"*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C\\",\\n      description: \\"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uC138\uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.\\",\\n      table: {\\n        type: {\\n          summary: \\"string\\",\\n        },\\n      },\\n      control: { type: \\"text\\" },\\n    },\\n  },\\n};\\n\\nexport const Default = (props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CouponCard {...props} />\\n    </div>\\n  );\\n};\\n";
    // @ts-ignore
    var __LOCATIONS_MAP__ = {"Default":{"startLoc":{"col":23,"line":84},"endLoc":{"col":1,"line":90},"startBody":{"col":23,"line":84},"endBody":{"col":1,"line":90}}};
    
import React from "react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    state: {
      defaultValue: "default",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 state\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      options: ["default", "applied", "checked"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "Week",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uD310\uB2E8\uD569\uB2C8\uB2E4.",
      options: ["Week", "Month", "All"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: "1",
      description:
        "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 day\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. (\uB2E8, type\uC774 All\uC77C \uACBD\uC6B0\uB294 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    saleMoney: {
      defaultValue: "00",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB960\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponName: {
      defaultValue: "\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uBA85\uCE6D\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponObject: {
      defaultValue: "\uC801\uC6A9 \uC0C1\uD488 \u3163 \uC794\uC5EC \uC218\uB7C9",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uC801\uC6A9 \uC0C1\uD488\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C",
      description: "CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uC138\uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",
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
      <CouponCard {...props} />
    </div>
  );
};



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <CouponCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:92},endLoc:{col:1,line:98},startBody:{col:23,line:92},endBody:{col:1,line:98}}}}},title:"@travelmakers-design/core/Component/Card/CouponCard",component:P,argTypes:{state:{defaultValue:"default",description:"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 state\uB97C \uD310\uB2E8\uD569\uB2C8\uB2E4.",options:["default","applied","checked"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"Week",description:"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 type\uC744 \uD310\uB2E8\uD569\uB2C8\uB2E4.",options:["Week","Month","All"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},day:{defaultValue:"1",description:"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 day\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. (\uB2E8, type\uC774 All\uC77C \uACBD\uC6B0\uB294 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.)",table:{type:{summary:"number"}},control:{type:"number"}},saleMoney:{defaultValue:"00",description:"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB960\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},couponName:{defaultValue:"\uD638\uD154\uC5D0\uC0B6 \uD2B9\uBCC4 \uD61C\uD0DD",description:"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uBA85\uCE6D\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},couponObject:{defaultValue:"\uC801\uC6A9 \uC0C1\uD488 \u3163 \uC794\uC5EC \uC218\uB7C9",description:"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0 \uC801\uC6A9 \uC0C1\uD488\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"*\uCFE0\uD3F0 \uC0AC\uC6A9 \uC548\uB0B4 \uBB38\uAD6C",description:"CouponCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uC138\uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},r=function(n){return Object(N.jsx)("div",{style:{padding:24},children:Object(N.jsx)(P,Object.assign({},n))})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <CouponCard {...props} />
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/HeaderPage/stories/HeaderPage.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return u});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),L=function(r){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:r.fontSizes.h4,lineHeight:r.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:r.fontSizes.h1,lineHeight:r.lineHeights.h1+"px"}}},U=Object(V.a)(function(p,r){var d=r.size,n=d===void 0?"small":d,s=r.color,C=s===void 0?"navy":s;return{root:{},titleWrapper:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:z.a.maxSize},title:Object.assign({},L(p)[n],{color:C==="navy"?p.colors.navy1:p.colors.white,margin:"0 35px"}),divider:{backgroundColor:C==="navy"?p.colors.navy1:p.colors.white,flex:1,height:"1px"}}}),G=e("./node_modules/react/jsx-runtime.js"),H=["size","color","title","className","co","overrideStyles"];function N(p,r){if(p==null)return{};var d=B(p,r),n,s;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(p);for(s=0;s<C.length;s++)n=C[s],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,n)||(d[n]=p[n]))}return d}function B(p,r){if(p==null)return{};var d={},n=Object.keys(p),s,C;for(C=0;C<n.length;C++)s=n[C],!(r.indexOf(s)>=0)&&(d[s]=p[s]);return d}var M=Object(Y.forwardRef)(function(p,r){var d=p.size,n=d===void 0?"small":d,s=p.color,C=s===void 0?"navy":s,j=p.title,t=p.className,b=p.co,k=p.overrideStyles,O=N(p,H),h=Object(J.c)(),a=U({size:n,color:C},{overrideStyles:k,name:"HeaderPage"}),y=a.classes,m=a.cx;return Object(G.jsx)(A.a,Object.assign({ref:r,className:m(y.root,t),co:b},O,{children:Object(G.jsxs)("div",{className:m(y.titleWrapper),children:[Object(G.jsx)("span",{className:m(y.divider)}),Object(G.jsx)("span",{className:m(y.title),children:j}),Object(G.jsx)("span",{className:m(y.divider)})]})}))});M.displayName="@travelmakers-design/core/Header/Section";var R=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,P={Default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}},R=`import React from "react";
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderPage {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:41},endLoc:{col:1,line:43},startBody:{col:23,line:41},endBody:{col:1,line:43}}}}},title:"@travelmakers-design/core/Component/HeaderPage",component:M,argTypes:{size:{defaultValue:"small",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],control:{type:"inline-radio"}},title:{defaultValue:"\uD0C0\uC774\uD2C0",table:{type:{summary:"React.ReactNode"}},description:"HeaderPage \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},u=function(r){return Object(G.jsx)(M,Object.assign({},r))};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderPage {...props} />;
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/HeaderSection/stories/HeaderSection.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return u});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./node_modules/react/jsx-runtime.js"),z=function(r){var d,n;return Object(V.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r,{children:Object(V.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(V.jsx)("path",{stroke:(d=r.color)!==null&&d!==void 0?d:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(V.jsx)("path",{fill:(n=r.color)!==null&&n!==void 0?n:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};z.displayName="BackIcon",z.displayName="@travelmakers-design/core/BackIcon";var L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=function(r){return{small:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:r.fontSizes.b3,lineHeight:r.lineHeights.b3+"px"},large:{fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:r.fontSizes.h6,lineHeight:r.lineHeights.h6+"px"}}},G=Object(L.a)(function(p,r){var d=r.size,n=d===void 0?"small":d;return{root:{display:"flex",alignItems:"center",width:"100%",height:n==="small"?"44px":"64px",maxWidth:"calc(1200px - 16px * 2)",padding:"0 16px",backgroundColor:p.colors.navy1},wrapper:{display:"flex",alignItems:"center",cursor:"pointer",width:"100%"},title:Object.assign({},U(p)[n],{color:p.colors.white,marginLeft:24})}}),H=["size","title","className","co","overrideStyles"];function N(p,r){if(p==null)return{};var d=B(p,r),n,s;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(p);for(s=0;s<C.length;s++)n=C[s],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,n)||(d[n]=p[n]))}return d}function B(p,r){if(p==null)return{};var d={},n=Object.keys(p),s,C;for(C=0;C<n.length;C++)s=n[C],!(r.indexOf(s)>=0)&&(d[s]=p[s]);return d}var M=Object(Y.forwardRef)(function(p,r){var d=p.size,n=d===void 0?"small":d,s=p.title,C=p.className,j=p.co,t=p.overrideStyles,b=N(p,H),k=Object(J.c)(),O=G({size:n},{overrideStyles:t,name:"HeaderSection"}),h=O.classes,a=O.cx;return Object(V.jsx)(A.a,Object.assign({ref:r,className:a(h.root,C),co:j},b,{children:Object(V.jsxs)("div",{className:a(h.wrapper),children:[Object(V.jsx)(z,{width:n==="small"?"16px":"24px",height:n==="small"?"16px":"24px"}),Object(V.jsx)("span",{className:a(h.title),children:s})]})}))});M.displayName="@travelmakers-design/core/Header/Section";var R=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,P={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}},R=`import React from "react";
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <HeaderSection {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:35},endLoc:{col:1,line:37},startBody:{col:23,line:35},endBody:{col:1,line:37}}}}},title:"@travelmakers-design/core/Component/HeaderSection",component:M,argTypes:{size:{defaultValue:"small",description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],control:{type:"inline-radio"}},title:{defaultValue:"\uD398\uC774\uC9C0 \uC774\uB984",table:{type:{summary:"React.ReactNode"}},description:"HeaderSection \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uD2C0\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}}}},u=function(r){return Object(V.jsx)(M,Object.assign({},r))};u.displayName="Default",u.parameters=Object.assign({storySource:{source:`(props) => {
  return <HeaderSection {...props} />;
}`}},u.parameters)},"./packages/travelmakers-design-core/src/components/HotelCard/stories/HotelCard.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return j});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),z=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),L=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),U=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),G=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),H=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function R(t){if(t==null)throw new TypeError("Cannot destructure undefined")}var P=Object(M.a)(function(t,b){var k,O,h,a,y,m,g,x,T;R(b);var c="580px",v="264px",i="328px",o="200px";return{root:{display:"flex",alignItems:"center",cursor:"default"},cardContainer:(k={display:"block",position:"relative",width:c},k[""+t.media.mobile]={width:i},k),flexBox:{display:"flex",flexDirection:"row",alignItems:"center"},spaceBetweenBox:{justifyContent:"space-between"},groupLabel:(O={position:"absolute",width:"100%",paddingLeft:"32px",paddingRight:"12px",alignItems:"flex-start"},O[""+t.media.mobile]={paddingLeft:"16px"},O),soldOutBox:(h={display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0,height:v},h[""+t.media.mobile]={height:o},h["& > b"]={color:t.colors.white,fontFamily:"PT Serif",fontStyle:"italic",fontWeight:700,fontSize:t.fontSizes.h1,lineHeight:t.lineHeights.h1+"px"},h["& > small"]={color:t.colors.white,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:t.fontSizes.h5,lineHeight:t.lineHeights.h5+"px"},h),individualLabel:{marginRight:0},divider:{backgroundColor:t.colors.navy2,flex:1,height:"1px",margin:"12px 0 15px 0"},textRed:{color:t.colors.red2},textNavy1:{color:t.colors.navy1},textGray2:{color:t.colors.gray2},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},mr2:{marginRight:"2px"},labelImageBox:{height:"20px"},cardImageBox:(a={width:c,height:v,overflow:"hidden"},a[""+t.media.mobile]={width:i,height:o},a),labelBox:{height:"20px"},priceBox:{height:"36px"},addressBox:(y={marginTop:"11px"},y[""+t.media.mobile]={marginTop:"8px"},y),imageWrapper:(m={width:c,height:v},m[""+t.media.mobile]={width:i,height:o},m),image:(g={width:c,height:v,position:"inherit",display:"flex",justifyContent:"center",alignItems:"end"},g["&: hover"]={width:"110%",height:"110%",transition:"width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)"},g[""+t.media.mobile]={width:i,height:o},g),textWrapper:(x={padding:"16px 32px"},x[""+t.media.mobile]={padding:"16px 16px"},x.backgroundColor=t.colors.white,x),tagBox:{marginTop:"12px"},sellout:(T={marginTop:"49px"},T[""+t.media.mobile]={marginTop:"41.5px"},T)}}),l=e("./node_modules/react/jsx-runtime.js"),u=["type","hotelImage","hotelItems","addressText","hotelName","percentText","beforePrice","startPrice","priceText","couponBoolean","coupons","timelineTags","soldOut","className","co","overrideStyles"];function p(t,b){if(t==null)return{};var k=r(t,b),O,h;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(h=0;h<a.length;h++)O=a[h],!(b.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,O)||(k[O]=t[O]))}return k}function r(t,b){if(t==null)return{};var k={},O=Object.keys(t),h,a;for(a=0;a<O.length;a++)h=O[a],!(b.indexOf(h)>=0)&&(k[h]=t[h]);return k}var d=Object(Y.forwardRef)(function(t,b){var k=t.type,O=k===void 0?"default":k,h=t.hotelImage,a=t.hotelItems,y=a===void 0?[]:a,m=t.addressText,g=t.hotelName,x=t.percentText,T=t.beforePrice,c=t.startPrice,v=t.priceText,i=t.couponBoolean,o=i===void 0?!1:i,f=t.coupons,D=t.timelineTags,S=t.soldOut,I=S===void 0?!1:S,E=t.className,ee=t.co,se=t.overrideStyles,W=p(t,u),$=Object(A.c)(),Z=P({},{overrideStyles:se,name:"HotelCard"}),K=Z.classes,ne=Z.cx,ve=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:ne(K.flexBox,K.labelBox),children:[Object(l.jsx)(N.a,{family:"Pretendard",level:"b3",color:$.colors.navy1,className:ne(K.label,K.textNavy1),children:x&&"\uC815\uAC00"}),Object(l.jsx)(N.a,{family:"Pretendard",level:"b3",color:$.colors.navy1,className:ne(K.label,K.textNavy1),children:T}),o&&Object(l.jsx)(L.a,{fill:!0,children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]}),Object(l.jsx)("div",{className:ne(K.flexBox,K.priceBox),children:Object(l.jsx)(G.a,{couponBool:!0,percentBool:!!x,priceBool:!!v,nightBool:!1,percentText:x,priceStartBool:!!c,priceStartText:c,priceText:v,type:"primary"})})]})},_e=function(){return Object(l.jsx)("div",{className:ne(K.sellout),children:Object(l.jsx)(N.a,{family:"Pretendard",level:"b2",color:$.colors.gray4,className:ne(K.label),children:"\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})})};return Object(l.jsx)(B.a,Object.assign({ref:b,className:ne(K.root,E),co:ee},W,{children:Object(l.jsxs)("div",{className:ne(K.cardContainer),children:[Object(l.jsxs)("div",{className:ne(K.imageWrapper),children:[Object(l.jsxs)("div",{className:ne(K.flexBox,K.spaceBetweenBox,K.groupLabel),children:[Object(l.jsx)("div",{className:ne(K.flexBox),children:y.map(function(F,oe){return Object(l.jsx)(H.a,{color:(oe+1)%2===0?"blue":(oe+1)%3===0?"purple":"green",fill:!0,size:"medium",className:ne(K.individualLabel),children:F})})}),Object(l.jsx)("div",{className:ne(K.addressBox),children:Object(l.jsx)(N.a,{family:"Pretendard",level:"b1",color:"rgba(255, 255, 255, 0.8)",children:m})})]}),Object(l.jsx)("div",{className:ne(K.cardImageBox),children:Object(l.jsx)(U.a,{className:ne(K.image),src:h,height:"100%",children:I&&Object(l.jsxs)("div",{className:ne(K.soldOutBox),children:[Object(l.jsx)("b",{children:"Sold Out"}),Object(l.jsx)("small",{children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})})})]}),Object(l.jsxs)("div",{className:ne(K.textWrapper),children:[Object(l.jsx)(N.a,{family:"Pretendard",level:"h4",mobileLevel:"b2",color:I?$.colors.gray4:$.colors.navy1,strong:!0,children:g}),Object(l.jsx)("div",{className:ne(K.flexBox,K.labelImageBox),children:Object(l.jsx)(z.a,{type:O,soldOut:I})}),Object(l.jsx)("div",{className:ne(K.divider)}),I?Object(l.jsx)(_e,{}):Object(l.jsx)(ve,{}),Object(l.jsx)("div",{className:ne(K.flexBox,K.tagBox),children:Object(l.jsx)(V.a,{items:D,soldOut:I,fill:!0})})]})]})}))});d.displayName="@travelmakers-design/core/Header/Section";var n=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}},n=`import React from "react";
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
`,s={Default:{startLoc:{col:23,line:124},endLoc:{col:1,line:130},startBody:{col:23,line:124},endBody:{col:1,line:130}}},C=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:132},endLoc:{col:1,line:138},startBody:{col:23,line:132},endBody:{col:1,line:138}}}}},title:"@travelmakers-design/core/Component/Card/HotelCard",component:d,argTypes:{type:{defaultValue:"default",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},hotelItems:{defaultValue:["\uD68C\uC6D0\uD560\uC778\uAC00"],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},addressText:{defaultValue:"address",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelName:{defaultValue:"\uD638\uD154\uBA85",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"80",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},beforePrice:{defaultValue:"100,000\uC6D0",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},startPrice:{defaultValue:"1\uBC15 50,000\uC6D0 \uBD80\uD130",description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:2e5,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},couponBoolean:{defaultValue:!0,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},coupons:{defaultValue:[],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",control:{type:"object"}},timelineTags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},soldOut:{defaultValue:!1,description:"HotelCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},j=function(b){return Object(l.jsx)("div",{style:{padding:24},children:Object(l.jsx)(d,Object.assign({},b))})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelCard {...props} />
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/HotelFeatureCard/stories/HotelFeatureCard.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return j});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),z=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),L=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),U=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),G=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),H=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),N=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),B=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),M=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function R(t){if(t==null)throw new TypeError("Cannot destructure undefined")}var P=Object(M.a)(function(t,b){var k,O,h,a,y,m,g,x,T,c,v,i,o;R(b);var f="533px",D="344px",S="296px",I="180px",E="328px";return{root:(k={display:"inline-flex",alignItems:"center",cursor:"default",backgroundColor:t.colors.white,height:E},k[""+t.media.tablet]={height:"auto"},k),cardContainer:(O={display:"inline-flex",height:E,paddingLeft:"24px",position:"relative"},O[""+t.media.tablet]={display:"block",height:"auto",padding:"0"},O),flexBox:{display:"flex",flexDirection:"row",alignItems:"center"},goImageflexBox:(h={display:"flex",flexDirection:"row",alignItems:"baseline",width:"fit-content",borderBottom:"1px solid "+t.colors.navy1,marginLeft:"41px"},h[""+t.media.tablet]={display:"none"},h),spaceBetweenBox:{justifyContent:"space-between"},groupLabel:(a={position:"absolute",zIndex:1,top:"-32px",width:"100%",paddingLeft:"32px",paddingRight:"12px",alignItems:"flex-start"},a[""+t.media.tablet]={paddingLeft:"16px"},a),soldOutBox:(y={display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",width:"100%",background:"rgba(0, 0, 0, 0.5)",position:"absolute",top:0,left:0,height:D},y[""+t.media.tablet]={height:I},y["& > b"]={color:t.colors.white,fontFamily:"PT Serif",fontStyle:"italic",fontWeight:700,fontSize:t.fontSizes.h1,lineHeight:t.lineHeights.h1+"px"},y["& > small"]={color:t.colors.white,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:400,fontSize:t.fontSizes.h5,lineHeight:t.lineHeights.h5+"px"},y),individualLabel:{marginRight:0},divider:{backgroundColor:t.colors.navy2,flex:1,height:"1px",margin:"45px 0 14px 0"},textRed:{color:t.colors.red2},textNavy1:{color:t.colors.navy1},textGray2:{color:t.colors.gray2},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},mr2:{marginRight:"2px"},labelImageBox:{height:"20px"},cardImageBox:(m={width:f,height:D,overflow:"hidden",position:"absolute",bottom:16},m[""+t.media.tablet]={width:S,height:I,top:"-32px",left:"50%",transform:"translate(-50%, 0)"},m),labelBox:{height:"20px"},priceBox:{height:"36px"},addressBox:(g={marginTop:"11px"},g[""+t.media.tablet]={marginTop:"8px"},g),imageWrapper:(x={width:f,height:D},x[""+t.media.tablet]={width:S,height:I},x.position="relative",x),image:(T={width:f,height:D,position:"inherit",display:"flex",justifyContent:"center",alignItems:"end"},T["&: hover"]={width:"110%",height:"110%",transition:"width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)"},T[""+t.media.tablet]={width:S,height:I},T),textWrapper:(c={padding:"0 72px 16px 72px"},c[""+t.media.tablet]={padding:"0 16px 16px 16px"},c.backgroundColor=t.colors.white,c),timer:(v={padding:"0 16px",backgroundColor:t.colors.green3},v[""+t.media.tablet]={width:S,margin:"auto"},v),tagBox:{marginTop:"24px"},sellout:(i={marginTop:"49px"},i[""+t.media.tablet]={marginTop:"41.5px"},i),arrowImage:{width:"21px",marginLeft:"9.5px"},bottomSection:(o={},o[""+t.media.tablet]={marginTop:"-32px"},o)}}),l=e("./node_modules/react/jsx-runtime.js"),u=["type","hotelImage","hotelItems","addressText","hotelName","percentText","beforePrice","startPrice","priceText","couponBoolean","coupons","timelineTags","soldOut","className","co","overrideStyles"];function p(t,b){if(t==null)return{};var k=r(t,b),O,h;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(h=0;h<a.length;h++)O=a[h],!(b.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,O)||(k[O]=t[O]))}return k}function r(t,b){if(t==null)return{};var k={},O=Object.keys(t),h,a;for(a=0;a<O.length;a++)h=O[a],!(b.indexOf(h)>=0)&&(k[h]=t[h]);return k}var d=Object(Y.forwardRef)(function(t,b){var k=t.type,O=k===void 0?"default":k,h=t.hotelImage,a=t.hotelItems,y=a===void 0?[]:a,m=t.addressText,g=t.hotelName,x=t.percentText,T=t.beforePrice,c=t.startPrice,v=t.priceText,i=t.couponBoolean,o=i===void 0?!1:i,f=t.coupons,D=t.timelineTags,S=t.soldOut,I=S===void 0?!1:S,E=t.className,ee=t.co,se=t.overrideStyles,W=p(t,u),$=Object(A.c)(),Z=P({},{overrideStyles:se,name:"HotelFeatureCard"}),K=Z.classes,ne=Z.cx,ve=function(oe){var ie=oe.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:ne(K.flexBox,K.labelBox),children:[Object(l.jsx)(N.a,{family:"Pretendard",level:"b3",color:$.colors.navy1,className:ne(K.label,K.textNavy1),children:x&&"\uC815\uAC00"}),Object(l.jsx)(N.a,{family:"Pretendard",level:"b3",color:$.colors.navy1,className:ne(K.label,K.textNavy1),children:T}),o&&Object(l.jsx)(L.a,{fill:!0,children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]}),Object(l.jsxs)("div",{className:ne(K.flexBox,K.priceBox),children:[Object(l.jsx)(G.a,{couponBool:!0,percentBool:!!x,priceBool:!!v,nightBool:!1,percentText:x,priceStartBool:!!c,priceStartText:c,priceText:v,type:"primary"}),ie]})]})},_e=function(){return Object(l.jsx)("div",{className:ne(K.sellout),children:Object(l.jsx)(N.a,{family:"Pretendard",level:"b2",color:$.colors.gray4,className:ne(K.label),children:"\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."})})};return Object(l.jsx)(B.a,Object.assign({ref:b,className:ne(K.root,E),co:ee},W,{children:Object(l.jsxs)("div",{className:ne(K.cardContainer),children:[Object(l.jsx)("div",{className:ne(K.imageWrapper),children:Object(l.jsxs)("div",{className:ne(K.flexBox,K.spaceBetweenBox,K.groupLabel),children:[Object(l.jsx)("div",{className:ne(K.flexBox),children:y.map(function(F,oe){return Object(l.jsx)(H.a,{color:(oe+1)%2===0?"blue":(oe+1)%3===0?"purple":"green",fill:!0,size:"medium",className:ne(K.individualLabel),children:F})})}),Object(l.jsx)("div",{className:ne(K.addressBox),children:Object(l.jsx)(N.a,{family:"Pretendard",level:"b1",color:"rgba(255, 255, 255, 0.8)",children:m})})]})}),Object(l.jsx)("div",{className:ne(K.cardImageBox),children:Object(l.jsx)(U.a,{className:ne(K.image),src:h,height:"100%",children:I&&Object(l.jsxs)("div",{className:ne(K.soldOutBox),children:[Object(l.jsx)("b",{children:"Sold Out"}),Object(l.jsx)("small",{children:"\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"})]})})}),Object(l.jsxs)("div",{className:ne(K.bottomSection),children:[Object(l.jsx)("div",{className:ne(K.timer),children:"timer"}),Object(l.jsxs)("div",{className:ne(K.textWrapper),children:[Object(l.jsx)("div",{className:ne(K.flexBox,K.tagBox),children:Object(l.jsx)(V.a,{items:D,soldOut:I,fill:!1})}),Object(l.jsx)(N.a,{family:"Pretendard",level:"h4",mobileLevel:"b2",style:{marginTop:"12px"},color:I?$.colors.gray4:$.colors.navy1,strong:!0,children:g}),Object(l.jsx)("div",{className:ne(K.flexBox,K.labelImageBox),children:Object(l.jsx)(z.a,{type:O,soldOut:I})}),Object(l.jsx)("div",{className:ne(K.divider)}),I?Object(l.jsx)(_e,{}):Object(l.jsx)(ve,{children:Object(l.jsxs)("div",{className:ne(K.goImageflexBox),children:[Object(l.jsx)(N.a,{family:"PT Serif",level:"h4",mobileLevel:"b2",style:{width:"auto",lineHeight:"24px"},color:$.colors.navy1,children:"Go"}),Object(l.jsx)(U.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-arrow-single.svg"),className:ne(K.arrowImage)})]})})]})]})]})}))});d.displayName="@travelmakers-design/core/Header/Section";var n=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,s={Default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}},n=`import React from "react";
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
`,s={Default:{startLoc:{col:23,line:125},endLoc:{col:1,line:131},startBody:{col:23,line:125},endBody:{col:1,line:131}}},C=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 40 }}>\\n      <HotelFeatureCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:133},endLoc:{col:1,line:139},startBody:{col:23,line:133},endBody:{col:1,line:139}}}}},title:"@travelmakers-design/core/Component/Card/HotelFeatureCard",component:d,argTypes:{type:{defaultValue:"default",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["default","hotel-mini","residence"],control:{type:"inline-radio"}},hotelItems:{defaultValue:["\uD68C\uC6D0\uD560\uC778\uAC00"],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},addressText:{defaultValue:"address",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0 \uBD80\uBD84\uC5D0 \uD45C\uC2DC\uB418\uB294 \uC8FC\uC18C\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelName:{defaultValue:"\uD638\uD154\uBA85",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD638\uD154\uBA85\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},percentText:{defaultValue:"80",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD560\uC778\uB418\uB294 \uD37C\uC13C\uD2B8\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},beforePrice:{defaultValue:"100,000\uC6D0",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC815\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},startPrice:{defaultValue:"1\uBC15 50,000\uC6D0 \uBD80\uD130",description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},priceText:{defaultValue:2e5,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"number"}},control:{type:"number"}},couponBoolean:{defaultValue:!0,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2DC\uC791\uAC00\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},coupons:{defaultValue:[],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uCFE0\uD3F0\uB370\uC774\uD130\uB97C \uAC00\uC838\uC635\uB2C8\uB2E4.",control:{type:"object"}},timelineTags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBA87\uC8FC\uC0B4\uAE30\uC5D0 \uB300\uD55C \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},soldOut:{defaultValue:!1,description:"HotelFeatureCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD310\uB9E4\uAC00\uB2A5 \uC5EC\uBD80\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},j=function(b){return Object(l.jsx)("div",{style:{padding:40},children:Object(l.jsx)(d,Object.assign({},b))})};j.displayName="Default",j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 40 }}>
      <HotelFeatureCard {...props} />
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return P});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.array.map.js"),J=e("./node_modules/core-js/modules/es.object.assign.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function G(l){if(l==null)throw new TypeError("Cannot destructure undefined")}var H=Object(U.a)(function(l,u){G(u);var p=["#03936e","#1a749e","#73327a","#ab253e","#b2622e"];return{root:{display:"flex"},item:{}}}),N=e("./node_modules/react/jsx-runtime.js"),B=["items","soldOut","fill","title","className","co","overrideStyles"];function M(l,u){if(l==null)return{};var p=R(l,u),r,d;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);for(d=0;d<n.length;d++)r=n[d],!(u.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,r)||(p[r]=l[r]))}return p}function R(l,u){if(l==null)return{};var p={},r=Object.keys(l),d,n;for(n=0;n<r.length;n++)d=r[n],!(u.indexOf(d)>=0)&&(p[d]=l[d]);return p}var P=Object(V.forwardRef)(function(l,u){var p=l.items,r=p===void 0?[]:p,d=l.soldOut,n=d===void 0?!1:d,s=l.fill,C=s===void 0?!1:s,j=l.title,t=l.className,b=l.co,k=l.overrideStyles,O=M(l,B),h=Object(A.c)(),a=H({},{overrideStyles:k,name:"HotelItems"}),y=a.classes,m=a.cx,g=function(){return Object(N.jsx)(N.Fragment,{children:r.map(function(T){return Object(N.jsx)(z.a,{color:"gray",disabled:n,fill:C,roundness:!0,size:"medium",children:T})})})};return Object(N.jsx)(L.a,Object.assign({ref:u,className:m(y.root,t),co:b},O,{children:Object(N.jsx)(g,{})}))});P.displayName="@travelmakers-design/core/HotelItems"},"./packages/travelmakers-design-core/src/components/HotelItems/stories/HotelItems.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelItems {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:24},endLoc:{col:1,line:30},startBody:{col:23,line:24},endBody:{col:1,line:30}}},V=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:22},startBody:{col:23,line:16},endBody:{col:1,line:22}}};_.default={parameters:{storySource:{source:`
    
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
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return R});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),V=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function U(P){if(P==null)throw new TypeError("Cannot destructure undefined")}var G=Object(L.a)(function(P,l){return U(l),{root:{display:"flex",alignItems:"center"},textImage:{width:"16px",height:"16px",marginRight:"3px"},label:{width:"auto",marginRight:"4px"},textGray2:{color:P.colors.gray2}}}),H=e("./node_modules/react/jsx-runtime.js"),N=["type","soldOut","title","className","co","overrideStyles"];function B(P,l){if(P==null)return{};var u=M(P,l),p,r;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(P);for(r=0;r<d.length;r++)p=d[r],!(l.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,p)||(u[p]=P[p]))}return u}function M(P,l){if(P==null)return{};var u={},p=Object.keys(P),r,d;for(d=0;d<p.length;d++)r=p[d],!(l.indexOf(r)>=0)&&(u[r]=P[r]);return u}var R=Object(J.forwardRef)(function(P,l){var u=P.type,p=u===void 0?"navy":u,r=P.soldOut,d=r===void 0?!1:r,n=P.title,s=P.className,C=P.co,j=P.overrideStyles,t=B(P,N),b=Object(X.c)(),k=G({},{overrideStyles:j,name:"HotelLabelType"}),O=k.classes,h=k.cx,a=function(T){var c=T.type;switch(c){case"hotel-mini":return Object(H.jsx)(m,{});case"residence":return Object(H.jsx)(g,{});default:return Object(H.jsx)(y,{})}},y=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(A.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-star.svg"),className:h(O.textImage),height:"16px"}),Object(H.jsx)(V.a,{family:"Pretendard",level:"b3",color:d?b.colors.gray4:b.colors.navy2,children:"5\uC131\uAE09 | \uD638\uD154"})]})},m=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(A.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-mini.svg"),className:h(O.textImage),height:"16px"}),Object(H.jsx)(V.a,{family:"Pretendard",level:"b3",color:d?b.colors.gray4:b.colors.navy2,children:"| \uBBF8\uB2C8 \uD638\uD154"})]})},g=function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(A.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-residence.svg"),className:h(O.textImage),height:"16px"}),Object(H.jsx)(V.a,{family:"Pretendard",level:"b3",color:d?b.colors.gray4:b.colors.navy2,children:"| \uB808\uC9C0\uB358\uC2A4 \uD638\uD154"})]})};return Object(H.jsx)(z.a,Object.assign({ref:l,className:h(O.root,s),co:C},t,{children:Object(H.jsx)(a,{type:p})}))});R.displayName="@travelmakers-design/core/HotelLabelType"},"./packages/travelmakers-design-core/src/components/HotelLabelType/stories/HotelLabelType.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-core/src/components/HotelLabelType/HotelLabelType.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelLabelType {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:35},endLoc:{col:1,line:41},startBody:{col:23,line:35},endBody:{col:1,line:41}}},V=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:27},endLoc:{col:1,line:33},startBody:{col:23,line:27},endBody:{col:1,line:33}}};_.default={parameters:{storySource:{source:`
    
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
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/HotelReviewCard/stories/HotelReviewCard.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return d});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/HotelItems/HotelItems.tsx"),V=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function G(n){if(n==null)throw new TypeError("Cannot destructure undefined")}var H=function(s){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:s.fontSizes.h4,lineHeight:s.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:s.fontSizes.h1,lineHeight:s.lineHeights.h1+"px"}}},N=Object(U.a)(function(n,s){var C,j,t,b,k,O,h,a,y,m;return G(s),{root:(C={padding:"24px",backgroundColor:n.colors.white,display:"flex",gap:"16px"},C[""+n.media.mobile]={padding:"16px",display:"block"},C),contentWrapper:{width:"100%"},contentBox:(j={},j[""+n.media.mobile]={display:"flex",height:"48px",gap:"16px"},j),headerBox:(t={marginBottom:"8px"},t[""+n.media.mobile]={display:"flex",justifyContent:"center",alignItems:"center"},t),content:(O={height:"fit-content"},O["& > div > span"]=(k={display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-all"},k["-webkit-box-orient"]="vertical",k["-webkit-line-clamp"]="2",k[""+n.media.mobile]=(b={},b["-webkit-line-clamp"]="1",b),k),O),text:{},tagList:{marginBottom:"16px"},image:(h={},h["& > div "]={height:"100%"},h["& > div > img"]={height:"100% !important"},h),imageWrapper:(a={},a[""+n.media.mobile]={display:"none"},a),mobileImageWrapper:(y={display:"none",margin:"auto"},y[""+n.media.mobile]={display:"block",height:"40px"},y),arrowImage:(m={width:"16px",height:"16px",display:"none"},m[""+n.media.mobile]={display:"block"},m),divider:{width:"100%",height:"1px",backgroundColor:n.colors.gray5,margin:"12px 0 4px 0"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["hotelImage","tags","content","reviewName","hotelOption","title","className","co","overrideStyles"];function R(n,s){if(n==null)return{};var C=P(n,s),j,t;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(t=0;t<b.length;t++)j=b[t],!(s.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,j)||(C[j]=n[j]))}return C}function P(n,s){if(n==null)return{};var C={},j=Object.keys(n),t,b;for(b=0;b<j.length;b++)t=j[b],!(s.indexOf(t)>=0)&&(C[t]=n[t]);return C}var l=Object(Y.forwardRef)(function(n,s){var C=n.hotelImage,j=n.tags,t=n.content,b=n.reviewName,k=n.hotelOption,O=n.title,h=n.className,a=n.co,y=n.overrideStyles,m=R(n,M),g=Object(J.c)(),x=N({},{overrideStyles:y,name:"HotelReviewCard"}),T=x.classes,c=x.cx;return Object(B.jsxs)(L.a,Object.assign({ref:s,className:c(T.root,h),co:a},m,{children:[Object(B.jsxs)("div",{className:c(T.contentWrapper),children:[Object(B.jsxs)("div",{className:c(T.headerBox),children:[Object(B.jsx)(z.a,{family:"Pretendard",level:"b3",color:g.colors.navy3,className:c(T.text),children:"\uC774\uB7F0 \uC810\uC774 \uC88B\uC558\uC5B4\uC694."}),Object(B.jsx)(V.a,{src:e("./packages/travelmakers-design-core/src/assets/svg/ic-angle.svg"),className:c(T.arrowImage)})]}),Object(B.jsx)(A.a,{items:j,fill:!0,className:c(T.tagList)}),Object(B.jsxs)("div",{className:c(T.contentBox),children:[Object(B.jsx)(z.a,{family:"Pretendard",level:"b1",color:g.colors.navy3,className:c(T.content),children:t}),Object(B.jsx)("div",{className:c(T.mobileImageWrapper),children:Object(B.jsx)(V.a,{src:C,width:40,height:40})})]}),Object(B.jsx)("div",{className:c(T.divider)}),Object(B.jsx)("div",{children:Object(B.jsxs)(z.a,{family:"Pretendard",level:"b3",color:g.colors.navy1,children:[b,"\uB2D8\uC758 \uB9AC\uBDF0",k&&Object(B.jsxs)("span",{style:{color:g.colors.navy3,marginLeft:"9px"},children:["\uC0C1\uD488 \uC635\uC158 : ",k]})]})})]}),Object(B.jsx)("div",{className:c(T.image,T.imageWrapper),children:Object(B.jsx)(V.a,{src:C,width:145,height:145})})]}))});l.displayName="@travelmakers-design/core/HotelReviewCard";var u=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},u=`import React from "react";
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
`,p={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}}},r=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <HotelReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}}}},title:"@travelmakers-design/core/Component/Card/HotelReviewCard",component:l,argTypes:{hotelImage:{defaultValue:"https://picsum.photos/600/400",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},tags:{defaultValue:["1\uC8FC \uC0B4\uAE30","2\uC8FC \uC0B4\uAE30","3\uC8FC \uC0B4\uAE30","\uD55C \uB2EC \uC774\uC0C1"],description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB808\uC774\uBE14\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",control:{type:"object"}},content:{defaultValue:" \uD638\uD154\uC5D0 \uC0B6\uC744 \uC54C\uAC8C \uB41C \uC774\uD6C4 \uB0B4\uB144 \uAFC8\uC5D0 \uADF8\uB9AC\uB358 \uC0C8\uC544\uD30C\uD2B8 \uC785\uC8FC\uB97C \uC55E\uB450\uACE0 \uAE30\uC874\uC5D0 \uC804\uC138 \uACC4\uC57D \uC885\uB8CC\uC77C\uC774 \uB2E4\uAC00\uC640\uC11C \uB2E8\uAE30\uB85C \uC0B4\uC218\uC788\uC744\uB9CC\uD55C \uACF3\uC744 \uC774\uB9AC\uC800\uB9AC \uC54C\uC544\uBCF4\uAC8C \uB410\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBA3C\uC800 \uC0DD\uAC01\uD588\uB358\uAC74 \uD68C\uC0AC\uADFC\uCC98 \uC624\uD53C\uC2A4\uD154 \uC6D4\uC138\uC600\uC9C0\uB9CC \uCD5C\uC18C1\uB144 \uACC4\uC57D\uB2E8\uC704\uB85C\uB9CC \uC774\uB8E8\uC5B4\uC9C0\uB294 \uACC4\uC57D\uACFC \uBD80\uB3D9\uC0B0 \uBCF5\uBE44 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBCF4\uC99D\uAE08\uC744 \uB0B4\uC57C\uD55C\uB2E4\uB294\uAC8C \uC5EC\uAC04\uD798\uB4E0\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},reviewName:{defaultValue:"\uD64D\uAE38\uB3D9",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB9AC\uBDF0\uC5B4 \uC774\uB984\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},hotelOption:{defaultValue:"\uD55C\uB2EC \uC0B4\uAE30",description:"HotelReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C1\uD488\uC635\uC158\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},d=function(s){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(l,Object.assign({},s))})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelReviewCard {...props} />
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return A});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./node_modules/react/jsx-runtime.js"),J=e.n(X),A=function(z){return Object(X.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},z,{children:Object(X.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))};A.displayName="CloseIcon",A.displayName="@travelmakers-design/core/CloseIcon"},"./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return l});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/react/index.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),A=e("./node_modules/core-js/modules/es.string.small.js"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),L=e("./packages/travelmakers-design-core/src/constants/index.ts"),U=e("./packages/travelmakers-design-core/src/utils/addAlpha.ts"),G={xsmall:{width:L.a.xsmall,height:L.a.xsmall},small:{width:L.a.small,height:L.a.small},medium:{width:L.a.medium,height:L.a.medium},large:{width:L.a.large,height:L.a.large}},H={xsmall:8,small:8,medium:16,large:16},N=Object(V.a)(function(u,p,r){var d,n,s,C=p.variant,j=p.size,t=p.line,b=p.roundness,k=r("loading"),O=r("inner"),h=r("spinner"),a=C||u.colors.navy1;return{loading:(d={ref:k,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},d["."+O]={opacity:0},d["."+h]={display:"flex"},d),solid:(n={backgroundColor:u.palettes[a][u.colorScheme==="light",0],color:u.colorScheme==="light"?u.colors.white:u.colors.black,"&:not(:disabled):hover":{backgroundColor:u.palettes[a][u.colorScheme==="light",1]},"&:not(:disabled):active":{backgroundColor:u.palettes[a][u.colorScheme==="light",2]},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:b?u.radius.round:2,outline:"1px solid "+u.palettes[a][u.colorScheme==="light",0]}}},n["&:disabled:not(."+k+")"]={backgroundColor:u.colors.gray5,color:t?u.colors.black:u.colors.white},n),ghost:(s={backgroundColor:u.colors.transparent,border:"1px solid "+u.palettes[a][u.colorScheme==="light",0],color:u.palettes[a][u.colorScheme==="light",0],"&:not(:disabled):hover":{backgroundColor:Object(U.a)(u.palettes[a][u.colorScheme==="light",0],u.opacity.opacity3)},"&:not(:disabled):active":{backgroundColor:Object(U.a)(u.palettes[a][u.colorScheme==="light",1],u.opacity.opacity3)},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:b?u.radius.round:2,outline:"1px solid "+u.palettes[a][u.colorScheme==="light",0]}}},s["&:disabled:not(."+k+")"]={backgroundColor:u.colors.gray5,color:t?u.colors.black:u.colors.white},s),root:Object.assign({},G[j],Object(z.b)(u),{borderRadius:b?u.radius.round:u.radius.small,position:"relative",padding:0,lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",boxSizing:"border-box",textDecoration:"none",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),inner:{ref:O,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible","& > *":{width:G[j].width-H[j],height:G[j].height-H[j]}},spinnerWrapper:{ref:h,position:"absolute",top:0,right:0,bottom:0,left:0,display:"none",alignItems:"center",justifyContent:"center"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["children","component","size","variant","line","type","disabled","roundness","className","co","overrideStyles"];function R(u,p){if(u==null)return{};var r=P(u,p),d,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);for(n=0;n<s.length;n++)d=s[n],!(p.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,d)||(r[d]=u[d]))}return r}function P(u,p){if(u==null)return{};var r={},d=Object.keys(u),n,s;for(s=0;s<d.length;s++)n=d[s],!(p.indexOf(n)>=0)&&(r[n]=u[n]);return r}var l=Object(X.forwardRef)(function(u,p){var r=u.children,d=u.component,n=u.size,s=n===void 0?"medium":n,C=u.variant,j=u.line,t=u.type,b=t===void 0?"button":t,k=u.disabled,O=k===void 0?!1:k,h=u.roundness,a=h===void 0?!1:h,y=u.className,m=u.co,g=u.overrideStyles,x=R(u,M),T=N({variant:C,size:s,line:j,roundness:a},{overrideStyles:g,name:"Button"}),c=T.classes,v=T.cx;return Object(B.jsx)(J.a,Object.assign({component:d||"button",className:v(c.root,c[j?"ghost":"solid"],y),type:b,disabled:O,ref:p,onTouchStart:function(){},co:m},x,{children:Object(B.jsx)("div",{className:c.inner,children:r})}))});l.displayName="@travelmakers-design/core/IconButton"},"./packages/travelmakers-design-core/src/components/IconButton/stories/CloseButton.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return R});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),A=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),z=e("./node_modules/react/jsx-runtime.js"),L=["size","variant"];function U(P,l){if(P==null)return{};var u=G(P,l),p,r;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(P);for(r=0;r<d.length;r++)p=d[r],!(l.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,p)||(u[p]=P[p]))}return u}function G(P,l){if(P==null)return{};var u={},p=Object.keys(P),r,d;for(d=0;d<p.length;d++)r=p[d],!(l.indexOf(r)>=0)&&(u[r]=P[r]);return u}var H=Object(A.forwardRef)(function(P,l){var u=P.size,p=u===void 0?"medium":u,r=P.variant,d=r===void 0?"primary":r,n=U(P,L);return Object(z.jsx)(J.a,Object.assign({size:p,variant:d,ref:l},n,{children:Object(z.jsx)(V.a,{})}))});H.displayName="@travelmakers-design/core/CloseButton";var N=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,B={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}},N=`import {
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
`,B={Default:{startLoc:{col:23,line:91},endLoc:{col:1,line:93},startBody:{col:23,line:91},endBody:{col:1,line:93}}},M=_.default={title:"@travelmakers-design/core/Component/CloseButton",component:H,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},variant:{defaultValue:"primary",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary","tertiary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},line:{defaultValue:!1,description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},roundness:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <CloseButton {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:101},startBody:{col:23,line:99},endBody:{col:1,line:101}}}},docs:{page:function(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Y.g,{}),Object(z.jsx)(Y.f,{}),Object(z.jsx)(Y.b,{}),Object(z.jsx)(Y.d,{}),Object(z.jsx)(Y.a,{story:Y.c}),Object(z.jsx)(Y.e,{})]})}},actions:{handles:["click button"]}}},R=function(l){return Object(z.jsx)(H,Object.assign({},l))};R.displayName="Default",R.parameters=Object.assign({storySource:{source:`(props) => {
  return <CloseButton {...props} />;
}`}},R.parameters)},"./packages/travelmakers-design-core/src/components/IconButton/stories/IconButton.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return U});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./packages/travelmakers-design-core/src/components/IconButton/IconButton.tsx"),X=e("./node_modules/react/index.js"),J=e.n(X),A=e("./node_modules/react/jsx-runtime.js"),V=e.n(A),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}},z=`import {
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return <IconButton {...props}>{icon}</IconButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:99},endLoc:{col:1,line:110},startBody:{col:23,line:99},endBody:{col:1,line:110}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(w.g,{}),Object(A.jsx)(w.f,{}),Object(A.jsx)(w.b,{}),Object(A.jsx)(w.d,{}),Object(A.jsx)(w.a,{story:w.c}),Object(A.jsx)(w.e,{})]})}},actions:{handles:["click button"]}}};var U=function(H){var N=Object(A.jsx)("svg",{viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(A.jsx)(re.a,Object.assign({},H,{children:N}))};U.displayName="Default",U.parameters=Object.assign({storySource:{source:`(props) => {
  const icon = (
    <svg viewBox="0 0 24 24">
      <path
        d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
        fill="currentColor"
      />
    </svg>
  );

  return <IconButton {...props}>{icon}</IconButton>;
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return P});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),A=e("./node_modules/react/jsx-runtime.js"),V=function(u){return Object(A.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u,{children:[Object(A.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(A.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(A.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(A.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};V.displayName="CouponPercentIcon",V.displayName="@travelmakers-design/core/CouponPercentIcon";var z=e("./node_modules/core-js/modules/es.string.small.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),G=function(u){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:u.lineHeights.caption+"px",fontSize:u.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:u.lineHeights.b3+"px",fontSize:u.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:u.lineHeights.b2+"px",fontSize:u.fontSizes.b2}}},H=function(u){return{small:{padding:"2px 4px"},medium:{padding:"0px 12px"},large:{padding:"0px 16px"}}},N=Object(L.a)(function(l,u){var p,r=u.fill;return{container:Object.assign({},Object(U.b)(l),G(l).small,H(l).small,(p={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:l.colors.green3,marginRight:"6px",gap:"5px",borderRadius:l.radius.medium,backgroundColor:l.colors.green5},p["&:last-child"]={marginRight:0},p)),line:{color:l.colors.green3,background:"inherit",border:"1px solid"}}}),B=["component","fill","children","className","overrideStyles","__staticSelector"];function M(l,u){if(l==null)return{};var p=R(l,u),r,d;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);for(d=0;d<n.length;d++)r=n[d],!(u.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,r)||(p[r]=l[r]))}return p}function R(l,u){if(l==null)return{};var p={},r=Object.keys(l),d,n;for(n=0;n<r.length;n++)d=r[n],!(u.indexOf(d)>=0)&&(p[d]=l[d]);return p}var P=Object(J.forwardRef)(function(l,u){var p=l.component,r=l.fill,d=r===void 0?!1:r,n=l.children,s=l.className,C=l.overrideStyles,j=l.__staticSelector,t=j===void 0?"span":j,b=M(l,B),k=p||"span",O=N({fill:d},{overrideStyles:C,name:"span"}),h=O.classes,a=O.cx;return Object(A.jsxs)(k,Object.assign({ref:u,className:a(h.container,!d&&h.line,s)},b,{children:[Object(A.jsx)(V,{}),n]}))});P.displayName="@travelmakers-design/core/IconTag"},"./packages/travelmakers-design-core/src/components/IconTag/stories/IconTag.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.array.map.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(X),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.object.assign.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(H),B=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.string.iterator.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(p),d=e("./node_modules/core-js/modules/es.array.slice.js"),n=e.n(d),s=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(s),j=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),t=e("./packages/travelmakers-design-core/src/components/IconTag/IconTag.tsx"),b=e("./node_modules/react/index.js"),k=e.n(b),O=e("./node_modules/react/jsx-runtime.js"),h=e.n(O);function a(o){return x(o)||g(o)||m(o)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(o,f){if(!!o){if(typeof o=="string")return T(o,f);var D=Object.prototype.toString.call(o).slice(8,-1);if(D==="Object"&&o.constructor&&(D=o.constructor.name),D==="Map"||D==="Set")return Array.from(o);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return T(o,f)}}function g(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function x(o){if(Array.isArray(o))return T(o)}function T(o,f){(f==null||f>o.length)&&(f=o.length);for(var D=0,S=new Array(f);D<f;D++)S[D]=o[D];return S}var c=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}},c=`import {
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
`,v={Default:{startLoc:{col:23,line:49},endLoc:{col:1,line:66},startBody:{col:23,line:49},endBody:{col:1,line:66}}};_.default={title:"@travelmakers-design/core/Component/IconTag",component:t.a,argTypes:{fill:{defaultValue:!0,description:"IconTag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const icon = (\\n    <svg viewBox=\\"0 0 24 24\\">\\n      <path\\n        d=\\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\\"\\n        fill=\\"currentColor\\"\\n      />\\n    </svg>\\n  );\\n\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(1).keys()].map((_, index) => (\\n        <IconTag {...props}>\uCFE0\uD3F0 \uC801\uC6A9\uAC00{index + 1}</IconTag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:57},endLoc:{col:1,line:74},startBody:{col:23,line:57},endBody:{col:1,line:74}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.g,{}),Object(O.jsx)(j.f,{}),Object(O.jsx)(j.b,{}),Object(O.jsx)(j.d,{}),Object(O.jsx)(j.a,{story:j.c}),Object(O.jsx)(j.e,{})]})}},actions:{handles:["click button"]}}};var i=function(f){var D=Object(O.jsx)("svg",{viewBox:"0 0 24 24",children:Object(O.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})});return Object(O.jsx)("div",{style:{padding:24,display:"flex"},children:a(Array(1).keys()).map(function(S,I){return Object(O.jsxs)(t.a,Object.assign({},f,{children:["\uCFE0\uD3F0 \uC801\uC6A9\uAC00",I+1]}))})})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Image/Image.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return y});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.is-array.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),N=e("./node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),M=e("./node_modules/core-js/modules/es.object.assign.js"),R=e("./node_modules/react/index.js"),P=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),l=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),u=Object(l.a)(function(m,g){var x=g.radius;return{root:{position:"relative",display:"inline-block"},image:{display:"block",width:"100%",height:"100%",borderRadius:x?x in m.radius?m.radius[x]:x:0},placeholder:{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:(m.colorScheme==="dark",m.palettes.primary[0]),backgroundColor:(m.colorScheme==="dark",m.palettes.primary[0]),borderRadius:x?x in m.radius?m.radius[x]:x:0}}}),p=e("./node_modules/react/jsx-runtime.js"),r=["lazy","threshold","placeholder","src","radius","width","height","alt","fit","style","className","co","overrideStyles"];function d(m,g){return t(m)||j(m,g)||s(m,g)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(m,g){if(!!m){if(typeof m=="string")return C(m,g);var x=Object.prototype.toString.call(m).slice(8,-1);if(x==="Object"&&m.constructor&&(x=m.constructor.name),x==="Map"||x==="Set")return Array.from(m);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return C(m,g)}}function C(m,g){(g==null||g>m.length)&&(g=m.length);for(var x=0,T=new Array(g);x<g;x++)T[x]=m[x];return T}function j(m,g){var x=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(x!=null){var T=[],c=!0,v=!1,i,o;try{for(x=x.call(m);!(c=(i=x.next()).done)&&(T.push(i.value),!(g&&T.length===g));c=!0);}catch(f){v=!0,o=f}finally{try{!c&&x.return!=null&&x.return()}finally{if(v)throw o}}return T}}function t(m){if(Array.isArray(m))return m}function b(m,g){if(m==null)return{};var x=k(m,g),T,c;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(m);for(c=0;c<v.length;c++)T=v[c],!(g.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,T)||(x[T]=m[T]))}return x}function k(m,g){if(m==null)return{};var x={},T=Object.keys(m),c,v;for(v=0;v<T.length;v++)c=T[v],!(g.indexOf(c)>=0)&&(x[c]=m[c]);return x}var O=null,h="loadImage",a=function(g,x){g.forEach(function(T){T.isIntersecting&&(x.unobserve(T.target),T.target.dispatchEvent(new CustomEvent(h)))})},y=Object(R.forwardRef)(function(m,g){var x=m.lazy,T=m.threshold,c=T===void 0?.5:T,v=m.placeholder,i=m.src,o=m.radius,f=m.width,D=f===void 0?"100%":f,S=m.height,I=S===void 0?"auto":S,E=m.alt,ee=m.fit,se=m.style,W=m.className,$=m.co,Z=m.overrideStyles,K=b(m,r),ne=u({radius:o},{overrideStyles:Z,name:"Image"}),ve=ne.classes,_e=ne.cx,F=Object(R.useState)(!1),oe=d(F,2),ie=oe[0],ue=oe[1],ye=Object(R.useState)(!1),pe=d(ye,2),ge=pe[0],le=pe[1],te=Object(R.useRef)(null),ce={width:D,height:I,objectFit:ee};return Object(R.useImperativeHandle)(g,function(){return te.current}),Object(R.useEffect)(function(){if(!x){le(!0);return}var de=function(){return le(!0)},xe=te.current;return xe&&xe.addEventListener(h,de),function(){xe&&xe.removeEventListener(h,de)}},[x]),Object(R.useEffect)(function(){!x||(O=new IntersectionObserver(a,{threshold:c}),te.current&&O.observe(te.current))},[x,c]),Object(p.jsxs)(P.a,Object.assign({className:_e(ve.root,W),co:$},K,{children:[Object(p.jsx)("img",{ref:te,src:i,alt:E,className:_e(ve.image),style:ce,onLoad:function(){return ue(!0)}}),(!ie||x&&!ge)&&v&&Object(p.jsx)("div",{className:ve.placeholder,title:E,children:v}),K.children]}))});y.displayName="@travelmakers-design/core/Image"},"./packages/travelmakers-design-core/src/components/Image/stories/Image.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.array.map.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.object.assign.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.object.to-string.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e.n(H),B=e("./node_modules/core-js/modules/es.string.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.array.iterator.js"),P=e.n(R),l=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(p),d=e("./node_modules/core-js/modules/es.array.slice.js"),n=e.n(d),s=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(s),j=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),t=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),b=e("./node_modules/react/index.js"),k=e.n(b),O=e("./node_modules/react/jsx-runtime.js"),h=e.n(O);function a(o){return x(o)||g(o)||m(o)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(o,f){if(!!o){if(typeof o=="string")return T(o,f);var D=Object.prototype.toString.call(o).slice(8,-1);if(D==="Object"&&o.constructor&&(D=o.constructor.name),D==="Map"||D==="Set")return Array.from(o);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return T(o,f)}}function g(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function x(o){if(Array.isArray(o))return T(o)}function T(o,f){(f==null||f>o.length)&&(f=o.length);for(var D=0,S=new Array(f);D<f;D++)S[D]=o[D];return S}var c=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,v={Default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}},c=`import {
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
`,v={Default:{startLoc:{col:23,line:80},endLoc:{col:1,line:90},startBody:{col:23,line:80},endBody:{col:1,line:90}}};_.default={title:"@travelmakers-design/core/Component/Image",component:t.a,argTypes:{src:{defaultValue:"https://picsum.photos/600/400",description:"\uC774\uBBF8\uC9C0 src\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"text"}},radius:{defaultValue:"small",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 radius\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large","round","circular"],control:{type:"inline-radio"}},lazy:{defaultValue:!0,description:"true\uC77C \uACBD\uC6B0 lazy load\uAC00 \uC801\uC6A9\uB429\uB2C8\uB2E4.",control:{type:"boolean"}},threshold:{defaultValue:.5,description:"lazy \uC18D\uC131\uC774 true\uC774\uACE0 Image \uCEF4\uD3EC\uB10C\uD2B8 \uD06C\uAE30 * threshold\uB9CC\uD07C \uD654\uBA74\uC5D0 \uBCF4\uC77C \uACBD\uC6B0 \uC774\uBBF8\uC9C0\uAC00 \uB85C\uB4DC\uB429\uB2C8\uB2E4.",control:{type:"number"}},width:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB108\uBE44\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},height:{defaultValue:400,description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB192\uC774\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"number"}},alt:{defaultValue:"",description:"\uC774\uBBF8\uC9C0 \uC124\uBA85\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},fit:{defaultValue:"cover",description:"Image \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC774\uBBF8\uC9C0 \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uB9DE\uCD9C \uAC83\uC778\uC9C0 \uC815\uD569\uB2C8\uB2E4.",options:["cover","fill","contain"],control:{type:"inline-radio"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      {[...new Array(10)].map((_, index) => (\\n        <div key={index}>\\n          <Image placeholder={<div>Placeholder</div>} {...props} />\\n        </div>\\n      ))}\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:88},endLoc:{col:1,line:98},startBody:{col:23,line:88},endBody:{col:1,line:98}}}},docs:{page:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.g,{}),Object(O.jsx)(j.f,{}),Object(O.jsx)(j.b,{}),Object(O.jsx)(j.d,{}),Object(O.jsx)(j.a,{story:j.c}),Object(O.jsx)(j.e,{})]})}}}};var i=function(f){return Object(O.jsx)(O.Fragment,{children:a(new Array(10)).map(function(D,S){return Object(O.jsx)("div",{children:Object(O.jsx)(t.a,Object.assign({placeholder:Object(O.jsx)("div",{children:"Placeholder"})},f))},S)})})};i.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),z=function(R){return{small:{fontFamily:"PT Serif",fontSize:R.fontSizes.b3,lineHeight:R.lineHeights.b3+"px"},large:{fontFamily:"PT Serif",fontSize:R.fontSizes.h5,lineHeight:R.lineHeights.h5+"px"}}},L=Object(V.a)(function(M,R){var P=R.type,l=P===void 0?"text":P,u=R.color,p=u===void 0?"navy":u,r=R.size,d=r===void 0?"large":r;return{root:{display:"flex",alignItems:"center"},indicator:Object.assign({},z(M)[d],{fontFamily:"PT Serif",fontWeight:"700",color:p==="white"?"white":M.colors.navy1,letterSpacing:"2.66667px"})}}),U=e("./node_modules/react/jsx-runtime.js"),G=["type","color","size","totalPage","currentPage","className","co","overrideStyles"];function H(M,R){if(M==null)return{};var P=N(M,R),l,u;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(M);for(u=0;u<p.length;u++)l=p[u],!(R.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,l)||(P[l]=M[l]))}return P}function N(M,R){if(M==null)return{};var P={},l=Object.keys(M),u,p;for(p=0;p<l.length;p++)u=l[p],!(R.indexOf(u)>=0)&&(P[u]=M[u]);return P}var B=Object(J.forwardRef)(function(M,R){var P=M.type,l=P===void 0?"text":P,u=M.color,p=u===void 0?"navy":u,r=M.size,d=r===void 0?"large":r,n=M.totalPage,s=n===void 0?1:n,C=M.currentPage,j=C===void 0?1:C,t=M.className,b=M.co,k=M.overrideStyles,O=H(M,G),h=Object(X.c)(),a=L({type:l,color:p,size:d},{overrideStyles:k,name:"Indicator"}),y=a.classes,m=a.cx;return Object(U.jsx)(A.a,Object.assign({ref:R,className:m(y.root,t),co:b},O,{children:Object(U.jsxs)("span",{className:m(y.indicator),children:[j,"/",s]})}))});B.displayName="@travelmakers-design/core/Indicator"},"./packages/travelmakers-design-core/src/components/Indicator/stories/Indicator.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Indicator {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},V=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}}};_.default={parameters:{storySource:{source:`
    
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
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/Input/stories/Input.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return n}),e.d(_,"WithIcon",function(){return s}),e.d(_,"WithRightSection",function(){return C}),e.d(_,"Textarea",function(){return j});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.object.keys.js"),w=e("./node_modules/core-js/modules/es.array.index-of.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.string.small.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./node_modules/react/index.js"),z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),G=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),H={xsmall:12,small:14,medium:14,large:14,xlarge:16},N=Object(U.a)(function(t,b){var k=b.multiline,O=b.roundness,h=b.invalid,a=b.width,y=b.descriptionType,m=t.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(G.b)(t),{height:k?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:k?t.lineHeight:t.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:t.fontSizes.b2,width:a?a+"px":"100%",color:t.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:O?t.radius.round:2,border:"1px solid "+t.colors.gray5,backgroundColor:t.colors.white,"&:focus, &:focus-within":{outline:"none",borderColor:t.colors.gray1,color:t.colors.gray1},"&:disabled":{backgroundColor:t.colors.gray7,borderColor:t.colors.gray5,color:t.colors.gray3,opacity:.6,cursor:"not-allowed","&::placeholder":{color:t.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:t.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+m,"&::placeholder":{opacity:1}},disabled:{backgroundColor:t.colors.gray7,borderColor:t.colors.gray5,color:t.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:t.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:t.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["component","width","label","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","__staticSelector"];function R(t,b){if(t==null)return{};var k=P(t,b),O,h;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(h=0;h<a.length;h++)O=a[h],!(b.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,O)||(k[O]=t[O]))}return k}function P(t,b){if(t==null)return{};var k={},O=Object.keys(t),h,a;for(a=0;a<O.length;a++)h=O[a],!(b.indexOf(h)>=0)&&(k[h]=t[h]);return k}var l=Object(V.forwardRef)(function(t,b){var k,O,h=t.component,a=t.width,y=t.label,m=t.description,g=t.descriptionType,x=g===void 0?"description":g,T=t.icon,c=t.rightSectionWidth,v=c===void 0?48:c,i=t.rightSection,o=t.rightSectionProps,f=o===void 0?{}:o,D=t.wrapperProps,S=t.invalid,I=S===void 0?!1:S,E=t.required,ee=E===void 0?!1:E,se=t.disabled,W=se===void 0?!1:se,$=t.multiline,Z=$===void 0?!1:$,K=t.roundness,ne=K===void 0?!1:K,ve=t.className,_e=t.style,F=t.co,oe=t.overrideStyles,ie=t.__staticSelector,ue=ie===void 0?"Input":ie,ye=R(t,M),pe=Object(A.c)(),ge=N({roundness:ne,multiline:Z,invalid:I,width:a,descriptionType:x},{overrideStyles:oe,name:ue}),le=ge.classes,te=ge.cx,ce=h||"input";return Object(B.jsxs)(L.a,{style:{width:a?a+"px":"100%"},children:[y&&Object(B.jsx)(z.a,{level:"b2",family:"Pretendard",color:pe.colors.gray1,style:{marginBottom:4},children:y}),Object(B.jsxs)(L.a,Object.assign({className:te(le.wrapper,ve),co:F,style:_e},D,{children:[T&&Object(B.jsx)("div",{className:te(le.icon,(k={},k[le.disabled]=W,k)),children:T}),Object(B.jsx)(ce,Object.assign({},ye,{ref:b,className:te(le.input,(O={},O[le.withIcon]=T,O[le.invalid]=I,O[le.disabled]=W,O)),required:ee,disabled:W,style:{paddingRight:i?v:pe.spacing.small}})),i&&Object(B.jsx)("div",Object.assign({},f,{style:Object.assign({},f.style,{paddingRight:32}),className:te(le.rightSection,f.className),children:Object(B.jsx)(z.a,{level:"b2",family:"Pretendard",color:pe.colors.green2,children:i})}))]})),m&&x==="description"?Object(B.jsx)(z.a,{level:"b3",family:"Pretendard",color:I?pe.colors.red2:pe.colors.navy3,style:{marginTop:4},children:m}):I&&Object(B.jsx)(z.a,{level:"b3",family:"Pretendard",color:x==="error"?pe.colors.red2:x==="success"?pe.colors.green3:pe.colors.navy3,style:{marginTop:4},children:m})]})});l.displayName="@travelmakers-design/core/Input";var u=`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,p={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},WithIcon:{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},WithRightSection:{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},Textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}},u=`import { Input } from "../Input";
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
`,p={Default:{startLoc:{col:23,line:114},endLoc:{col:1,line:120},startBody:{col:23,line:114},endBody:{col:1,line:120}},WithIcon:{startLoc:{col:24,line:122},endLoc:{col:1,line:128},startBody:{col:24,line:122},endBody:{col:1,line:128}},WithRightSection:{startLoc:{col:32,line:130},endLoc:{col:1,line:138},startBody:{col:32,line:130},endBody:{col:1,line:138}},Textarea:{startLoc:{col:24,line:140},endLoc:{col:1,line:146},startBody:{col:24,line:140},endBody:{col:1,line:146}}},r=_.default={parameters:{storySource:{source:`
    
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
Textarea.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Input component=\\"textarea\\" multiline {...props} />\\n    </div>\\n  );\\n}" }, ...Textarea.parameters };`,locationsMap:{default:{startLoc:{col:23,line:122},endLoc:{col:1,line:128},startBody:{col:23,line:122},endBody:{col:1,line:128}},"with-icon":{startLoc:{col:24,line:130},endLoc:{col:1,line:136},startBody:{col:24,line:130},endBody:{col:1,line:136}},"with-right-section":{startLoc:{col:32,line:138},endLoc:{col:1,line:146},startBody:{col:32,line:138},endBody:{col:1,line:146}},textarea:{startLoc:{col:24,line:148},endLoc:{col:1,line:154},startBody:{col:24,line:148},endBody:{col:1,line:154}}}}},title:"@travelmakers-design/core/Component/Input",component:l,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},label:{defaultValue:"\uB808\uC774\uBE14",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uC124\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uD558\uB2E8 \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4. (descriptionType\uC774 error, sccess\uC758 \uACBD\uC6B0 `invalid:true`\uC77C \uB54C\uC5D0\uB9CC \uD45C\uCD9C\uB429\uB2C8\uB2E4.)",table:{type:{summary:"string"}},control:{type:"text"}},descriptionType:{defaultValue:"description",description:"description\uC758 \uD0C0\uC785\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.",options:["description","error","success"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},roundness:{defaultValue:!1,description:" true\uC77C \uACBD\uC6B0 radius\uB97C 100px\uB85C \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: false)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},invalid:{defaultValue:!1,description:"invalid \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4. \uD14C\uB450\uB9AC \uC0C9\uC0C1\uC774 red\uB85C \uBCC0\uACBD\uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},rightSection:{defaultValue:"",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC624\uB978\uCABD \uC601\uC5ED\uC5D0 \uC694\uC18C\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}}}},d=function(){return Object(B.jsx)("svg",{viewBox:"0 0 24 24",children:Object(B.jsx)("path",{d:"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z",fill:"currentColor"})})};d.displayName="Icon";var n=function(b){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(l,Object.assign({},b))})};n.displayName="Default";var s=function(b){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(l,Object.assign({icon:Object(B.jsx)(d,{})},b))})};s.displayName="WithIcon";var C=function(b){var k="\uC778\uC99D\uC644\uB8CC";return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(l,Object.assign({icon:Object(B.jsx)(d,{})},b,{rightSection:k}))})};C.displayName="WithRightSection";var j=function(b){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(l,Object.assign({component:"textarea",multiline:!0},b))})};j.displayName="Textarea",n.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input {...props} />
    </div>
  );
}`}},n.parameters),s.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
}`}},s.parameters),C.parameters=Object.assign({storySource:{source:`(props) => {
  const withRight = "\uC778\uC99D\uC644\uB8CC";

  return (
    <div style={{ padding: 24 }}>
      <Input icon={<Icon />} {...props} rightSection={withRight} />
    </div>
  );
}`}},C.parameters),j.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
}`}},j.parameters)},"./packages/travelmakers-design-core/src/components/MainReviewCard/stories/MainReviewCard.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return d});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.symbol.description.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),z=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),L=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function G(n){if(n==null)throw new TypeError("Cannot destructure undefined")}var H=function(s){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:s.fontSizes.h4,lineHeight:s.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:s.fontSizes.h1,lineHeight:s.lineHeights.h1+"px"}}},N=Object(U.a)(function(n,s){var C,j,t;return G(s),{root:(C={width:"fit-content",maxWidth:"456px"},C[""+n.media.mobile]={maxWidth:"286px"},C),reviewContainer:(j={padding:"29px 24px",backgroundColor:n.colors.white,minHeight:"200px",width:"auto",display:"flex"},j[""+n.media.mobile]={padding:"16px"},j),reviewImage:(t={width:"144px",height:"192px",marginLeft:"-40px",marginTop:"-41px",flexShrink:0},t["& > img"]={height:"100% !important"},t[""+n.media.mobile]={width:"92px",height:"122px",marginTop:"0px",marginLeft:"-32px"},t),descriptionWrapper:{marginLeft:"24px"},descriptionJob:{marginBottom:"16px"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["image","title","job","description","className","co","overrideStyles"];function R(n,s){if(n==null)return{};var C=P(n,s),j,t;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(t=0;t<b.length;t++)j=b[t],!(s.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,j)||(C[j]=n[j]))}return C}function P(n,s){if(n==null)return{};var C={},j=Object.keys(n),t,b;for(b=0;b<j.length;b++)t=j[b],!(s.indexOf(t)>=0)&&(C[t]=n[t]);return C}var l=Object(Y.forwardRef)(function(n,s){var C=n.image,j=n.title,t=n.job,b=n.description,k=n.className,O=n.co,h=n.overrideStyles,a=R(n,M),y=Object(A.c)(),m=N({},{overrideStyles:h,name:"MainReviewCard"}),g=m.classes,x=m.cx;return Object(B.jsx)(L.a,Object.assign({ref:s,className:x(g.root,k),co:O},a,{children:Object(B.jsxs)("div",{className:x(g.reviewContainer),children:[Object(B.jsx)(V.a,{className:x(g.reviewImage),src:C}),Object(B.jsxs)("div",{className:x(g.descriptionWrapper),children:[Object(B.jsx)(z.a,{family:"Pretendard",level:"b3",color:y.colors.green2,children:j}),Object(B.jsx)(z.a,{family:"Pretendard",level:"b2",color:y.colors.navy2,className:x(g.descriptionJob),children:t}),Object(B.jsx)(z.a,{family:"Pretendard",level:"b2",color:y.colors.navy1,children:b})]})]})}))});l.displayName="@travelmakers-design/core/MainReviewCard";var u=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}},u=`import React from "react";
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
`,p={Default:{startLoc:{col:23,line:52},endLoc:{col:1,line:58},startBody:{col:23,line:52},endBody:{col:1,line:58}}},r=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <MainReviewCard {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:60},endLoc:{col:1,line:66},startBody:{col:23,line:60},endBody:{col:1,line:66}}}}},title:"@travelmakers-design/core/Component/Card/MainReviewCard",component:l,argTypes:{image:{defaultValue:"https://picsum.photos/600/400",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"\uCD5COO\uB2D8\uC758 \uD6C4\uAE30",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 title \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},job:{defaultValue:"\uB300\uAE30\uC5C5 \uB9C8\uCF00\uD130",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 job \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},description:{defaultValue:"\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9, \uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,\uB9AC\uBDF0 \uCEE8\uD150\uCE20 \uB0B4\uC6A9,",description:"MaiMainReviewCard \uCEF4\uD3EC\uB10C\uD2B8\uC758 description \uD45C\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}}},d=function(s){return Object(B.jsx)("div",{style:{padding:24},children:Object(B.jsx)(l,Object.assign({},s))})};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <MainReviewCard {...props} />
    </div>
  );
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Modal/Modal.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return p});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),J=e("./node_modules/react/index.js"),A=e("./node_modules/react-dom/index.js"),V=e.n(A),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),L=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),U=function(d,n){return{small:{fontFamily:"Pretendard",fontWeight:n==="text"?"bold":"normal",lineHeight:d.lineHeights.caption+"px",fontSize:d.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:n==="text"?"bold":"normal",lineHeight:d.lineHeights.b3+"px",fontSize:d.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:n==="text"?"bold":"normal",lineHeight:d.lineHeights.b2+"px",fontSize:d.fontSizes.b2}}},G=function(d,n){return{small:{padding:n==="text"?"0px 4px":"0px 8px"},medium:{padding:n==="text"?"0px 5px":"0px 8px"},large:{padding:n==="text"?"1px 7px":"0px 8px"}}},H=Object(z.a)(function(r,d){var n,s,C,j,t,b,k,O,h,a,y,m,g,x,T,c,v,i=d.size,o=d.type;return{container:Object.assign({},Object(L.b)(r),{display:"flex",position:"fixed",flexDirection:"column",justifyContent:"flex-end",backgroundColor:"rgba(0, 0, 0, 0.7)",width:"100%",height:"100%",zIndex:"10000",top:"0",left:"0"}),absoluteContainer:(s={width:"100%",height:"100%",position:"absolute",display:"flex",justifyContent:"center",alignItems:"flex-end",top:"0",backgroundColor:r.colors.white},s["&.popup"]={alignItems:"center",backgroundColor:"transparent"},s["&.modalPopup"]=(n={position:"relative",maxWidth:"1200px",margin:"0 auto",maxHeight:"90vh",height:"100%",borderRadius:"30px 30px 0 0"},n[""+r.media.tablet]={maxHeight:"100%",height:"100%",borderRadius:"0"},n),s),closeContainer:{position:"absolute",width:"100%",height:"100%",zIndex:"100"},modalContainer:(C={display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",width:"100%",maxHeight:"100%",borderRadius:"6px",boxSizing:"border-box",zIndex:"200"},C["&.popup"]={justifyContent:"center"},C["&.max-h"]={height:"100%"},C),modalContentsContainer:(t={display:"flex",position:"relative",justifyContent:"center",width:"100%",height:"100%",padding:"40px",overflowY:"hidden"},t[""+r.media.tablet]={padding:"0"},t[""+r.media.desktop]=(j={},j["-ms-overflow-style"]="none",j["&::-webkit-scrollbar"]={display:"none"},j),t["&.optionsBox, &.modalPopup, &.toastPopup"]={padding:0},t["&.Agreement"]={height:"calc(100% - 77px)"},t),modalContents:{display:"block",position:"relative",width:"100%",maxWidth:"768px"},modalHeader:(O={display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:"0"},O[""+r.media.desktop]={padding:"24px 16px 12px 24px"},O["&.optionsBox"]=(b={height:"40px",padding:"0 16px",background:r.colors.navy1},b[""+r.media.tablet]={height:"64px"},b),O["&.modalPopup"]=(k={color:r.colors.navy1,height:"auto",padding:"40px 12px"},k["@media screen and (min-width: 800px)"]={padding:"40px 0"},k["@media screen and (max-height: 640px)"]={paddingTop:"24px",paddingBottom:"24px"},k.justifyContent="space-between",k[""+r.media.tablet]={justifyContent:"start",padding:"0 16px",height:"44px",backgroundColor:r.colors.navy1,color:r.colors.white},k),O["&.toastPopup"]={justifyContent:"space-between"},O),modalTitle:(y={fontSize:"18px",fontWeight:"700",lineHeight:"1.39",color:r.colors.navy1,textAlign:"left",whiteSpace:"nowrap"},y["&.optionsBox"]=(h={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:"400",fontSize:"18px",lineHeight:"24px",color:"#FFFFFF"},h[""+r.media.tablet]={fontSize:"14px",lineHeight:"20px"},h),y["&.modalPopup"]=(a={color:r.colors.navy1,fontFamily:"Pretendard",fontStyle:"normal",fontWeight:700,fontSize:"18px",lineHeight:"24px"},a[""+r.media.tablet]={fontWeight:400,fontSize:"12px",lineHeight:"20px",color:r.colors.white},a),y[".toastPopup"]={fontFamily:"Noto Serif KR",fontStyle:"normal",fontWeight:400,fontSize:"12px",lineHeight:"20px",color:r.colors.white},y),modalBackIcon:(m={width:"16px",height:"16px",cursor:"pointer",marginRight:"8px",display:"none"},m[""+r.media.tablet]={display:"inline-block"},m),modalCloseIcon:(g={width:"24px",height:"24px",cursor:"pointer",marginRight:"8px",display:"inline-block"},g[""+r.media.tablet]={display:"none"},g),modalContentText:(c={display:"block",width:"100%",maxHeight:"100%",lineHeight:1.5,whiteSpace:"pre-wrap",color:r.colors.navy1,overflowY:"auto",paddingBottom:"16px"},c[""+r.media.desktop]={fontSize:"12px",padding:"12px 20px"},c["&.Agreement"]=(T={height:"calc(100% - 44px)"},T[""+r.media.tablet]=(x={height:"calc(100% - 104px)"},x["@media screen and (max-height: 640px)"]={height:"calc(100% - 72px)"},x),T),c),modalAbsolute:(v={display:"block",position:"fixed",bottom:"0",width:"100%",maxWidth:"768px",zIndex:"100",backgroundColor:"white",padding:"16px 0"},v[""+r.media.desktop]={padding:"16px"},v)}}),N=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),B=e("./node_modules/react/jsx-runtime.js"),M=function(d){return Object(B.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},d,{children:Object(B.jsxs)("g",{fill:"none","fill-rule":"evenodd",children:[Object(B.jsx)("path",{stroke:"#FFF",d:"M12 22.5 1.5 12 12 1.5"}),Object(B.jsx)("path",{fill:"#FFF",d:"M2.25 11.5h21v1h-21z"})]})}))};M.displayName="IcBackArrow",M.displayName="@travelmakers-design/core/IcBackArrow";var R=function(d){return Object(B.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},d,{children:Object(B.jsx)("g",{stroke:"#30373F",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round",children:Object(B.jsx)("path",{d:"M4.875 18.712 19.087 4.5M4.875 4.5l14.212 14.212"})})}))};R.displayName="IcClose",R.displayName="@travelmakers-design/core/IcClose";var P=["component","open","ModalContainerClassName","onClose","containerStyle","wrapperStyle","modalPopup","centerPopup","children","className","overrideStyles","title","handleAgree","agreeText","backIcon","__staticSelector"];function l(r,d){if(r==null)return{};var n=u(r,d),s,C;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(r);for(C=0;C<j.length;C++)s=j[C],!(d.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,s)||(n[s]=r[s]))}return n}function u(r,d){if(r==null)return{};var n={},s=Object.keys(r),C,j;for(j=0;j<s.length;j++)C=s[j],!(d.indexOf(C)>=0)&&(n[C]=r[C]);return n}var p=Object(J.forwardRef)(function(r,d){var n=r.component,s=r.open,C=r.ModalContainerClassName,j=r.onClose,t=r.containerStyle,b=t===void 0?{}:t,k=r.wrapperStyle,O=k===void 0?{}:k,h=r.modalPopup,a=h===void 0?!1:h,y=r.centerPopup,m=y===void 0?!1:y,g=r.children,x=r.className,T=r.overrideStyles,c=r.title,v=c===void 0?"":c,i=r.handleAgree,o=r.agreeText,f=o===void 0?"\uB3D9\uC758\uD558\uAE30":o,D=r.backIcon,S=D===void 0?!0:D,I=r.__staticSelector,E=I===void 0?"span":I,ee=l(r,P),se=n||"span",W=H({},{overrideStyles:T,name:"span"}),$=W.classes,Z=W.cx,K=document.createElement("div");return document.body.appendChild(K),Object(X.b)(s),Object(B.jsx)(B.Fragment,{children:s?V.a.createPortal(Object(B.jsx)(se,Object.assign({ref:d,className:Z($.container,x)},ee,{children:Object(B.jsx)("div",{className:Z($.absoluteContainer,(a?"modalPopup":"")+(m?" popup":"")),style:b,children:Object(B.jsx)("div",{onClick:j,className:Z($.closeContainer,(a?"modalPopup":"")+(m?" popup":"")),children:Object(B.jsx)("div",{className:Z($.modalContainer,C||(a?" modalPopup":"")+(m?" popup":"")),style:O,children:Object(B.jsxs)("div",{className:Z($.modalContentsContainer),children:[Object(B.jsxs)("div",{className:Z($.modalContents,"modalPopup Agreement"),children:[Object(B.jsxs)("div",{className:Z($.modalHeader,"modalPopup Agreement"),children:[Object(B.jsx)(M,{onClick:j,className:Z($.modalBackIcon,"modalPopup Agreement")}),Object(B.jsx)("span",{className:Z($.modalTitle,"modalPopup Agreement"),children:v}),Object(B.jsx)(R,{onClick:j,className:Z($.modalCloseIcon,"modalPopup Agreement")})]}),Object(B.jsx)("div",{className:Z($.modalContentText),children:Object(B.jsx)("div",{dangerouslySetInnerHTML:{__html:g}})})]}),Object(B.jsx)("div",{className:Z($.modalAbsolute),children:Object(B.jsx)(N.a,{fullWidth:!0,onClick:i,children:f})})]})})})})})),document.body):null})});p.displayName="@travelmakers-design/core/Modal"},"./packages/travelmakers-design-core/src/components/Modal/stories/Modal.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return v});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e.n(H),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.array.slice.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(p),d=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(d),s=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),C=e("./packages/travelmakers-design-core/src/components/Modal/Modal.tsx"),j=e("./node_modules/react/index.js"),t=e.n(j),b=e("./packages/travelmakers-design-core/src/components/Button/Button.tsx"),k=e("./node_modules/react/jsx-runtime.js"),O=e.n(k);function h(i,o){return x(i)||g(i,o)||y(i,o)||a()}function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(i,o){if(!!i){if(typeof i=="string")return m(i,o);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return m(i,o)}}function m(i,o){(o==null||o>i.length)&&(o=i.length);for(var f=0,D=new Array(o);f<o;f++)D[f]=i[f];return D}function g(i,o){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var D=[],S=!0,I=!1,E,ee;try{for(f=f.call(i);!(S=(E=f.next()).done)&&(D.push(E.value),!(o&&D.length===o));S=!0);}catch(se){I=!0,ee=se}finally{try{!S&&f.return!=null&&f.return()}finally{if(I)throw ee}}return D}}function x(i){if(Array.isArray(i))return i}var T=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}},T=`import {
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
`,c={Default:{startLoc:{col:23,line:97},endLoc:{col:1,line:114},startBody:{col:23,line:97},endBody:{col:1,line:114}}};_.default={title:"@travelmakers-design/core/Component/Modal",component:C.a,argTypes:{open:{defaultValue:!1,description:"Modal open \uC5EC\uBD80\uB97C \uACB0\uC815\uD55C\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},modalPopup:{defaultValue:!1,description:"\uD1A0\uC2A4\uD2B8 \uD615\uC2DD",table:{type:{summary:"boolean"}},control:{type:"boolean"}},centerPopup:{defaultValue:!1,description:"\uD31D\uC5C5 \uACF5\uC9C0\uC6A9",table:{type:{summary:"boolean"}},control:{type:"boolean"}},ModalContainerClassName:{defaultValue:"",description:"Container\uC758 ClassName \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},title:{defaultValue:"",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC81C\uBAA9 \uC9C0\uC815",table:{type:{summary:"string"}},control:{type:"text"}},agreeText:{defaultValue:"\uB3D9\uC758\uD558\uAE30",description:"Modal \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC84\uD2BC\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD55C\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  const [open, setOpen] = useState(false);\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\", height: 500 }}>\\n      <Button\\n        onClick={() => {\\n          setOpen((prev) => !prev);\\n        }}\\n        style={{ zIndex: 10001 }}\\n      >\\n        \uBAA8\uB2EC\\n      </Button>\\n      <Modal {...props} open={open} title={\\"title\\"}>\\n        content\\n      </Modal>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:105},endLoc:{col:1,line:122},startBody:{col:23,line:105},endBody:{col:1,line:122}}}},docs:{page:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(s.g,{}),Object(k.jsx)(s.f,{}),Object(k.jsx)(s.b,{}),Object(k.jsx)(s.d,{}),Object(k.jsx)(s.a,{story:s.c}),Object(k.jsx)(s.e,{})]})}}}};var v=function(o){var f=Object(j.useState)(!1),D=h(f,2),S=D[0],I=D[1];return Object(k.jsxs)("div",{style:{padding:24,display:"flex",height:500},children:[Object(k.jsx)(b.a,{onClick:function(){I(function(ee){return!ee})},style:{zIndex:10001},children:"\uBAA8\uB2EC"}),Object(k.jsx)(C.a,Object.assign({},o,{open:S,title:"title",children:"content"}))]})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/Price/Price.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return B});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./node_modules/react/jsx-runtime.js"),z=function(R){return Object(V.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R,{children:[Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",fill:"#03936E"}),Object(V.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 6.28567 6.28562)",stroke:"white","stroke-width":"0.7"}),Object(V.jsx)("circle",{r:"0.935672",transform:"matrix(1 0 0 -1 9.71432 9.71433)",stroke:"white","stroke-width":"0.7"}),Object(V.jsx)("path",{d:"M10 5H11L6 11H5L10 5Z",fill:"white"})]}))};z.displayName="CouponPercent",z.displayName="@travelmakers-design/core/CouponPercent";var L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=Object(L.a)(function(M,R){var P=R.type,l=P===void 0?"primary":P;return{root:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},percentText:{fontFamily:"Pretendard",fontSize:M.fontSizes.h6,lineHeight:M.lineHeights.h6+"px",fontWeight:"700",color:M.colors.red2,width:"39px"},nightText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"700",color:M.colors.navy1,textAlign:"right",width:"28px"},priceText:{fontFamily:"Pretendard",fontSize:M.fontSizes.h4,lineHeight:M.lineHeights.h4+"px",fontWeight:"700",color:M.colors.navy1,marginLeft:"2px"},priceBeforeText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b2,lineHeight:M.lineHeights.b2+"px",fontWeight:"700",color:M.colors.navy1},priceStartText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",color:M.colors.gray2,marginLeft:"4px"},labelSecondary:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",color:M.colors.navy1,marginRight:"4px"},nightSecondaryText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"700",color:M.colors.navy1,textAlign:"right",marginRight:"4px"},priceSecondaryText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",textDecorationLine:"line-through",color:M.colors.gray2},priceBeforeSecondaryText:{fontFamily:"Pretendard",fontSize:M.fontSizes.b3,lineHeight:M.lineHeights.b3+"px",fontWeight:"400",textDecorationLine:"line-through",color:M.colors.gray2},couponWrap:{display:"flex",alignItems:"center",width:"74px",background:M.colors.green5,borderRadius:"4px",marginLeft:"4px"},couponWord:{display:"block",width:"fit-content",fontFamily:"Pretendard",fontStyle:"normal",fontWeight:"700",fontSize:"10px",lineHeight:"16px",color:M.colors.green3}}}),G=["type","label","percentText","nightText","priceText","priceStartText","percentBool","nightBool","priceBool","priceStartBool","couponBool","className","co","overrideStyles"];function H(M,R){if(M==null)return{};var P=N(M,R),l,u;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(M);for(u=0;u<p.length;u++)l=p[u],!(R.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,l)||(P[l]=M[l]))}return P}function N(M,R){if(M==null)return{};var P={},l=Object.keys(M),u,p;for(p=0;p<l.length;p++)u=l[p],!(R.indexOf(u)>=0)&&(P[u]=M[u]);return P}var B=Object(J.forwardRef)(function(M,R){var P=M.type,l=P===void 0?"primary":P,u=M.label,p=u===void 0?"":u,r=M.percentText,d=r===void 0?"":r,n=M.nightText,s=n===void 0?"":n,C=M.priceText,j=M.priceStartText,t=j===void 0?"":j,b=M.percentBool,k=b===void 0?!0:b,O=M.nightBool,h=O===void 0?!0:O,a=M.priceBool,y=a===void 0?!0:a,m=M.priceStartBool,g=m===void 0?!0:m,x=M.couponBool,T=x===void 0?!0:x,c=M.className,v=M.co,i=M.overrideStyles,o=H(M,G),f=Object(X.c)(),D=U({type:l},{overrideStyles:i,name:"Price"}),S=D.classes,I=D.cx,E=function(){return Object(V.jsxs)(A.a,Object.assign({ref:R,className:I(S.root,c),co:v},o,{children:[k&&Object(V.jsxs)("span",{className:I(S.percentText),children:[d,"%"]}),h&&Object(V.jsx)("span",{className:I(S.nightText),children:s}),y&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("span",{className:I(S.priceText),children:C.toLocaleString("ko")}),Object(V.jsx)("span",{className:I(S.priceBeforeText),children:"\uC6D0~"})]}),g&&Object(V.jsxs)("span",{className:I(S.priceStartText),children:["| ",t]})]}))},ee=function(){return Object(V.jsxs)(A.a,Object.assign({ref:R,className:I(S.root,c),co:v},o,{children:[p&&Object(V.jsxs)("span",{className:I(S.labelSecondary),children:[p,"%"]}),h&&Object(V.jsx)("span",{className:I(S.nightSecondaryText),children:s}),y&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("span",{className:I(S.priceSecondaryText),children:C.toLocaleString("ko")}),Object(V.jsx)("span",{className:I(S.priceBeforeSecondaryText),children:"\uC6D0"})]}),T&&Object(V.jsxs)("div",{className:I(S.couponWrap),children:[Object(V.jsx)(z,{style:{margin:"0 4px"}}),Object(V.jsx)("span",{className:I(S.couponWord),children:"\uCFE0\uD3F0 \uC801\uC6A9\uAC00"})]})]}))};return l==="primary"?Object(V.jsx)(E,{}):Object(V.jsx)(ee,{})});B.displayName="@travelmakers-design/core/Price"},"./packages/travelmakers-design-core/src/components/Price/stories/Price.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-core/src/components/Price/Price.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Price {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:126},endLoc:{col:1,line:132},startBody:{col:23,line:126},endBody:{col:1,line:132}}},V=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:118},endLoc:{col:1,line:124},startBody:{col:23,line:118},endBody:{col:1,line:124}}};_.default={parameters:{storySource:{source:`
    
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
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/Progress/Progress.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return M});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-core/src/components/Indicator/Indicator.tsx"),V=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),L=function(P){return{small:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:P.fontSizes.h4,lineHeight:P.lineHeights.h4+"px"},large:{fontFamily:"PT Serif",fontStyle:"italic",fontWeight:400,fontSize:P.fontSizes.h1,lineHeight:P.lineHeights.h1+"px"}}},U=Object(z.a)(function(R,P){var l=P.color,u=l===void 0?"navy":l,p=P.indicator,r=p===void 0?!1:p,d=P.size,n=d===void 0?"large":d;return{root:{display:"flex",alignItems:"center"},indicator:{marginRight:"16px"},barContainer:{display:"block",position:"relative",width:"30vw",maxWidth:n==="small"?"171px":"456px",height:"2px",borderRadius:"3px",backgroundColor:u==="white"?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.1)"},barActive:{display:"block",position:"absolute",width:"0%",height:"2px",borderRadius:"3px",backgroundColor:u==="white"?R.colors.white:R.colors.navy1}}}),G=e("./node_modules/react/jsx-runtime.js"),H=["color","indicator","size","totalPage","currentPage","activeBarTransition","title","className","co","overrideStyles"];function N(R,P){if(R==null)return{};var l=B(R,P),u,p;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(R);for(p=0;p<r.length;p++)u=r[p],!(P.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,u)||(l[u]=R[u]))}return l}function B(R,P){if(R==null)return{};var l={},u=Object.keys(R),p,r;for(r=0;r<u.length;r++)p=u[r],!(P.indexOf(p)>=0)&&(l[p]=R[p]);return l}var M=Object(J.forwardRef)(function(R,P){var l=R.color,u=l===void 0?"navy":l,p=R.indicator,r=p===void 0?!1:p,d=R.size,n=d===void 0?"large":d,s=R.totalPage,C=s===void 0?1:s,j=R.currentPage,t=j===void 0?1:j,b=R.activeBarTransition,k=b===void 0?!1:b,O=R.title,h=R.className,a=R.co,y=R.overrideStyles,m=N(R,H),g=Object(X.c)(),x=U({color:u,indicator:r,size:n},{overrideStyles:y,name:"Progress"}),T=x.classes,c=x.cx;return Object(G.jsxs)(V.a,Object.assign({ref:P,className:c(T.root,h),co:a},m,{children:[r&&Object(G.jsx)(A.a,{currentPage:t,totalPage:C,color:u,size:n,className:c(T.indicator)}),Object(G.jsx)("div",{className:c(T.barContainer),children:Object(G.jsx)("div",{className:c(T.barActive),style:{width:t/C*100+"%",transition:k?"width 3s linear":"none"}})})]}))});M.displayName="@travelmakers-design/core/Progress"},"./packages/travelmakers-design-core/src/components/Progress/stories/Progress.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-core/src/components/Progress/Progress.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Progress {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:65},endLoc:{col:1,line:71},startBody:{col:23,line:65},endBody:{col:1,line:71}}},V=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:57},endLoc:{col:1,line:63},startBody:{col:23,line:57},endBody:{col:1,line:63}}};_.default={parameters:{storySource:{source:`
    
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
}`}},L.parameters)},"./packages/travelmakers-design-core/src/components/SearchInput/stories/SearchInput.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return i});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.function.name.js"),H=e("./node_modules/core-js/modules/es.array.from.js"),N=e("./node_modules/core-js/modules/es.symbol.js"),B=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e("./node_modules/core-js/modules/es.array.fill.js"),R=e("./node_modules/core-js/modules/es.string.small.js"),P=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),l=e("./packages/travelmakers-design-core/src/components/IconButton/CloseIcon.tsx"),u=e("./node_modules/react/jsx-runtime.js"),p=function(f){return Object(u.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsxs)("g",{transform:"translate(1 1)",fill:"none","fill-rule":"evenodd",children:[Object(u.jsx)("circle",{stroke:"#30373F","stroke-linecap":"round","stroke-linejoin":"round",cx:"4.875",cy:"4.875",r:"4.875"}),Object(u.jsx)("path",{fill:"#30373F",d:"m7.672 8.379.707-.707 4.95 4.95-.708.706z"})]})})};p.displayName="SearchIcon",p.displayName="@travelmakers-design/core/SearchIcon";var r=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),d=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),n=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),s=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),C={xsmall:12,small:14,medium:14,large:14,xlarge:16},j=Object(n.a)(function(o,f){var D=f.multiline,S=f.roundness,I=f.invalid,E=f.width,ee=f.descriptionType,se=o.colors.red2;return{wrapper:{position:"relative"},input:Object.assign({},Object(s.b)(o),{height:D?"auto":44,WebkitTapHighlightColor:"transparent",lineHeight:D?o.lineHeight:o.lineHeights.b2,appearance:"none",resize:"none",boxSizing:"border-box",fontFamily:"Pretendard",fontSize:o.fontSizes.b2,width:E?E+"px":"100%",color:o.colors.gray2,display:"block",textAlign:"left",paddingLeft:16,paddingRight:16,borderRadius:S?o.radius.round:2,border:"1px solid "+o.colors.gray5,backgroundColor:o.colors.white,"&:focus, &:focus-within":{outline:"none",color:o.colors.gray1,border:"1px solid "+o.colors.gray1},"&:disabled":{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},"&::placeholder":{opacity:1,userSelect:"none",color:o.colors.gray3,whiteSpace:"nowrap",textOverflow:"ellipsis"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),withIcon:{paddingLeft:48},invalid:{borderColor:""+se,"&::placeholder":{opacity:1}},disabled:{borderColor:o.colors.gray5,color:o.colors.gray5,opacity:.6,cursor:"not-allowed","&::placeholder":{color:o.colors.gray5}},fill:{backgroundColor:o.colors.gray6,color:o.colors.navy3,border:"0px solid "+o.colors.gray5,"&:disabled":{backgroundColor:o.colors.gray6,border:"1px solid "+o.colors.gray5}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"flex-end",width:"44px",color:o.colors.gray1,svg:{width:"24px",height:"100%"}},rightSection:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start"}}}),t=["component","width","label","line","description","descriptionType","icon","rightSectionWidth","rightSection","rightSectionProps","wrapperProps","invalid","required","disabled","multiline","roundness","className","style","co","overrideStyles","value","onChange"];function b(o,f){return y(o)||a(o,f)||O(o,f)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(o,f){if(!!o){if(typeof o=="string")return h(o,f);var D=Object.prototype.toString.call(o).slice(8,-1);if(D==="Object"&&o.constructor&&(D=o.constructor.name),D==="Map"||D==="Set")return Array.from(o);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return h(o,f)}}function h(o,f){(f==null||f>o.length)&&(f=o.length);for(var D=0,S=new Array(f);D<f;D++)S[D]=o[D];return S}function a(o,f){var D=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(D!=null){var S=[],I=!0,E=!1,ee,se;try{for(D=D.call(o);!(I=(ee=D.next()).done)&&(S.push(ee.value),!(f&&S.length===f));I=!0);}catch(W){E=!0,se=W}finally{try{!I&&D.return!=null&&D.return()}finally{if(E)throw se}}return S}}function y(o){if(Array.isArray(o))return o}function m(o,f){if(o==null)return{};var D=g(o,f),S,I;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(o);for(I=0;I<E.length;I++)S=E[I],!(f.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,S)||(D[S]=o[S]))}return D}function g(o,f){if(o==null)return{};var D={},S=Object.keys(o),I,E;for(E=0;E<S.length;E++)I=S[E],!(f.indexOf(I)>=0)&&(D[I]=o[I]);return D}var x=Object(Y.forwardRef)(function(o,f){var D,S,I=o.component,E=o.width,ee=o.label,se=o.line,W=se===void 0?!0:se,$=o.description,Z=o.descriptionType,K=Z===void 0?"description":Z,ne=o.icon,ve=ne===void 0?Object(u.jsx)(p,{}):ne,_e=o.rightSectionWidth,F=_e===void 0?48:_e,oe=o.rightSection,ie=oe===void 0?Object(u.jsx)(l.a,{}):oe,ue=o.rightSectionProps,ye=ue===void 0?{}:ue,pe=o.wrapperProps,ge=o.invalid,le=ge===void 0?!1:ge,te=o.required,ce=te===void 0?!1:te,de=o.disabled,xe=de===void 0?!1:de,Oe=o.multiline,Te=Oe===void 0?!1:Oe,Re=o.roundness,Me=Re===void 0?!0:Re,Pe=o.className,Le=o.style,Ne=o.co,me=o.overrideStyles,ae=o.value,be=o.onChange,he=m(o,t),fe=Object(P.c)(),je=Object(Y.useState)(ae),De=b(je,2),Ae=De[0],Ie=De[1],Ce=j({roundness:Me,multiline:Te,invalid:le,width:E,descriptionType:K},{overrideStyles:me,name:"Input"}),Se=Ce.classes,Be=Ce.cx,Ue=I||"input",ze=function(Fe){!xe&&We({target:{value:""}})},We=function(Fe){var Ke;Ie(Fe==null||(Ke=Fe.target)===null||Ke===void 0?void 0:Ke.value),be&&be(Fe)};return Object(u.jsxs)(d.a,{style:{width:E?E+"px":"100%"},children:[ee&&Object(u.jsx)(r.a,{level:"b2",family:"Pretendard",color:fe.colors.gray1,style:{marginBottom:4},children:ee}),Object(u.jsxs)(d.a,Object.assign({className:Be(Se.wrapper,Pe),co:Ne,style:Le},pe,{children:[ve&&Object(u.jsx)("div",{className:Be(Se.icon,(D={},D[Se.disabled]=xe,D)),children:ve}),Object(u.jsx)(Ue,Object.assign({},he,{ref:f,value:Ae,onChange:We,className:Be(Se.input,(S={},S[Se.fill]=!W,S[Se.withIcon]=ve,S[Se.invalid]=le,S[Se.disabled]=xe,S)),required:ce,disabled:xe,style:{paddingRight:ie?F:fe.spacing.small}})),ie&&Object(u.jsx)("div",Object.assign({},ye,{style:Object.assign({},ye.style,{paddingRight:32}),className:Be(Se.rightSection,ye.className),onClick:ze,children:ie}))]})),$&&K==="description"?Object(u.jsx)(r.a,{level:"b3",family:"Pretendard",color:le?fe.colors.red2:fe.colors.navy3,style:{marginTop:4},children:$}):le&&Object(u.jsx)(r.a,{level:"b3",family:"Pretendard",color:K==="error"?fe.colors.red2:K==="success"?fe.colors.green3:fe.colors.navy3,style:{marginTop:4},children:$})]})});x.displayName="@travelmakers-design/core/SearchInput";var T=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}},T=`import React from "react";
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
`,c={Default:{startLoc:{col:23,line:53},endLoc:{col:1,line:59},startBody:{col:23,line:53},endBody:{col:1,line:59}}},v=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <SearchInput {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:61},endLoc:{col:1,line:67},startBody:{col:23,line:61},endBody:{col:1,line:67}}}}},title:"@travelmakers-design/core/Component/SearchInput",component:x,argTypes:{width:{defaultValue:328,description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uB108\uBE44\uB97C \uC124\uC815\uD569\uB2C8\uB2E4. (default:100%)",table:{type:{summary:"number"}},control:{type:"number"}},placeholder:{defaultValue:"\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",description:"Input \uCEF4\uD3EC\uB10C\uD2B8 \uC694\uC18C\uC5D0 \uC785\uB825\uB420 \uAC12\uC5D0 \uB300\uD55C \uC9E7\uC740 \uD78C\uD2B8\uB97C \uBA85\uC2DC\uD569\uB2C8\uB2E4.",table:{type:{summary:"string"}},control:{type:"text"}},line:{defaultValue:!0,description:"SearchInput \uCEF4\uD3EC\uB10C\uD2B8 Style\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4. (default: true)",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"disabled \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}},i=function(f){return Object(u.jsx)("div",{style:{padding:24},children:Object(u.jsx)(x,Object.assign({},f))})};i.displayName="Default",i.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <SearchInput {...props} />
    </div>
  );
}`}},i.parameters)},"./packages/travelmakers-design-core/src/components/Spinner/stories/Spinner.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return P});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),A=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),V=e("./packages/travelmakers-design-core/src/constants/index.ts"),z=Object(A.a)(function(l,u){var p=u.size,r=u.color,d=r===void 0?l.colorScheme==="light"?l.colors.black:l.colors.white:r in l.palettes?(l.colorScheme==="light",l.palettes[r][0]):r in l.colors?l.colors[r]:r;return{root:{position:"relative",display:"inline-block",width:p in V.a?V.a[p]:p,height:p in V.a?V.a[p]:p,verticalAlign:"middle"},inner:{position:"absolute",top:0,left:0,width:"100%",height:"100%",path:{stroke:d},circle:{fill:d}}}}),L=e("./node_modules/react/jsx-runtime.js"),U=["size","color","className","co","overrideStyles"];function G(l,u){if(l==null)return{};var p=H(l,u),r,d;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);for(d=0;d<n.length;d++)r=n[d],!(u.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,r)||(p[r]=l[r]))}return p}function H(l,u){if(l==null)return{};var p={},r=Object.keys(l),d,n;for(n=0;n<r.length;n++)d=r[n],!(u.indexOf(d)>=0)&&(p[d]=l[d]);return p}var N=Object(Y.forwardRef)(function(l,u){var p=l.size,r=p===void 0?"medium":p,d=l.color,n=l.className,s=l.co,C=l.overrideStyles,j=G(l,U),t=z({size:r,color:d},{overrideStyles:C,name:"Spinner"}),b=t.classes,k=t.cx,O=Object(L.jsx)("i",{className:b.inner,children:Object(L.jsx)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(L.jsxs)("g",{transform:"translate(1 1)",children:[Object(L.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",strokeWidth:"2",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(L.jsx)("circle",{cx:"36",cy:"18",r:"1",children:Object(L.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})})});return Object(L.jsx)(J.a,Object.assign({ref:u,className:k(b.root,n),co:s},j,{children:O}))});N.displayName="@travelmakers-design/core/Spinner";var B=`
    
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
`,M={Default:{startLoc:{col:23,line:21},endLoc:{col:1,line:23},startBody:{col:23,line:21},endBody:{col:1,line:23}}},R=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <Spinner {...props} />;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:29},endLoc:{col:1,line:31},startBody:{col:23,line:29},endBody:{col:1,line:31}}}}},title:"@travelmakers-design/core/Component/Spinner",component:N,argTypes:{size:{defaultValue:"medium",description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],control:{type:"inline-radio"}},color:{description:"Spinner \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",control:{type:"color"}}}},P=function(u){return Object(L.jsx)(N,Object.assign({},u))};P.displayName="Default",P.parameters=Object.assign({storySource:{source:`(props) => {
  return <Spinner {...props} />;
}`}},P.parameters)},"./packages/travelmakers-design-core/src/components/Sticky/stories/Sticky.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return l});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),V=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts");function z(u){if(u==null)throw new TypeError("Cannot destructure undefined")}var L=Object(V.a)(function(u,p){return z(p),{root:{position:"sticky"}}}),U=e("./node_modules/react/jsx-runtime.js"),G=["className","co","overrideStyles"];function H(u,p){if(u==null)return{};var r=N(u,p),d,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);for(n=0;n<s.length;n++)d=s[n],!(p.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,d)||(r[d]=u[d]))}return r}function N(u,p){if(u==null)return{};var r={},d=Object.keys(u),n,s;for(s=0;s<d.length;s++)n=d[s],!(p.indexOf(n)>=0)&&(r[n]=u[n]);return r}var B=Object(Y.forwardRef)(function(u,p){var r=u.className,d=u.co,n=u.overrideStyles,s=H(u,G),C=Object(J.c)(),j=L({},{overrideStyles:n,name:"Sticky"}),t=j.classes,b=j.cx;return Object(U.jsx)(A.a,Object.assign({ref:p,className:b(t.root,r),co:d},s,{children:s.children}))});B.displayName="@travelmakers-design/core/Sticky";var M=`
    
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
`,R={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:19},startBody:{col:23,line:10},endBody:{col:1,line:19}}},P=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Sticky {...props} style={{ background: \\"black\\" }}>\\n        sticky\\n      </Sticky>\\n      <div>sticky</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:27},startBody:{col:23,line:18},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/Component/Sticky",component:B,argTypes:{}},l=function(p){return Object(U.jsxs)("div",{style:{padding:24},children:[Object(U.jsx)(B,Object.assign({},p,{style:{background:"black"},children:"sticky"})),Object(U.jsx)("div",{children:"sticky"})]})};l.displayName="Default",l.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Sticky {...props} style={{ background: "black" }}>
        sticky
      </Sticky>
      <div>sticky</div>
    </div>
  );
}`}},l.parameters)},"./packages/travelmakers-design-core/src/components/Tab/stories/Tab.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return v});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/react/index.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./node_modules/core-js/modules/es.array.index-of.js"),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e("./node_modules/core-js/modules/es.array.is-array.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/core-js/modules/es.array.map.js"),R=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),P=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),l=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),u=function(o){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:o.lineHeights.b1+"px",fontSize:o.fontSizes.b1,paddingRight:24,paddingLeft:24},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:o.lineHeights.h4+"px",fontSize:o.fontSizes.h4,paddingRight:49,paddingLeft:49}}},p=Object(l.a)(function(i,o){var f=o.size,D=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center",position:"relative"},tab:Object.assign({fontWeight:"400",color:i.colors.navy3,cursor:"pointer",whiteSpace:"nowrap",position:"relative"},u(i)[D]),selectedTab:Object.assign({fontWeight:"700",color:i.colors.white,cursor:"pointer",whiteSpace:"nowrap"},u(i)[D],{position:"relative"}),divider:{backgroundColor:i.colors.navy3,width:"1px",height:"20px"},selectedTabBottom:{backgroundColor:i.colors.green3,height:4,width:"100%",position:"absolute",bottom:-6,left:0}}}),r=function(o){return{small:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b2+"px",fontSize:o.fontSizes.b2,marginRight:12},large:{fontFamily:"Pretendard",fontWeight:"bold",lineHeight:o.lineHeights.b2+"px",fontSize:o.fontSizes.b2,marginRight:12}}},d=Object(l.a)(function(i,o){var f=o.size,D=f===void 0?"small":f;return{root:{display:"flex",alignItems:"center",position:"relative"},tab:Object.assign({fontWeight:"400",color:i.colors.navy3,cursor:"pointer",whiteSpace:"nowrap",position:"relative"},r(i)[D]),selectedTab:Object.assign({fontWeight:"700",color:i.colors.green3,cursor:"pointer",whiteSpace:"nowrap"},r(i)[D],{position:"relative"}),divider:{backgroundColor:i.colors.navy3,width:"1px",height:"20px"},selectedTabBottom:{backgroundColor:i.colors.green3,height:4,width:"100%",position:"absolute",bottom:-6,left:0}}}),n=e("./node_modules/react/jsx-runtime.js"),s=["type","size","array","className","co","overrideStyles"];function C(i,o){return O(i)||k(i,o)||t(i,o)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(i,o){if(!!i){if(typeof i=="string")return b(i,o);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return b(i,o)}}function b(i,o){(o==null||o>i.length)&&(o=i.length);for(var f=0,D=new Array(o);f<o;f++)D[f]=i[f];return D}function k(i,o){var f=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(f!=null){var D=[],S=!0,I=!1,E,ee;try{for(f=f.call(i);!(S=(E=f.next()).done)&&(D.push(E.value),!(o&&D.length===o));S=!0);}catch(se){I=!0,ee=se}finally{try{!S&&f.return!=null&&f.return()}finally{if(I)throw ee}}return D}}function O(i){if(Array.isArray(i))return i}function h(i,o){if(i==null)return{};var f=a(i,o),D,S;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(i);for(S=0;S<I.length;S++)D=I[S],!(o.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,D)||(f[D]=i[D]))}return f}function a(i,o){if(i==null)return{};var f={},D=Object.keys(i),S,I;for(I=0;I<D.length;I++)S=D[I],!(o.indexOf(S)>=0)&&(f[S]=i[S]);return f}var y="";function m(){return y}var g=Object(Y.forwardRef)(function(i,o){var f=i.type,D=f===void 0?"primary":f,S=i.size,I=S===void 0?"small":S,E=i.array,ee=E===void 0?[]:E,se=i.className,W=i.co,$=i.overrideStyles,Z=h(i,s),K=Object(R.c)(),ne=D==="primary"?p({size:I},{overrideStyles:$,name:"Tab"}):d({size:I},{overrideStyles:$,name:"Tab"}),ve=ne.classes,_e=ne.cx,F=Object(Y.useState)(""),oe=C(F,2),ie=oe[0],ue=oe[1],ye=function(ge){y=ge,ue(ge)};return Object(n.jsx)(P.a,Object.assign({ref:o,className:_e(ve.root,se),co:W},Z,{children:ee.map(function(pe,ge){var le=!1;return y!==""?le=y===pe:ge===0&&(le=!0,ye(pe)),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("span",{className:_e(le?ve.selectedTab:ve.tab),onClick:function(){return ye(pe)},children:[pe,D==="secondary"&&le&&Object(n.jsx)("span",{className:_e(ve.selectedTabBottom)})]}),D==="primary"&&ge!==ee.length-1&&Object(n.jsx)("span",{className:_e(ve.divider)})]})})}))});g.displayName="@travelmakers-design/core/Tab";var x=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,T={Default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}},x=`import React from "react";
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
`,T={Default:{startLoc:{col:23,line:43},endLoc:{col:1,line:49},startBody:{col:23,line:43},endBody:{col:1,line:49}}},c=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Tab {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:51},endLoc:{col:1,line:57},startBody:{col:23,line:51},endBody:{col:1,line:57}}}}},title:"@travelmakers-design/core/Component/Tab",component:g,argTypes:{size:{defaultValue:"small",description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},type:{defaultValue:"primary",description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["primary","secondary"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},array:{defaultValue:["\uC11C\uC6B8","\uC81C\uC8FC","\uC218\uB3C4\uAD8C","\uC804\uB77C"],table:{type:{summary:"React.ReactNode"}},description:"Tab \uCEF4\uD3EC\uB10C\uD2B8\uC758 array\uB97C \uC815\uD569\uB2C8\uB2E4.",control:{type:"array"}}}},v=function(o){return Object(n.jsx)("div",{style:{padding:24},children:Object(n.jsx)(g,Object.assign({},o))})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Tab {...props} />
    </div>
  );
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/Tag/Tag.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return M});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.array.fill.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./node_modules/react/index.js"),A=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),V=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),z=function(P){return{small:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:P.lineHeights.caption+"px",fontSize:P.fontSizes.caption},medium:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:P.lineHeights.b3+"px",fontSize:P.fontSizes.b3},large:{fontFamily:"Pretendard",fontWeight:"normal",lineHeight:P.lineHeights.b2+"px",fontSize:P.fontSizes.b2}}},L=function(P,l){return{small:{padding:l?"2px 8px":"0px 8px"},medium:{padding:l?"2px 12px":"0px 12px"},large:{padding:l?"3px 12px":"0px 16px"}}},U=Object(A.a)(function(R,P){var l,u=P.color,p=P.roundness,r=P.size,d=P.fill,n=P.disabled,s=n===void 0?!1:n;return{container:Object.assign({},Object(V.b)(R),z(R)[r],L(R,d)[r],(l={display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:s?R.colors.gray4:u==="gray"?R.colors.navy1:R.colors.white,marginRight:"6px",gap:"8px",borderRadius:p&&R.radius.round,backgroundColor:u==="green"?R.colors.green3:u==="blue"?R.colors.point_sky1:u==="purple"?R.colors.point_purple1:R.colors.gray6},l["&:last-child"]={marginRight:0},l)),line:{color:u==="green"?R.colors.green3:u==="blue"?R.colors.point_sky1:u==="purple"?R.colors.point_purple1:R.colors.gray3,background:"inherit",border:"1px solid"},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"}}}),G=e("./node_modules/react/jsx-runtime.js"),H=["component","size","color","roundness","fill","disabled","children","className","overrideStyles","__staticSelector"];function N(R,P){if(R==null)return{};var l=B(R,P),u,p;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(R);for(p=0;p<r.length;p++)u=r[p],!(P.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(R,u)||(l[u]=R[u]))}return l}function B(R,P){if(R==null)return{};var l={},u=Object.keys(R),p,r;for(r=0;r<u.length;r++)p=u[r],!(P.indexOf(p)>=0)&&(l[p]=R[p]);return l}var M=Object(J.forwardRef)(function(R,P){var l=R.component,u=R.size,p=u===void 0?"small":u,r=R.color,d=r===void 0?"green":r,n=R.roundness,s=n===void 0?!1:n,C=R.fill,j=C===void 0?!0:C,t=R.disabled,b=t===void 0?!1:t,k=R.children,O=R.className,h=R.overrideStyles,a=R.__staticSelector,y=a===void 0?"span":a,m=N(R,H),g=l||"span",x=U({color:d,roundness:s,fill:j,size:p,disabled:b},{overrideStyles:h,name:"span"}),T=x.classes,c=x.cx;return Object(G.jsx)(g,Object.assign({ref:P,className:c(T.container,T[d],!j&&T.line,O)},m,{children:k}))});M.displayName="@travelmakers-design/core/Tag"},"./packages/travelmakers-design-core/src/components/Tag/stories/Tag.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return v});var Q=e("./node_modules/core-js/modules/es.array.map.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.object.to-string.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.array.iterator.js"),J=e.n(X),A=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.object.assign.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.array.is-array.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.symbol.js"),N=e.n(H),B=e("./node_modules/core-js/modules/es.symbol.description.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.symbol.iterator.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.string.iterator.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(p),d=e("./node_modules/core-js/modules/es.array.slice.js"),n=e.n(d),s=e("./node_modules/core-js/modules/es.function.name.js"),C=e.n(s),j=e("./node_modules/react/index.js"),t=e.n(j),b=e("./packages/travelmakers-design-core/src/components/Tag/Tag.tsx"),k=e("./node_modules/react/jsx-runtime.js"),O=e.n(k);function h(i){return g(i)||m(i)||y(i)||a()}function a(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(i,o){if(!!i){if(typeof i=="string")return x(i,o);var f=Object.prototype.toString.call(i).slice(8,-1);if(f==="Object"&&i.constructor&&(f=i.constructor.name),f==="Map"||f==="Set")return Array.from(i);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return x(i,o)}}function m(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function g(i){if(Array.isArray(i))return x(i)}function x(i,o){(o==null||o>i.length)&&(o=i.length);for(var f=0,D=new Array(o);f<o;f++)D[f]=i[f];return D}var T=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,c={Default:{startLoc:{col:23,line:71},endLoc:{col:1,line:79},startBody:{col:23,line:71},endBody:{col:1,line:79}}},T=`import React from "react";
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
`,c={Default:{startLoc:{col:23,line:63},endLoc:{col:1,line:71},startBody:{col:23,line:63},endBody:{col:1,line:71}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      {[...Array(10).keys()].map((_, index) => (\\n        <Tag {...props}>Tag{index + 1}</Tag>\\n      ))}\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:71},endLoc:{col:1,line:79},startBody:{col:23,line:71},endBody:{col:1,line:79}}}}},title:"@travelmakers-design/core/Component/Tag",component:b.a,argTypes:{size:{defaultValue:"small",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"green",description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["green","blue","purple","gray"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},roundness:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uBAA8\uC591\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},fill:{defaultValue:!0,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC9C0\uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"Tag \uCEF4\uD3EC\uB10C\uD2B8\uC758 disable\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}}};var v=function(o){return Object(k.jsx)("div",{style:{padding:24,display:"flex"},children:h(Array(10).keys()).map(function(f,D){return Object(k.jsxs)(b.a,Object.assign({},o,{children:["Tag",D+1]}))})})};v.displayName="Default",v.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
}`}},v.parameters)},"./packages/travelmakers-design-core/src/components/TextButton/stories/TextButton.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return d});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.string.small.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),G=function(s){return{xsmall:{fontWeight:"normal",lineHeight:s.lineHeights.h6+"px",fontSize:s.fontSizes.h6},small:{fontWeight:"normal",lineHeight:s.lineHeights.h4+"px",fontSize:s.fontSizes.h4},medium:{fontWeight:"normal",lineHeight:s.lineHeights.h2+"px",fontSize:s.fontSizes.h2},large:{fontWeight:"normal",lineHeight:s.lineHeights.h1+"px",fontSize:s.fontSizes.h1}}},H=function(s){return{display:s?"block":"inline-block",width:s?"100%":"auto"}},N=Object(L.a)(function(n,s,C){var j,t,b=s.color,k=s.size,O=s.fullWidth,h=s.family,a=s.underline,y=s.leftIcon,m=s.rightIcon,g=C("loading"),x=C("inner"),T=C("spinner"),c=b||n.colors.navy1;return{loading:(j={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},j["."+x]={opacity:0},j["."+T]={display:"flex"},j),solid:(t={color:c==="white"?n.colors.white:n.colors.navy1,"&:not(:disabled):hover":{color:c==="white"?n.colors.white:n.colors.navy1},"&:not(:disabled):active":{color:c==="white"?n.colors.gray6:n.colors.navy2},"&:not(:disabled):focus-visible":{"&::before":{content:'""',position:"absolute",top:-2,bottom:-2,left:-2,right:-2,borderRadius:2}}},t["&:disabled:not(."+g+")"]={color:n.colors.gray5},t),root:Object.assign({},H(O),Object(U.b)(n),G(n)[k],{fontFamily:""+h,borderRadius:n.radius.small,backgroundColor:"transparent",position:"relative",lineHeight:1,WebkitTapHighlightColor:"transparent",userSelect:"none",textDecoration:a?"underline":"none",textUnderlinePosition:"under",boxSizing:"border-box",cursor:"pointer",appearance:"none",WebkitAppearance:"none",outline:"none",border:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{cursor:"not-allowed"}}),icon:{display:"flex",alignItems:"center"},leftIcon:{},rightIcon:{},inner:{ref:x,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",display:"flex",alignItems:"center"}}}),B=e("./node_modules/react/jsx-runtime.js"),M=["children","component","family","size","color","fullWidth","type","disabled","underline","leftIcon","rightIcon","className","co","overrideStyles"];function R(n,s){if(n==null)return{};var C=P(n,s),j,t;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(t=0;t<b.length;t++)j=b[t],!(s.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,j)||(C[j]=n[j]))}return C}function P(n,s){if(n==null)return{};var C={},j=Object.keys(n),t,b;for(b=0;b<j.length;b++)t=j[b],!(s.indexOf(t)>=0)&&(C[t]=n[t]);return C}var l=Object(w.forwardRef)(function(n,s){var C=n.children,j=n.component,t=n.family,b=t===void 0?"Pretendard":t,k=n.size,O=k===void 0?"medium":k,h=n.color,a=h===void 0?"navy":h,y=n.fullWidth,m=y===void 0?!1:y,g=n.type,x=g===void 0?"button":g,T=n.disabled,c=T===void 0?!1:T,v=n.underline,i=v===void 0?!1:v,o=n.leftIcon,f=n.rightIcon,D=n.className,S=n.co,I=n.overrideStyles,E=R(n,M),ee=Object(A.c)(),se=N({color:a,size:O,fullWidth:m,family:b,underline:i,leftIcon:o,rightIcon:f},{overrideStyles:I,name:"Button"}),W=se.classes,$=se.cx;return Object(B.jsx)(V.a,Object.assign({component:j||"button",ref:s,type:x,disabled:c,className:$(W.root,W.solid,D),co:S,onTouchStart:function(){}},E,{children:Object(B.jsxs)("div",{className:W.inner,children:[o&&Object(B.jsxs)("span",{className:$(W.icon,W.leftIcon),children:[o,"\xA0"]}),Object(B.jsx)("span",{className:W.label,children:C}),f&&Object(B.jsxs)("span",{className:$(W.icon,W.rightIcon),children:["\xA0",f]})]})}))});l.displayName="@travelmakers-design/core/TextButton";var u=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,p={Default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}},u=`import {
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
`,p={Default:{startLoc:{col:23,line:122},endLoc:{col:1,line:124},startBody:{col:23,line:122},endBody:{col:1,line:124}}},r=_.default={title:"@travelmakers-design/core/Component/TextButton",component:l,argTypes:{size:{defaultValue:"medium",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["xsmall","small","medium","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},family:{defaultValue:"Pretendard",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Button \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},fullWidth:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 \uC88C\uC6B0 \uACF5\uAC04\uC744 \uBAA8\uB450 \uCC28\uC9C0\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 button\uC774 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},leftIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}},rightIcon:{defaultValue:"",table:{type:{summary:"React.ReactNode"}},description:"Button \uCEF4\uD3EC\uB10C\uD2B8 \uC88C\uCE21 \uC601\uC5ED\uC5D0 \uC694\uC18C\uB97C \uCD94\uAC00\uD569\uB2C8\uB2E4.",control:{type:"text"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return <TextButton {...props}>Button</TextButton>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:130},endLoc:{col:1,line:132},startBody:{col:23,line:130},endBody:{col:1,line:132}}}},docs:{page:function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Y.g,{}),Object(B.jsx)(Y.f,{}),Object(B.jsx)(Y.b,{}),Object(B.jsx)(Y.d,{}),Object(B.jsx)(Y.a,{story:Y.c}),Object(B.jsx)(Y.e,{})]})}},actions:{handles:["click button"]}}},d=function(s){return Object(B.jsx)(l,Object.assign({},s,{children:"Button"}))};d.displayName="Default",d.parameters=Object.assign({storySource:{source:`(props) => {
  return <TextButton {...props}>Button</TextButton>;
}`}},d.parameters)},"./packages/travelmakers-design-core/src/components/Timer/stories/Timer.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return S});var Q=e("./node_modules/core-js/modules/es.date.to-string.js"),Y=e("./node_modules/core-js/modules/es.object.assign.js"),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/core-js/modules/es.array.iterator.js"),G=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),H=e("./node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/core-js/modules/es.array.from.js"),M=e("./node_modules/core-js/modules/es.string.replace.js"),R=e("./node_modules/core-js/modules/es.regexp.exec.js"),P=e("./node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/core-js/modules/es.regexp.to-string.js"),u=e("./node_modules/core-js/modules/es.string.pad-start.js"),p=e("./node_modules/core-js/modules/web.timers.js"),r=e("./node_modules/react/index.js"),d=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),n=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),s=function(E,ee){return{small:{fontFamily:"Pretendard",color:ee==="navy"?E.colors.navy1:E.colors.white,fontSize:E.fontSizes.b3,lineHeight:E.fontSizes.b3},large:{fontFamily:"Pretendard",color:ee==="navy"?E.colors.navy1:E.colors.white,fontSize:E.fontSizes.b2,lineHeight:E.lineHeights.b2}}},C=Object(d.a)(function(I,E){var ee=E.size,se=ee===void 0?"large":ee,W=E.color,$=W===void 0?"navy":W;return{container:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:n.a.maxSize,height:0},labelContainer:{display:"flex",alignItems:"center",position:"relative"},icon:{width:se==="large"?"16px":"12px",height:se==="large"?"16px":"12px"},label:Object.assign({fontWeight:400,marginLeft:"4px"},s(I,$)[se]),timer:Object.assign({fontWeight:700},s(I,$)[se])}}),j=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),t=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),b=e("./node_modules/react/jsx-runtime.js"),k=["size","color","label","endAt","className","co","overrideStyles"];function O(I,E){return g(I)||m(I,E)||a(I,E)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(I,E){if(!!I){if(typeof I=="string")return y(I,E);var ee=Object.prototype.toString.call(I).slice(8,-1);if(ee==="Object"&&I.constructor&&(ee=I.constructor.name),ee==="Map"||ee==="Set")return Array.from(I);if(ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee))return y(I,E)}}function y(I,E){(E==null||E>I.length)&&(E=I.length);for(var ee=0,se=new Array(E);ee<E;ee++)se[ee]=I[ee];return se}function m(I,E){var ee=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(ee!=null){var se=[],W=!0,$=!1,Z,K;try{for(ee=ee.call(I);!(W=(Z=ee.next()).done)&&(se.push(Z.value),!(E&&se.length===E));W=!0);}catch(ne){$=!0,K=ne}finally{try{!W&&ee.return!=null&&ee.return()}finally{if($)throw K}}return se}}function g(I){if(Array.isArray(I))return I}function x(I,E){if(I==null)return{};var ee=T(I,E),se,W;if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(I);for(W=0;W<$.length;W++)se=$[W],!(E.indexOf(se)>=0)&&(!Object.prototype.propertyIsEnumerable.call(I,se)||(ee[se]=I[se]))}return ee}function T(I,E){if(I==null)return{};var ee={},se=Object.keys(I),W,$;for($=0;$<se.length;$++)W=se[$],!(E.indexOf(W)>=0)&&(ee[W]=I[W]);return ee}var c=1e3,v="D\uC77C HH : mm : ss",i=Object(r.forwardRef)(function(I,E){var ee=I.size,se=ee===void 0?"small":ee,W=I.color,$=W===void 0?"navy":W,Z=I.label,K=Z===void 0?"\uD0C0\uC784\uC138\uC77C \uC6CC\uB529":Z,ne=I.endAt,ve=ne===void 0?new Date:ne,_e=I.className,F=I.co,oe=I.overrideStyles,ie=x(I,k),ue=C({size:se,color:$},{overrideStyles:oe,name:"span"}),ye=ue.classes,pe=ue.cx,ge=Object(r.useState)(null),le=O(ge,2),te=le[0],ce=le[1],de=function(){return!ve||!te?"":v.replace("D",te.days).replace("HH",te.hours).replace("mm",te.minutes).replace("ss",te.seconds)},xe=function(){var Te=new Date(ve).getTime()-new Date().getTime(),Re={};Te>0&&(Re={days:Math.floor(Te/(1e3*60*60*24)).toString(),hours:Math.floor(Te/(1e3*60*60)%24).toString().padStart(2,"0"),minutes:Math.floor(Te/1e3/60%60).toString().padStart(2,"0"),seconds:Math.floor(Te/1e3%60).toString().padStart(2,"0")}),ce(Re)};return Object(r.useEffect)(function(){var Oe=setInterval(function(){xe()},c);return function(){return clearInterval(Oe)}},[te]),Object(b.jsxs)(j.a,Object.assign({ref:E,className:pe(ye.container,_e),co:F},ie,{children:[Object(b.jsxs)("div",{className:pe(ye.labelContainer),children:[Object(b.jsx)(t.a,{src:e($==="navy"?"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-navy.svg":"./packages/travelmakers-design-core/src/assets/svg/ic-timesale-white.svg"),className:pe(ye.icon),alt:"timer"}),Object(b.jsx)("div",{className:pe(ye.label),children:K})]}),Object(b.jsx)("div",{className:pe(ye.timer),children:de()})]}))});i.displayName="@travelmakers-design/core/Timer";var o=`
    
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
`,f={Default:{startLoc:{col:23,line:78},endLoc:{col:1,line:84},startBody:{col:23,line:78},endBody:{col:1,line:84}}},D=_.default={title:"@travelmakers-design/core/Component/Timer",component:i,argTypes:{size:{defaultValue:"small",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["small","large"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},color:{defaultValue:"navy",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC0C9\uC0C1\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["navy","white"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},label:{defaultValue:"\uD0C0\uC784\uC138\uC77C \uB77C\uBCA8",description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB77C\uBC38\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"text"}},endAt:{defaultValue:new Date,description:"Timer \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD0C0\uC774\uBA38\uAC00 \uB05D\uB098\uB294 \uC2DC\uAC04\uC744 \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"React.ReactNode"}},control:{type:"date"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24, display: \\"flex\\" }}>\\n      <Timer {...props}></Timer>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:86},endLoc:{col:1,line:92},startBody:{col:23,line:86},endBody:{col:1,line:92}}}},docs:{page:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w.g,{}),Object(b.jsx)(w.f,{}),Object(b.jsx)(w.b,{}),Object(b.jsx)(w.d,{}),Object(b.jsx)(w.a,{story:w.c}),Object(b.jsx)(w.e,{})]})}}}},S=function(E){return Object(b.jsx)("div",{style:{padding:24,display:"flex"},children:Object(b.jsx)(i,Object.assign({},E))})};S.displayName="Default",S.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Timer {...props}></Timer>
    </div>
  );
}`}},S.parameters)},"./packages/travelmakers-design-core/src/components/Topbar/stories/Topbar.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return r});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),w=e("./node_modules/react/index.js"),re=e("./node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/core-js/modules/es.array.index-of.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),V=e("./packages/travelmakers-design-core/src/components/Badge/Badge.tsx"),z=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),L=e("./packages/travelmakers-design-core/src/components/Image/Image.tsx"),U=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),G=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),H=Object(U.a)(function(d,n){var s,C,j,t,b,k,O,h,a,y,m=n.mobileType,g=m===void 0?"Expanded":m;return{root:(s={fontFamily:"Pretendard",display:"flex",flexDirection:"column",width:"100%",minHeight:"100vh"},s["@supports (-webkit-touch-callout: none)"]={minHeight:"-webkit-fill-available"},s),container:(C={display:"flex",justifyContent:"center",width:"100%",padding:"16px 0"},C[""+d.media.mobile]={padding:"14px 0"},C.backgroundColor=d.colors.white,C),logo:(j={width:"120px",height:"47px",cursor:"pointer"},j[""+d.media.mobile]={width:"73px",height:"28px"},j),section:{display:"flex",alignItems:"center"},wrapper:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:G.a.maxSize},searchBox:(t={display:"flex",justifyContent:"center",alignItems:"center",height:"40px",padding:"8px 40px",borderRadius:"22px",backgroundColor:d.colors.gray6,cursor:"pointer"},t[""+d.media.mobile]={height:"32px",flex:"1 0"},t[""+d.media.mobile]={backgroundColor:g==="Collapsed"?"inherit":d.colors.gray6,padding:g==="Collapsed"?"0px":"8px 40px"},t),mobileSearchBox:(b={display:"none"},b[""+d.media.mobile]={display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},b),searchIcon:(k={width:"24px",height:"24px",marginRight:"4px",cursor:"pointer"},k[""+d.media.mobile]={width:g==="Collapsed"?"24px":"16px",height:g==="Collapsed"?"24px":"16px"},k),mypageIcon:{width:"24px",height:"24px",marginLeft:"16px",cursor:"pointer"},searchText:(O={fontSize:d.fontSizes.h6,lineHeight:d.lineHeights.h6+"px",fontWeight:400,textAlign:"center",color:d.colors.navy2},O[""+d.media.mobile]={fontSize:d.fontSizes.b1,lineHeight:d.lineHeights.b1+"px",display:g==="Expanded"?"block":"none"},O),divider:(h={display:"block",margin:"auto 12px",width:"1px",height:"16px",backgroundColor:d.colors.navy3},h[""+d.media.mobile]={display:"none"},h),menuText:(a={position:"relative",fontSize:d.fontSizes.h6,lineHeight:d.lineHeights.h6+"px",fontWeight:700,color:d.colors.navy1,cursor:"pointer"},a["&:hover"]={color:d.colors.beige4},a[""+d.media.mobile]={display:"none"},a),newBadge:(y={display:"flex",position:"absolute",width:"16px",height:"16px",top:"-8px",right:"-8px",justifyContent:"center",alignItems:"center",padding:"4px",borderRadius:"6px",backgroundColor:d.colors.red2},y["& > span"]={color:"white",fontSize:d.fontSizes.caption,fontWeight:"bold",marginLeft:"1px"},y[""+d.media.mobile]={width:"5px",height:"5px"},y)}}),N=e("./node_modules/react/jsx-runtime.js"),B=["mobileType","isLogin","isBadge","logoClick","searchClick","onClick","className","co","overrideStyles"];function M(d,n){if(d==null)return{};var s=R(d,n),C,j;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(d);for(j=0;j<t.length;j++)C=t[j],!(n.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,C)||(s[C]=d[C]))}return s}function R(d,n){if(d==null)return{};var s={},C=Object.keys(d),j,t;for(t=0;t<C.length;t++)j=C[t],!(n.indexOf(j)>=0)&&(s[j]=d[j]);return s}var P=Object(w.forwardRef)(function(d,n){var s=d.mobileType,C=s===void 0?"Expanded":s,j=d.isLogin,t=j===void 0?!1:j,b=d.isBadge,k=b===void 0?!1:b,O=d.logoClick,h=d.searchClick,a=d.onClick,y=d.className,m=d.co,g=d.overrideStyles,x=M(d,B),T=Object(A.c)(),c=H({mobileType:C},{overrideStyles:g,name:"Price"}),v=c.classes,i=c.cx;return Object(N.jsx)(z.a,Object.assign({ref:n,className:i(v.root,y),co:m},x,{children:Object(N.jsx)("div",{className:i(v.container),children:Object(N.jsxs)("div",{className:i(v.wrapper),children:[Object(N.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/logo.svg"),className:i(v.logo),onClick:O}),Object(N.jsxs)("div",{className:i(v.section),children:[Object(N.jsxs)("div",{className:i(v.searchBox),onClick:h,children:[Object(N.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/search.svg"),className:i(v.searchIcon)}),Object(N.jsx)("span",{className:i(v.searchText),children:"\uD638\uD154 \uAC80\uC0C9"})]}),Object(N.jsx)("div",{className:i(v.divider)}),Object(N.jsxs)("span",{className:i(v.menuText),onClick:a,children:[t?"\uB9C8\uC774\uD398\uC774\uC9C0":"\uB85C\uADF8\uC778",t&&k&&Object(N.jsx)(V.a,{className:i(v.newBadge),children:"N"})]}),Object(N.jsxs)("div",{className:i(v.mobileSearchBox),onClick:a,children:[Object(N.jsx)(L.a,{src:e("./packages/travelmakers-design-core/src/components/Topbar/svg/ic-mobile-mypage.svg"),className:i(v.mypageIcon)}),t&&k&&Object(N.jsx)(V.a,{className:i(v.newBadge)})]})]})]})})}))});P.displayName="@travelmakers-design/core/Topbar";var l=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,u={Default:{startLoc:{col:23,line:72},endLoc:{col:1,line:78},startBody:{col:23,line:72},endBody:{col:1,line:78}}},l=`import {
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
`,u={Default:{startLoc:{col:23,line:64},endLoc:{col:1,line:70},startBody:{col:23,line:64},endBody:{col:1,line:70}}},p=_.default={title:"@travelmakers-design/core/Component/Topbar",component:P,argTypes:{mobileType:{defaultValue:"Expanded",description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAC80\uC0C9 \uD0C0\uC785\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["Expanded","Collapsed"],control:{type:"inline-radio"}},isLogin:{defaultValue:!1,description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uADF8\uC778\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},isBadge:{defaultValue:!1,description:"Topbar \uCEF4\uD3EC\uB10C\uD2B8\uC758 badge\uC5EC\uBD80\uB97C \uC815\uD569\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <div style={{ padding: 24 }}>\\n      <Topbar {...props} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:72},endLoc:{col:1,line:78},startBody:{col:23,line:72},endBody:{col:1,line:78}}}},docs:{page:function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Y.g,{}),Object(N.jsx)(Y.f,{}),Object(N.jsx)(Y.b,{}),Object(N.jsx)(Y.d,{}),Object(N.jsx)(Y.a,{story:Y.c}),Object(N.jsx)(Y.e,{})]})}},actions:{handles:["click button"]}}},r=function(n){return Object(N.jsx)("div",{style:{padding:24},children:Object(N.jsx)(P,Object.assign({},n))})};r.displayName="Default",r.parameters=Object.assign({storySource:{source:`(props) => {
  return (
    <div style={{ padding: 24 }}>
      <Topbar {...props} />
    </div>
  );
}`}},r.parameters)},"./packages/travelmakers-design-core/src/components/Topbar/svg/ic-mobile-mypage.svg":function(q,_,e){q.exports=e.p+"static/media/ic-mobile-mypage.e301c76a.svg"},"./packages/travelmakers-design-core/src/components/Topbar/svg/logo.svg":function(q,_,e){q.exports=e.p+"static/media/logo.346e8bbf.svg"},"./packages/travelmakers-design-core/src/components/Topbar/svg/search.svg":function(q,_,e){q.exports=e.p+"static/media/search.3e709349.svg"},"./packages/travelmakers-design-core/src/components/Typography/Typography.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return u});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e("./node_modules/core-js/modules/es.array.index-of.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.string.italics.js"),X=e("./node_modules/core-js/modules/es.object.assign.js"),J=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),A=e("./node_modules/react/index.js"),V=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),z=e("./node_modules/core-js/modules/es.array.reduce.js"),L=e("./packages/travelmakers-design-styles/src/tss/createStyles.ts"),U={h1:{},small:{},medium:{},large:{}},G=function(r){return{caption:{lineHeight:r.lineHeights.caption+"px",fontSize:r.fontSizes.caption},b3:{lineHeight:r.lineHeights.b3+"px",fontSize:r.fontSizes.b3},b2:{lineHeight:r.lineHeights.b2+"px",fontSize:r.fontSizes.b2},b1:{lineHeight:r.lineHeights.b1+"px",fontSize:r.fontSizes.b1},h6:{lineHeight:r.lineHeights.h6+"px",fontSize:r.fontSizes.h6},h5:{lineHeight:r.lineHeights.h5+"px",fontSize:r.fontSizes.h5},h4:{lineHeight:r.lineHeights.h4+"px",fontSize:r.fontSizes.h4},h3:{lineHeight:r.lineHeights.h3+"px",fontSize:r.fontSizes.h3},h2:{lineHeight:r.lineHeights.h2+"px",fontSize:r.fontSizes.h2},h1:{lineHeight:r.lineHeights.h1+"px",fontSize:r.fontSizes.h1}}},H=Object.keys(U).reduce(function(p,r){return p[r]=U[r].height,p},{}),N=function(r){return{display:"block",width:"100%"}},B=Object(L.a)(function(p,r,d){var n,s,C=r.family,j=r.level,t=r.textAlign,b=r.disabled,k=r.strong,O=r.italic,h=r.underline,a=r.color,y=r.mobile,m=r.tablet,g=d("loading"),x=d("inner"),T=d("spinner");return{loading:(n={ref:g,pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,cursor:"not-allowed"}},n["."+x]={opacity:0},n["."+T]={display:"flex"},n),solid:{fontWeight:k?C==="Noto Serif KR"?600:700:400,fontStyle:O?"italic":"normal",textDecoration:h?"underline":"none",textUnderlinePosition:"under"},root:Object.assign({},U[j],N(),G(p)[j],(s={fontFamily:""+C,color:b?p.colors.gray5:a||p.colors.black,position:"relative",WebkitTapHighlightColor:"transparent",appearance:"none",textAlign:""+t,WebkitAppearance:"none",outline:"none",border:"none"},s[""+p.media.mobile]=Object.assign({},G(p)[y]),s[""+p.media.tablet]=Object.assign({},G(p)[m]),s)),inner:{ref:x,height:"100%",overflow:"visible"},label:{height:"100%"}}}),M=e("./node_modules/react/jsx-runtime.js"),R=["children","component","family","level","mobileLevel","tabletLevel","textAlign","disabled","strong","italic","underline","color","className","co","overrideStyles"];function P(p,r){if(p==null)return{};var d=l(p,r),n,s;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(p);for(s=0;s<C.length;s++)n=C[s],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,n)||(d[n]=p[n]))}return d}function l(p,r){if(p==null)return{};var d={},n=Object.keys(p),s,C;for(C=0;C<n.length;C++)s=n[C],!(r.indexOf(s)>=0)&&(d[s]=p[s]);return d}var u=Object(A.forwardRef)(function(p,r){var d=p.children,n=p.component,s=p.family,C=s===void 0?"Noto Serif KR":s,j=p.level,t=j===void 0?"h1":j,b=p.mobileLevel,k=p.tabletLevel,O=p.textAlign,h=O===void 0?"left":O,a=p.disabled,y=a===void 0?!1:a,m=p.strong,g=m===void 0?!1:m,x=p.italic,T=x===void 0?!1:x,c=p.underline,v=c===void 0?!1:c,i=p.color,o=p.className,f=p.co,D=p.overrideStyles,S=P(p,R),I=Object(J.c)(),E=B({family:C,level:t,disabled:y,strong:g,italic:T,underline:v,textAlign:h,color:i,mobile:b,tablet:k},{overrideStyles:D,name:"span"}),ee=E.classes,se=E.cx;return Object(M.jsx)(V.a,Object.assign({component:n||"span",ref:r,type:"span",disabled:y,className:se(ee.root,ee.solid,o),co:f,onTouchStart:function(){}},S,{children:Object(M.jsx)("div",{className:ee.inner,children:Object(M.jsx)("span",{className:ee.label,children:d})})}))});u.displayName="@travelmakers-design/core/Typography"},"./packages/travelmakers-design-core/src/components/Typography/stories/Typography.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return U});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),re=e("./node_modules/react/index.js"),X=e.n(re),J=e("./packages/travelmakers-design-core/src/components/Typography/Typography.tsx"),A=e("./node_modules/react/jsx-runtime.js"),V=e.n(A),z=`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,L={Default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}},z=`import {
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
`,L={Default:{startLoc:{col:23,line:164},endLoc:{col:1,line:199},startBody:{col:23,line:164},endBody:{col:1,line:199}}};_.default={title:"@travelmakers-design/core/General/Typography",component:J.a,argTypes:{level:{defaultValue:"h1",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},family:{defaultValue:"Noto Serif KR",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 font-family\uB97C \uC815\uD569\uB2C8\uB2E4.",options:["Noto Serif KR","Pretendard","PT Serif"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},textAlign:{defaultValue:"left",description:"Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 text-align\uC744 \uC815\uD569\uB2C8\uB2E4.",options:["left","center","right"],table:{type:{summary:"string"}},control:{type:"inline-radio"}},disabled:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 disabled \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},strong:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 strong \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},italic:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 italic \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},underline:{defaultValue:!1,description:"true\uC77C \uACBD\uC6B0 Text\uAC00 underline \uB429\uB2C8\uB2E4.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},mobileLevel:{defaultValue:"",description:"mobile\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}},tabletLevel:{defaultValue:"",description:"tablet\uC77C \uACBD\uC6B0\uC758 Typography \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD06C\uAE30\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.",options:["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],table:{type:{summary:"string"}},control:{type:"select"}}},parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "(props) => {\\n  return (\\n    <>\\n      <Typography {...props} level={\\"h1\\"}>\\n        h1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h2\\"}>\\n        h2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h3\\"}>\\n        h3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h4\\"}>\\n        h4. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h5\\"}>\\n        h5. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"h6\\"}>\\n        h6. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b1\\"}>\\n        b1. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b2\\"}>\\n        b2. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"b3\\"}>\\n        b3. Travelmakers Design\\n      </Typography>\\n      <Typography {...props} level={\\"caption\\"}>\\n        caption. Travelmakers Design\\n      </Typography>\\n    </>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:172},endLoc:{col:1,line:207},startBody:{col:23,line:172},endBody:{col:1,line:207}}}},docs:{page:function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(w.g,{}),Object(A.jsx)(w.f,{}),Object(A.jsx)(w.b,{}),Object(A.jsx)(w.d,{}),Object(A.jsx)(w.a,{story:w.c}),Object(A.jsx)(w.e,{})]})}}}};var U=function(H){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(J.a,Object.assign({},H,{level:"h1",children:"h1. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"h2",children:"h2. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"h3",children:"h3. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"h4",children:"h4. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"h5",children:"h5. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"h6",children:"h6. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"b1",children:"b1. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"b2",children:"b2. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"b3",children:"b3. Travelmakers Design"})),Object(A.jsx)(J.a,Object.assign({},H,{level:"caption",children:"caption. Travelmakers Design"}))]})};U.parameters=Object.assign({storySource:{source:`(props) => {
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
}`}},U.parameters)},"./packages/travelmakers-design-core/src/components/View/View.tsx":function(q,_,e){"use strict";e.d(_,"a",function(){return n});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.array.index-of.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.array.map.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.object.assign.js"),G=e.n(U),H=e("./packages/travelmakers-design-styles/src/tss/useCss.ts"),N=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),B=e("./node_modules/react/index.js"),M=e.n(B),R=e("./node_modules/react/jsx-runtime.js"),P=e.n(R),l=["component","className","style","co"];function u(s,C){if(s==null)return{};var j=p(s,C),t,b;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(s);for(b=0;b<k.length;b++)t=k[b],!(C.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(s,t)||(j[t]=s[t]))}return j}function p(s,C){if(s==null)return{};var j={},t=Object.keys(s),b,k;for(k=0;k<t.length;k++)b=t[k],!(C.indexOf(b)>=0)&&(j[b]=s[b]);return j}function r(s,C){return typeof s=="function"?s(C):s}function d(s,C){var j=Object(H.a)(),t=j.css,b=j.cx,k=Object(N.c)();return Array.isArray(s)?b(C,s.map(function(O){return t(r(O,k))})):b(C,t(r(s,k)))}var n=Object(B.forwardRef)(function(s,C){var j=s.component,t=s.className,b=s.style,k=s.co,O=u(s,l),h=j||"div";return Object(R.jsx)(h,Object.assign({ref:C,className:d(k,t),style:b},O))});n.displayName="@travelmakers-design/core/View"},"./packages/travelmakers-design-core/src/components/View/stories/View.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-core/src/components/View/View.tsx"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}},V=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:19},startBody:{col:23,line:9},endBody:{col:1,line:19}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  return (\\n    <View\\n      co={(theme) => ({\\n        width: 100,\\n        height: 100,\\n        backgroundColor: theme.colors.gray3,\\n      })}\\n    />\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:27},startBody:{col:23,line:17},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/core/General/View",component:X.a};var L=function(){return Object(J.jsx)(X.a,{co:function(H){return{width:100,height:100,backgroundColor:H.colors.gray3}}})};L.displayName="Default",L.parameters=Object.assign({storySource:{source:`() => {
  return (
    <View
      co={(theme) => ({
        width: 100,
        height: 100,
        backgroundColor: theme.colors.gray3,
      })}
    />
  );
}`}},L.parameters)},"./packages/travelmakers-design-core/src/constants/index.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return Q});var Q={xsmall:24,small:28,medium:40,large:48}},"./packages/travelmakers-design-core/src/utils/addAlpha.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return k});var Q=e("./node_modules/core-js/modules/es.string.replace.js"),Y=e("./node_modules/core-js/modules/es.regexp.exec.js"),w=e("./node_modules/core-js/modules/es.number.is-nan.js"),re=e("./node_modules/core-js/modules/es.number.constructor.js"),X=e("./node_modules/core-js/modules/es.parse-int.js"),J=e("./node_modules/core-js/modules/es.array.map.js"),A=e("./node_modules/core-js/modules/es.string.split.js"),V=e("./node_modules/core-js/modules/es.string.starts-with.js"),z=e("./node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/core-js/modules/es.object.to-string.js"),H=e("./node_modules/core-js/modules/es.symbol.iterator.js"),N=e("./node_modules/core-js/modules/es.string.iterator.js"),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/core-js/modules/es.array.slice.js"),P=e("./node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/core-js/modules/es.array.from.js");function u(O,h){return s(O)||n(O,h)||r(O,h)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r(O,h){if(!!O){if(typeof O=="string")return d(O,h);var a=Object.prototype.toString.call(O).slice(8,-1);if(a==="Object"&&O.constructor&&(a=O.constructor.name),a==="Map"||a==="Set")return Array.from(O);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(O,h)}}function d(O,h){(h==null||h>O.length)&&(h=O.length);for(var a=0,y=new Array(h);a<h;a++)y[a]=O[a];return y}function n(O,h){var a=O==null?null:typeof Symbol!="undefined"&&O[Symbol.iterator]||O["@@iterator"];if(a!=null){var y=[],m=!0,g=!1,x,T;try{for(a=a.call(O);!(m=(x=a.next()).done)&&(y.push(x.value),!(h&&y.length===h));m=!0);}catch(c){g=!0,T=c}finally{try{!m&&a.return!=null&&a.return()}finally{if(g)throw T}}return y}}function s(O){if(Array.isArray(O))return O}function C(O){var h=O.replace("#","");return typeof h=="string"&&h.length===6&&!Number.isNaN(Number("0x"+h))}function j(O){var h=O.replace("#",""),a=parseInt(h,16),y=a>>16&255,m=a>>8&255,g=a&255;return{r:y,g:m,b:g,a:1}}function t(O){var h=O.replace(/[^0-9,.]/g,"").split(",").map(Number),a=u(h,4),y=a[0],m=a[1],g=a[2],x=a[3];return{r:y,g:m,b:g,a:x||1}}function b(O){return C(O)?j(O):O.startsWith("rgb")?t(O):{r:0,g:0,b:0,a:1}}var k=function(h,a){var y=b(h),m=y.r,g=y.g,x=y.b;return"rgba("+m+", "+g+", "+x+", "+a+")"}},"./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return X});var Q=e("./node_modules/core-js/modules/es.array.concat.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=function(A){var V=Object(w.useRef)(A);return Object(w.useEffect)(function(){V.current=A},[A]),Object(w.useMemo)(function(){return function(){for(var z,L=arguments.length,U=new Array(L),G=0;G<L;G++)U[G]=arguments[G];return(z=V.current)===null||z===void 0?void 0:z.call.apply(z,[V].concat(U))}},[])}},"./packages/travelmakers-design-hooks/src/useClipboard/stories/useClipboard.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return h});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),H=e("./node_modules/react/index.js"),N=e("./node_modules/core-js/modules/web.timers.js");function B(a,y){return u(a)||l(a,y)||R(a,y)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(a,y){if(!!a){if(typeof a=="string")return P(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return P(a,y)}}function P(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function l(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],x=!0,T=!1,c,v;try{for(m=m.call(a);!(x=(c=m.next()).done)&&(g.push(c.value),!(y&&g.length===y));x=!0);}catch(i){T=!0,v=i}finally{try{!x&&m.return!=null&&m.return()}finally{if(T)throw v}}return g}}function u(a){if(Array.isArray(a))return a}var p=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=y.timeout,g=m===void 0?2e3:m,x=Object(H.useState)(null),T=B(x,2),c=T[0],v=T[1],i=Object(H.useState)(!1),o=B(i,2),f=o[0],D=o[1],S=Object(H.useState)(null),I=B(S,2),E=I[0],ee=I[1],se=function(K){clearTimeout(E),ee(setTimeout(function(){return D(!1)},g)),D(K)},W=function(K){"clipboard"in navigator?navigator.clipboard.writeText(K).then(function(){return se(!0)}).catch(function(ne){return v(ne)}):v(new Error("useClipboard: navigator.clipboard is not supported"))},$=function(){D(!1),v(null),clearTimeout(E)};return{copy:W,reset:$,error:c,copied:f}},r=e("./node_modules/react/jsx-runtime.js");function d(a,y){return t(a)||j(a,y)||s(a,y)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s(a,y){if(!!a){if(typeof a=="string")return C(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return C(a,y)}}function C(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function j(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],x=!0,T=!1,c,v;try{for(m=m.call(a);!(x=(c=m.next()).done)&&(g.push(c.value),!(y&&g.length===y));x=!0);}catch(i){T=!0,v=i}finally{try{!x&&m.return!=null&&m.return()}finally{if(T)throw v}}return g}}function t(a){if(Array.isArray(a))return a}var b=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,k={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}},b=`import React, { useState } from "react";

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
`,k={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:20},startBody:{col:23,line:9},endBody:{col:1,line:20}}},O=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const { copy, copied } = useClipboard({ timeout: 3000 });\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={() => copy(value)}>copy</button>\\n      <span>{copied && \\"Copied!!\\"}</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:28},startBody:{col:23,line:17},endBody:{col:1,line:28}}}}},title:"@travelmakers-design/hooks/useClipboard"},h=function(){var y=Object(H.useState)(""),m=d(y,2),g=m[0],x=m[1],T=p({timeout:3e3}),c=T.copy,v=T.copied;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",onChange:function(o){return x(o.target.value)}}),Object(r.jsx)("button",{onClick:function(){return c(g)},children:"copy"}),Object(r.jsx)("span",{children:v&&"Copied!!"})]})};h.displayName="Default",h.parameters=Object.assign({storySource:{source:`() => {
  const [value, setValue] = useState("");
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && "Copied!!"}</span>
    </div>
  );
}`}},h.parameters)},"./packages/travelmakers-design-hooks/src/useDebounce/stories/useDebounce.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return a});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),H=e("./node_modules/react/index.js"),N=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),B=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts");function M(y,m){return p(y)||u(y,m)||P(y,m)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(y,m){if(!!y){if(typeof y=="string")return l(y,m);var g=Object.prototype.toString.call(y).slice(8,-1);if(g==="Object"&&y.constructor&&(g=y.constructor.name),g==="Map"||g==="Set")return Array.from(y);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return l(y,m)}}function l(y,m){(m==null||m>y.length)&&(m=y.length);for(var g=0,x=new Array(m);g<m;g++)x[g]=y[g];return x}function u(y,m){var g=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(g!=null){var x=[],T=!0,c=!1,v,i;try{for(g=g.call(y);!(T=(v=g.next()).done)&&(x.push(v.value),!(m&&x.length===m));T=!0);}catch(o){c=!0,i=o}finally{try{!T&&g.return!=null&&g.return()}finally{if(c)throw i}}return x}}function p(y){if(Array.isArray(y))return y}var r=function(m,g,x){var T=Object(B.a)(m,g),c=M(T,2),v=c[0],i=c[1];return Object(N.a)(v,x),i},d=e("./node_modules/react/jsx-runtime.js");function n(y,m){return b(y)||t(y,m)||C(y,m)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(y,m){if(!!y){if(typeof y=="string")return j(y,m);var g=Object.prototype.toString.call(y).slice(8,-1);if(g==="Object"&&y.constructor&&(g=y.constructor.name),g==="Map"||g==="Set")return Array.from(y);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return j(y,m)}}function j(y,m){(m==null||m>y.length)&&(m=y.length);for(var g=0,x=new Array(m);g<m;g++)x[g]=y[g];return x}function t(y,m){var g=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(g!=null){var x=[],T=!0,c=!1,v,i;try{for(g=g.call(y);!(T=(v=g.next()).done)&&(x.push(v.value),!(m&&x.length===m));T=!0);}catch(o){c=!0,i=o}finally{try{!T&&g.return!=null&&g.return()}finally{if(c)throw i}}return x}}function b(y){if(Array.isArray(y))return y}var k=`
    
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
`,O={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}},h=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n  const clear = useDebounce(\\n    () => {\\n      alert(\\"Updated!\\");\\n    },\\n    1000,\\n    [value]\\n  );\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n      <button onClick={clear}>Cancel</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useDebounce"},a=function(){var m=Object(H.useState)(""),g=n(m,2),x=g[0],T=g[1],c=r(function(){alert("Updated!")},1e3,[x]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",onChange:function(i){return T(i.target.value)}}),Object(d.jsx)("button",{onClick:c,children:"Cancel"})]})};a.displayName="Default",a.parameters=Object.assign({storySource:{source:`() => {
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
}`}},a.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/stories/useForceUpdate.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const forceUpdate = useForceUpdate();\\n\\n  return (\\n    <div>\\n      {Math.random()}\\n      <button onClick={forceUpdate}>Update</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:25},startBody:{col:23,line:16},endBody:{col:1,line:25}}},V=`import React from "react";
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
`,z={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:17},startBody:{col:23,line:8},endBody:{col:1,line:17}}};_.default={parameters:{storySource:{source:`
    
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
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return h});var Q=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e.n(H),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.array.slice.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.function.name.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(p),d=e("./node_modules/react/index.js"),n=e.n(d);function s(a,y){return k(a)||b(a,y)||j(a,y)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(a,y){if(!!a){if(typeof a=="string")return t(a,y);var m=Object.prototype.toString.call(a).slice(8,-1);if(m==="Object"&&a.constructor&&(m=a.constructor.name),m==="Map"||m==="Set")return Array.from(a);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return t(a,y)}}function t(a,y){(y==null||y>a.length)&&(y=a.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=a[m];return g}function b(a,y){var m=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(m!=null){var g=[],x=!0,T=!1,c,v;try{for(m=m.call(a);!(x=(c=m.next()).done)&&(g.push(c.value),!(y&&g.length===y));x=!0);}catch(i){T=!0,v=i}finally{try{!x&&m.return!=null&&m.return()}finally{if(T)throw v}}return g}}function k(a){if(Array.isArray(a))return a}var O=function(y){return(y+1)%1e6},h=function(){var y=Object(d.useReducer)(O,0),m=s(y,2),g=m[1];return g}},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/stories/useHiddenBodyOverflow.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return L});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts"),J=e("./node_modules/react/jsx-runtime.js"),A=e.n(J),V=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  useHiddenBodyOverflow(true);\\n\\n  return (\\n    <div>\\n      <span>useHiddenBodyOverflow</span>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,z={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:25},startBody:{col:23,line:17},endBody:{col:1,line:25}}},V=`import React, { useState } from "react";

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
`,z={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:17},startBody:{col:23,line:9},endBody:{col:1,line:17}}};_.default={parameters:{storySource:{source:`
    
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
}`}},L.parameters)},"./packages/travelmakers-design-hooks/src/useHiddenBodyOverflow/useHiddenBodyOverflow.ts":function(q,_,e){"use strict";e.d(_,"b",function(){return w});var Q=e("./node_modules/react/index.js"),Y=e.n(Q),w=function(){var X=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;function J(z){z.preventDefault()}function A(){document.body.addEventListener("touchmove",J,{passive:!1})}function V(){document.body.removeEventListener("touchmove",J)}return Object(Q.useEffect)(function(){return X&&(document.body.style.cssText=`
      overflow-y: scroll;`),function(){var z=document.body.style.top;document.body.style.cssText=""}},[]),Object(Q.useEffect)(function(){return X&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}},[X]),null};_.a=w},"./packages/travelmakers-design-hooks/src/useLoading/stories/useLoading.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return se});var Q=e("./node_modules/core-js/modules/es.promise.js"),Y=e("./node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/core-js/modules/web.timers.js"),re=e("./node_modules/core-js/modules/es.object.assign.js"),X=e("./node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),G=e("./node_modules/core-js/modules/es.array.slice.js"),H=e("./node_modules/core-js/modules/es.function.name.js"),N=e("./node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/react/index.js"),M=e("./node_modules/core-js/modules/es.symbol.async-iterator.js"),R=e("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),P=e("./node_modules/core-js/modules/es.math.to-string-tag.js"),l=e("./node_modules/core-js/modules/es.json.to-string-tag.js"),u=e("./node_modules/core-js/modules/es.object.define-property.js"),p=e("./node_modules/core-js/modules/es.object.create.js"),r=e("./node_modules/core-js/modules/es.object.get-prototype-of.js"),d=e("./node_modules/core-js/modules/es.array.for-each.js"),n=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s=e("./node_modules/core-js/modules/es.object.set-prototype-of.js"),C=e("./node_modules/core-js/modules/es.array.reverse.js"),j=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts");function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return W};var W={},$=Object.prototype,Z=$.hasOwnProperty,K=typeof Symbol=="function"?Symbol:{},ne=K.iterator||"@@iterator",ve=K.asyncIterator||"@@asyncIterator",_e=K.toStringTag||"@@toStringTag";function F(me,ae,be){return Object.defineProperty(me,ae,{value:be,enumerable:!0,configurable:!0,writable:!0}),me[ae]}try{F({},"")}catch(me){F=function(be,he,fe){return be[he]=fe}}function oe(me,ae,be,he){var fe=ae&&ae.prototype instanceof ye?ae:ye,je=Object.create(fe.prototype),De=new Pe(he||[]);return je._invoke=function(Ae,Ie,Ce){var Se="suspendedStart";return function(Be,Ue){if(Se==="executing")throw new Error("Generator is already running");if(Se==="completed"){if(Be==="throw")throw Ue;return Ne()}for(Ce.method=Be,Ce.arg=Ue;;){var ze=Ce.delegate;if(ze){var We=Te(ze,Ce);if(We){if(We===ue)continue;return We}}if(Ce.method==="next")Ce.sent=Ce._sent=Ce.arg;else if(Ce.method==="throw"){if(Se==="suspendedStart")throw Se="completed",Ce.arg;Ce.dispatchException(Ce.arg)}else Ce.method==="return"&&Ce.abrupt("return",Ce.arg);Se="executing";var we=ie(Ae,Ie,Ce);if(we.type==="normal"){if(Se=Ce.done?"completed":"suspendedYield",we.arg===ue)continue;return{value:we.arg,done:Ce.done}}we.type==="throw"&&(Se="completed",Ce.method="throw",Ce.arg=we.arg)}}}(me,be,De),je}function ie(me,ae,be){try{return{type:"normal",arg:me.call(ae,be)}}catch(he){return{type:"throw",arg:he}}}W.wrap=oe;var ue={};function ye(){}function pe(){}function ge(){}var le={};F(le,ne,function(){return this});var te=Object.getPrototypeOf,ce=te&&te(te(Le([])));ce&&ce!==$&&Z.call(ce,ne)&&(le=ce);var de=ge.prototype=ye.prototype=Object.create(le);function xe(me){["next","throw","return"].forEach(function(ae){F(me,ae,function(be){return this._invoke(ae,be)})})}function Oe(me,ae){function be(fe,je,De,Ae){var Ie=ie(me[fe],me,je);if(Ie.type!=="throw"){var Ce=Ie.arg,Se=Ce.value;return Se&&typeof Se=="object"&&Z.call(Se,"__await")?ae.resolve(Se.__await).then(function(Be){be("next",Be,De,Ae)},function(Be){be("throw",Be,De,Ae)}):ae.resolve(Se).then(function(Be){Ce.value=Be,De(Ce)},function(Be){return be("throw",Be,De,Ae)})}Ae(Ie.arg)}var he;this._invoke=function(fe,je){function De(){return new ae(function(Ae,Ie){be(fe,je,Ae,Ie)})}return he=he?he.then(De,De):De()}}function Te(me,ae){var be=me.iterator[ae.method];if(be===void 0){if(ae.delegate=null,ae.method==="throw"){if(me.iterator.return&&(ae.method="return",ae.arg=void 0,Te(me,ae),ae.method==="throw"))return ue;ae.method="throw",ae.arg=new TypeError("The iterator does not provide a 'throw' method")}return ue}var he=ie(be,me.iterator,ae.arg);if(he.type==="throw")return ae.method="throw",ae.arg=he.arg,ae.delegate=null,ue;var fe=he.arg;return fe?fe.done?(ae[me.resultName]=fe.value,ae.next=me.nextLoc,ae.method!=="return"&&(ae.method="next",ae.arg=void 0),ae.delegate=null,ue):fe:(ae.method="throw",ae.arg=new TypeError("iterator result is not an object"),ae.delegate=null,ue)}function Re(me){var ae={tryLoc:me[0]};1 in me&&(ae.catchLoc=me[1]),2 in me&&(ae.finallyLoc=me[2],ae.afterLoc=me[3]),this.tryEntries.push(ae)}function Me(me){var ae=me.completion||{};ae.type="normal",delete ae.arg,me.completion=ae}function Pe(me){this.tryEntries=[{tryLoc:"root"}],me.forEach(Re,this),this.reset(!0)}function Le(me){if(me){var ae=me[ne];if(ae)return ae.call(me);if(typeof me.next=="function")return me;if(!isNaN(me.length)){var be=-1,he=function fe(){for(;++be<me.length;)if(Z.call(me,be))return fe.value=me[be],fe.done=!1,fe;return fe.value=void 0,fe.done=!0,fe};return he.next=he}}return{next:Ne}}function Ne(){return{value:void 0,done:!0}}return pe.prototype=ge,F(de,"constructor",ge),F(ge,"constructor",pe),pe.displayName=F(ge,_e,"GeneratorFunction"),W.isGeneratorFunction=function(me){var ae=typeof me=="function"&&me.constructor;return!!ae&&(ae===pe||(ae.displayName||ae.name)==="GeneratorFunction")},W.mark=function(me){return Object.setPrototypeOf?Object.setPrototypeOf(me,ge):(me.__proto__=ge,F(me,_e,"GeneratorFunction")),me.prototype=Object.create(de),me},W.awrap=function(me){return{__await:me}},xe(Oe.prototype),F(Oe.prototype,ve,function(){return this}),W.AsyncIterator=Oe,W.async=function(me,ae,be,he,fe){fe===void 0&&(fe=Promise);var je=new Oe(oe(me,ae,be,he),fe);return W.isGeneratorFunction(ae)?je:je.next().then(function(De){return De.done?De.value:je.next()})},xe(de),F(de,_e,"Generator"),F(de,ne,function(){return this}),F(de,"toString",function(){return"[object Generator]"}),W.keys=function(me){var ae=[];for(var be in me)ae.push(be);return ae.reverse(),function he(){for(;ae.length;){var fe=ae.pop();if(fe in me)return he.value=fe,he.done=!1,he}return he.done=!0,he}},W.values=Le,Pe.prototype={constructor:Pe,reset:function(ae){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Me),!ae)for(var be in this)be.charAt(0)==="t"&&Z.call(this,be)&&!isNaN(+be.slice(1))&&(this[be]=void 0)},stop:function(){this.done=!0;var ae=this.tryEntries[0].completion;if(ae.type==="throw")throw ae.arg;return this.rval},dispatchException:function(ae){if(this.done)throw ae;var be=this;function he(Ce,Se){return De.type="throw",De.arg=ae,be.next=Ce,Se&&(be.method="next",be.arg=void 0),!!Se}for(var fe=this.tryEntries.length-1;fe>=0;--fe){var je=this.tryEntries[fe],De=je.completion;if(je.tryLoc==="root")return he("end");if(je.tryLoc<=this.prev){var Ae=Z.call(je,"catchLoc"),Ie=Z.call(je,"finallyLoc");if(Ae&&Ie){if(this.prev<je.catchLoc)return he(je.catchLoc,!0);if(this.prev<je.finallyLoc)return he(je.finallyLoc)}else if(Ae){if(this.prev<je.catchLoc)return he(je.catchLoc,!0)}else{if(!Ie)throw new Error("try statement without catch or finally");if(this.prev<je.finallyLoc)return he(je.finallyLoc)}}}},abrupt:function(ae,be){for(var he=this.tryEntries.length-1;he>=0;--he){var fe=this.tryEntries[he];if(fe.tryLoc<=this.prev&&Z.call(fe,"finallyLoc")&&this.prev<fe.finallyLoc){var je=fe;break}}je&&(ae==="break"||ae==="continue")&&je.tryLoc<=be&&be<=je.finallyLoc&&(je=null);var De=je?je.completion:{};return De.type=ae,De.arg=be,je?(this.method="next",this.next=je.finallyLoc,ue):this.complete(De)},complete:function(ae,be){if(ae.type==="throw")throw ae.arg;return ae.type==="break"||ae.type==="continue"?this.next=ae.arg:ae.type==="return"?(this.rval=this.arg=ae.arg,this.method="return",this.next="end"):ae.type==="normal"&&be&&(this.next=be),ue},finish:function(ae){for(var be=this.tryEntries.length-1;be>=0;--be){var he=this.tryEntries[be];if(he.finallyLoc===ae)return this.complete(he.completion,he.afterLoc),Me(he),ue}},catch:function(ae){for(var be=this.tryEntries.length-1;be>=0;--be){var he=this.tryEntries[be];if(he.tryLoc===ae){var fe=he.completion;if(fe.type==="throw"){var je=fe.arg;Me(he)}return je}}throw new Error("illegal catch attempt")},delegateYield:function(ae,be,he){return this.delegate={iterator:Le(ae),resultName:be,nextLoc:he},this.method==="next"&&(this.arg=void 0),ue}},W}function b(W,$,Z,K,ne,ve,_e){try{var F=W[ve](_e),oe=F.value}catch(ie){Z(ie);return}F.done?$(oe):Promise.resolve(oe).then(K,ne)}function k(W){return function(){var $=this,Z=arguments;return new Promise(function(K,ne){var ve=W.apply($,Z);function _e(oe){b(ve,K,ne,_e,F,"next",oe)}function F(oe){b(ve,K,ne,_e,F,"throw",oe)}_e(void 0)})}}function O(W,$){return g(W)||m(W,$)||a(W,$)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(W,$){if(!!W){if(typeof W=="string")return y(W,$);var Z=Object.prototype.toString.call(W).slice(8,-1);if(Z==="Object"&&W.constructor&&(Z=W.constructor.name),Z==="Map"||Z==="Set")return Array.from(W);if(Z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z))return y(W,$)}}function y(W,$){($==null||$>W.length)&&($=W.length);for(var Z=0,K=new Array($);Z<$;Z++)K[Z]=W[Z];return K}function m(W,$){var Z=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(Z!=null){var K=[],ne=!0,ve=!1,_e,F;try{for(Z=Z.call(W);!(ne=(_e=Z.next()).done)&&(K.push(_e.value),!($&&K.length===$));ne=!0);}catch(oe){ve=!0,F=oe}finally{try{!ne&&Z.return!=null&&Z.return()}finally{if(ve)throw F}}return K}}function g(W){if(Array.isArray(W))return W}var x=function($){var Z=Object(B.useState)(!1),K=O(Z,2),ne=K[0],ve=K[1],_e=Object(j.a)($),F=Object(B.useCallback)(k(t().mark(function oe(){var ie,ue=arguments;return t().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return ve(!0),pe.next=3,_e.apply(void 0,ue);case 3:return ie=pe.sent,ve(!1),pe.abrupt("return",ie);case 6:case"end":return pe.stop()}},oe)})),[$]);return[ne,F]},T=e("./node_modules/react/jsx-runtime.js");function c(W,$){return D(W)||f(W,$)||i(W,$)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(W,$){if(!!W){if(typeof W=="string")return o(W,$);var Z=Object.prototype.toString.call(W).slice(8,-1);if(Z==="Object"&&W.constructor&&(Z=W.constructor.name),Z==="Map"||Z==="Set")return Array.from(W);if(Z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z))return o(W,$)}}function o(W,$){($==null||$>W.length)&&($=W.length);for(var Z=0,K=new Array($);Z<$;Z++)K[Z]=W[Z];return K}function f(W,$){var Z=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(Z!=null){var K=[],ne=!0,ve=!1,_e,F;try{for(Z=Z.call(W);!(ne=(_e=Z.next()).done)&&(K.push(_e.value),!($&&K.length===$));ne=!0);}catch(oe){ve=!0,F=oe}finally{try{!ne&&Z.return!=null&&Z.return()}finally{if(ve)throw F}}return K}}function D(W){if(Array.isArray(W))return W}var S=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,I={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}},S=`import React from "react";
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
`,I={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:21},startBody:{col:23,line:10},endBody:{col:1,line:21}}},E=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [loading, handler] = useLoading(sleep);\\n\\n  return (\\n    <div>\\n      <div>\\n        <button onClick={() => handler(2000)}>Start</button>\\n      </div>\\n      <div>Loading: {\`\${loading}\`}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:29},startBody:{col:23,line:18},endBody:{col:1,line:29}}}}},title:"@travelmakers-design/hooks/useLoading"},ee=function($){return new Promise(function(Z){return setTimeout(Z,$)})},se=function(){var $=x(ee),Z=c($,2),K=Z[0],ne=Z[1];return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:function(){return ne(2e3)},children:"Start"})}),Object(T.jsxs)("div",{children:["Loading: ",""+K]})]})};se.displayName="Default",se.parameters=Object.assign({storySource:{source:`() => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {\`\${loading}\`}</div>
    </div>
  );
}`}},se.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/stories/useRafState.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e.n(H),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.array.slice.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(p),d=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(d),s=e("./node_modules/react/index.js"),C=e.n(s),j=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts"),t=e("./node_modules/react/jsx-runtime.js"),b=e.n(t);function k(c,v){return m(c)||y(c,v)||h(c,v)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(c,v){if(!!c){if(typeof c=="string")return a(c,v);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(c,v)}}function a(c,v){(v==null||v>c.length)&&(v=c.length);for(var i=0,o=new Array(v);i<v;i++)o[i]=c[i];return o}function y(c,v){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],f=!0,D=!1,S,I;try{for(i=i.call(c);!(f=(S=i.next()).done)&&(o.push(S.value),!(v&&o.length===v));f=!0);}catch(E){D=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(D)throw I}}return o}}function m(c){if(Array.isArray(c))return c}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}},g=`import React, { useEffect } from "react";

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
`,x={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:31},startBody:{col:23,line:9},endBody:{col:1,line:31}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [state, setState] = useRafState({\\n    width: 0,\\n    height: 0,\\n  });\\n\\n  useEffect(() => {\\n    const onResize = () => {\\n      setState({\\n        width: window.innerWidth,\\n        height: window.innerHeight,\\n      });\\n    };\\n\\n    window.addEventListener(\\"resize\\", onResize);\\n\\n    return () => {\\n      window.removeEventListener(\\"resize\\", onResize);\\n    };\\n  }, []);\\n\\n  return <pre>{JSON.stringify(state, null, 2)}</pre>;\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:39},startBody:{col:23,line:17},endBody:{col:1,line:39}}}}},title:"@travelmakers-design/hooks/useRafState"};var T=function(){var v=Object(j.a)({width:0,height:0}),i=k(v,2),o=i[0],f=i[1];return Object(s.useEffect)(function(){var D=function(){f({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",D),function(){window.removeEventListener("resize",D)}},[]),Object(t.jsx)("pre",{children:JSON.stringify(o,null,2)})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
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
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return O});var Q=e("./node_modules/core-js/modules/es.array.is-array.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.object.to-string.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.symbol.iterator.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.string.iterator.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e.n(H),B=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/es.array.slice.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.function.name.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.array.from.js"),r=e.n(p),d=e("./node_modules/react/index.js"),n=e.n(d);function s(h,a){return k(h)||b(h,a)||j(h,a)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(h,a){if(!!h){if(typeof h=="string")return t(h,a);var y=Object.prototype.toString.call(h).slice(8,-1);if(y==="Object"&&h.constructor&&(y=h.constructor.name),y==="Map"||y==="Set")return Array.from(h);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return t(h,a)}}function t(h,a){(a==null||a>h.length)&&(a=h.length);for(var y=0,m=new Array(a);y<a;y++)m[y]=h[y];return m}function b(h,a){var y=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(y!=null){var m=[],g=!0,x=!1,T,c;try{for(y=y.call(h);!(g=(T=y.next()).done)&&(m.push(T.value),!(a&&m.length===a));g=!0);}catch(v){x=!0,c=v}finally{try{!g&&y.return!=null&&y.return()}finally{if(x)throw c}}return m}}function k(h){if(Array.isArray(h))return h}var O=function(a){var y=Object(d.useRef)(0),m=Object(d.useState)(a),g=s(m,2),x=g[0],T=g[1],c=Object(d.useCallback)(function(v){cancelAnimationFrame(y.current),y.current=requestAnimationFrame(function(){T(v)})},[]);return[x,c]}},"./packages/travelmakers-design-hooks/src/useResize/stories/useResize.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return m});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.array.is-array.js"),w=e("./node_modules/core-js/modules/es.symbol.js"),re=e("./node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/core-js/modules/es.array.iterator.js"),z=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),H=e("./node_modules/react/index.js"),N=e("./packages/travelmakers-design-hooks/src/useForceUpdate/useForceUpdate.ts"),B=e("./packages/travelmakers-design-hooks/src/useRafState/useRafState.ts");function M(g,x){return p(g)||u(g,x)||P(g,x)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(g,x){if(!!g){if(typeof g=="string")return l(g,x);var T=Object.prototype.toString.call(g).slice(8,-1);if(T==="Object"&&g.constructor&&(T=g.constructor.name),T==="Map"||T==="Set")return Array.from(g);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return l(g,x)}}function l(g,x){(x==null||x>g.length)&&(x=g.length);for(var T=0,c=new Array(x);T<x;T++)c[T]=g[T];return c}function u(g,x){var T=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(T!=null){var c=[],v=!0,i=!1,o,f;try{for(T=T.call(g);!(v=(o=T.next()).done)&&(c.push(o.value),!(x&&c.length===x));v=!0);}catch(D){i=!0,f=D}finally{try{!v&&T.return!=null&&T.return()}finally{if(i)throw f}}return c}}function p(g){if(Array.isArray(g))return g}var r={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0},d=typeof window!="undefined",n=function(){var x=Object(H.useRef)(null),T=Object(B.a)(r),c=M(T,2),v=c[0],i=c[1],o=Object(H.useMemo)(function(){return d?new ResizeObserver(function(f){var D=f[0];D&&i(D.contentRect)}):null},[]);return Object(H.useEffect)(function(){return x.current&&o.observe(x.current),function(){o.disconnect()}},[x.current]),[x,v]},s=e("./node_modules/react/jsx-runtime.js");function C(g,x){return O(g)||k(g,x)||t(g,x)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t(g,x){if(!!g){if(typeof g=="string")return b(g,x);var T=Object.prototype.toString.call(g).slice(8,-1);if(T==="Object"&&g.constructor&&(T=g.constructor.name),T==="Map"||T==="Set")return Array.from(g);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return b(g,x)}}function b(g,x){(x==null||x>g.length)&&(x=g.length);for(var T=0,c=new Array(x);T<x;T++)c[T]=g[T];return c}function k(g,x){var T=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(T!=null){var c=[],v=!0,i=!1,o,f;try{for(T=T.call(g);!(v=(o=T.next()).done)&&(c.push(o.value),!(x&&c.length===x));v=!0);}catch(D){i=!0,f=D}finally{try{!v&&T.return!=null&&T.return()}finally{if(i)throw f}}return c}}function O(g){if(Array.isArray(g))return g}var h=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,a={Default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}},h=`import React, { useEffect } from "react";

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
`,a={Default:{startLoc:{col:23,line:10},endLoc:{col:1,line:33},startBody:{col:23,line:10},endBody:{col:1,line:33}}},y=_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [ref, rect] = useResize();\\n  const update = useForceUpdate();\\n\\n  // FIXME: Storybook bug\\n  useEffect(() => {\\n    update();\\n  }, []);\\n\\n  return (\\n    <div>\\n      <textarea\\n        ref={ref}\\n        style={{\\n          width: 100,\\n          height: 100,\\n          backgroundColor: \\"red\\",\\n          resize: \\"both\\",\\n        }}\\n      />\\n      <div>{JSON.stringify(rect)}</div>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:1,line:41},startBody:{col:23,line:18},endBody:{col:1,line:41}}}}},title:"@travelmakers-design/hooks/useResize"},m=function(){var x=n(),T=C(x,2),c=T[0],v=T[1],i=Object(N.a)();return Object(H.useEffect)(function(){i()},[]),Object(s.jsxs)("div",{children:[Object(s.jsx)("textarea",{ref:c,style:{width:100,height:100,backgroundColor:"red",resize:"both"}}),Object(s.jsx)("div",{children:JSON.stringify(v)})]})};m.displayName="Default",m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/stories/useTimeoutFn.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e.n(H),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.array.slice.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(p),d=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(d),s=e("./node_modules/react/index.js"),C=e.n(s),j=e("./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts"),t=e("./node_modules/react/jsx-runtime.js"),b=e.n(t);function k(c,v){return m(c)||y(c,v)||h(c,v)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(c,v){if(!!c){if(typeof c=="string")return a(c,v);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(c,v)}}function a(c,v){(v==null||v>c.length)&&(v=c.length);for(var i=0,o=new Array(v);i<v;i++)o[i]=c[i];return o}function y(c,v){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],f=!0,D=!1,S,I;try{for(i=i.call(c);!(f=(S=i.next()).done)&&(o.push(S.value),!(v&&o.length===v));f=!0);}catch(E){D=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(D)throw I}}return o}}function m(c){if(Array.isArray(c))return c}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}},g=`import React from "react";
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
`,x={Default:{startLoc:{col:23,line:8},endLoc:{col:1,line:19},startBody:{col:23,line:8},endBody:{col:1,line:19}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [run, clear] = useTimeoutFn(() => {\\n    alert(\\"fire!\\");\\n  }, 2000);\\n\\n  return (\\n    <div>\\n      <button onClick={run}>Run</button>\\n      <button onClick={clear}>Clear</button>\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:16},endLoc:{col:1,line:27},startBody:{col:23,line:16},endBody:{col:1,line:27}}}}},title:"@travelmakers-design/hooks/useTimeoutFn"};var T=function(){var v=Object(j.a)(function(){alert("fire!")},2e3),i=k(v,2),o=i[0],f=i[1];return Object(t.jsxs)("div",{children:[Object(t.jsx)("button",{onClick:o,children:"Run"}),Object(t.jsx)("button",{onClick:f,children:"Clear"})]})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
  const [run, clear] = useTimeoutFn(() => {
    alert("fire!");
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useTimeoutFn/useTimeoutFn.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return J});var Q=e("./node_modules/core-js/modules/web.timers.js"),Y=e.n(Q),w=e("./node_modules/react/index.js"),re=e.n(w),X=e("./packages/travelmakers-design-hooks/src/useCallbackRef/useCallbackRef.ts"),J=function(V,z){var L=Object(w.useRef)(),U=Object(X.a)(V),G=Object(w.useCallback)(function(){L.current&&clearTimeout(L.current),L.current=setTimeout(function(){U()},z)},[z]),H=Object(w.useCallback)(function(){L.current&&clearTimeout(L.current)},[]);return Object(w.useEffect)(function(){return H},[H]),[G,H]}},"./packages/travelmakers-design-hooks/src/useUpdateEffect/stories/useUpdateEffect.stories.tsx":function(q,_,e){"use strict";e.r(_),e.d(_,"Default",function(){return T});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e.n(Q),w=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e.n(w),X=e("./node_modules/core-js/modules/es.symbol.js"),J=e.n(X),A=e("./node_modules/core-js/modules/es.symbol.description.js"),V=e.n(A),z=e("./node_modules/core-js/modules/es.object.to-string.js"),L=e.n(z),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e.n(U),H=e("./node_modules/core-js/modules/es.string.iterator.js"),N=e.n(H),B=e("./node_modules/core-js/modules/es.array.iterator.js"),M=e.n(B),R=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(R),l=e("./node_modules/core-js/modules/es.array.slice.js"),u=e.n(l),p=e("./node_modules/core-js/modules/es.function.name.js"),r=e.n(p),d=e("./node_modules/core-js/modules/es.array.from.js"),n=e.n(d),s=e("./node_modules/react/index.js"),C=e.n(s),j=e("./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts"),t=e("./node_modules/react/jsx-runtime.js"),b=e.n(t);function k(c,v){return m(c)||y(c,v)||h(c,v)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(c,v){if(!!c){if(typeof c=="string")return a(c,v);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(c,v)}}function a(c,v){(v==null||v>c.length)&&(v=c.length);for(var i=0,o=new Array(v);i<v;i++)o[i]=c[i];return o}function y(c,v){var i=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var o=[],f=!0,D=!1,S,I;try{for(i=i.call(c);!(f=(S=i.next()).done)&&(o.push(S.value),!(v&&o.length===v));f=!0);}catch(E){D=!0,I=E}finally{try{!f&&i.return!=null&&i.return()}finally{if(D)throw I}}return o}}function m(c){if(Array.isArray(c))return c}var g=`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,x={Default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}},g=`import React, { useEffect, useState } from "react";

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
`,x={Default:{startLoc:{col:23,line:9},endLoc:{col:1,line:25},startBody:{col:23,line:9},endBody:{col:1,line:25}}};_.default={parameters:{storySource:{source:`
    
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



Default.parameters = { storySource: { source: "() => {\\n  const [value, setValue] = useState(\\"\\");\\n\\n  useEffect(() => {\\n    console.log(\\"useEffect:\\", value);\\n  }, [value]);\\n\\n  useUpdateEffect(() => {\\n    console.log(\\"useUpdateEffect:\\", value);\\n  }, [value]);\\n\\n  return (\\n    <div>\\n      <input type=\\"text\\" onChange={(e) => setValue(e.target.value)} />\\n    </div>\\n  );\\n}" }, ...Default.parameters };`,locationsMap:{default:{startLoc:{col:23,line:17},endLoc:{col:1,line:33},startBody:{col:23,line:17},endBody:{col:1,line:33}}}}},title:"@travelmakers-design/hooks/useUpdateEffect"};var T=function(){var v=Object(s.useState)(""),i=k(v,2),o=i[0],f=i[1];return Object(s.useEffect)(function(){console.log("useEffect:",o)},[o]),Object(j.a)(function(){console.log("useUpdateEffect:",o)},[o]),Object(t.jsx)("div",{children:Object(t.jsx)("input",{type:"text",onChange:function(S){return f(S.target.value)}})})};T.displayName="Default",T.parameters=Object.assign({storySource:{source:`() => {
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
}`}},T.parameters)},"./packages/travelmakers-design-hooks/src/useUpdateEffect/useUpdateEffect.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return w});var Q=e("./node_modules/react/index.js"),Y=e.n(Q),w=function(X,J){var A=Object(Q.useRef)(!0);Object(Q.useEffect)(function(){if(!A.current)return X();A.current=!1},J)}},"./packages/travelmakers-design-styles/src/theme/TmProvider.tsx":function(q,_,e){"use strict";e.d(_,"c",function(){return H}),e.d(_,"d",function(){return N}),e.d(_,"b",function(){return B}),e.d(_,"a",function(){return R});var Q=e("./node_modules/react/index.js"),Y=e("./packages/travelmakers-design-styles/src/theme/defaultTheme.ts"),w=e("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),re=e("./node_modules/react/jsx-runtime.js"),X=function(l){var u=l.styles,p=H();return Object(re.jsx)(w.a,{styles:Object(w.b)(u(p))})};X.displayName="Global";var J={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}},A=function(){return Object(re.jsx)(w.a,{styles:J})};A.displayName="NormalizeCSS";var V=e("./node_modules/core-js/modules/es.array.reduce.js"),z=e("./node_modules/core-js/modules/es.object.keys.js"),L=e("./node_modules/core-js/modules/es.object.assign.js");function U(P,l){return l?Object.keys(P).reduce(function(u,p){if(p==="headings"&&l.headings){var r=l.headings?Object.keys(P.headings).reduce(function(d,n){return d[n]=Object.assign({},P.headings[n],l.headings[n]),d},{}):P.headings;return Object.assign({},u,{headings:Object.assign({},P.headings,l.headings,r)})}return u[p]=typeof l[p]=="object"?Object.assign({},P[p],l[p]):l[p]||P[p],u},{}):P}var G=Object(Q.createContext)({theme:Y.a,styles:{},emotionOptions:{key:"co",prepend:!0}});function H(){var P;return((P=Object(Q.useContext)(G))===null||P===void 0?void 0:P.theme)||Y.a}function N(){var P;return((P=Object(Q.useContext)(G))===null||P===void 0?void 0:P.styles)||{}}function B(){var P;return((P=Object(Q.useContext)(G))===null||P===void 0?void 0:P.emotionOptions)||{key:"co",prepend:!0}}var M=function(){return Object(re.jsx)(X,{styles:function(u){return{"*, *::before, *::after":{boxSizing:"border-box"},body:{fontFamily:u.fontFamily,backgroundColor:u.colorScheme==="dark"?u.colors.black:u.colors.white,color:u.colorScheme==="dark"?u.colors.white:u.colors.black,lineHeight:u.lineHeight,fontSizes:u.fontSizes.b3}}}})};M.displayName="GlobalStyles";var R=function(l){var u=l.theme,p=l.styles,r=p===void 0?{}:p,d=l.emotionOptions,n=l.withNormalizeCSS,s=n===void 0?!1:n,C=l.withGlobalStyles,j=C===void 0?!1:C,t=l.children;return Object(re.jsxs)(G.Provider,{value:{theme:U(Y.a,u),styles:r,emotionOptions:d},children:[s&&Object(re.jsx)(A,{}),j&&Object(re.jsx)(M,{}),t]})};R.displayName="TmProvider",R.displayName="@travelmakers-design/styles/TmProvider"},"./packages/travelmakers-design-styles/src/theme/defaultTheme.ts":function(q,_,e){"use strict";e.d(_,"b",function(){return ye}),e.d(_,"a",function(){return ge});var Q=e("./node_modules/core-js/modules/es.object.keys.js"),Y={transparent:"transparent",black:"#000000",white:"#FFFFFF",tw1:"rgba(255, 255, 255, 0.8)",tw2:"rgba(255, 255, 255, 0.5)",tw3:"rgba(255, 255, 255, 0.3)",tw4:"rgba(255, 255, 255, 0.1)",tb1:"rgba(0, 0, 0, 0.5)",tb2:"rgba(0, 0, 0, 0.3)",tb3:"rgba(0, 0, 0, 0.1)",gray1:"#414141",gray2:"#616161",gray3:"#8D8D8D",gray4:"#B6B6B6",gray5:"#D7D7D7",gray6:"#EDEDED",gray7:"#FAFAFA",navy1:"#30373F",navy2:"#6E7378",navy3:"#979B9F",red1:"#8D2314",red2:"#DA5542",red3:"#FF7777",red4:"#F0A8A8",red5:"#F1D5D5",green1:"#073D2F",green2:"#0D5E49",green3:"#03936E",green4:"#9DD1C3",green5:"#DCF1EC",blue1:"#0B2C5B",blue2:"#154D9D",blue3:"#367CE1",blue4:"#88A5EE",blue5:"#D4DCF2",beige1:"#635749",beige2:"#897763",beige3:"#9B7956",beige4:"#C1A485",beige5:"#D7D3CF",ivory1:"#9C9894",ivory3:"#C6C1BB",point_sky1:"#1A749E",point_blue1:"#362F8A",point_purple1:"#73327A",point_red1:"#AB253E",point_red3:"#73464E",point_orange1:"#B2622E",cover1:"#0D5E49",cover2:"#1C4062",cover3:"#463156",cover4:"#685537",cover5:"#5B2E2E"},w={primary:[Y.navy1,Y.navy1,Y.navy2],secondary:[Y.green2,Y.green2,Y.green1],tertiary:[Y.white,Y.white,Y.gray6],red:[Y.red2,Y.red2,Y.red1]},re={none:"none",xsmall:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",small:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",medium:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",large:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xlarge:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},X={caption:10,b3:12,b2:14,b1:16,h6:18,h5:20,h4:24,h3:28,h2:32,h1:40},J={caption:16,b3:20,b2:22,b1:24,h6:24,h5:32,h4:36,h3:40,h2:44,h1:60},A={small:2,medium:4,large:8,round:100,circular:"50%"},V={xsmall:4,small:8,medium:16,large:24},z={xsmall:576,small:768,medium:1024,large:1408},L={h1:{fontSize:54,lineHeight:1.2},h2:{fontSize:36,lineHeight:1.3},h3:{fontSize:28,lineHeight:1.35},h4:{fontSize:24,lineHeight:1.45},h5:{fontSize:20,lineHeight:1.5},h6:{fontSize:18,lineHeight:1.5}},U={opacity0:0,opacity1:.06,opacity2:.12,opacity3:.26,opacity4:.38,opacity5:.54,opacity6:.87,opacity7:1},G={deepdive:-99999,default:1,sticky:100,dropdown:1e3,overlay:2e3,modal:3e3,toast:1e4},H=e("./packages/travelmakers-design-styles/src/theme/types/TmSize.ts"),N={mobile:"@media (max-width: "+H.a.mobile+"px)",tablet:"@media (max-width: "+H.a.tablet+"px)",desktop:"@media (max-width: "+H.a.desktop+"px)",largeDesktop:"@media (max-width: "+H.a.maxSize+"px)"},B=e("./node_modules/core-js/modules/es.object.assign.js"),M=function(te){for(var ce="",de=1;de<te.length-1;de+=1)ce+=te[de]+" "+de/(te.length-1)*100+"%, ";return te[0]+" 0%, "+ce+te[te.length-1]+" 100%"},R=function(te){for(var ce=arguments.length,de=new Array(ce>1?ce-1:0),xe=1;xe<ce;xe++)de[xe-1]=arguments[xe];return"linear-gradient("+te+"deg, "+M(de)+")"},P=function(){for(var te=arguments.length,ce=new Array(te),de=0;de<te;de++)ce[de]=arguments[de];return"radial-gradient(circle, "+M(ce)+")"},l=function(te){return typeof te.size=="number"?te.size:te.sizes[te.size]||te.size||te.sizes.medium},u=function(te){return function(ce){return"@media (min-width: "+(l({size:ce,sizes:te.breakpoints})+1)+"px)"}},p=function(te){return function(ce){return"@media (max-width: "+l({size:ce,sizes:te.breakpoints})+"px)"}},r=e("./node_modules/core-js/modules/es.string.replace.js"),d=e("./node_modules/core-js/modules/es.regexp.exec.js"),n=e("./node_modules/core-js/modules/es.number.is-nan.js"),s=e("./node_modules/core-js/modules/es.number.constructor.js"),C=e("./node_modules/core-js/modules/es.parse-int.js"),j=e("./node_modules/core-js/modules/es.array.map.js"),t=e("./node_modules/core-js/modules/es.string.split.js"),b=e("./node_modules/core-js/modules/es.string.starts-with.js"),k=e("./node_modules/core-js/modules/es.array.is-array.js"),O=e("./node_modules/core-js/modules/es.symbol.js"),h=e("./node_modules/core-js/modules/es.symbol.description.js"),a=e("./node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/core-js/modules/es.symbol.iterator.js"),m=e("./node_modules/core-js/modules/es.string.iterator.js"),g=e("./node_modules/core-js/modules/es.array.iterator.js"),x=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/core-js/modules/es.function.name.js"),v=e("./node_modules/core-js/modules/es.array.from.js");function i(le,te){return I(le)||S(le,te)||f(le,te)||o()}function o(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f(le,te){if(!!le){if(typeof le=="string")return D(le,te);var ce=Object.prototype.toString.call(le).slice(8,-1);if(ce==="Object"&&le.constructor&&(ce=le.constructor.name),ce==="Map"||ce==="Set")return Array.from(le);if(ce==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ce))return D(le,te)}}function D(le,te){(te==null||te>le.length)&&(te=le.length);for(var ce=0,de=new Array(te);ce<te;ce++)de[ce]=le[ce];return de}function S(le,te){var ce=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(ce!=null){var de=[],xe=!0,Oe=!1,Te,Re;try{for(ce=ce.call(le);!(xe=(Te=ce.next()).done)&&(de.push(Te.value),!(te&&de.length===te));xe=!0);}catch(Me){Oe=!0,Re=Me}finally{try{!xe&&ce.return!=null&&ce.return()}finally{if(Oe)throw Re}}return de}}function I(le){if(Array.isArray(le))return le}var E=function(te){var ce=te.replace("#","");return typeof ce=="string"&&ce.length===6&&!Number.isNaN(Number("0x"+ce))},ee=function(te){var ce=te.replace("#",""),de=parseInt(ce,16),xe=de>>16&255,Oe=de>>8&255,Te=de&255;return{r:xe,g:Oe,b:Te,a:1}},se=function(te){var ce=te.replace(/[^0-9,.]/g,"").split(",").map(Number),de=i(ce,4),xe=de[0],Oe=de[1],Te=de[2],Re=de[3];return{r:xe,g:Oe,b:Te,a:Re||1}},W=function(te){return E(te)?ee(te):te.startsWith("rgb")?se(te):{r:0,g:0,b:0,a:1}},$=function(te,ce){if(typeof te!="string"||ce>1||ce<0)return"rgba(0, 0, 0, 1)";var de=W(te),xe=de.r,Oe=de.g,Te=de.b;return"rgba("+xe+", "+Oe+", "+Te+", "+ce+")"},Z=function(te,ce){var de=W(te),xe=de.r,Oe=de.g,Te=de.b,Re=de.a,Me=1-ce,Pe=function(Ne){return Math.round(Ne*Me)};return"rgba("+Pe(xe)+", "+Pe(Oe)+", "+Pe(Te)+", "+Re+")"},K=function(te,ce){var de=W(te),xe=de.r,Oe=de.g,Te=de.b,Re=de.a,Me=function(Le){return Math.round(Le+(255-Le)*ce)};return"rgba("+Me(xe)+", "+Me(Oe)+", "+Me(Te)+", "+Re+")"},ne=function(te){return te*8},ve={linearGradient:R,radialGradient:P,smallerThan:p,largerThan:u,rgba:$,size:l,darken:Z,lighten:K,spacing:ne},_e=function(te){return Object.assign({},te,{fn:{largerThan:ve.largerThan(te),smallerThan:ve.smallerThan(te),radialGradient:ve.radialGradient,linearGradient:ve.linearGradient,rgba:ve.rgba,size:ve.size,lighten:ve.lighten,darken:ve.darken,spacing:ve.spacing}})},F=Object.keys(w),oe=Object.keys(Y),ie=["xsmall","small","medium","large"],ue=["b3","b2","b1","h6","h5","h4","h3","h2","h1","caption"],ye=function(te){return{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontFamily:te.fontFamily||"sans-serif"}},pe={locale:"en",colorScheme:"light",lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:Y.black,colors:Y,palettes:w,shadows:re,fontSizes:X,lineHeights:J,radius:A,spacing:V,breakpoints:z,headings:L,opacity:U,zIndex:G,extra:{},media:N},ge=_e(pe)},"./packages/travelmakers-design-styles/src/theme/types/TmSize.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return Q});var Q={mobileS:320,mobileM:375,mobileL:450,mobile:480,tablet:768,desktop:1024,maxSize:1200}},"./packages/travelmakers-design-styles/src/tss/createStyles.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return j});var Q=e("./node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/core-js/modules/es.object.keys.js"),re=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),X=e("./node_modules/core-js/modules/es.array.for-each.js"),J=e("./node_modules/core-js/modules/web.dom-collections.for-each.js"),A=e("./node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/core-js/modules/es.symbol.description.js"),L=e("./node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/core-js/modules/es.string.iterator.js"),H=e("./node_modules/core-js/modules/es.array.iterator.js"),N=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/core-js/modules/es.array.from.js");function R(t,b){return r(t)||p(t,b)||l(t,b)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(t,b){if(!!t){if(typeof t=="string")return u(t,b);var k=Object.prototype.toString.call(t).slice(8,-1);if(k==="Object"&&t.constructor&&(k=t.constructor.name),k==="Map"||k==="Set")return Array.from(t);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return u(t,b)}}function u(t,b){(b==null||b>t.length)&&(b=t.length);for(var k=0,O=new Array(b);k<b;k++)O[k]=t[k];return O}function p(t,b){var k=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(k!=null){var O=[],h=!0,a=!1,y,m;try{for(k=k.call(t);!(h=(y=k.next()).done)&&(O.push(y.value),!(b&&O.length===b));h=!0);}catch(g){a=!0,m=g}finally{try{!h&&k.return!=null&&k.return()}finally{if(a)throw m}}return O}}function r(t){if(Array.isArray(t))return t}function d(t){var b={};return Object.keys(t).forEach(function(k){var O=R(t[k],2),h=O[0],a=O[1];b[h]=a}),b}var n=e("./node_modules/core-js/modules/es.array.reduce.js");function s(t,b,k){return Object.keys(b).reduce(function(O,h){return O[h]=t(b[h],k?"tm-"+k+"-"+h:null),O},{})}var C=e("./packages/travelmakers-design-styles/src/tss/useCss.ts");function j(t){var b=typeof t=="function"?t:function(){return t};function k(O,h){var a=Object(re.c)(),y=Object(re.d)()[h==null?void 0:h.name],m=Object(C.a)(),g=m.css,x=m.cx,T=0;function c(S){return T+=1,"tm-ref_"+(S||"")+"_"+T}var v=b(a,O,c),i=typeof(h==null?void 0:h.overrideStyles)=="function"?h==null?void 0:h.overrideStyles(a):(h==null?void 0:h.overrideStyles)||{},o=typeof y=="function"?y(a):y||{},f=typeof(h==null?void 0:h.co)=="function"?h.co(a):h==null?void 0:h.co,D=d(Object.keys(v).map(function(S){var I=x(g(v[S]),g(o[S]),g(i[S]),g(f));return[S,I]}));return{classes:s(x,D,h==null?void 0:h.name),cx:x,theme:a}}return k}},"./packages/travelmakers-design-styles/src/tss/useCss.ts":function(q,_,e){"use strict";e.d(_,"a",function(){return D});var Q=e("./node_modules/core-js/modules/es.object.assign.js"),Y=e("./node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/core-js/modules/es.array.is-array.js"),re=e("./node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/core-js/modules/es.array.iterator.js"),L=e("./node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/core-js/modules/es.array.slice.js"),G=e("./node_modules/core-js/modules/es.array.from.js"),H=e("./node_modules/clsx/dist/clsx.m.js"),N=e("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),B=e("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),M=e("./node_modules/core-js/modules/es.array.index-of.js"),R=e("./node_modules/core-js/modules/es.array.map.js"),P=e("./node_modules/react/index.js");function l(S){return d(S)||r(S)||p(S)||u()}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(S,I){if(!!S){if(typeof S=="string")return n(S,I);var E=Object.prototype.toString.call(S).slice(8,-1);if(E==="Object"&&S.constructor&&(E=S.constructor.name),E==="Map"||E==="Set")return Array.from(S);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return n(S,I)}}function r(S){if(typeof Symbol!="undefined"&&S[Symbol.iterator]!=null||S["@@iterator"]!=null)return Array.from(S)}function d(S){if(Array.isArray(S))return n(S)}function n(S,I){(I==null||I>S.length)&&(I=S.length);for(var E=0,ee=new Array(I);E<I;E++)ee[E]=S[E];return ee}function s(S,I){var E=Object(P.useRef)();return(!E.current||I.length!==E.current.prevDeps.length||E.current.prevDeps.map(function(ee,se){return ee===I[se]}).indexOf(!1)>=0)&&(E.current={v:S(),prevDeps:l(I)}),E.current.v}var C=e("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),j=e("./packages/travelmakers-design-styles/src/theme/TmProvider.tsx"),t=e("./node_modules/react/jsx-runtime.js"),b=function(){var S;function I(E){return S===void 0&&(S=Object(C.a)(E||{key:"co",prepend:!0})),S}return{getCache:I}}(),k=b.getCache,O=Object(P.createContext)(void 0);function h(){var S=Object(j.b)();return Object(P.useContext)(O)||k(S)}function a(S){var I=S.children,E=S.value;return Object(t.jsx)(O.Provider,{value:E,children:I})}a.displayName="CacheProvider";function y(S,I){return c(S)||T(S,I)||g(S,I)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(S,I){if(!!S){if(typeof S=="string")return x(S,I);var E=Object.prototype.toString.call(S).slice(8,-1);if(E==="Object"&&S.constructor&&(E=S.constructor.name),E==="Map"||E==="Set")return Array.from(S);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return x(S,I)}}function x(S,I){(I==null||I>S.length)&&(I=S.length);for(var E=0,ee=new Array(I);E<I;E++)ee[E]=S[E];return ee}function T(S,I){var E=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(E!=null){var ee=[],se=!0,W=!1,$,Z;try{for(E=E.call(S);!(se=($=E.next()).done)&&(ee.push($.value),!(I&&ee.length===I));se=!0);}catch(K){W=!0,Z=K}finally{try{!se&&E.return!=null&&E.return()}finally{if(W)throw Z}}return ee}}function c(S){if(Array.isArray(S))return S}var v="ref";function i(S){var I;if(S.length!==1)return{args:S,ref:I};var E=y(S,1),ee=E[0];if(!(ee instanceof Object))return{args:S,ref:I};if(!(v in ee))return{args:S,ref:I};I=ee[v];var se=Object.assign({},ee);return delete se[v],{args:[se],ref:I}}var o=function(){function S(E,ee,se){var W=[],$=Object(B.a)(E,W,se);return W.length<2?se:$+ee(W)}function I(E){var ee=E.cache,se=function(){for(var Z=arguments.length,K=new Array(Z),ne=0;ne<Z;ne++)K[ne]=arguments[ne];var ve=i(K),_e=ve.ref,F=ve.args,oe=Object(N.a)(F,ee.registered);return Object(B.b)(ee,oe,!1),ee.key+"-"+oe.name+(_e===void 0?"":" "+_e)},W=function(){for(var Z=arguments.length,K=new Array(Z),ne=0;ne<Z;ne++)K[ne]=arguments[ne];return S(ee.registered,se,Object(H.a)(K))};return{css:se,cx:W}}return{cssFactory:I}}(),f=o.cssFactory;function D(){var S=h();return s(function(){return f({cache:S})},[S])}},"./storybook-init-framework-entry.js":function(q,_,e){"use strict";e.r(_);var Q=e("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(q,_,e){e("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),e("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),e("./storybook-init-framework-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),e("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),e("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),e("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),e("./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),e("./config/storybook/preview.tsx-generated-config-entry.js"),q.exports=e("./generated-stories-entry.js")},1:function(q,_){}},[[0,4,5]]]);
