import {
  createStyles,
  defaultFontStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { BadgeSize, BadgeType } from "./Badge";

interface AccordionStyles {
  size?: BadgeSize;
  type?: BadgeType;
}

const getFontStyles = (theme: TmTheme, type: BadgeType) => ({
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

const getPaddingStyles = (theme: TmTheme, type: BadgeType) => ({
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
      ...getFontStyles(theme, type)[size],
      ...getPaddingStyles(theme, type)[size],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      height: "fit-content",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: theme.colors.white,

      borderRadius: type === "text" ? "6px" : theme.radius.round,
      backgroundColor: theme.colors.red2,
    },
  };
});
