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
const getLabelTheme = (theme) => ({
  Week: {
    backgroundColor: theme.colors.green2
  },
  Month: {
    backgroundColor: theme.colors.green3
  },
  All: {
    backgroundColor: theme.colors.navy1
  }
});
var useStyles = styles.createStyles((theme, { state = "default", type = "Week" }) => {
  return {
    root: {
      width: "296px",
      backgroundColor: theme.colors.white
    },
    flex: {
      display: "flex"
    },
    spaceBetween: {
      justifyContent: "space-between"
    },
    labelContainer: __spreadProps(__spreadValues({}, getLabelTheme(theme)[type]), {
      padding: "0px 8px",
      width: "80px"
    }),
    contentContainer: {
      width: "100%",
      backgroundColor: theme.colors.gray8,
      padding: "12px"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=CouponCard.style.js.map
