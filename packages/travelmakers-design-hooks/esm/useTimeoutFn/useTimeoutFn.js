import { useRef, useCallback, useEffect } from 'react';
import { useCallbackRef } from '../useCallbackRef/useCallbackRef.js';

const useTimeoutFn = (fn, ms) => {
  const timeoutId = useRef();
  const callback = useCallbackRef(fn);
  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      callback();
    }, ms);
  }, [ms]);
  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);
  useEffect(() => clear, [clear]);
  return [run, clear];
};

export { useTimeoutFn };
//# sourceMappingURL=useTimeoutFn.js.map
