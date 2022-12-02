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
var useStyles = createStyles((theme, { open }) => {
  return {
    container: __spreadProps(__spreadValues({}, defaultFontStyles(theme)), {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: theme.colors.white,
      marginBottom: "4px",
      ["&:last-child"]: {
        marginBottom: 0
      }
    }),
    row: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      padding: "14px 24px 14px 24px",
      [`${theme.media.desktop}`]: {
        padding: "12px 16px 12px 16px"
      }
    },
    titleWrap: {
      display: "flex",
      width: "100%"
    },
    titleIndex: {
      fontWeight: "bold",
      fontFamily: "pt serif",
      color: theme.colors.cover1,
      fontStyle: "italic",
      marginRight: "4px"
    },
    title: {
      display: "block",
      width: "100%",
      fontSize: theme.fontSizes.b1,
      lineHeight: `${theme.lineHeights.b1}px`,
      fontWeight: "bold",
      color: theme.colors.navy1,
      [`${theme.media.mobile}`]: {
        fontSize: theme.fontSizes.b2,
        lineHeight: `${theme.lineHeights.b2}px`,
        fontWeight: "400"
      }
    },
    icon: {
      width: "32px",
      height: "32px",
      cursor: "pointer",
      marginLeft: "4px",
      [`${theme.media.mobile}`]: {
        width: "24px",
        height: "24px"
      }
    },
    content: {
      padding: "0 24px 14px 24px",
      [`${theme.media.desktop}`]: {
        padding: "0 16px 12px 16px"
      }
    },
    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: theme.colors.navy1,
      marginBottom: "14px",
      [`${theme.media.desktop}`]: {
        marginBottom: "11px"
      }
    },
    answerText: {
      display: "flex",
      lineHeight: "1.5"
    },
    answer: {
      fontSize: theme.fontSizes.b1,
      lineHeight: `${theme.lineHeights.b1}px`,
      color: theme.colors.navy1,
      width: "100%",
      [`${theme.media.desktop}`]: {
        marginTop: "3px"
      },
      [`${theme.media.mobile}`]: {
        fontSize: theme.fontSizes.b2,
        lineHeight: `${theme.lineHeights.b2}px`
      }
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=Accordion.style.js.map
