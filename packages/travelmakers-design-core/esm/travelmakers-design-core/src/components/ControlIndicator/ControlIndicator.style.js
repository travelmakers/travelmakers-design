import { createStyles } from '@travelmakers-design/styles';

var useStyles = createStyles((theme, { size = "small" }) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: size === "small" ? "56px" : "84px"
    },
    button: {
      width: size === "small" ? "24px" : "32px",
      height: size === "small" ? "24px" : "32px",
      cursor: "pointer"
    }
  };
});

export { useStyles as default };
//# sourceMappingURL=ControlIndicator.style.js.map
