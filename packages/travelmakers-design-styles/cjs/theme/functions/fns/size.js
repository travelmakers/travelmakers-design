'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const size = (props) => {
  if (typeof props.size === "number") {
    return props.size;
  }
  return props.sizes[props.size] || props.size || props.sizes.medium;
};

exports.size = size;
//# sourceMappingURL=size.js.map
