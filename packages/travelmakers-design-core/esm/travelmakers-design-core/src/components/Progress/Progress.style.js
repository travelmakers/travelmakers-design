import { createStyles } from '@travelmakers-design/styles';

var useStyles = createStyles((theme, { color = "navy", indicator = false, size = "large" }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center"
    },
    indicator: {
      marginRight: "16px"
    },
    barContainer: {
      display: "block",
      position: "relative",
      width: "30vw",
      maxWidth: size === "small" ? "171px" : "456px",
      height: "2px",
      borderRadius: "3px",
      backgroundColor: color === "white" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)"
    },
    barActive: {
      display: "block",
      position: "absolute",
      width: "0%",
      height: "2px",
      borderRadius: "3px",
      backgroundColor: color === "white" ? theme.colors.white : theme.colors.navy1
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=Progress.style.js.map
