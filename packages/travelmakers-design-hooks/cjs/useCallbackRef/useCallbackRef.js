'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const useCallbackRef = (callback) => {
  const callbackRef = react.useRef(callback);
  react.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return react.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
};

exports.useCallbackRef = useCallbackRef;
//# sourceMappingURL=useCallbackRef.js.map
