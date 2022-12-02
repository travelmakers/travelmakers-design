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
const optionBoxStyles = (theme, length) => {
  if (length > 1) {
    return {
      ["&:first-of-type"]: {
        padding: "10px 16px",
        backgroundColor: theme.colors.gray6,
        ["& > img"]: {
          width: "16px",
          height: "16px",
          marginRight: "8px"
        },
        ["& > span"]: {
          fontWeight: "700"
        }
      }
    };
  } else {
    return {};
  }
};
var useStyles = createStyles((theme, { length, popup }) => {
  return {
    container: __spreadProps(__spreadValues({}, defaultFontStyles(theme)), {
      display: "block",
      width: "100%",
      border: "solid 1px #d7d7d7",
      borderRadius: theme.radius.small
    }),
    option: __spreadValues({
      display: "flex",
      alignItems: "center",
      width: "100%",
      padding: "12px 16px",
      borderBottom: "solid 1px #d7d7d7",
      backgroundColor: "white",
      cursor: "pointer",
      ["&:last-child"]: {
        borderBottom: 0
      },
      [".transparent-agreement"]: {
        backgroundColor: "transparent"
      }
    }, optionBoxStyles(theme, length)),
    optionIcon: {
      width: "16px",
      height: "16px",
      marginRight: "12px",
      cursor: "pointer"
    },
    moreIcon: {
      width: "16px",
      height: "16px",
      transform: "rotate(-90deg)",
      cursor: "pointer"
    },
    labelContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      cursor: "pointer"
    },
    label: {
      fontSize: "12px",
      color: theme.colors.navy1,
      lineHeight: "20px",
      wordBreak: "keep-all",
      [".transparent-agreement &"]: {
        color: theme.colors.white
      }
    },
    moteIcon: {
      width: "16px",
      height: "16px",
      transform: "rotate(-90deg)",
      marginLeft: "auto",
      cursor: "pointer"
    },
    modalContentText: {
      display: "block",
      width: "100%",
      maxHeight: "100%",
      lineHeight: "1.5",
      whiteSpace: "pre-wrap",
      color: "${colors.navy}",
      overflowY: "auto",
      paddingBottom: "16px",
      [`${theme.media.desktop}`]: {
        fontSize: "12px",
        padding: "12px 20px"
      },
      ["&.Agreement"]: {
        height: "calc(100% - 44px)",
        ["@media screen and (min-width: 768px)"]: {
          height: "calc(100% - 104px)",
          ["@media screen and (max-height: 640px)"]: {
            height: "calc(100% - 72px)"
          }
        }
      }
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=BottomSheet.style.js.map
