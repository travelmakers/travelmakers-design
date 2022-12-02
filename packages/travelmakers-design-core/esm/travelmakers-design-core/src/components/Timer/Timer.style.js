import { createStyles } from '@travelmakers-design/styles';
import { deviceSizes } from '../../../../travelmakers-design-styles/src/theme/types/TmSize.js';

var __defProp = Object.defineProperty;
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
const getFontStyles = (theme, color) => ({
  small: {
    fontFamily: "Pretendard",
    color: color === "navy" ? theme.colors.navy1 : theme.colors.white,
    fontSize: theme.fontSizes.b3,
    lineHeight: theme.fontSizes.b3
  },
  large: {
    fontFamily: "Pretendard",
    color: color === "navy" ? theme.colors.navy1 : theme.colors.white,
    fontSize: theme.fontSizes.b2,
    lineHeight: theme.lineHeights.b2
  }
});
var useStyles = createStyles((theme, { size = "large", color = "navy" }) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: deviceSizes.maxSize,
      height: 0
    },
    labelContainer: {
      display: "flex",
      alignItems: "center",
      position: "relative"
    },
    icon: {
      width: size === "large" ? "16px" : "12px",
      height: size === "large" ? "16px" : "12px"
    },
    label: __spreadValues({
      fontWeight: 400,
      marginLeft: "4px"
    }, getFontStyles(theme, color)[size]),
    timer: __spreadValues({
      fontWeight: 700
    }, getFontStyles(theme, color)[size])
  };
});

export { useStyles as default };
//# sourceMappingURL=Timer.style.js.map
