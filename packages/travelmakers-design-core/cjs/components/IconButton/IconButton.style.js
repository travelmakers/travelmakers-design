'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var index = require('../../constants/index.js');
var addAlpha = require('../../utils/addAlpha.js');

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
  xsmall: {
    width: index.TM_HEIGHTS.xsmall,
    height: index.TM_HEIGHTS.xsmall
  },
  small: {
    width: index.TM_HEIGHTS.small,
    height: index.TM_HEIGHTS.small
  },
  medium: {
    width: index.TM_HEIGHTS.medium,
    height: index.TM_HEIGHTS.medium
  },
  large: {
    width: index.TM_HEIGHTS.large,
    height: index.TM_HEIGHTS.large
  }
};
const paddings = {
  xsmall: 8,
  small: 8,
  medium: 16,
  large: 16
};
var useStyles = styles.createStyles((theme, { variant: _variant, size, line, roundness }, getRef) => {
  const loading = getRef("loading");
  const inner = getRef("inner");
  const spinner = getRef("spinner");
  const variant = _variant || theme.colors.navy1;
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
      backgroundColor: theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0],
      color: theme.colorScheme === "light" ? theme.colors.white : theme.colors.black,
      "&:not(:disabled):hover": {
        backgroundColor: theme.palettes[variant][theme.colorScheme === "light" ? 1 : 1]
      },
      "&:not(:disabled):active": {
        backgroundColor: theme.palettes[variant][theme.colorScheme === "light" ? 2 : 2]
      },
      "&:not(:disabled):focus-visible": {
        "&::before": {
          content: '""',
          position: "absolute",
          top: -2,
          bottom: -2,
          left: -2,
          right: -2,
          borderRadius: roundness ? theme.radius.round : 2,
          outline: `1px solid ${theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0]}`
        }
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.colors.gray5,
        color: line ? theme.colors.black : theme.colors.white
      }
    },
    ghost: {
      backgroundColor: theme.colors.transparent,
      border: `1px solid ${theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0]}`,
      color: theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0],
      "&:not(:disabled):hover": {
        backgroundColor: addAlpha.addAlpha(theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0], theme.opacity.opacity3)
      },
      "&:not(:disabled):active": {
        backgroundColor: addAlpha.addAlpha(theme.palettes[variant][theme.colorScheme === "light" ? 1 : 1], theme.opacity.opacity3)
      },
      "&:not(:disabled):focus-visible": {
        "&::before": {
          content: '""',
          position: "absolute",
          top: -2,
          bottom: -2,
          left: -2,
          right: -2,
          borderRadius: roundness ? theme.radius.round : 2,
          outline: `1px solid ${theme.palettes[variant][theme.colorScheme === "light" ? 0 : 0]}`
        }
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.colors.gray5,
        color: line ? theme.colors.black : theme.colors.white
      }
    },
    root: __spreadProps(__spreadValues(__spreadValues({}, sizes[size]), styles.defaultFontStyles(theme)), {
      borderRadius: roundness ? theme.radius.round : theme.radius.small,
      position: "relative",
      padding: 0,
      lineHeight: 1,
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",
      boxSizing: "border-box",
      textDecoration: "none",
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
    inner: {
      ref: inner,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      overflow: "visible",
      "& > *": {
        width: sizes[size].width - paddings[size],
        height: sizes[size].height - paddings[size]
      }
    },
    spinnerWrapper: {
      ref: spinner,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "none",
      alignItems: "center",
      justifyContent: "center"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=IconButton.style.js.map
