import { createStyles, defaultFontStyles } from '@travelmakers-design/styles';

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
    fontWeight: "bold",
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption
  },
  medium: {
    fontFamily: "Pretendard",
    fontWeight: "bold",
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3
  },
  large: {
    fontFamily: "Pretendard",
    fontWeight: "bold",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2
  }
});
const getPaddingStyles = (theme) => ({
  small: {
    padding: "2px 4px"
  },
  medium: {
    padding: "0px 12px"
  },
  large: {
    padding: "0px 16px"
  }
});
var useStyles = createStyles((theme, { fill }) => {
  return {
    container: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, defaultFontStyles(theme)), getFontStyles(theme)["small"]), getPaddingStyles()["small"]), {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: theme.colors.green3,
      marginRight: "6px",
      gap: "5px",
      borderRadius: theme.radius.medium,
      backgroundColor: theme.colors.green5,
      ["&:last-child"]: {
        marginRight: 0
      }
    }),
    line: {
      color: theme.colors.green3,
      background: "inherit",
      border: "1px solid"
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=IconTag.style.js.map
