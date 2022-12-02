'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const useUpdateEffect = (effect, deps) => {
  const isFirst = react.useRef(true);
  react.useEffect(() => {
    if (!isFirst.current) {
      return effect();
    }
    isFirst.current = false;
  }, deps);
};

exports.useUpdateEffect = useUpdateEffect;
//# sourceMappingURL=useUpdateEffect.js.map
