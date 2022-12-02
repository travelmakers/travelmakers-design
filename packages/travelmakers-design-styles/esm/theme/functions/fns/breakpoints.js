import { size } from './size.js';

const largerThan = (theme) => {
  return (breakpoint) => `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
};
const smallerThan = (theme) => {
  return (breakpoint) => `@media (max-width: ${size({
    size: breakpoint,
    sizes: theme.breakpoints
  })}px)`;
};

export { largerThan, smallerThan };
//# sourceMappingURL=breakpoints.js.map
