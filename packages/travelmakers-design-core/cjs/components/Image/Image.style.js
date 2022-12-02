'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');

var useStyles = styles.createStyles((theme, { radius }) => {
  return {
    root: {
      position: "relative",
      display: "inline-block"
    },
    image: {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: radius ? radius in theme.radius ? theme.radius[radius] : radius : 0
    },
    placeholder: {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: theme.colorScheme === "dark" ? theme.palettes.primary[0] : theme.palettes.primary[0],
      backgroundColor: theme.colorScheme === "dark" ? theme.palettes.primary[0] : theme.palettes.primary[0],
      borderRadius: radius ? radius in theme.radius ? theme.radius[radius] : radius : 0
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=Image.style.js.map
