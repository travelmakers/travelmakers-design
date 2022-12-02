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
const sizes = {
  h1: {},
  small: {},
  medium: {},
  large: {}
};
const getFontStyles = (theme) => ({
  caption: {
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption
  },
  b3: {
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3
  },
  b2: {
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2
  },
  b1: {
    lineHeight: `${theme.lineHeights.b1}px`,
    fontSize: theme.fontSizes.b1
  },
  h6: {
    lineHeight: `${theme.lineHeights.h6}px`,
    fontSize: theme.fontSizes.h6
  },
  h5: {
    lineHeight: `${theme.lineHeights.h5}px`,
    fontSize: theme.fontSizes.h5
  },
  h4: {
    lineHeight: `${theme.lineHeights.h4}px`,
    fontSize: theme.fontSizes.h4
  },
  h3: {
    lineHeight: `${theme.lineHeights.h3}px`,
    fontSize: theme.fontSizes.h3
  },
  h2: {
    lineHeight: `${theme.lineHeights.h2}px`,
    fontSize: theme.fontSizes.h2
  },
  h1: {
    lineHeight: `${theme.lineHeights.h1}px`,
    fontSize: theme.fontSizes.h1
  }
});
Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {});
const getWidthStyles = (fullWidth) => ({
  display: "block",
  width: "100%"
});
var useStyles = styles.createStyles((theme, {
  family,
  level,
  textAlign,
  disabled,
  strong,
  italic,
  underline,
  color,
  mobile,
  tablet
}, getRef) => {
  const loading = getRef("loading");
  const inner = getRef("inner");
  const spinner = getRef("spinner");
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
      fontWeight: strong ? family === "Noto Serif KR" ? 600 : 700 : 400,
      fontStyle: italic ? "italic" : "normal",
      textDecoration: underline ? "underline" : "none",
      textUnderlinePosition: "under"
    },
    root: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, sizes[level]), getWidthStyles()), getFontStyles(theme)[level]), {
      fontFamily: `${family}`,
      color: disabled ? theme.colors.gray5 : color ? color : theme.colors.black,
      position: "relative",
      WebkitTapHighlightColor: "transparent",
      appearance: "none",
      textAlign: `${textAlign}`,
      WebkitAppearance: "none",
      outline: "none",
      border: "none",
      [`${theme.media.mobile}`]: __spreadValues({}, getFontStyles(theme)[mobile]),
      [`${theme.media.tablet}`]: __spreadValues({}, getFontStyles(theme)[tablet])
    }),
    inner: {
      ref: inner,
      height: "100%",
      overflow: "visible"
    },
    label: {
      height: "100%"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=Typography.style.js.map
