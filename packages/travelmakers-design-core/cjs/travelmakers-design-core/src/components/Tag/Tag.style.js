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
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption
  },
  medium: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3
  },
  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2
  }
});
const getPaddingStyles = (theme, fill) => ({
  small: {
    padding: fill ? "2px 8px" : "0px 8px"
  },
  medium: {
    padding: fill ? "2px 12px" : "0px 12px"
  },
  large: {
    padding: fill ? "3px 12px" : "0px 16px"
  }
});
var useStyles = styles.createStyles((theme, { color, roundness, size, fill, disabled = false }) => {
  return {
    container: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, styles.defaultFontStyles(theme)), getFontStyles(theme)[size]), getPaddingStyles(theme, fill)[size]), {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: disabled ? theme.colors.gray4 : color === "gray" ? theme.colors.navy1 : theme.colors.white,
      marginRight: "6px",
      gap: "8px",
      borderRadius: roundness && theme.radius.round,
      backgroundColor: color === "green" ? theme.colors.green3 : color === "blue" ? theme.colors.point_sky1 : color === "purple" ? theme.colors.point_purple1 : theme.colors.gray6,
      ["&:last-child"]: {
        marginRight: 0
      }
    }),
    line: {
      color: color === "green" ? theme.colors.green3 : color === "blue" ? theme.colors.point_sky1 : color === "purple" ? theme.colors.point_purple1 : theme.colors.gray3,
      background: "inherit",
      border: "1px solid"
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      overflow: "visible"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=Tag.style.js.map
