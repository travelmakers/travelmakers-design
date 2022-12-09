import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface ListStyles {}

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
export default createStyles((theme, {}: ListStyles) => {
  return {
    root: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.spacing.small,
    },
    ul: {
      padding: 0,
      listStyleType: "none",
      borderRadius: theme.spacing.small,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme.colors.gray6,
    },
    li: {
      padding: "16px",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: theme.colors.gray6,
      ["&:last-child"]: {
        borderBottomWidth: "0px",
      },
      cursor: "pointer",
    },
  };
});
