'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var index = require('../../constants/index.js');

var useStyles = styles.createStyles((theme, { size, color }) => {
  const svgColor = color === void 0 ? theme.colorScheme === "light" ? theme.colors.black : theme.colors.white : color in theme.palettes ? theme.colorScheme === "light" ? theme.palettes[color][0] : theme.palettes[color][0] : color in theme.colors ? theme.colors[color] : color;
  return {
    root: {
      position: "relative",
      display: "inline-block",
      width: size in index.TM_HEIGHTS ? index.TM_HEIGHTS[size] : size,
      height: size in index.TM_HEIGHTS ? index.TM_HEIGHTS[size] : size,
      verticalAlign: "middle"
    },
    inner: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      path: {
        stroke: svgColor
      },
      circle: {
        fill: svgColor
      }
    }
  };
});

exports["default"] = useStyles;
//# sourceMappingURL=Spinner.style.js.map
