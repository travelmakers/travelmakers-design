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
const getFontStyles = (theme, type) => ({
  small: {
    fontFamily: "Pretendard",
    fontWeight: type === "text" ? "bold" : "normal",
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption
  },
  medium: {
    fontFamily: "Pretendard",
    fontWeight: type === "text" ? "bold" : "normal",
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3
  },
  large: {
    fontFamily: "Pretendard",
    fontWeight: type === "text" ? "bold" : "normal",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2
  }
});
const getPaddingStyles = (theme, type) => ({
  small: {
    padding: type === "text" ? "0px 4px" : "0px 8px"
  },
  medium: {
    padding: type === "text" ? "0px 5px" : "0px 8px"
  },
  large: {
    padding: type === "text" ? "1px 7px" : "0px 8px"
  }
});
var useStyles = createStyles((theme, { size, type }) => {
  return {
    container: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, defaultFontStyles(theme)), getFontStyles(theme, type)[size]), getPaddingStyles(theme, type)[size]), {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: theme.colors.white,
      borderRadius: type === "text" ? "6px" : theme.radius.round,
      backgroundColor: theme.colors.red2
    })
  };
});

export { useStyles as default };
//# sourceMappingURL=Badge.style.js.map
