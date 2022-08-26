import { TmFontSize } from "../types/TmSize";

export type TmFontSizes = TmFontSize;

export const DEFAULT_FONT_SIZES: Record<TmFontSizes, number> = {
  caption: 10,
  b3: 12,
  b2: 14,
  b1: 16,
  h6: 18,
  h5: 20,
  h4: 24,
  h3: 28,
  h2: 32,
  h1: 40,
};

export const DEFAULT_FONT_HEIGHT: Record<TmFontSizes, number> = {
  caption: 16,
  b3: 20,
  b2: 22,
  b1: 24,
  h6: 24,
  h5: 32,
  h4: 36,
  h3: 40,
  h2: 44,
  h1: 60,
};
