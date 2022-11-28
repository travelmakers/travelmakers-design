import { createStyles, TmTheme } from "@travelmakers-design/styles";

interface ControlIndicatorStyles {
  /** ControlIndicator 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** ControlIndicator 컴포넌트의 색상을 정합니다. */
  size?: "small" | "large";
}

const getFontStyles = (theme: TmTheme) => ({
  small: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.b2}px`,
    fontSize: theme.fontSizes.b2,
    marginRight: "12px",
    marginLeft: "12px",
    width: "50px",
  },

  large: {
    fontFamily: "Pretendard",
    fontWeight: "normal",
    lineHeight: `${theme.lineHeights.h5}px`,
    fontSize: theme.fontSizes.h5,
    marginRight: "20px",
    marginLeft: "20px",
    width: "70px",
  },
});

export default createStyles(
  (theme, { color = "navy", size = "small" }: ControlIndicatorStyles) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
      },

      indicator: {
        ...getFontStyles(theme)[size],
        color: color,
        textAlign: "center",
      },

      button: {
        width: "32px",
        height: "32px",
        cursor: "pointer",
      },
    };
  }
);
