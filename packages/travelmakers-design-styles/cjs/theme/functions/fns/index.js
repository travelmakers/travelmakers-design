'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var gradient = require('./gradient.js');
var breakpoints = require('./breakpoints.js');
var rgba = require('./rgba.js');
var size = require('./size.js');
var darken = require('./darken.js');
var lighten = require('./lighten.js');
var spacing = require('./spacing.js');

const fns = {
  linearGradient: gradient.linearGradient,
  radialGradient: gradient.radialGradient,
  smallerThan: breakpoints.smallerThan,
  largerThan: breakpoints.largerThan,
  rgba: rgba.rgba,
  size: size.size,
  darken: darken.darken,
  lighten: lighten.lighten,
  spacing: spacing.spacing
};

exports.fns = fns;
//# sourceMappingURL=index.js.map
