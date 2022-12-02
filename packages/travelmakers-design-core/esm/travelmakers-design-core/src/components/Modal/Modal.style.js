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
var useStyles = createStyles((theme, { size, type }) => {
  return {
    container: __spreadProps(__spreadValues({}, defaultFontStyles(theme)), {
      display: "flex",
      position: "fixed",
      flexDirection: "column",
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      width: "100%",
      height: "100%",
      zIndex: "10000",
      top: "0",
      left: "0"
    }),
    absoluteContainer: {
      width: "100%",
      height: "100%",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      top: "0",
      backgroundColor: theme.colors.white,
      ["&.popup"]: {
        alignItems: "center",
        backgroundColor: "transparent"
      },
      ["&.modalPopup"]: {
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        maxHeight: "90vh",
        height: "100%",
        borderRadius: "30px 30px 0 0",
        [`${theme.media.tablet}`]: {
          maxHeight: "100%",
          height: "100%",
          borderRadius: "0"
        }
      }
    },
    closeContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: "100"
    },
    modalContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      width: "100%",
      maxHeight: "100%",
      borderRadius: "6px",
      boxSizing: "border-box",
      zIndex: "200",
      ["&.popup"]: {
        justifyContent: "center"
      },
      ["&.max-h"]: {
        height: "100%"
      }
    },
    modalContentsContainer: {
      display: "flex",
      position: "relative",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      padding: "40px",
      overflowY: "hidden",
      [`${theme.media.tablet}`]: {
        padding: "0"
      },
      [`${theme.media.desktop}`]: {
        ["-ms-overflow-style"]: "none",
        ["&::-webkit-scrollbar"]: {
          display: "none"
        }
      },
      ["&.optionsBox, &.modalPopup, &.toastPopup"]: {
        padding: 0
      },
      ["&.Agreement"]: {
        height: "calc(100% - 77px)"
      }
    },
    modalContents: {
      display: "block",
      position: "relative",
      width: "100%",
      maxWidth: "768px"
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "0",
      [`${theme.media.desktop}`]: {
        padding: "24px 16px 12px 24px"
      },
      ["&.optionsBox"]: {
        height: "40px",
        padding: "0 16px",
        background: theme.colors.navy1,
        [`${theme.media.tablet}`]: {
          height: "64px"
        }
      },
      ["&.modalPopup"]: {
        color: theme.colors.navy1,
        height: "auto",
        padding: "40px 12px",
        ["@media screen and (min-width: 800px)"]: {
          padding: "40px 0"
        },
        ["@media screen and (max-height: 640px)"]: {
          paddingTop: "24px",
          paddingBottom: "24px"
        },
        justifyContent: "space-between",
        [`${theme.media.tablet}`]: {
          justifyContent: "start",
          padding: "0 16px",
          height: "44px",
          backgroundColor: theme.colors.navy1,
          color: theme.colors.white
        }
      },
      ["&.toastPopup"]: {
        justifyContent: "space-between"
      }
    },
    modalTitle: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "1.39",
      color: theme.colors.navy1,
      textAlign: "left",
      whiteSpace: "nowrap",
      ["&.optionsBox"]: {
        fontFamily: "Noto Serif KR",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "24px",
        color: "#FFFFFF",
        [`${theme.media.tablet}`]: {
          fontSize: "14px",
          lineHeight: "20px"
        }
      },
      ["&.modalPopup"]: {
        color: theme.colors.navy1,
        fontFamily: "Pretendard",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "24px",
        [`${theme.media.tablet}`]: {
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "20px",
          color: theme.colors.white
        }
      },
      [".toastPopup"]: {
        fontFamily: "Noto Serif KR",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "20px",
        color: theme.colors.white
      }
    },
    modalBackIcon: {
      width: "16px",
      height: "16px",
      cursor: "pointer",
      marginRight: "8px",
      display: "none",
      [`${theme.media.tablet}`]: {
        display: "inline-block"
      }
    },
    modalCloseIcon: {
      width: "24px",
      height: "24px",
      cursor: "pointer",
      marginRight: "8px",
      display: "inline-block",
      [`${theme.media.tablet}`]: {
        display: "none"
      }
    },
    modalContentText: {
      display: "block",
      width: "100%",
      maxHeight: "100%",
      lineHeight: 1.5,
      whiteSpace: "pre-wrap",
      color: theme.colors.navy1,
      overflowY: "auto",
      paddingBottom: "16px",
      [`${theme.media.desktop}`]: {
        fontSize: "12px",
        padding: "12px 20px"
      },
      ["&.Agreement"]: {
        height: "calc(100% - 44px)",
        [`${theme.media.tablet}`]: {
          height: "calc(100% - 104px)",
          ["@media screen and (max-height: 640px)"]: {
            height: "calc(100% - 72px)"
          }
        }
      }
    },
    modalAbsolute: {
      display: "block",
      position: "fixed",
      bottom: "0",
      width: "100%",
      maxWidth: "768px",
      zIndex: "100",
      backgroundColor: "white",
      padding: "16px 0",
      [`${theme.media.desktop}`]: {
        padding: "16px"
      }
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=Modal.style.js.map
