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
}

export default createStyles(
  (theme, { type = "text", color = "navy" }: IndicatorStyles) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
      },

      indicator: {
        fontFamily: "PT Serif",
        fontSize: theme.fontSizes.h5,
        lineHeight: `${theme.lineHeights.h5}px`,
        fontWeight: "700",
        color: color === "white" ? "white" : theme.colors.navy1,
        letterSpacing: "2.66667px",
      },
    };
  }
);
