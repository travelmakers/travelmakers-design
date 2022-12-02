'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var attachFunctions = require('./functions/attachFunctions.js');
var palettes = require('./tokens/palettes.js');
var colors = require('./tokens/colors.js');
var shadows = require('./tokens/shadows.js');
var fontSizes = require('./tokens/fontSizes.js');
var radius = require('./tokens/radius.js');
var spacing = require('./tokens/spacing.js');
var breakpoints = require('./tokens/breakpoints.js');
var headings = require('./tokens/headings.js');
var opacity = require('./tokens/opacity.js');
var zIndex = require('./tokens/zIndex.js');
var media = require('./tokens/media.js');

const TM_PALETTES = Object.keys(palettes.DEFAULT_PALETTES);
const TM_COLORS = Object.keys(colors.DEFAULT_COLORS);
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
  primaryColor: colors.DEFAULT_COLORS.black,
  colors: colors.DEFAULT_COLORS,
  palettes: palettes.DEFAULT_PALETTES,
  shadows: shadows.DEFAULT_SHADOWS,
  fontSizes: fontSizes.DEFAULT_FONT_SIZES,
  lineHeights: fontSizes.DEFAULT_FONT_HEIGHT,
  radius: radius.DEFAULT_RADIUS,
  spacing: spacing.DEFAULT_SPACING,
  breakpoints: breakpoints.DEFAULT_BREAKPOINTS,
  headings: headings.DEFAULT_HEADINGS,
  opacity: opacity.DEFAULT_OPACITY,
  zIndex: zIndex.DEFAULT_Z_INDEX,
  extra: {},
  media: media.DEFAULT_MEDIA
};
const DEFAULT_THEME = attachFunctions.attachFunctions(_DEFAULT_THEME);

exports.DEFAULT_THEME = DEFAULT_THEME;
exports.TM_COLORS = TM_COLORS;
exports.TM_FONT_SIZES = TM_FONT_SIZES;
exports.TM_PALETTES = TM_PALETTES;
exports.TM_SIZES = TM_SIZES;
exports._DEFAULT_THEME = _DEFAULT_THEME;
exports.defaultFontStyles = defaultFontStyles;
//# sourceMappingURL=defaultTheme.js.map
