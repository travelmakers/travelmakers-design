import { ModalSize, ModalType } from "./Modal";
import {
  TmTheme,
  createStyles,
  defaultFontStyles,
} from "@travelmakers-design/styles";

interface AccordionStyles {
  size?: ModalSize;
  type?: ModalType;
}

const getFontStyles = (theme: TmTheme, type: ModalType) => ({
  small: {
    fontFamily: "Pretendard",
    fontWeight: type === "text" ? "bold" : "normal",
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption,
  },

  medium: {
    fontFamily: "Pretendard",
    fontWeight: type === "text" ? "bold" : "normal",
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3,
  },

  large: {
    fontFamily: "Pretendard",
    fontWeight: type === "text" ? "bold" : "normal",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2,
  },
});

const getPaddingStyles = (theme: TmTheme, type: ModalType) => ({
  small: {
    padding: type === "text" ? "0px 4px" : "0px 8px",
  },
  medium: {
    padding: type === "text" ? "0px 5px" : "0px 8px",
  },
  large: {
    padding: type === "text" ? "1px 7px" : "0px 8px",
  },
});

export default createStyles((theme, { size, type }: AccordionStyles) => {
  return {
    container: {
      ...defaultFontStyles(theme),
      display: "flex",
      position: "fixed",
      flexDirection: "column",
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
    },
    absoluteContainer: {
      width: "100%",
      ["&.popup"]: {
        alignItems: "center",
        backgroundColor: "transparent",
      },
      ["&.modalPopup"]: {
        position: "relative",
        maxWidth: "360px",
        margin: "auto",
        maxHeight: "60vh",
        height: "100%",
        borderRadius: "8px",
        [`${theme.media.tablet}`]: {
          margin: "0 auto",
          maxWidth: "none",
          maxHeight: "100%",
          height: "100%",
          borderRadius: "0",
        },
      },
    },
    closeContainer: {
      position: "absolute",
      width: "100%",
      zIndex: "100",
      [`${theme.media.tablet}`]: {
        height: "100%",
      },
    },
    modalContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      width: "100%",
      height: "100%",
      maxHeight: "100%",
      borderRadius: "6px",
      [`${theme.media.tablet}`]: {
        borderRadius: "0px",
      },
      boxSizing: "border-box",
      zIndex: "200",
      ["&.popup"]: {
        justifyContent: "center",
      },
      ["&.max-h"]: {
        // height: "100%",
      },
    },
    modalContentsContainer: {
      position: "relative",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      padding: "0",
      borderRadius: "6px",
      [`${theme.media.tablet}`]: {
        borderRadius: "0px",
      },
      overflowY: "hidden",
      [`${theme.media.desktop}`]: {
        ["-ms-overflow-style"]: "none",
        ["&::-webkit-scrollbar"]: {
          display: "none",
        },
      },
      ["&.optionsBox, &.modalPopup, &.toastPopup"]: {
        padding: 0,
      },
      ["&.Agreement"]: {
        height: "calc(100% - 77px)",
      },
    },
    modalContents: {
      display: "block",
      position: "relative",
      width: "100%",
      maxWidth: "768px",
      maxHeight: "582px",
      height: "100%",
      margin: "auto",
      backgroundColor: "white",
      [`${theme.media.tablet}`]: {
        maxHeight: "none",
        height: "calc(100% - 70px)",
      },
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "0",

      ["&.optionsBox"]: {
        height: "40px",
        padding: "0 16px",
        background: theme.colors.navy1,
        [`${theme.media.tablet}`]: {
          height: "64px",
        },
      },

      ["&.modalPopup"]: {
        color: theme.colors.navy1,
        height: "48px",
        borderBottom: "1px solid #EDEDED",

        ["@media screen and (max-height: 640px)"]: {
          paddingTop: "24px",
          paddingBottom: "24px",
        },
        // justifyContent: "start",
        padding: "0 16px",
        backgroundColor: theme.colors.white,
      },
      ["&.toastPopup"]: {
        justifyContent: "space-between",
      },
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
        fontSize: "14px",
        lineHeight: "20px",
        color: "#FFFFFF",
      },

      ["&.modalPopup"]: {
        // color: theme.colors.navy1,
        fontFamily: "Pretendard",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "20px",
        color: theme.colors.black,
      },

      [".toastPopup"]: {
        fontFamily: "Noto Serif KR",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "20px",
        color: theme.colors.white,
      },
    },
    modalBackIcon: {
      width: "16px",
      height: "16px",
      cursor: "pointer",
      marginRight: "8px",
      visibility: "hidden",
      [`${theme.media.tablet}`]: {
        display: "inline-block",
        visibility: "visible",
      },
    },
    modalCloseIcon: {
      width: "24px",
      height: "24px",
      cursor: "pointer",
      marginRight: "8px",
      display: "inline-block",
      [`${theme.media.tablet}`]: {
        visibility: "hidden",
      },
    },
    modalContentText: {
      display: "block",
      width: "100%",

      lineHeight: 1.5,
      whiteSpace: "pre-wrap",
      color: theme.colors.navy1,
      overflowY: "auto",
      paddingBottom: "16px",
      fontSize: "12px",
      padding: "12px 16px",
      height: "500px",

      [`${theme.media.tablet}`]: {
        height: "calc(100% - 70px)",
      },
    },
    modalAbsolute: {
      display: "block",
      margin: "auto",
      width: "100%",
      maxWidth: "768px",
      zIndex: "100",
      backgroundColor: "white",
      padding: "16px",
      borderRadius: "0 0 6px 6px",
    },
  };
});
