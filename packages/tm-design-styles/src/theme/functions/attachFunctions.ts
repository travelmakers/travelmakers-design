import type { TmTheme, TmThemeBase } from "../types";

import { fns } from "./fns";

export const attachFunctions = (themeBase: TmThemeBase): TmTheme => {
  return {
    ...themeBase,
    fn: {
      largerThan: fns.largerThan(themeBase),
      smallerThan: fns.smallerThan(themeBase),
      radialGradient: fns.radialGradient,
      linearGradient: fns.linearGradient,
      rgba: fns.rgba,
      size: fns.size,
      lighten: fns.lighten,
      darken: fns.darken,
      spacing: fns.spacing,
    },
  };
};
