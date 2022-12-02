import { attachFunctions } from './functions/attachFunctions.js';
import { DEFAULT_PALETTES } from './tokens/palettes.js';
import { DEFAULT_COLORS } from './tokens/colors.js';
import { DEFAULT_SHADOWS } from './tokens/shadows.js';
import { DEFAULT_FONT_SIZES, DEFAULT_FONT_HEIGHT } from './tokens/fontSizes.js';
import { DEFAULT_RADIUS } from './tokens/radius.js';
import { DEFAULT_SPACING } from './tokens/spacing.js';
import { DEFAULT_BREAKPOINTS } from './tokens/breakpoints.js';
import { DEFAULT_HEADINGS } from './tokens/headings.js';
import { DEFAULT_OPACITY } from './tokens/opacity.js';
import { DEFAULT_Z_INDEX } from './tokens/zIndex.js';
import { DEFAULT_MEDIA } from './tokens/media.js';

const TM_PALETTES = Object.keys(DEFAULT_PALETTES);
const TM_COLORS = Object.keys(DEFAULT_COLORS);
const TM_SIZES = ["xsmall", "small", "medium", "large"];
const TM_FONT_SIZES = [
  "b3",
  "b2",
  "b1",
  "h6",
  "h5",
  "h4",
  "h3",
  "h2",
  "h1",
  "caption"
];
const defaultFontStyles = (theme) => {
  return {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontFamily: theme.fontFamily || "sans-serif"
  };
};
const _DEFAULT_THEME = {
  locale: "en",
  colorScheme: "light",
  lineHeight: 1.55,
  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  primaryColor: DEFAULT_COLORS.black,
  colors: DEFAULT_COLORS,
  palettes: DEFAULT_PALETTES,
  shadows: DEFAULT_SHADOWS,
  fontSizes: DEFAULT_FONT_SIZES,
  lineHeights: DEFAULT_FONT_HEIGHT,
  radius: DEFAULT_RADIUS,
  spacing: DEFAULT_SPACING,
  breakpoints: DEFAULT_BREAKPOINTS,
  headings: DEFAULT_HEADINGS,
  opacity: DEFAULT_OPACITY,
  zIndex: DEFAULT_Z_INDEX,
  extra: {},
  media: DEFAULT_MEDIA
};
const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);

export { DEFAULT_THEME, TM_COLORS, TM_FONT_SIZES, TM_PALETTES, TM_SIZES, _DEFAULT_THEME, defaultFontStyles };
//# sourceMappingURL=defaultTheme.js.map
