import { DEFAULT_COLORS } from "./colors";
import type { Tuple } from "../types";

export type TmPalette = "primary" | "secondary" | "tertiary" | (string & {});

/**
 * NOTE: DEFAULT_PALETTES
 * 0: default
 * 1: hover
 * 2: clicked
 */
export const DEFAULT_PALETTES = {
  primary: [DEFAULT_COLORS.navy1, DEFAULT_COLORS.navy1, DEFAULT_COLORS.navy2],

  secondary: [
    DEFAULT_COLORS.green2,
    DEFAULT_COLORS.green2,
    DEFAULT_COLORS.green1,
  ],

  tertiary: [DEFAULT_COLORS.white, DEFAULT_COLORS.white, DEFAULT_COLORS.gray6],
} as Record<TmPalette, Tuple<string, 3>>;
