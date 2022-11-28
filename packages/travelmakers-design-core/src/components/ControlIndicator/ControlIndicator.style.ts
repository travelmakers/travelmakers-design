import { createStyles } from "@travelmakers-design/styles";
interface ControlIndicatorStyles {
  /** ControlIndicatorStyles 컴포넌트의 색상을 정합니다. */
  size?: "small" | "large";
}

export default createStyles(
  (theme, { size = "small" }: ControlIndicatorStyles) => {
    return {
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },

      buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: size === "small" ? "56px" : "84px",
      },
      button: {
        width: size === "small" ? "24px" : "32px",
        height: size === "small" ? "24px" : "32px",
        cursor: "pointer",
      },
    };
  }
);
