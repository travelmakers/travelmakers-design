'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var TmSize = require('../../../../travelmakers-design-styles/src/theme/types/TmSize.js');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const getFontStyles = (theme) => ({
  small: {
    fontFamily: "PT Serif",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: theme.fontSizes.h4,
    lineHeight: `${theme.lineHeights.h4}px`
  },
  large: {
    fontFamily: "PT Serif",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: theme.fontSizes.h1,
    lineHeight: `${theme.lineHeights.h1}px`
  }
});
var useStyles = styles.createStyles((theme, { size = "small", color = "navy" }) => {
  return {
    root: {},
    titleWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: TmSize.deviceSizes.maxSize
    },
    title: __spreadProps(__spreadValues({}, getFontStyles(theme)[size]), {
      color: color === "navy" ? theme.colors.navy1 : theme.colors.white,
      margin: "0 35px"
    }),
    divider: {
      backgroundColor: color === "navy" ? theme.colors.navy1 : theme.colors.white,
      flex: 1,
      height: "1px"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=HeaderPage.style.js.map
