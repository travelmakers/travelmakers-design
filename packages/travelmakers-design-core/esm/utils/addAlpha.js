import { toRgba } from './toRgba.js';

const addAlpha = (hex, alpha) => {
  const { r, g, b } = toRgba(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export { addAlpha };
//# sourceMappingURL=addAlpha.js.map
