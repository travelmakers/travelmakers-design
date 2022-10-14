import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
  TmTheme,
} from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";

interface ProgressStyles {
  /** Progress 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** Progress 컴포넌트의 indicator 표시 여부를 정합니다. */
  indicator?: boolean;
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
  (theme, { color = "navy", indicator = false }: ProgressStyles) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
      },

      indicator: {
        display: indicator ? "block" : "none",
        fontFamily: "PT Serif",
        fontSize: "20px",
        fontWeight: "700",
        color: color === "white" ? "white" : theme.colors.navy1,
        marginRight: "16px",
        letterSpacing: "1.6px",
      },

      barContainer: {
        display: "block",
        position: "relative",
        width: "30vw",
        maxWidth: "456px",
        height: "2px",
        borderRadius: "3px",
        backgroundColor:
          color === "white" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)",
      },

      barActive: {
        display: "block",
        position: "absolute",
        width: "0%",
        height: "2px",
        borderRadius: "3px",
        backgroundColor:
          color === "white" ? theme.colors.white : theme.colors.navy1,
      },
    };
  }
);
