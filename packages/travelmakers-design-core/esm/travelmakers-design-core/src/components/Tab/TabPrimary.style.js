import { createStyles } from '@travelmakers-design/styles';

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
    lineHeight: `${theme.lineHeights.b1}px`,
    fontSize: theme.fontSizes.b1,
    paddingRight: 24,
    paddingLeft: 24
  },
  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h4}px`,
    fontSize: theme.fontSizes.h4,
    paddingRight: 49,
    paddingLeft: 49
  }
});
var usePrimaryStyles = createStyles((theme, { size = "small" }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      position: "relative"
    },
    tab: __spreadValues({
      fontWeight: "400",
      color: theme.colors.navy3,
      cursor: "pointer",
      whiteSpace: "nowrap",
      position: "relative"
    }, getFontStyles(theme)[size]),
    selectedTab: __spreadProps(__spreadValues({
      fontWeight: "700",
      color: theme.colors.white,
      cursor: "pointer",
      whiteSpace: "nowrap"
    }, getFontStyles(theme)[size]), {
      position: "relative"
    }),
    divider: {
      backgroundColor: theme.colors.navy3,
      width: "1px",
      height: "20px"
    },
    selectedTabBottom: {
      backgroundColor: theme.colors.green3,
      height: 4,
      width: "100%",
      position: "absolute",
      bottom: -6,
      left: 0
    }
  };
});

export { usePrimaryStyles as default };
//# sourceMappingURL=TabPrimary.style.js.map
