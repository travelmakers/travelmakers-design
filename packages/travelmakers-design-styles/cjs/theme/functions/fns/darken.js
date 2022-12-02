'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rgba = require('./rgba.js');

const darken = (color, alpha) => {
  const { r, g, b, a } = rgba.toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
};

exports.darken = darken;
//# sourceMappingURL=darken.js.map
