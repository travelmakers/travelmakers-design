'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function mergeClassNames(cx, classes, name) {
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(classes[className], name ? `tm-${name}-${className}` : null);
    return acc;
  }, {});
}

exports.mergeClassNames = mergeClassNames;
//# sourceMappingURL=mergeClassNames.js.map
