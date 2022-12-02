'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');

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
    fontFamily: "Noto Serif KR",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.b3,
    lineHeight: `${theme.lineHeights.b3}px`
  },
  large: {
    fontFamily: "Noto Serif KR",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.h6,
    lineHeight: `${theme.lineHeights.h6}px`
  }
});
var useStyles = styles.createStyles((theme, { size = "small" }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: size === "small" ? "44px" : "64px",
      maxWidth: "calc(1200px - 16px * 2)",
      padding: "0 16px",
      backgroundColor: theme.colors.navy1
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      width: "100%"
    },
    title: __spreadProps(__spreadValues({}, getFontStyles(theme)[size]), {
      color: theme.colors.white,
      marginLeft: 24
    })
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=HeaderSection.style.js.map
