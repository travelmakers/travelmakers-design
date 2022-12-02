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
  xsmall: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h6}px`,
    fontSize: theme.fontSizes.h6
  },
  small: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h4}px`,
    fontSize: theme.fontSizes.h4
  },
  medium: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h2}px`,
    fontSize: theme.fontSizes.h2
  },
  large: {
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h1}px`,
    fontSize: theme.fontSizes.h1
  }
});
const getWidthStyles = (fullWidth) => ({
  display: fullWidth ? "block" : "inline-block",
  width: fullWidth ? "100%" : "auto"
});
var useStyles = styles.createStyles((theme, {
  color: _color,
  size,
  fullWidth,
  family,
  underline,
  leftIcon,
  rightIcon
}, getRef) => {
  const loading = getRef("loading");
  const inner = getRef("inner");
  const spinner = getRef("spinner");
  const color = _color || theme.colors.navy1;
  return {
    loading: {
      ref: loading,
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        cursor: "not-allowed"
      },
      [`.${inner}`]: {
        opacity: 0
      },
      [`.${spinner}`]: {
        display: "flex"
      }
    },
    solid: {
      color: color === "white" ? theme.colors.white : theme.colors.navy1,
      "&:not(:disabled):hover": {
        color: color === "white" ? theme.colors.white : theme.colors.navy1
      },
      "&:not(:disabled):active": {
        color: color === "white" ? theme.colors.gray6 : theme.colors.navy2
      },
      "&:not(:disabled):focus-visible": {
        "&::before": {
          content: '""',
          position: "absolute",
          top: -2,
          bottom: -2,
          left: -2,
          right: -2,
          borderRadius: 2
        }
      },
      [`&:disabled:not(.${loading})`]: {
        color: theme.colors.gray5
      }
    },
    root: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, getWidthStyles(fullWidth)), styles.defaultFontStyles(theme)), getFontStyles(theme)[size]), {
      fontFamily: `${family}`,
      borderRadius: theme.radius.small,
      backgroundColor: "transparent",
      position: "relative",
      lineHeight: 1,
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",
      textDecoration: underline ? "underline" : "none",
      textUnderlinePosition: "under",
      boxSizing: "border-box",
      cursor: "pointer",
      appearance: "none",
      WebkitAppearance: "none",
      outline: "none",
      border: "none",
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        cursor: "not-allowed"
      }
    }),
    icon: {
      display: "flex",
      alignItems: "center"
    },
    leftIcon: {},
    rightIcon: {},
    inner: {
      ref: inner,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      overflow: "visible"
    },
    label: {
      whiteSpace: "nowrap",
      height: "100%",
      display: "flex",
      alignItems: "center"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=TextButton.style.js.map
