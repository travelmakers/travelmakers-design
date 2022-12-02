import { toRgba } from './rgba.js';

const darken = (color, alpha) => {
  const { r, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
};

export { darken };
//# sourceMappingURL=darken.js.map
