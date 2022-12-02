'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isHexColor = (hex) => {
  const replaced = hex.replace("#", "");
  return typeof replaced === "string" && replaced.length === 6 && !Number.isNaN(Number(`0x${replaced}`));
};
const hexToRgba = (color) => {
  const replaced = color.replace("#", "");
  const parsed = parseInt(replaced, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
};
const rgbStringToRgba = (color) => {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g, b, a: a || 1 };
};
const toRgba = (color) => {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
};
const rgba = (color, alpha) => {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

exports.rgba = rgba;
exports.toRgba = toRgba;
//# sourceMappingURL=rgba.js.map
