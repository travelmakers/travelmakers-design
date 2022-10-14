import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface HeaderPageStyles {
  /** HeaderSection 컴포넌트의 크기를 정합니다. */
  size?: "small" | "large";

  /** HeaderSection 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";
}

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
export default createStyles(
  (theme, { size = "small", color = "navy" }: HeaderPageStyles) => {
    return {
      root: {},

      titleWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: deviceSizes.maxSize,
      },
      title: {
        ...getFontStyles(theme)[size],
        color: color === "navy" ? theme.colors.navy1 : theme.colors.white,
        margin: "0 35px",
      },
      divider: {
        backgroundColor:
          color === "navy" ? theme.colors.navy1 : theme.colors.white,
        flex: 1,
        height: "1px",
      },
    };
  }
);
