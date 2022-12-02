'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getGradientColorStops = (colors) => {
  let stops = "";
  for (let i = 1; i < colors.length - 1; i += 1) {
    stops += `${colors[i]} ${i / (colors.length - 1) * 100}%, `;
  }
  return `${colors[0]} 0%, ${stops}${colors[colors.length - 1]} 100%`;
};
const linearGradient = (deg, ...colors) => {
  return `linear-gradient(${deg}deg, ${getGradientColorStops(colors)})`;
};
const radialGradient = (...colors) => {
  return `radial-gradient(circle, ${getGradientColorStops(colors)})`;
};

exports.linearGradient = linearGradient;
exports.radialGradient = radialGradient;
//# sourceMappingURL=gradient.js.map
