import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";

interface HotelCardStyles {}

export default createStyles((theme, {}: HotelCardStyles) => {
  const imageWidth = "580px";
  const imageHeight = "264px";
  const imageMobileWidth = "328px";
  const imageMobileHeight = "200px";
  return {
    root: {
      display: "flex",
      alignItems: "center",
    },

    cardContainer: {
      display: "block",
      position: "relative",
      width: imageWidth,
      [`${theme.media.mobile}`]: {
        width: imageMobileWidth,
      },
    },
    flexBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    spaceBetweenBox: {
      justifyContent: "space-between",
    },
    groupLabel: {
      position: "absolute",
      width: "100%",
      paddingLeft: "32px",
      paddingRight: "12px",
      alignItems: "flex-start",
      [`${theme.media.mobile}`]: {
        paddingLeft: "16px",
      },
    },
    individualLabel: {
      marginRight: 0,
    },
    divider: {
      backgroundColor: theme.colors.navy2,
      flex: 1,
      height: "1px",
      margin: "12px 0 15px 0",
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
    imageBox: {
      height: "20px",
    },
    labelBox: {
      height: "20px",
    },
    priceBox: {
      height: "36px",
    },
    addressBox: {
      marginTop: "11px",
      [`${theme.media.mobile}`]: {
        marginTop: "8px",
      },
    },
    imageWrapper: {
      width: imageWidth,
      height: imageHeight,
      [`${theme.media.mobile}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight,
      },
    },
    image: {
      width: imageWidth,
      height: imageHeight,
      position: "inherit",
      [`${theme.media.mobile}`]: {
        width: imageMobileWidth,
        height: imageMobileHeight,
      },
    },
    textWrapper: {
      padding: "16px 32px",
      [`${theme.media.mobile}`]: {
        padding: "16px 16px",
      },
      backgroundColor: theme.colors.white,
    },
    tagBox: {
      marginTop: "12px",
    },
  };
});
