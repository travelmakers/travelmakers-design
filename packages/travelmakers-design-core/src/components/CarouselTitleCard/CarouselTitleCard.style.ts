import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface CarouselTitleCardStyles {}

export default createStyles((theme, {}: CarouselTitleCardStyles) => {
  return {
    root: {
      display: "flex",
      position: "relative",
    },
    newBadge: {
      background: theme.colors.green2,
      borderRadius: theme.radius.small,
      width: "40px",
      height: "85px",
      padding: "2px 20px",
      [`${theme.media.mobile}`]: {
        width: "24px",
        height: "74px",
        padding: "20px 0px",
      },
      ["& > span"]: {
        transform: "rotate(90deg)",
        "-ms-transform": "rotate(90deg)" /* IE 9 */,
        "-webkit-transform": "rotate(90deg)" /* Chrome, Safari, Opera */,
      },
    },
    headlineWrapper: {
      backgroundColor: theme.colors.white,
      boxShadow: "4px 4px 10px 10px rgba(163, 162, 161, 0.2)",
      width: "100%",
      maxWidth: deviceSizes.desktop,
      padding: "31px 40px",
      [`${theme.media.mobile}`]: {
        padding: "33px 24px",
      },
    },
    subHeadline: {
      marginBottom: "2px",
    },
    headline: {
      marginBottom: "19px",
    },
    description: {},
  };
});
