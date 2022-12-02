import { useRef, useEffect, useMemo } from 'react';

const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
};

export { useCallbackRef };
//# sourceMappingURL=useCallbackRef.js.map
