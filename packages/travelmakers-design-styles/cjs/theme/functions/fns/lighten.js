'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rgba = require('./rgba.js');

const lighten = (color, alpha) => {
  const { r, g, b, a } = rgba.toRgba(color);
  const light = (input) => Math.round(input + (255 - input) * alpha);
  return `rgba(${light(r)}, ${light(g)}, ${light(b)}, ${a})`;
};

exports.lighten = lighten;
//# sourceMappingURL=lighten.js.map
