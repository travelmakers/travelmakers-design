import {
  createStyles,
  defaultFontStyles,
  TmTheme,
} from "@travelmakers-design/styles";

interface AccordionStyles {
  fill?: boolean;
}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "Pretendard",
    fontWeight: "bold",
    lineHeight: `${theme.lineHeights.caption}px`,
    fontSize: theme.fontSizes.caption,
  },

  medium: {
    fontFamily: "Pretendard",
    fontWeight: "bold",
    lineHeight: `${theme.lineHeights.b3}px`,
    fontSize: theme.fontSizes.b3,
  },

  large: {
    fontFamily: "Pretendard",
    fontWeight: "bold",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2,
  },
});

const getPaddingStyles = (theme: TmTheme) => ({
  small: {
    padding: "2px 4px",
  },

  medium: {
    padding: "0px 12px",
  },

  large: {
    padding: "0px 16px",
  },
});

export default createStyles((theme, { fill }: AccordionStyles) => {
  return {
    container: {
      ...defaultFontStyles(theme),
      ...getFontStyles(theme)["small"],
      ...getPaddingStyles(theme)["small"],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: theme.colors.green3,

      marginRight: "6px",
      gap: "5px",
      borderRadius: theme.radius.medium,
      backgroundColor: theme.colors.green5,

      ["&:last-child"]: {
        marginRight: 0,
      },
    },
    line: {
      color: theme.colors.green3,
      background: "inherit",
      border: "1px solid",
    },
  };
});
