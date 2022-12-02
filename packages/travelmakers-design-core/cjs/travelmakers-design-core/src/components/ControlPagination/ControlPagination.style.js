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
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2,
    marginRight: "12px",
    marginLeft: "12px",
    width: "50px"
  },
  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h5}px`,
    fontSize: theme.fontSizes.h5,
    marginRight: "20px",
    marginLeft: "20px",
    width: "70px"
  }
});
var useStyles = styles.createStyles((theme, { color = "navy", size = "small" }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center"
    },
    indicator: __spreadProps(__spreadValues({}, getFontStyles(theme)[size]), {
      color,
      textAlign: "center"
    }),
    button: {
      width: "32px",
      height: "32px",
      cursor: "pointer"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=ControlPagination.style.js.map
