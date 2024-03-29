import {
  TmColor,
  TmPalette,
  TmSize,
  createStyles,
} from "@travelmakers-design/styles";

import { TM_HEIGHTS } from "../../constants";

interface SpinnerStyles {
  size: TmSize | number;
  color?: TmPalette | TmColor | string;
}

export default createStyles((theme, { size, color }: SpinnerStyles) => {
  const svgColor =
    color === undefined
      ? theme.colorScheme === "light"
        ? theme.colors.black
        : theme.colors.white
      : color in theme.palettes
      ? theme.colorScheme === "light"
        ? theme.palettes[color][0]
        : theme.palettes[color][0]
      : color in theme.colors
      ? theme.colors[color]
      : color;

  return {
    root: {
      position: "relative",
      display: "inline-block",
      width: size in TM_HEIGHTS ? TM_HEIGHTS[size] : size,
      height: size in TM_HEIGHTS ? TM_HEIGHTS[size] : size,
      verticalAlign: "middle",
    },

    inner: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",

      path: {
        stroke: svgColor,
      },
      circle: {
        fill: svgColor,
      },
    },
  };
});
