'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');

var useStyles = styles.createStyles((theme, { size = "small" }) => {
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

exports["default"] = useStyles;
//# sourceMappingURL=ControlIndicator.style.js.map
