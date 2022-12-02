'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toRgba = require('./toRgba.js');

const addAlpha = (hex, alpha) => {
  const { r, g, b } = toRgba.toRgba(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

exports.addAlpha = addAlpha;
//# sourceMappingURL=addAlpha.js.map
