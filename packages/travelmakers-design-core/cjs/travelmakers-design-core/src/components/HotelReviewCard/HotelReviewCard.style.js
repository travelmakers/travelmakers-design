'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');

var useStyles = styles.createStyles((theme, {}) => {
  return {
    root: {
      padding: "24px",
      backgroundColor: theme.colors.white,
      display: "flex",
      gap: "16px",
      [`${theme.media.mobile}`]: {
        padding: "16px",
        display: "block"
      }
    },
    contentWrapper: { width: "100%" },
    contentBox: {
      [`${theme.media.mobile}`]: {
        display: "flex",
        height: "48px",
        gap: "16px"
      }
    },
    headerBox: {
      marginBottom: "8px",
      [`${theme.media.mobile}`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    },
    content: {
      height: "fit-content",
      ["& > div > span"]: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordBreak: "break-all",
        ["-webkit-box-orient"]: "vertical",
        ["-webkit-line-clamp"]: "2",
        [`${theme.media.mobile}`]: {
          ["-webkit-line-clamp"]: "1"
        }
      }
    },
    text: {},
    tagList: {
      marginBottom: "16px"
    },
    image: {
      ["& > div "]: {
        height: "100%"
      },
      ["& > div > img"]: {
        height: "100% !important"
      }
    },
    imageWrapper: {
      [`${theme.media.mobile}`]: {
        display: "none"
      }
    },
    mobileImageWrapper: {
      display: "none",
      margin: "auto",
      [`${theme.media.mobile}`]: {
        display: "block",
        height: "40px"
      }
    },
    arrowImage: {
      width: "16px",
      height: "16px",
      display: "none",
      [`${theme.media.mobile}`]: {
        display: "block"
      }
    },
    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: theme.colors.gray5,
      margin: "12px 0 4px 0"
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=HotelReviewCard.style.js.map
