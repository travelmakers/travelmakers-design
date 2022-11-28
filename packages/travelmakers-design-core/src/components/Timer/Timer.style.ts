import { createStyles, TmTheme } from "@travelmakers-design/styles";
import { deviceSizes } from "@travelmakers-design/styles/src/theme/types/TmSize";
import { TimerSize, TimerColor } from "./Timer";

interface TimerStyles {
  /** Timer 컴포넌트의 크기를 정합니다. */
  size?: TimerSize;

  /** Timer 컴포넌트의 색상을 정합니다. */
  color?: TimerColor;
}

const getFontStyles = (theme: TmTheme, color) => ({
  small: {
    fontFamily: "Pretendard",
    color: color === "navy" ? theme.colors.navy1 : theme.colors.white,
    fontSize: theme.fontSizes.b3,
    lineHeight: theme.fontSizes.b3,
  },

  large: {
    fontFamily: "Pretendard",
    color: color === "navy" ? theme.colors.navy1 : theme.colors.white,
    fontSize: theme.fontSizes.b2,
    lineHeight: theme.lineHeights.b2,
  },
});

export default createStyles(
  (theme, { size = "large", color = "navy" }: TimerStyles) => {
    return {
      container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: deviceSizes.maxSize,
        height: 0,
      },
      labelContainer: {
        display: "flex",
        alignItems: "center",
        position: "relative",
      },
      icon: {
        width: size === "large" ? "16px" : "12px",
        height: size === "large" ? "16px" : "12px",
      },
      label: {
        fontWeight: 400,
        marginLeft: "4px",
        ...getFontStyles(theme, color)[size],
      },
      timer: {
        fontWeight: 700,
        ...getFontStyles(theme, color)[size],
      },
    };
  }
);
