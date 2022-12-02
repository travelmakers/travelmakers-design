'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useTimeoutFn = require('../useTimeoutFn/useTimeoutFn.js');
var useUpdateEffect = require('../useUpdateEffect/useUpdateEffect.js');

const useDebounce = (fn, ms, deps) => {
  const [run, clear] = useTimeoutFn.useTimeoutFn(fn, ms);
  useUpdateEffect.useUpdateEffect(run, deps);
  return clear;
};

exports.useDebounce = useDebounce;
//# sourceMappingURL=useDebounce.js.map
