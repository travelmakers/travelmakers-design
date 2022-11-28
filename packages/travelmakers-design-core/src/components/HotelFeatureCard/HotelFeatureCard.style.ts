import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";

interface HotelFeatureCardStyles {}

export default createStyles((theme, {}: HotelFeatureCardStyles) => {
  const imageWidth = "533px";
  const imageHeight = "344px";
  const imageMobileWidth = "296px";
  const imageMobileHeight = "180px";
  const cardHeight = "328px";
  return {
    root: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "default",
      backgroundColor: theme.colors.white,
      height: cardHeight,
      [`${theme.media.tablet}`]: {
        height: "auto",
      },
    },

    cardContainer: {
      display: "inline-flex",
      height: cardHeight,
      paddingLeft: "24px",
      position: "relative",
      [`${theme.media.tablet}`]: {
        display: "block",
        height: "auto",
        padding: "0",
      },
    },
    flexBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    goImageflexBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      width: "fit-content",
      borderBottom: `1px solid ${theme.colors.navy1}`,
      marginLeft: "41px",
      [`${theme.media.tablet}`]: {
        display: "none",
      },
    },
    spaceBetweenBox: {
      justifyContent: "space-between",
    },
    groupLabel: {
      position: "absolute",
      zIndex: 1,
      top: "-32px",
      width: "100%",
      paddingLeft: "32px",
      paddingRight: "12px",
      alignItems: "flex-start",
      [`${theme.media.tablet}`]: {
        paddingLeft: "16px",
      },
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
      [`${theme.media.tablet}`]: {
        height: imageMobileHeight,
      },
      ["& > b"]: {
        color: theme.colors.white,
        fontFamily: "PT Serif",
        fontStyle: "italic",
        fontWeight: 700,
        fontSize: theme.fontSizes.h1,
        lineHeight: `${theme.lineHeights.h1}px`,
      },
      ["& > small"]: {
        color: theme.colors.white,
        fontFamily: "Pretendard",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: theme.fontSizes.h5,
        lineHeight: `${theme.lineHeights.h5}px`,
      },
    },
    individualLabel: {
      marginRight: 0,
    },
    divider: {
      backgroundColor: theme.colors.navy2,
      flex: 1,
      height: "1px",
      margin: "45px 0 14px 0",
    },
    textRed: {
      color: theme.colors.red2,
    },
    textNavy1: {
      color: theme.colors.navy1,
    },
    textGray2: {
      color: theme.colors.gray2,
    },
    textImage: {
      width: "16px",
      height: "16px",
      marginRight: "3px",
    },
    label: {
      width: "auto",
      marginRight: "4px",
    },
    mr2: {
      marginRight: "2px",
    },
    labelImageBox: {
      height: "20px",
    },
    cardImageBox: {
      width: imageWidth,
      height: imageHeight,
      overflow: "hidden",
      position: "absolute",
      bottom: 16,
      [`${theme.media.tablet}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight,
        top: "-32px",
        left: "50%",
        transform: "translate(-50%, 0)",
      },
    },
    labelBox: {
      height: "20px",
    },
    priceBox: {
      height: "36px",
    },
    addressBox: {
      marginTop: "11px",
      [`${theme.media.tablet}`]: {
        marginTop: "8px",
      },
    },
    imageWrapper: {
      width: imageWidth,
      height: imageHeight,
      [`${theme.media.tablet}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight,
      },
      position: "relative",
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
        transition:
          "width 0.2s cubic-bezier(0, 0, 0.5, 1), height 0.2s cubic-bezier(0, 0, 0.5, 1)",
      },

      [`${theme.media.tablet}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight,
      },
    },
    textWrapper: {
      padding: "0 72px 16px 72px",
      [`${theme.media.tablet}`]: {
        padding: "0 16px 16px 16px",
      },
      backgroundColor: theme.colors.white,
    },
    timer: {
      padding: "0 16px",
      backgroundColor: theme.colors.green3,
      [`${theme.media.tablet}`]: {
        width: imageMobileWidth,
        margin: "auto",
      },
    },
    tagBox: {
      marginTop: "24px",
    },
    sellout: {
      marginTop: "49px",
      [`${theme.media.tablet}`]: {
        marginTop: "41.5px",
      },
    },
    arrowImage: {
      width: "21px",
      marginLeft: "9.5px",
    },
    bottomSection: {
      [`${theme.media.tablet}`]: {
        marginTop: "-32px",
      },
    },
  };
});
