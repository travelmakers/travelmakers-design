import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface IndicatorStyles {
  /** Indicator 컴포넌트의 타입을 정합니다. */
  type?: "text" | "bullet";

  /** Indicator 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** Indicator 컴포넌트의 크기를 정합니다. */
  size?: "small" | "large";
}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "PT Serif",
    fontSize: theme.fontSizes.b3,
    lineHeight: `${theme.lineHeights.b3}px`,
  },

  large: {
    fontFamily: "PT Serif",
    fontSize: theme.fontSizes.h5,
    lineHeight: `${theme.lineHeights.h5}px`,
  },
});

export default createStyles(
  (
    theme,
    { type = "text", color = "navy", size = "large" }: IndicatorStyles
  ) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
      },

      indicator: {
        ...getFontStyles(theme)[size],
        fontFamily: "PT Serif",
        fontWeight: "700",
        color: color === "white" ? "white" : theme.colors.navy1,
        letterSpacing: "2.66667px",
      },
    };
  }
);
