import { TmSize } from "../types/TmSize";

export type CoBreakpoints = TmSize;

export const DEFAULT_BREAKPOINTS: Record<CoBreakpoints, number> = {
  xsmall: 576,
  small: 768,
  medium: 1024,
  large: 1408,
  xlarge: 1736,
};
