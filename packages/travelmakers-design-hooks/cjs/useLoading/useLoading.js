'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var useCallbackRef = require('../useCallbackRef/useCallbackRef.js');

const useLoading = (fn) => {
  const [loading, setLoading] = react.useState(false);
  const savedCallback = useCallbackRef.useCallbackRef(fn);
  const handler = react.useCallback(async (...args) => {
    setLoading(true);
    const result = await savedCallback(...args);
    setLoading(false);
    return result;
  }, [fn]);
  return [loading, handler];
};

exports.useLoading = useLoading;
//# sourceMappingURL=useLoading.js.map
