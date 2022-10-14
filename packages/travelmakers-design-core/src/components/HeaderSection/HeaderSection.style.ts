import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface SpinnerStyles {
  /** HeaderSection 컴포넌트의 크기를 정합니다. */
  size?: "small" | "large";
}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "Noto Serif KR",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.b3,
    lineHeight: `${theme.lineHeights.b3}px`,
  },

  large: {
    fontFamily: "Noto Serif KR",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: theme.fontSizes.h6,
    lineHeight: `${theme.lineHeights.h6}px`,
  },
});
export default createStyles((theme, { size = "small" }: SpinnerStyles) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: size === "small" ? "44px" : "64px",
      maxWidth: "calc(1200px - 16px * 2)",
      padding: "0 16px",
      backgroundColor: theme.colors.navy1,
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      width: "100%",
    },

    title: {
      ...getFontStyles(theme)[size],
      color: theme.colors.white,
      marginLeft: 24,
    },
  };
});
