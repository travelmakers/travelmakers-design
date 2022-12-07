import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface TimeLineGuideStyles {}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "PT Serif",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: theme.fontSizes.h4,
    lineHeight: `${theme.lineHeights.h4}px`,
  },

  large: {
    fontFamily: "PT Serif",
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: theme.fontSizes.h1,
    lineHeight: `${theme.lineHeights.h1}px`,
  },
});
export default createStyles((theme, {}: TimeLineGuideStyles) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colors.white,
      padding: theme.spacing.small,
      borderRadius: theme.radius.large,
      cursor: "pointer",
    },
    image: {
      width: "60px",
      height: "60px",
      ["& > img"]: {
        height: "100% !important",
        borderRadius: theme.radius.large,
      },
    },
    description: {
      marginLeft: theme.spacing.small,
      ["& > div > span"]: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: `${theme.lineHeights.b3}px`,
        wordWrap: "break-word",
        display: "-webkit-box",
        ["-webkit-line-clamp"]: "1",
        ["-webkit-box-orient"]: "vertical",
      },
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
    arrowImage: {
      width: "24px",
      height: "24px",
    },
  };
});
