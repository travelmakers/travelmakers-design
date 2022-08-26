import { TmSize, TmThemeBase } from "../../types";

import { size } from "./size";

export const largerThan = (theme: TmThemeBase) => {
  return (breakpoint: TmSize | number) =>
    `@media (min-width: ${
      size({ size: breakpoint, sizes: theme.breakpoints }) + 1
    }px)`;
};

export const smallerThan = (theme: TmThemeBase) => {
  return (breakpoint: TmSize | number) =>
    `@media (max-width: ${size({
      size: breakpoint,
      sizes: theme.breakpoints,
    })}px)`;
};
