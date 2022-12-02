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
var useStyles = createStyles((theme, { multiline, roundness, invalid, width, descriptionType }) => {
  const invalidColor = theme.colors.red2;
  return {
    wrapper: {
      position: "relative"
    },
    input: __spreadProps(__spreadValues({}, defaultFontStyles(theme)), {
      height: multiline ? "auto" : 44,
      WebkitTapHighlightColor: "transparent",
      lineHeight: multiline ? theme.lineHeight : theme.lineHeights.b2,
      appearance: "none",
      resize: "none",
      boxSizing: "border-box",
      fontFamily: "Pretendard",
      fontSize: theme.fontSizes.b2,
      width: width ? `${width}px` : "100%",
      color: theme.colors.gray2,
      display: "block",
      textAlign: "left",
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: roundness ? theme.radius.round : 2,
      border: `1px solid ${theme.colors.gray5}`,
      backgroundColor: theme.colors.white,
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: theme.colors.gray1,
        color: theme.colors.gray1
      },
      "&:disabled": {
        backgroundColor: theme.colors.gray7,
        borderColor: theme.colors.gray5,
        color: theme.colors.gray3,
        opacity: 0.6,
        cursor: "not-allowed",
        "&::placeholder": {
          color: theme.colors.gray5
        }
      },
      "&::placeholder": {
        opacity: 1,
        userSelect: "none",
        color: theme.colors.gray3,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      },
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
        appearance: "none"
      },
      "&[type=number]": {
        MozAppearance: "textfield"
      }
    }),
    withIcon: {
      paddingLeft: 48
    },
    invalid: {
      borderColor: `${invalidColor}`,
      "&::placeholder": {
        opacity: 1
      }
    },
    disabled: {
      backgroundColor: theme.colors.gray7,
      borderColor: theme.colors.gray5,
      color: theme.colors.gray5,
      opacity: 0.6,
      cursor: "not-allowed",
      "&::placeholder": {
        color: theme.colors.gray5
      }
    },
    icon: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: 1,
      left: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "44px",
      color: theme.colors.gray1,
      svg: {
        width: "24px",
        height: "100%"
      }
    },
    rightSection: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=Input.style.js.map
