'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var useCallbackRef = require('../useCallbackRef/useCallbackRef.js');

const useTimeoutFn = (fn, ms) => {
  const timeoutId = react.useRef();
  const callback = useCallbackRef.useCallbackRef(fn);
  const run = react.useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      callback();
    }, ms);
  }, [ms]);
  const clear = react.useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);
  react.useEffect(() => clear, [clear]);
  return [run, clear];
};

exports.useTimeoutFn = useTimeoutFn;
//# sourceMappingURL=useTimeoutFn.js.map
