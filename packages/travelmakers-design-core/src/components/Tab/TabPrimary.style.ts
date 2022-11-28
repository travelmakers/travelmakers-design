import { createStyles, TmTheme } from "@travelmakers-design/styles";

interface TabStyles {
  /** Tab 컴포넌트의 색상을 정합니다. */
  size?: "small" | "large";
}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b1}px`,
    fontSize: theme.fontSizes.b1,
    paddingRight: 24,
    paddingLeft: 24,
  },

  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h4}px`,
    fontSize: theme.fontSizes.h4,
    paddingRight: 49,
    paddingLeft: 49,
  },
});

export default createStyles((theme, { size = "small" }: TabStyles) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },

    tab: {
      fontWeight: "400",
      color: theme.colors.navy3,
      cursor: "pointer",
      whiteSpace: "nowrap",
      position: "relative",
      ...getFontStyles(theme)[size],
    },
    selectedTab: {
      fontWeight: "700",
      color: theme.colors.white,
      cursor: "pointer",
      whiteSpace: "nowrap",
      ...getFontStyles(theme)[size],
      position: "relative",
    },
    divider: {
      backgroundColor: theme.colors.navy3,
      width: "1px",
      height: "20px",
    },
    selectedTabBottom: {
      backgroundColor: theme.colors.green3,
      height: 4,
      width: "100%",
      position: "absolute",
      bottom: -6,
      left: 0,
    },
  };
});
