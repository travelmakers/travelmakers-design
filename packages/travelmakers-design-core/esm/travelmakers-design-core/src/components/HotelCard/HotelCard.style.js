import { createStyles } from '@travelmakers-design/styles';

var useStyles = createStyles((theme, {}) => {
  const imageWidth = "580px";
  const imageHeight = "264px";
  const imageMobileWidth = "328px";
  const imageMobileHeight = "200px";
  return {
    root: {
      display: "flex",
      alignItems: "center",
      cursor: "default"
    },
    cardContainer: {
      display: "block",
      position: "relative",
      width: imageWidth,
      [`${theme.media.mobile}`]: {
        width: imageMobileWidth
      }
    },
    flexBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    spaceBetweenBox: {
      justifyContent: "space-between"
    },
    groupLabel: {
      position: "absolute",
      width: "100%",
      paddingLeft: "32px",
      paddingRight: "12px",
      alignItems: "flex-start",
      [`${theme.media.mobile}`]: {
        paddingLeft: "16px"
      }
    },
    soldOutBox: {
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      height: imageHeight,
      [`${theme.media.mobile}`]: {
        height: imageMobileHeight
      },
      ["& > b"]: {
        color: theme.colors.white,
        fontFamily: "PT Serif",
        fontStyle: "italic",
        fontWeight: 700,
        fontSize: theme.fontSizes.h1,
        lineHeight: `${theme.lineHeights.h1}px`
      },
      ["& > small"]: {
        color: theme.colors.white,
        fontFamily: "Pretendard",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: theme.fontSizes.h5,
        lineHeight: `${theme.lineHeights.h5}px`
      }
    },
    individualLabel: {
      marginRight: 0
    },
    divider: {
      backgroundColor: theme.colors.navy2,
      flex: 1,
      height: "1px",
      margin: "12px 0 15px 0"
    },
    textRed: {
      color: theme.colors.red2
    },
    textNavy1: {
      color: theme.colors.navy1
    },
    textGray2: {
      color: theme.colors.gray2
    },
    textImage: {
      width: "16px",
      height: "16px",
      marginRight: "3px"
    },
    label: {
      width: "auto",
      marginRight: "4px"
    },
    mr2: {
      marginRight: "2px"
    },
    labelImageBox: {
      height: "20px"
    },
    cardImageBox: {
      width: imageWidth,
      height: imageHeight,
      overflow: "hidden",
      [`${theme.media.mobile}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight
      }
    },
    labelBox: {
      height: "20px"
    },
    priceBox: {
      height: "36px"
    },
    addressBox: {
      marginTop: "11px",
      [`${theme.media.mobile}`]: {
        marginTop: "8px"
      }
    },
    imageWrapper: {
      width: imageWidth,
      height: imageHeight,
      [`${theme.media.mobile}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight
      }
    },
    image: {
      width: imageWidth,
      height: imageHeight,
      position: "inherit",
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      ["&: hover"]: {
        width: "110%",
        height: "110%",
        transition: "width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)"
      },
      [`${theme.media.mobile}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight
      }
    },
    textWrapper: {
      padding: "16px 32px",
      [`${theme.media.mobile}`]: {
        padding: "16px 16px"
      },
      backgroundColor: theme.colors.white
    },
    tagBox: {
      marginTop: "12px"
    },
    sellout: {
      marginTop: "49px",
      [`${theme.media.mobile}`]: {
        marginTop: "41.5px"
      }
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=HotelCard.style.js.map
